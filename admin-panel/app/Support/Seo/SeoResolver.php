<?php

namespace App\Support\Seo;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

/**
 * Turns a record + its SeoMeta + global settings into the final head tags
 * (title, description, canonical, robots, Open Graph, Twitter, JSON-LD),
 * the same way Yoast does when rendering a page.
 */
class SeoResolver
{
    protected array $settings;

    public function __construct(protected Model $record)
    {
        $this->settings = SeoSettings::all();
    }

    public static function for(Model $record): static
    {
        return new static($record);
    }

    public function type(): string
    {
        return match (true) {
            $this->record instanceof Post => 'post',
            $this->record instanceof Category => 'category',
            default => 'page',
        };
    }

    // -------------------------------------------------------------- titles

    public function title(): string
    {
        $seo = $this->record->seo;
        $template = filled($seo?->title)
            ? $seo->title
            : (string) ($this->settings[$this->type().'_title_template'] ?? '%%title%% %%sep%% %%sitename%%');

        return $this->replaceVars($template);
    }

    public function description(): string
    {
        $seo = $this->record->seo;
        $template = filled($seo?->description)
            ? $seo->description
            : (string) ($this->settings[$this->type().'_description_template'] ?? '%%excerpt%%');

        return Str::limit($this->replaceVars($template), 160, '…');
    }

    public function replaceVars(string $template): string
    {
        $r = $this->record;
        $s = $this->settings;

        $vars = [
            'title' => $r->title ?? $r->name ?? '',
            'term_title' => $r->name ?? $r->title ?? '',
            'term_description' => SeoAnalyzer::plainText((string) ($r->description ?? '')),
            'sitename' => $s['site_name'] ?? '',
            'tagline' => $s['tagline'] ?? '',
            'sep' => $s['separator'] ?? '|',
            'excerpt' => $this->excerpt(),
            'category' => $r instanceof Post ? ($r->category?->name ?? '') : '',
            'primary_category' => $r instanceof Post ? ($r->category?->name ?? '') : '',
            'author' => $r instanceof Post ? ($r->author?->name ?? '') : '',
            'date' => optional($r->published_at ?? $r->created_at ?? null)?->format('j F Y') ?? '',
            'modified' => optional($r->updated_at ?? null)?->format('j F Y') ?? '',
            'currentyear' => now()->format('Y'),
            'currentmonth' => now()->format('F'),
            'focuskw' => $r->seo?->focus_keyword ?? '',
        ];

        $out = preg_replace_callback('/%%([a-z_]+)%%/i', fn ($m) => $vars[strtolower($m[1])] ?? '', $template);

        // Collapse doubled separators / whitespace left by empty variables.
        $sep = preg_quote($vars['sep'], '/');
        $out = preg_replace('/\s+/', ' ', $out);
        $out = preg_replace("/({$sep}\s*){2,}/", $vars['sep'].' ', $out);

        return trim(trim($out), " {$vars['sep']}");
    }

    public function excerpt(): string
    {
        $r = $this->record;
        $source = $r->excerpt ?? null;
        if (blank($source)) {
            $source = $r->content ?? $r->description ?? '';
        }

        return Str::limit(SeoAnalyzer::plainText((string) $source), 155, '…');
    }

    // ------------------------------------------------------------- urls

    public function canonical(): string
    {
        $custom = $this->record->seo?->canonical_url;

        return filled($custom) ? $custom : SeoSettings::siteUrl($this->record->frontendPath());
    }

    public function image(): ?string
    {
        $seo = $this->record->seo;

        return static::absoluteMediaUrl($seo?->og_image)
            ?? (method_exists($this->record, 'featuredImageUrl') ? $this->record->featuredImageUrl() : null)
            ?? static::absoluteMediaUrl($this->settings['default_og_image'] ?? null);
    }

    public static function absoluteMediaUrl(?string $path): ?string
    {
        if (blank($path)) {
            return null;
        }
        if (Str::startsWith($path, ['http://', 'https://', '//'])) {
            return $path;
        }

        return url(Storage::disk('public')->url($path));
    }

    // ------------------------------------------------------------ robots

    public function isIndexable(): bool
    {
        if (! ($this->settings['allow_indexing'] ?? true)) {
            return false;
        }
        if (method_exists($this->record, 'isPubliclyVisible') && ! $this->record->isPubliclyVisible()) {
            return false;
        }

        $choice = $this->record->seo?->robots_index ?? 'default';
        if ($choice === 'index') {
            return true;
        }
        if ($choice === 'noindex') {
            return false;
        }

        $key = ['page' => 'pages_noindex', 'post' => 'posts_noindex', 'category' => 'categories_noindex'][$this->type()];

        return ! (bool) ($this->settings[$key] ?? false);
    }

