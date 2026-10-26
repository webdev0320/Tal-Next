<?php

namespace App\Models;

use App\Support\Seo\SeoAnalyzer;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class SeoMeta extends Model
{
    protected $table = 'seo_meta';

    protected $fillable = [
        'focus_keyword', 'related_keywords', 'title', 'description', 'is_cornerstone',
        'canonical_url', 'robots_index', 'robots_follow', 'robots_advanced',
        'breadcrumb_title', 'schema_page_type', 'schema_article_type',
        'og_title', 'og_description', 'og_image',
        'twitter_title', 'twitter_description', 'twitter_image',
        'seo_score', 'readability_score',
    ];

    protected $casts = [
        'related_keywords' => 'array',
        'robots_advanced' => 'array',
        'robots_follow' => 'boolean',
        'is_cornerstone' => 'boolean',
        'seo_score' => 'integer',
        'readability_score' => 'integer',
    ];

    protected $attributes = [
        'robots_index' => 'default',
        'robots_follow' => true,
    ];

    public function seoable(): MorphTo
    {
        return $this->morphTo();
    }

    /**
     * Recalculate the cached SEO / readability scores from the owning record.
     */
    public function fillScores(): static
    {
        $owner = $this->seoable;

        if (! $owner || ! method_exists($owner, 'seoAnalysisInput')) {
            return $this;
        }

        $result = SeoAnalyzer::make($owner->seoAnalysisInput($this))->analyze();

        $this->seo_score = $result['seo']['score'];
        $this->readability_score = $result['readability']['score'];

        return $this;
    }

    protected static function booted(): void
    {
        static::saving(function (SeoMeta $seo) {
            $seo->fillScores();
        });
    }
}
