<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Editable HTML body of a BlogPost (WordPress post_content equivalent).
 *
 * Shared interactive widgets are stored as shortcodes ([contact_form], ...),
 * same convention as pages_content.
 */
class BlogPostContent extends Model
{
    public const SHORTCODES = PageContent::SHORTCODES;

    protected $table = 'blog_contents';

    protected $fillable = ['blog_post_id', 'content', 'editor_mode', 'json_ld', 'source'];

    protected $casts = [
        'json_ld' => 'array',
    ];

    protected $attributes = [
        'editor_mode' => 'html',
    ];

    public function blogPost(): BelongsTo
    {
        return $this->belongsTo(BlogPost::class);
    }
}