    public function robots(): array
    {
        $seo = $this->record->seo;
        $index = $this->isIndexable();
        $follow = $seo?->robots_follow ?? true;
        $advanced = (array) ($seo?->robots_advanced ?? []);

        $directives = [$index ? 'index' : 'noindex', $follow ? 'follow' : 'nofollow'];
        foreach (['noimageindex', 'noarchive', 'nosnippet'] as $flag) {
            if (in_array($flag, $advanced, true)) {
                $directives[] = $flag;
            }
        }
        if ($index && ! in_array('nosnippet', $advanced, true)) {
            $directives = array_merge($directives, ['max-snippet:-1', 'max-image-preview:large', 'max-video-preview:-1']);
        }

        return [
            'index' => $index,
            'follow' => $follow,
            'noimageindex' => in_array('noimageindex', $advanced, true),
            'noarchive' => in_array('noarchive', $advanced, true),
            'nosnippet' => in_array('nosnippet', $advanced, true),
            'content' => implode(', ', $directives),
        ];
    }

    // -------------------------------------------------------- breadcrumbs

    public function breadcrumbs(): array
    {
        $home = ['name' => $this->settings['breadcrumbs_home_label'] ?? 'Home', 'url' => SeoSettings::siteUrl()];
        $crumbs = [$home];
        $r = $this->record;

        if ($r instanceof Post) {
            $crumbs[] = ['name' => 'Blog', 'url' => SeoSettings::siteUrl($this->settings['blog_base'] ?? 'blog')];
        }
        if ($r instanceof Page) {
            foreach ($r->ancestors() as $ancestor) {
                $crumbs[] = ['name' => $ancestor->seo?->breadcrumb_title ?: $ancestor->title, 'url' => SeoSettings::siteUrl($ancestor->frontendPath())];
            }
        }

        $crumbs[] = ['name' => $r->seo?->breadcrumb_title ?: ($r->title ?? $r->name), 'url' => $this->canonical()];

        return $crumbs;
    }

    // ------------------------------------------------------------ schema

    public function schema(): array
    {
        $s = $this->settings;
        $siteUrl = SeoSettings::siteUrl();
        $url = $this->canonical();
        $orgId = $siteUrl.'#organization';
        $websiteId = $siteUrl.'#website';
        $image = $this->image();

        $graph = [];

        $graph[] = array_filter([
            '@type' => $s['org_type'] === 'Person' ? 'Person' : array_values(array_unique(['Organization', $s['org_type'] ?? 'Organization'])),
            '@id' => $orgId,
            'name' => $s['org_name'] ?: $s['site_name'],
            'legalName' => $s['org_legal_name'] ?? null,
            'url' => $siteUrl,
            'logo' => static::absoluteMediaUrl($s['org_logo'] ?? null),
            'telephone' => $s['org_phone'] ?? null,
            'email' => $s['org_email'] ?? null,
            'address' => filled($s['org_street'] ?? null) ? array_filter([
                '@type' => 'PostalAddress',
                'streetAddress' => $s['org_street'],
                'addressLocality' => $s['org_city'] ?? null,
                'addressRegion' => $s['org_region'] ?? null,
                'postalCode' => $s['org_postal_code'] ?? null,
                'addressCountry' => $s['org_country'] ?? null,
            ]) : null,
            'sameAs' => array_values(array_filter(array_merge([
                $s['facebook_url'] ?? null,
                filled($s['twitter_username'] ?? null) ? 'https://x.com/'.ltrim($s['twitter_username'], '@') : null,
                $s['linkedin_url'] ?? null,
                $s['instagram_url'] ?? null,
                $s['youtube_url'] ?? null,
            ], (array) ($s['other_profiles'] ?? [])))) ?: null,
        ]);

        $graph[] = [
            '@type' => 'WebSite',
            '@id' => $websiteId,
            'url' => $siteUrl,
            'name' => $s['site_name'],
            'description' => $s['tagline'] ?? '',
            'publisher' => ['@id' => $orgId],
            'inLanguage' => $s['site_language'] ?? 'en-GB',
        ];

        $pageType = $this->record->seo?->schema_page_type
            ?: ($this->record instanceof Category ? 'CollectionPage' : ($s['default_page_schema'] ?? 'WebPage'));

        $graph[] = array_filter([
            '@type' => $pageType,
            '@id' => $url,
            'url' => $url,
            'name' => $this->title(),
            'description' => $this->description(),
            'isPartOf' => ['@id' => $websiteId],
            'primaryImageOfPage' => $image ? ['@id' => $url.'#primaryimage'] : null,
            'datePublished' => optional($this->record->published_at ?? $this->record->created_at)?->toIso8601String(),
            'dateModified' => optional($this->record->updated_at)?->toIso8601String(),
            'breadcrumb' => ['@id' => $url.'#breadcrumb'],
            'inLanguage' => $s['site_language'] ?? 'en-GB',
        ]);

        if ($image) {
            $graph[] = ['@type' => 'ImageObject', '@id' => $url.'#primaryimage', 'url' => $image, 'contentUrl' => $image];
        }

        $graph[] = [
            '@type' => 'BreadcrumbList',
            '@id' => $url.'#breadcrumb',
            'itemListElement' => collect($this->breadcrumbs())->values()->map(fn ($c, $i) => [
                '@type' => 'ListItem',
                'position' => $i + 1,
                'name' => $c['name'],
                'item' => $c['url'],
            ])->all(),
        ];

        if ($this->record instanceof Post) {
            $articleType = $this->record->seo?->schema_article_type ?: ($s['default_post_schema'] ?? 'BlogPosting');
            if ($articleType !== 'None') {
                $author = $this->record->author;
                $graph[] = array_filter([
                    '@type' => $articleType,
                    '@id' => $url.'#article',
                    'isPartOf' => ['@id' => $url],
                    'mainEntityOfPage' => ['@id' => $url],
                    'headline' => Str::limit($this->record->title, 110, ''),
                    'description' => $this->description(),
                    'image' => $image ? ['@id' => $url.'#primaryimage'] : null,
                    'datePublished' => optional($this->record->published_at ?? $this->record->created_at)?->toIso8601String(),
                    'dateModified' => optional($this->record->updated_at)?->toIso8601String(),
                    'author' => $author ? ['@type' => 'Person', 'name' => $author->name] : ['@id' => $orgId],
                    'publisher' => ['@id' => $orgId],
                    'articleSection' => $this->record->category?->name,
                    'keywords' => $this->record->seo?->focus_keyword,
                    'wordCount' => count(SeoAnalyzer::words(SeoAnalyzer::plainText((string) $this->record->content))),
                    'inLanguage' => $s['site_language'] ?? 'en-GB',
                ]);
            }
        }

        return ['@context' => 'https://schema.org', '@graph' => array_values($graph)];
    }

