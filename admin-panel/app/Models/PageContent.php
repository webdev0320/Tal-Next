<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * Editable HTML body of a Page (WordPress post_content equivalent).
 */
class PageContent extends Model
{
    protected $table = 'pages_content';

    public const SHORTCODES = [
        'contact_form' => 'Contact form + map',
        'contact_section' => 'Contact details block',
        'reviews_slider' => 'Google reviews slider',
        'partners' => 'Partner logos',
        'stats_counter' => 'Stats counter',
        'referral_form' => 'Referral form',
    ];

    protected $fillable = ['page_id', 'content', 'editor_mode', 'json_ld', 'source'];

    protected $casts = [
        'json_ld' => 'array',
    ];

    protected $attributes = [
        'editor_mode' => 'html',
    ];

    public function page(): BelongsTo
    {
        return $this->belongsTo(Page::class);
    }
}
