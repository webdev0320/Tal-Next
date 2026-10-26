<?php

namespace App\Models\Concerns;

use App\Models\SeoMeta;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Illuminate\Database\Eloquent\Relations\MorphOne;

/**
 * Gives a model a Yoast-style SEO record.
 *
 * The model must implement frontendPath(): string (path on the Next.js site, no slashes).
 */
trait HasSeo
{
    public static function bootHasSeo(): void
    {
        // Keep cached scores in sync when content changes but SEO fields do not.
        static::saved(function ($model) {
            if ($model->relationLoaded('seo') || $model->seo()->exists()) {
                $seo = $model->seo()->first();
                $seo?->setRelation('seoable', $model);
                $seo?->fillScores()->saveQuietly();
            }
        });

        if (method_exists(static::class, 'forceDeleted')) {
            static::forceDeleted(fn ($model) => $model->seo()->delete());
        }
    }

    public function seo(): MorphOne
    {
        return $this->morphOne(SeoMeta::class, 'seoable');
    }

    public function seoOrNew(): SeoMeta
    {
        return $this->seo ?? $this->seo()->make();
    }

    public function resolvedSeo(): array
    {
        return SeoResolver::for($this)->toArray();
    }

    public function frontendUrl(): string
    {
        return SeoSettings::siteUrl($this->frontendPath());
    }

    /**
     * Input for the SeoAnalyzer. $seo lets the form pass unsaved values.
     */
    public function seoAnalysisInput(?SeoMeta $seo = null): array
    {
        $seo ??= $this->seo;
        $this->setRelation('seo', $seo);
        $resolver = SeoResolver::for($this);

        return [
            'title' => $this->title ?? $this->name ?? '',
            'seo_title' => $resolver->title(),
            'description' => $resolver->description(),
            'slug' => $this->slug ?? '',
            'content' => (string) ($this->content ?? $this->description ?? ''),
            'focus_keyword' => $seo?->focus_keyword,
            'is_cornerstone' => (bool) $seo?->is_cornerstone,
            'site_host' => parse_url(SeoSettings::get('site_url'), PHP_URL_HOST),
        ];
    }
}