    // ------------------------------------------------------------- output

    public function toArray(): array
    {
        $seo = $this->record->seo;
        $title = $this->title();
        $description = $this->description();
        $image = $this->image();
        $twitterHandle = filled($this->settings['twitter_username'] ?? null)
            ? '@'.ltrim($this->settings['twitter_username'], '@')
            : null;

        return [
            'title' => $title,
            'description' => $description,
            'canonical' => $this->canonical(),
            'robots' => $this->robots(),
            'focus_keyword' => $seo?->focus_keyword,
            'is_cornerstone' => (bool) $seo?->is_cornerstone,
            'open_graph' => array_filter([
                'type' => $this->record instanceof Post ? 'article' : 'website',
                'locale' => str_replace('-', '_', $this->settings['site_language'] ?? 'en_GB'),
                'site_name' => $this->settings['site_name'],
                'title' => $seo?->og_title ? $this->replaceVars($seo->og_title) : $title,
                'description' => $seo?->og_description ?: $description,
                'url' => $this->canonical(),
                'image' => $image,
                'published_time' => $this->record instanceof Post ? optional($this->record->published_at)?->toIso8601String() : null,
                'modified_time' => optional($this->record->updated_at)?->toIso8601String(),
                'section' => $this->record instanceof Post ? $this->record->category?->name : null,
            ]),
            'twitter' => array_filter([
                'card' => 'summary_large_image',
                'site' => $twitterHandle,
                'title' => $seo?->twitter_title ? $this->replaceVars($seo->twitter_title) : ($seo?->og_title ? $this->replaceVars($seo->og_title) : $title),
                'description' => $seo?->twitter_description ?: ($seo?->og_description ?: $description),
                'image' => static::absoluteMediaUrl($seo?->twitter_image) ?? $image,
            ]),
            'breadcrumbs' => $this->breadcrumbs(),
            'schema' => $this->schema(),
            'scores' => [
                'seo' => $seo?->seo_score,
                'readability' => $seo?->readability_score,
            ],
            // Fields an editor set explicitly, so the front end can keep its own defaults for the rest.
            'custom' => [
                'title' => filled($seo?->title),
                'description' => filled($seo?->description),
                'canonical' => filled($seo?->canonical_url),
                'robots' => ($seo?->robots_index ?? 'default') !== 'default' || $seo?->robots_follow === false || filled($seo?->robots_advanced),
                'open_graph' => filled($seo?->og_title) || filled($seo?->og_description) || filled($seo?->og_image),
                'twitter' => filled($seo?->twitter_title) || filled($seo?->twitter_description) || filled($seo?->twitter_image),
            ],
        ];
    }
}
