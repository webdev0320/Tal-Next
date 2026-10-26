<?php

namespace App\Console\Commands;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

/**
 * Imports the WordPress blog export used by the Next.js site (public/blogs.json)
 * together with the SEO title/description currently hard-coded in
 * src/app/blog/{slug}/page.jsx. Safe to re-run: posts are matched by slug.
 */
class ImportBlogs extends Command
{
    protected $signature = 'content:import-blogs
        {--json= : Path to blogs.json (default: ../public/blogs.json)}
        {--jsx= : Path to the Next.js blog route folder (default: ../src/app/blog)}
        {--category= : Put every post in this category slug instead of the WordPress one}
        {--update : Overwrite posts that already exist (default: skip them)}
        {--no-meta : Do not import SEO titles/descriptions from page.jsx}
        {--dry-run : Show what would happen without writing}';

    protected $description = 'Import WordPress blog posts (blogs.json) and their current SEO meta into the admin';

    public function handle(): int
    {
        $jsonPath = $this->option('json') ?: base_path('../public/blogs.json');
        $jsxDir = $this->option('jsx') ?: base_path('../src/app/blog');

        if (! is_file($jsonPath)) {
            $this->error("blogs.json not found at {$jsonPath}. Pass --json=path/to/blogs.json");

            return self::FAILURE;
        }

        $data = json_decode(file_get_contents($jsonPath), true);
        $items = $data['posts'] ?? [];
        if (! $items) {
            $this->error('No posts found in blogs.json.');

            return self::FAILURE;
        }

        $dry = (bool) $this->option('dry-run');
        $stats = ['created' => 0, 'updated' => 0, 'skipped' => 0, 'meta' => 0];
        $authors = [];
        $categories = [];

        $this->info(($dry ? '[dry run] ' : '').'Importing '.count($items).' posts from '.$jsonPath);
        $bar = $this->output->createProgressBar(count($items));

        $run = function () use ($items, $jsxDir, $dry, &$stats, &$authors, &$categories, $bar) {
            foreach ($items as $item) {
                $bar->advance();
                $slug = Str::slug($item['slug'] ?? '') ?: Str::slug($item['title'] ?? '');
                if ($slug === '') {
                    $stats['skipped']++;

                    continue;
                }

                $existing = Post::withTrashed()->where('slug', $slug)->first();
                if ($existing && ! $this->option('update')) {
                    $stats['skipped']++;

                    continue;
                }

                if ($dry) {
                    $stats[$existing ? 'updated' : 'created']++;

                    continue;
                }

                $authorName = trim($item['author'] ?? '') ?: 'Taxaccolega';
                $authorId = $authors[$authorName] ??= $this->author($authorName)->id;

                $cat = $this->pickCategory($item['categories'] ?? []);
                $categoryId = $cat ? ($categories[$cat['slug']] ??= Category::firstOrCreate(
                    ['slug' => $cat['slug']],
                    ['name' => $cat['name']],
                )->id) : null;

                $publishedAt = filled($item['date'] ?? null) ? Carbon::parse($item['date']) : now();

                $post = $existing ?? new Post;
                $post->fill([
                    'title' => html_entity_decode((string) $item['title'], ENT_QUOTES | ENT_HTML5),
                    'slug' => $slug,
                    'excerpt' => filled($item['excerpt'] ?? null) ? strip_tags($item['excerpt']) : null,
                    'content' => (string) ($item['content'] ?? ''),
                    // Imported WordPress/Elementor HTML keeps its inline styles in the HTML editor.
                    'editor_mode' => 'html',
                    'category_id' => $categoryId,
                    'author_id' => $authorId,
                    'featured_image_url' => $item['featured_image_url'] ?? null,
                    'featured_image_alt' => html_entity_decode((string) $item['title'], ENT_QUOTES | ENT_HTML5),
                    'status' => ($item['status'] ?? 'publish') === 'publish' ? 'published' : 'draft',
                    'published_at' => $publishedAt,
                ]);
                $post->created_at ??= $publishedAt;
                $post->save();
                if ($post->trashed()) {
                    $post->restore();
                }

                $seoValues = [];
                if (! $this->option('no-meta') && ($meta = $this->readJsxMeta($jsxDir, $slug))) {
                    $seoValues = array_filter([
                        'title' => $meta['title'] ?? null,
                        'description' => $meta['description'] ?? null,
                    ]);
                    $stats['meta']++;
                }
                $seo = $post->seo()->firstOrNew();
                $seo->fill($seoValues);
                $seo->setRelation('seoable', $post);
                $seo->save();

                $stats[$existing ? 'updated' : 'created']++;
            }
        };

        $dry ? $run() : DB::transaction($run);

        $bar->finish();
        $this->newLine(2);
        $this->table(['Created', 'Updated', 'Skipped (already exist)', 'SEO meta from page.jsx'], [[
            $stats['created'], $stats['updated'], $stats['skipped'], $stats['meta'],
        ]]);

        if ($stats['skipped'] && ! $this->option('update')) {
            $this->line('Re-run with --update to overwrite existing posts.');
        }

        return self::SUCCESS;
    }

    protected function author(string $name): User
    {
        $user = User::where('name', $name)->first();
        if ($user) {
            return $user;
        }

        // Author accounts get an unusable random password; reset it from Users if they need to log in.
        return User::create([
            'name' => $name,
            'email' => Str::slug($name, '.').'@authors.taxaccolega.local',
            'password' => Str::random(48),
        ]);
    }

    /**
     * WordPress posts here are filed under "Blog" plus a month category; prefer the specific one.
     */
    protected function pickCategory(array $cats): ?array
    {
        if ($forced = $this->option('category')) {
            return ['slug' => Str::slug($forced), 'name' => Str::headline($forced)];
        }

        $cats = array_values(array_filter($cats, fn ($c) => filled($c['slug'] ?? null)));
        $specific = array_values(array_filter($cats, fn ($c) => $c['slug'] !== 'blog'));
        $pick = $specific[0] ?? $cats[0] ?? null;

        return $pick ? ['slug' => $pick['slug'], 'name' => html_entity_decode($pick['name'] ?? Str::headline($pick['slug']))] : null;
    }

    /**
     * Pull title/description out of `export const metadata = { title: "...", description: "..." }`.
     */
    protected function readJsxMeta(string $dir, string $slug): ?array
    {
        $file = rtrim($dir, '/\\').DIRECTORY_SEPARATOR.$slug.DIRECTORY_SEPARATOR.'page.jsx';
        if (! is_file($file)) {
            return null;
        }

        $src = file_get_contents($file);
        $start = strpos($src, 'export const metadata');
        if ($start === false) {
            return null;
        }
        $block = substr($src, $start, 4000);
        // Only the top-level keys (before openGraph/twitter) — two-space indent.
        $out = [];
        foreach (['title', 'description'] as $key) {
            if (preg_match('/^\s{2}'.$key.':\s*("(?:[^"\\\\]|\\\\.)*"|\'(?:[^\'\\\\]|\\\\.)*\')\s*,?\s*$/m', $block, $m)) {
                $raw = $m[1];
                $value = $raw[0] === '"' ? json_decode($raw) : stripcslashes(substr($raw, 1, -1));
                if (is_string($value) && $value !== '') {
                    $out[$key] = trim($value);
                }
            }
        }

        return $out ?: null;
    }
}
