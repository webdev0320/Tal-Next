<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use NoteBrainsLab\FilamentMenuManager\Contracts\MenuItemSource;

class Post extends Model implements MenuItemSource
{
    use HasFactory, HasSeo, SoftDeletes;

    public const STATUSES = [
        'draft' => 'Draft',
        'pending' => 'Pending review',
        'scheduled' => 'Scheduled',
        'published' => 'Published',
        'private' => 'Private',
    ];

    protected $fillable = [
        'title', 'slug', 'excerpt', 'content', 'content_html', 'editor_mode', 'category_id', 'author_id',
        'featured_image', 'featured_image_url', 'featured_image_alt',
        'status', 'is_featured', 'published_at',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
    ];

    protected $attributes = [
        'editor_mode' => 'visual',
        'status' => 'draft',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    /**
     * Live on the website: published, or scheduled with a publish date that has passed.
     */
    public function scopePublished(Builder $query): Builder
    {
        return $query->where(function (Builder $q) {
            $q->where('status', 'published')
                ->orWhere(fn (Builder $q) => $q->where('status', 'scheduled')->where('published_at', '<=', now()));
        })->where(fn (Builder $q) => $q->whereNull('published_at')->orWhere('published_at', '<=', now()));
    }

    public function isPubliclyVisible(): bool
    {
        if ($this->trashed() || ! in_array($this->status, ['published', 'scheduled'], true)) {
            return false;
        }

        return $this->published_at === null || $this->published_at->lte(now());
    }

    public function frontendPath(): string
    {
        return trim(SeoSettings::get('blog_base', 'blog'), '/').'/'.$this->slug;
    }

    /** Virtual field used by the HTML code editor in the admin. */
    public function setContentHtmlAttribute(?string $value): void
    {
        $this->attributes['content'] = $value;
    }

    public function featuredImageUrl(): ?string
    {
        return SeoResolver::absoluteMediaUrl($this->featured_image) ?? ($this->featured_image_url ?: null);
    }

    public function readingTime(): int
    {
        $words = str_word_count(strip_tags((string) $this->content));

        return max(1, (int) ceil($words / 230));
    }

    protected static function booted(): void
    {
        static::saving(function (Post $post) {
            if (empty($post->slug)) {
                $post->slug = Str::slug($post->title);
            }
            if (auth()->check() && empty($post->author_id)) {
                $post->author_id = auth()->id();
            }
            if ($post->status === 'published' && empty($post->published_at)) {
                $post->published_at = now();
            }
        });
    }

    public function getMenuLabel(): string
    {
        return $this->title;
    }

    public function getMenuUrl(): string
    {
        return '/'.$this->frontendPath();
    }

    public function getMenuTarget(): string
    {
        return '_self';
    }

    public function getMenuIcon(): ?string
    {
        return null;
    }
}
