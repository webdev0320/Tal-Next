<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\BlogPostContent;
use App\Models\Category;
use App\Models\Page;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

/**
 * Populates the blog tables from the WordPress export (public/blogs.json).
 *
 *   data/blog-posts.json  URL rows for every blog URL (posts + /blog + /blog/page/N)
 *   public/blogs.json     post titles, bodies, excerpts, authors, categories, images
 *   public/blog-seo.json  SEO title/description per slug (missing => post title)
 *
 * Also removes any blog URLs still present in the pages table (they live here now).
 */
class BlogPostsSeeder extends Seeder
{
    public function run(): void
    {
        $manifest = database_path('seeders/data/blog-posts.json');

        if (! is_file($manifest)) {
            echo "blog-posts.json not found: {$manifest}\n";
            echo "Run `node scripts/generate-page-urls.mjs` first.\n";

            return;
        }

        $rows = json_decode((string) file_get_contents($manifest), true);

        if (! is_array($rows)) {
            echo "Could not decode {$manifest}\n";

            return;
        }

        $stats = ['urls' => 0, 'imported' => 0, 'skipped' => 0, 'meta' => 0];

        foreach ($rows as $row) {
            $url = '/'.trim((string) ($row['url'] ?? ''), '/');

            BlogPost::updateOrCreate(
                ['url' => $url],
                [
                    'slug' => $row['slug'] ?? '',
                    'title' => $row['title'] ?? 'Blog',
                    'kind' => $row['kind'] ?? 'post',
                    'status' => $row['status'] ?? 'published',
                ]
            );
            $stats['urls']++;
        }

        // Hydrate posts with the WordPress body/SEO.
        $blogsPath = base_path('../public/blogs.json');
        $seoPath = base_path('../public/blog-seo.json');
        $seo = is_file($seoPath) ? (json_decode((string) file_get_contents($seoPath), true) ?: []) : [];

        if (is_file($blogsPath)) {
            $data = json_decode((string) file_get_contents($blogsPath), true);
            $posts = $data['posts'] ?? [];
            $authors = [];
            $categories = [];

            foreach ($posts as $item) {
                $slug = Str::slug($item['slug'] ?? '') ?: Str::slug($item['title'] ?? '');

                if ($slug === '') {
                    $stats['skipped']++;
                    continue;
                }

                $status = ($item['status'] ?? 'publish') === 'publish' ? 'published' : 'draft';
                $publishedAt = filled($item['date'] ?? null) ? Carbon::parse($item['date']) : now();

                // Author (WordPress users); random password, reset in admin if needed.
                $authorName = trim((string) ($item['author'] ?? '')) ?: 'Taxaccolega';
                $authorId = $authors[$authorName] ??= $this->authorIdFor($authorName);

                // Category: prefer the specific one (WordPress files posts under "Blog" + month).
                $categoryId = null;
                $cat = $this->pickCategory($item['categories'] ?? []);
                if ($cat) {
                    $categoryId = $categories[$cat['slug']] ??= Category::firstOrCreate(
                        ['slug' => $cat['slug']],
                        ['name' => $cat['name']]
                    )->id;
                }

                $url = '/blog/'.$slug;
                $title = html_entity_decode((string) ($item['title'] ?? ''), ENT_QUOTES | ENT_HTML5);
                $excerpt = filled($item['excerpt'] ?? null) ? trim(strip_tags((string) $item['excerpt'])) : null;

                $post = BlogPost::updateOrCreate(
                    ['url' => $url],
                    [
                        'slug' => $slug,
                        'title' => $title,
                        'kind' => 'post',
                        'excerpt' => $excerpt,
                        'category_id' => $categoryId,
                        'author_id' => $authorId,
                        'featured_image_url' => $item['featured_image_url'] ?? null,
                        'featured_image_alt' => $title,
                        'status' => $status,
                        'published_at' => $publishedAt,
                    ]
                );

                // Imported WordPress/Elementor HTML; keep as-is in the HTML editor.
                BlogPostContent::updateOrCreate(
                    ['blog_post_id' => $post->id],
                    [
                        'content' => (string) ($item['content'] ?? ''),
                        'editor_mode' => 'html',
                        'json_ld' => [],
                        'source' => 'wp-import',
                    ]
                );

                // SEO meta from the exported blog-seo.json (title + description per slug).
                $seoValues = [];
                if ($entry = $seo[$slug] ?? null) {
                    $seoValues = [
                        'title' => filled($entry['title'] ?? null) ? (string) $entry['title'] : null,
                        'description' => filled($entry['description'] ?? null) ? (string) $entry['description'] : null,
                    ];
                }

                $seoMeta = $post->seo()->firstOrNew();
                $seoMeta->fill($seoValues);
                $seoMeta->setRelation('seoable', $post);
                $seoMeta->save();

                if ($seoValues) {
                    $stats['meta']++;
                }
                $stats['imported']++;
            }
        } else {
            echo "public/blogs.json not found; blog bodies not imported.\n";
        }

        // Remove the blog URLs from the pages table; they are managed by blog_posts now.
        $urls = collect($rows)->pluck('url')->all();
        $removed = Page::withTrashed()->whereIn('url', $urls)->forceDelete();

        echo "Blog posts: {$stats['urls']} URLs, {$stats['imported']} bodies imported, ";
        echo "{$stats['meta']} SEO entries, {$removed} removed from pages.\n";
    }

    protected function authorIdFor(string $name): int
    {
        // Author accounts get an unusable random password; reset it from Users if they need to log in.
        return User::firstOrCreate(
            ['name' => $name],
            [
                'email' => Str::slug($name, '.').'@authors.taxaccolega.local',
                'password' => Str::random(48),
            ]
        )->id;
    }

    /**
     * WordPress posts here are filed under "Blog" plus a month category; prefer the specific one.
     */
    protected function pickCategory(array $cats): ?array
    {
        $cats = array_values(array_filter($cats, fn ($c) => filled($c['slug'] ?? null)));
        $specific = array_values(array_filter($cats, fn ($c) => $c['slug'] !== 'blog'));
        $pick = $specific[0] ?? $cats[0] ?? null;

        return $pick ? ['slug' => $pick['slug'], 'name' => html_entity_decode($pick['name'] ?? Str::headline($pick['slug']))] : null;
    }
}
