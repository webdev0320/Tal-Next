<?php

namespace Tests\Feature;

use App\Filament\Resources\Categories\Pages\CreateCategory;
use App\Filament\Resources\Pages\Pages\CreatePage;
use App\Filament\Resources\Pages\Pages\EditPage;
use App\Filament\Resources\Pages\Pages\ListPages;
use App\Filament\Resources\Posts\Pages\CreatePost;
use App\Filament\Resources\Posts\Pages\EditPost;
use App\Filament\Resources\Posts\Pages\ListPosts;
use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Livewire\Livewire;
use Tests\TestCase;

class AdminContentTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->actingAs(User::factory()->create());
    }

    protected function longContent(): string
    {
        $p = '<p>Capital gains tax applies when you sell property. However, there are reliefs you can claim. For example, private residence relief reduces the bill. <a href="/contact-us/">Contact us</a> or read <a href="https://www.gov.uk/capital-gains-tax">HMRC guidance</a>.</p>';

        return '<p>Capital gains tax is a tax on the profit when you sell something.</p>'
            .'<h2>How capital gains tax works</h2>'.str_repeat($p, 12)
            .'<h2>Reliefs you can claim</h2>'.str_repeat($p, 6);
    }

    public function test_list_pages_render(): void
    {
        Post::create(['title' => 'Hello', 'slug' => 'hello', 'status' => 'published']);
        Page::create(['title' => 'About', 'slug' => 'about', 'status' => 'draft']);

        Livewire::test(ListPosts::class)->assertOk()->assertSee('Hello');
        Livewire::test(ListPosts::class, ['activeTab' => 'trash'])->assertOk()->assertDontSee('Hello');
        Livewire::test(ListPages::class)->assertOk()->assertSee('About');
    }

    public function test_create_post_with_seo(): void
    {
        $category = Category::create(['name' => 'Tax', 'slug' => 'tax']);

        Livewire::test(CreatePost::class)
            ->fillForm([
                'title' => 'Capital gains tax guide',
                'slug' => 'capital-gains-tax-guide',
                'editor_mode' => 'html',
                'content_html' => $this->longContent(),
                'excerpt' => 'Everything about capital gains tax in the UK.',
                'status' => 'published',
                'category_id' => $category->id,
                'seo.focus_keyword' => 'capital gains tax',
                'seo.title' => 'Capital gains tax guide %%sep%% %%sitename%%',
                'seo.description' => 'Capital gains tax explained: rates, reliefs and how to report it to HMRC. A practical UK guide from our chartered accountants.',
                'seo.robots_index' => 'default',
                'seo.robots_follow' => true,
            ])
            ->assertSee('Google preview')
            ->call('create')
            ->assertHasNoFormErrors();

        $post = Post::where('slug', 'capital-gains-tax-guide')->firstOrFail();
        $this->assertStringContainsString('<h2>How capital gains tax works</h2>', $post->content);
        $this->assertSame('capital gains tax', $post->seo->focus_keyword);
        $this->assertNotNull($post->seo->seo_score);
        $this->assertGreaterThanOrEqual(70, $post->seo->seo_score);
        $this->assertSame('Capital gains tax guide | Taxaccolega', $post->resolvedSeo()['title']);
        $this->assertNotNull($post->published_at);
    }

    public function test_edit_post_keeps_slug_and_updates_seo(): void
    {
        $post = Post::create(['title' => 'Old', 'slug' => 'old-url', 'content' => '<p>Hi</p>', 'status' => 'draft']);

        Livewire::test(EditPost::class, ['record' => $post->getRouteKey()])
            ->assertOk()
            ->assertSee('Readability')
            ->fillForm(['title' => 'New title', 'seo.focus_keyword' => 'new title'])
            ->call('save')
            ->assertHasNoFormErrors();

        $post->refresh();
        $this->assertSame('old-url', $post->slug);
        $this->assertSame('new title', $post->seo->focus_keyword);
    }

    public function test_page_crud_with_parent(): void
    {
        $parent = Page::create(['title' => 'Accounts', 'slug' => 'accounts', 'status' => 'published']);

        Livewire::test(CreatePage::class)
            ->fillForm([
                'title' => 'Bookkeeping',
                'slug' => 'bookkeeping',
                'editor_mode' => 'visual',
                'content' => '<p>Bookkeeping services.</p>',
                'status' => 'published',
                'parent_id' => $parent->id,
                'seo.focus_keyword' => 'bookkeeping',
                'seo.schema_page_type' => 'WebPage',
            ])
            ->call('create')
            ->assertHasNoFormErrors();

        $page = Page::where('slug', 'bookkeeping')->firstOrFail();
        $this->assertSame('accounts/bookkeeping', $page->frontendPath());
        $this->assertSame('https://taxaccolega.co.uk/accounts/bookkeeping/', $page->resolvedSeo()['canonical']);

        Livewire::test(EditPage::class, ['record' => $page->getRouteKey()])
            ->assertOk()
            ->fillForm(['seo.robots_index' => 'noindex'])
            ->call('save')
            ->assertHasNoFormErrors();

        $this->assertFalse($page->fresh()->resolvedSeo()['robots']['index']);
    }

    public function test_create_category_with_seo(): void
    {
        Livewire::test(CreateCategory::class)
            ->fillForm(['name' => 'VAT', 'slug' => 'vat', 'description' => 'VAT articles', 'seo.robots_index' => 'noindex'])
            ->call('create')
            ->assertHasNoFormErrors();

        $this->assertSame('noindex', Category::where('slug', 'vat')->first()->seo->robots_index);
    }
}
