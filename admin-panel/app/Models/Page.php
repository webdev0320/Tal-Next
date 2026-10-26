<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use App\Support\Seo\SeoResolver;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use NoteBrainsLab\FilamentMenuManager\Contracts\MenuItemSource;

class Page extends Model implements MenuItemSource
{
    use HasFactory, HasSeo, SoftDeletes;

    public const STATUSES = [
        'draft' => 'Draft',
        'published' => 'Published',
        'private' => 'Private',
    ];

    protected $fillable = [
        'title', 'slug', 'content', 'content_html', 'editor_mode', 'featured_image',
        'status', 'published_at', 'sort_order', 'parent_id',
    ];

    protected $casts = [
        'sort_order' => 'integer',
        'published_at' => 'datetime',
    ];

    protected $attributes = [
        'editor_mode' => 'visual',
        'status' => 'draft',
    ];

    public function parent(): BelongsTo
    {
        return $this->belongsTo(Page::class, 'parent_id');
    }

    public function children(): HasMany
    {
        return $this->hasMany(Page::class, 'parent_id')->orderBy('sort_order');
    }

    public function scopePublished(Builder $query): Builder
    {
        return $query->where('status', 'published');
    }

    public function isPubliclyVisible(): bool
    {
        return $this->status === 'published' && ! $this->trashed();
    }

    /** @return Collection<int, Page> root-first */
    public function ancestors(): Collection
    {
        $chain = collect();
        $parent = $this->parent;
        $guard = 0;
        while ($parent && $guard++ < 10) {
            $chain->prepend($parent);
            $parent = $parent->parent;
        }

        return $chain;
    }

    /** Full nested path on the website, e.g. "accounts/bookkeeping". */
    public function frontendPath(): string
    {
        if ($this->slug === 'home') {
            return '';
        }

        return $this->ancestors()->pluck('slug')->push($this->slug)->implode('/');
    }

    /** Virtual field used by the HTML code editor in the admin. */
    public function setContentHtmlAttribute(?string $value): void
    {
        $this->attributes['content'] = $value;
    }

    public function featuredImageUrl(): ?string
    {
        return SeoResolver::absoluteMediaUrl($this->featured_image);
    }

    protected static function booted(): void
    {
        static::saving(function (Page $page) {
            if (empty($page->slug)) {
                $page->slug = Str::slug($page->title);
            }
            if ($page->status === 'published' && empty($page->published_at)) {
                $page->published_at = now();
            }
        });
    }

    public function getMenuLabel(): string
    {
        return $this->title;
    }

    public function getMenuUrl(): string
    {
        return '/'.ltrim($this->frontendPath(), '/');
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
