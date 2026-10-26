<?php

namespace Tests\Feature;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Support\Seo\SeoSettings;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContentApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_posts_api_returns_only_published_with_seo(): void
    {
        $cat = Category::create(['name' => 'Tax', 'slug' => 'tax']);
        $live = Post::create(['title' => 'Live post', 'slug' => 'live-post', 'status' => 'published', 'category_id' => $cat->id,
            'content' => '<p>Body</p>', 'published_at' => now()->subDay(), 'featured_image_url' => 'https://example.com/a.jpg']);
        $live->seo()->create(['focus_keyword' => 'live', 'description' => 'Custom description']);
        Post::create(['title' => 'Draft post', 'slug' => 'draft-post', 'status' => 'draft']);
        Post::create(['title' => 'Future post', 'slug' => 'future-post', 'status' => 'scheduled', 'published_at' => now()->addDay()]);
        Post::create(['title' => 'Due post', 'slug' => 'due-post', 'status' => 'scheduled', 'published_at' => now()->subMinute()]);

        $this->getJson('/api/posts')
            ->assertOk()
            ->assertJsonPath('meta.total', 2)
            ->assertJsonMissing(['slug' => 'draft-post'])
            ->assertJsonMissing(['slug' => 'future-post'])
            ->assertJsonPath('seo.canonical', 'https://taxaccolega.co.uk/blog/');

        $this->getJson('/api/posts?category=tax')->assertJsonPath('meta.total', 1);

        $this->getJson('/api/posts/live-post')
            ->assertOk()
            ->assertJsonPath('data.content', '<p>Body</p>')
            ->assertJsonPath('data.featured_image', 'https://example.com/a.jpg')
            ->assertJsonPath('data.seo.title', 'Live post | Taxaccolega')
            ->assertJsonPath('data.seo.description', 'Custom description')
            ->assertJsonPath('data.seo.canonical', 'https://taxaccolega.co.uk/blog/live-post/')
            ->assertJsonPath('data.seo.open_graph.image', 'https://example.com/a.jpg')
            ->assertJsonPath('data.seo.schema.@graph.5.@type', 'BlogPosting');

        $this->getJson('/api/posts/draft-post')->assertNotFound();
    }

    public function test_pages_api_supports_nested_paths(): void
    {
        $parent = Page::create(['title' => 'Accounts', 'slug' => 'accounts', 'status' => 'published']);
        Page::create(['title' => 'Bookkeeping', 'slug' => 'bookkeeping', 'status' => 'published', 'parent_id' => $parent->id, 'content' => '<p>x</p>']);
        Page::create(['title' => 'Secret', 'slug' => 'secret', 'status' => 'draft']);

        $this->getJson('/api/pages')->assertOk()->assertJsonCount(2, 'data');
        $this->getJson('/api/pages/accounts/bookkeeping')
            ->assertOk()
            ->assertJsonPath('data.path', '/accounts/bookkeeping/')
            ->assertJsonPath('data.seo.breadcrumbs.1.name', 'Accounts');
        $this->getJson('/api/pages/wrong/bookkeeping')->assertNotFound();
        $this->getJson('/api/pages/secret')->assertNotFound();
    }

    public function test_seo_settings_sitemaps_and_robots(): void
    {
        $p = Post::create(['title' => 'Indexed', 'slug' => 'indexed', 'status' => 'published']);
        $hidden = Post::create(['title' => 'Hidden', 'slug' => 'hidden', 'status' => 'published']);
        $hidden->seo()->create(['robots_index' => 'noindex']);
        Page::create(['title' => 'About', 'slug' => 'about-us', 'status' => 'published']);
        Category::create(['name' => 'Tax', 'slug' => 'tax']);

        $this->getJson('/api/seo/settings')->assertOk()
            ->assertJsonPath('data.site.name', 'Taxaccolega')
            ->assertJsonPath('data.indexing.allow', true);

        $this->get('/sitemap_index.xml')->assertOk()->assertSee('post-sitemap.xml', false)->assertSee('page-sitemap.xml', false);
        $this->get('/post-sitemap.xml')->assertOk()
            ->assertSee('https://taxaccolega.co.uk/blog/indexed/', false)
            ->assertDontSee('/blog/hidden/', false);
        $this->get('/page-sitemap.xml')->assertOk()->assertSee('https://taxaccolega.co.uk/about-us/', false);

        $this->get('/api/seo/robots.txt')->assertOk()->assertSee('Sitemap: https://taxaccolega.co.uk/sitemap_index.xml', false);

        SeoSettings::save(['allow_indexing' => false]);
        $this->get('/api/seo/robots.txt')->assertSee('Disallow: /', false);
        $this->get('/sitemap_index.xml')->assertNotFound();
        $this->getJson('/api/posts/indexed')->assertJsonPath('data.seo.robots.index', false);
    }
}
