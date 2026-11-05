<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;
use NoteBrainsLab\FilamentMenuManager\Contracts\MenuItemSource;

/**
 * Blog post (WordPress post_type=post). The editable HTML body lives in
 * blog_contents; the URL and post metadata live here. Blog URL rows (posts
 * as well as /blog and /blog/page/N archives) are seeded by BlogPostsSeeder.
 */
class BlogPost extends Model implements MenuItemSource
{
    use HasFactory, HasSeo, SoftDeletes;

    protected $table = 'blog_posts';

    public const STATUSES = [
        'draft' => 'Draft',
        'pending' => 'Pending review',
        'scheduled' => 'Scheduled',
        'published' => 'Published',
        'private' => 'Private',
    ];

    public const KINDS = [
        'post' => 'Post',
        'archive' => 'Archive page',
    ];

    protected $fillable = [
        'title', 'slug', 'url', 'kind', 'excerpt',
        'category_id', 'author_id',
        'featured_image', 'featured_image_url', 'featured_image_alt',
        'is_featured', 'status', 'sort_order', 'published_at',
        // Virtual mutators: values are forwarded to blog_contents.
        'content', 'content_html', 'editor_mode',
    ];

    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
        'sort_order' => 'integer',
    ];

    /**
     * content / editor_mode live in blog_contents; they are exposed here so the
     * admin form, SEO analysis and API can keep using $post->content.
     */
    protected $appends = ['content', 'editor_mode'];

    /** Body changes waiting to be written to blog_contents on save. */
    protected array $pendingContent = [];

    protected $attributes = [
        'status' => 'draft',
        'kind' => 'post',
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    public function blogContent(): HasOne
    {
        return $this->hasOne(BlogPostContent::class);
    }

    public function getContentAttribute(): ?string
    {
        return array_key_exists('content', $this->pendingContent)
            ? $this->pendingContent['content']
            : $this->blogContent?->content;
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
        return $this->pendingContent['editor_mode'] ?? $this->blogContent?->editor_mode ?? 'visual';
    }

    public function setEditorModeAttribute(?string $value): void
    {
        $this->pendingContent['editor_mode'] = $value ?: 'visual';
    }

    public function isArchive(): bool
    {
        return $this->kind === 'archive';
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
        // Seeded/imported posts store their canonical path explicitly.
        if (filled($this->url)) {
            return trim($this->url, '/');
        }

        return trim(SeoSettings::get('blog_base', 'blog'), '/').'/'.$this->slug;
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
        static::saving(function (BlogPost $post) {
            if (empty($post->slug)) {
                $post->slug = Str::slug($post->title);
            }

            if (empty($post->url)) {
                $base = trim(SeoSettings::get('blog_base', 'blog'), '/');
                $post->url = '/'.$base.'/'.$post->slug;
            } else {
                $post->url = '/'.trim($post->url, '/');
            }
            if (auth()->check() && empty($post->author_id)) {
                $post->author_id = auth()->id();
            }
            if ($post->status === 'published' && empty($post->published_at)) {
                $post->published_at = now();
            }
        });

        static::saved(function (BlogPost $post) {
            if ($post->pendingContent === []) {
                return;
            }

            $values = $post->pendingContent + ['source' => 'admin'];

            // Posts created in the admin start in the visual editor; imported posts use html.
            if (! $post->blogContent()->exists()) {
                $values += ['editor_mode' => 'visual'];
            }

            $post->blogContent()->updateOrCreate([], $values);
            $post->pendingContent = [];
            $post->unsetRelation('blogContent');
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
