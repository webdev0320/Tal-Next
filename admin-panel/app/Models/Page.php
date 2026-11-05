<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use App\Support\Seo\SeoResolver;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
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

    public const TYPES = [
        'page' => 'Page',
        'industry' => 'Industry',
        'account' => 'Account',
        'taxation' => 'Taxation',
        'package' => 'Package',
        'blog' => 'Blog',
        'redirect' => 'Redirect',
        'legacy' => 'Legacy',
    ];

    protected $fillable = [
        'title', 'slug', 'url', 'type', 'content', 'content_html', 'editor_mode', 'featured_image',
        'status', 'published_at', 'sort_order', 'parent_id',
    ];

    protected $casts = [
        'sort_order' => 'integer',
        'published_at' => 'datetime',
    ];

    /**
     * content / editor_mode live in pages_content; they are exposed here so the
     * admin form, SEO analysis and API can keep using $page->content.
     */
    protected $appends = ['content', 'editor_mode'];

    /** Body changes waiting to be written to pages_content on save. */
    protected array $pendingContent = [];

    protected $attributes = [
        'status' => 'draft',
        'type' => 'page',
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
        // Seeded/imported pages store their canonical path explicitly.
        if (filled($this->url)) {
            return trim($this->url, '/');
        }

        return $this->pathFromHierarchy();
    }

    /** Path derived from the parent chain and this page's slug. */
    protected function pathFromHierarchy(): string
    {
        if ($this->slug === 'home') {
            return '';
        }

        return $this->ancestors()->pluck('slug')->push($this->slug)->implode('/');
    }

    public function pageContent(): HasOne
    {
        return $this->hasOne(PageContent::class);
    }

    public function getContentAttribute(): ?string
    {
        return array_key_exists('content', $this->pendingContent)
            ? $this->pendingContent['content']
            : $this->pageContent?->content;
    }

    public function setContentAttribute(mixed $value): void
    {
        $this->pendingContent['content'] = is_array($value) ? json_encode($value) : $value;
    }

    /** Virtual field used by the HTML code editor in the admin. */
    public function setContentHtmlAttribute(?string $value): void
    {
        $this->setContentAttribute($value);
    }

    public function getEditorModeAttribute(): string
    {
        return $this->pendingContent['editor_mode'] ?? $this->pageContent?->editor_mode ?? 'visual';
    }

    public function setEditorModeAttribute(?string $value): void
    {
        $this->pendingContent['editor_mode'] = $value ?: 'visual';
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

            // Keep the canonical URL populated for pages created in the admin.
            // Seeded URL-registry rows always pass their own url.
            if (empty($page->url)) {
                $page->url = '/'.ltrim($page->pathFromHierarchy(), '/');
            } else {
                $page->url = '/'.trim($page->url, '/');
            }

            if ($page->status === 'published' && empty($page->published_at)) {
                $page->published_at = now();
            }
        });

        static::saved(function (Page $page) {
            if ($page->pendingContent === []) {
                return;
            }

            $values = $page->pendingContent + ['source' => 'admin'];

            // Pages created in the admin start in the visual editor; imported pages use html.
            if (! $page->pageContent()->exists()) {
                $values += ['editor_mode' => 'visual'];
            }

            $page->pageContent()->updateOrCreate([], $values);
            $page->pendingContent = [];
            $page->unsetRelation('pageContent');
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
