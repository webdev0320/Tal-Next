<?php

namespace App\Models;

use App\Filament\Resources\Pages\PageResource;
use App\Models\Concerns\HasSeo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
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
        'title', 'slug', 'content', 'content_html', 'editor_mode',
        'featured_image', 'status', 'published_at', 'sort_order',
    ];

    protected $casts = [
        'sort_order' => 'integer',
        'published_at' => 'datetime',
    ];

    protected $attributes = [
        'editor_mode' => 'visual',
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

    /** Virtual field used by the HTML code editor in the admin. */
    public function setContentHtmlAttribute(?string $value): void
    {
        $this->attributes['content'] = $value;
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

    /** Sync industry pages from src/data/industryPages to the database. */
    public static function sync(): void
    {
        $pagesDir = database_path('../src/data/industryPages');
        
        if (!is_dir($pagesDir)) {
            echo "Industry pages directory not found: {$pagesDir}\n";
            return;
        }

        $files = glob($pagesDir . '/*.js');
        
        if (!$files) {
            echo "No industry page files found.\n";
            return;
        }

        foreach ($files as $file) {
            $slug = basename($file, '.js');
            
            // Read and parse the industry page data
            $content = file_get_contents($file);
            
            // Extract the default export object - format: "const page = {...}; export default page;"
            if (preg_match('/export default (\w+);/', $content, $matches)) {
                $varName = $matches[1];
                if (preg_match_new('/const ' . $varName . '\s*=\s*({[\\s\\S]*?});\s*export/', $content, $assignMatches)) {
                    try {
                        $pageData = json_decode('(' . $assignMatches[1] . ')', true);
                        
                        if (!$pageData || !isset($pageData['slug'])) {
                            echo "✗ Failed to extract data for: {$slug}\n";
                            continue;
                        }
                        
                        // Prepare the page data for database insertion
                        $title = $pageData['title'] ?? ucfirst(str_replace('-', ' ', $slug));
                        $content = $pageData['sections'] ? json_encode($pageData['sections']) : '';
                        $status = 'published';
                        $sortOrder = (int)($pageData['slug'] === 'home' ? 0 : 1);
                        
                        // Check if page already exists
                        $existing = self::where('slug', $slug)->first();
                        
                        if ($existing) {
                            // Update existing page
                            $existing->title = $title;
                            $existing->content = $content;
                            $existing->status = $status;
                            $existing->sort_order = $sortOrder;
                            $existing->save();
                            echo "✓ Updated: {$slug}\n";
                        } else {
                            // Create new page
                            self::create([
                                'title' => $title,
                                'slug' => $slug,
                                'content' => $content,
                                'status' => $status,
                                'sort_order' => $sortOrder,
                            ]);
                            echo "✓ Created: {$slug}\n";
                        }
                    } catch (Exception $e) {
                        echo "✗ Error parsing {$slug}: " . $e->getMessage() . "\n";
                    }
                }
            }
        }
        
        echo "\nSync complete.\n";
    }
}