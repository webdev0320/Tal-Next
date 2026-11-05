<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class IndustryPages extends Model
{
    use HasSeo;

    protected $table = 'pages';
    protected $guarded = [];

    public const STATUSES = [
        'draft' => 'Draft',
        'published' => 'Published',
        'private' => 'Private',
    ];

    protected $fillable = [
        'title', 'slug', 'url', 'type',
        'featured_image', 'status', 'published_at', 'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
        'published_at' => 'datetime',
    ];

    protected $attributes = [
        'status' => 'draft',
    ];

    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }

    public function isPubliclyVisible(): bool
    {
        return $this->status === 'published' && ! $this->trashed();
    }

    public function featuredImageUrl(): ?string
    {
        return \App\Support\Seo\SeoResolver::absoluteMediaUrl($this->featured_image);
    }

    protected static function booted(): void
    {
        static::saving(function (IndustryPages $page) {
            if (empty($page->slug)) {
                $page->slug = Str::slug($page->title);
            }
            if ($page->status === 'published' && empty($page->published_at)) {
                $page->published_at = now();
            }
        });
    }

    /** Get the menu label for the page. */
    public function getMenuLabel(): string
    {
        return $this->title;
    }

    /** Full path on the website; stored explicitly by the seeder. */
    public function frontendPath(): string
    {
        return trim((string) $this->url, '/');
    }

    /** Get the menu URL for the page. */
    public function getMenuUrl(): string
    {
        return '/'.ltrim($this->frontendPath(), '/');
    }

    /** Get the menu target for the page. */
    public function getMenuTarget(): string
    {
        return '_self';
    }

    /** Get the menu icon for the page. */
    public function getMenuIcon(): ?string
    {
        return null;
    }

    /** Absolute path to the Next.js industry page data files. */
    public static function sourceDirectory(): string
    {
        return base_path('../src/data/industryPages');
    }

    /**
     * Extract the page object exported by one data file.
     *
     * The files have the shape `const page = {...};\n\nexport default page;`
     * and are generated with JSON.stringify, so the literal itself is valid JSON.
     *
     * @return array<string, mixed>|null
     */
    public static function parseFile(string $file): ?array
    {
        $contents = @file_get_contents($file);

        if ($contents === false) {
            return null;
        }

        if (! preg_match('/export\s+default\s+(\w+)\s*;/', $contents, $matches)) {
            return null;
        }

        $variable = preg_quote($matches[1], '/');

        if (! preg_match('/const\s+' . $variable . '\s*=\s*(\{[\s\S]*?\})\s*;\s*export/', $contents, $assignment)) {
            return null;
        }

        $data = json_decode($assignment[1], true);

        return is_array($data) && isset($data['slug']) ? $data : null;
    }

    /** Sync industry pages from src/data/industryPages to the database. */
    public static function sync(): void
    {
        $pagesDir = self::sourceDirectory();

        if (! is_dir($pagesDir)) {
            echo "Industry pages directory not found: {$pagesDir}\n";

            return;
        }

        $files = glob($pagesDir . '/*.js') ?: [];

        if ($files === []) {
            echo "No industry page files found.\n";

            return;
        }

        foreach ($files as $file) {
            $slug = basename($file, '.js');

            // index.js aggregates the imports and has no default export.
            if ($slug === 'index') {
                continue;
            }

            $pageData = self::parseFile($file);

            if ($pageData === null) {
                echo "✗ Failed to extract data for: {$slug}\n";

                continue;
            }

            $page = self::updateOrCreate(
                ['url' => '/industries/'.$slug],
                [
                    'slug' => $slug,
                    'type' => 'industry',
                    'title' => $pageData['title'] ?? Str::headline(str_replace('-', ' ', $slug)),
                    'featured_image' => filled($pageData['heroImage'] ?? null) ? $pageData['heroImage'] : null,
                    'status' => 'published',
                    'sort_order' => $pageData['slug'] === 'home' ? 0 : 1,
                ]
            );

            echo ($page->wasRecentlyCreated ? '  ✓ Created: ' : '  ✓ Updated: ') . $slug . "\n";
        }

        echo "\nSync complete.\n";
    }
}