<?php

namespace App\Support\Seo;

use App\Models\Setting;
use Illuminate\Support\Arr;

/**
 * Global SEO settings (the equivalent of Yoast SEO > Settings).
 * Stored as a single JSON row in the `settings` table under the "seo" key.
 */
class SeoSettings
{
    public const KEY = 'seo';

    public static function defaults(): array
    {
        return [
            // Site basics
            'site_name' => 'Taxaccolega',
            'site_url' => 'https://taxaccolega.co.uk',
            'tagline' => 'Chartered Accountants in London',
            'separator' => '|',
            'site_language' => 'en-GB',
            'default_og_image' => null,
            'blog_base' => 'blog',
            'category_base' => 'blog/category',

            // Homepage
            'home_title' => '%%sitename%% %%sep%% %%tagline%%',
            'home_description' => 'Expert chartered accountancy services in London. Tax returns, bookkeeping, payroll, VAT, company formation and more.',

            // Title & description templates per content type
            'page_title_template' => '%%title%% %%sep%% %%sitename%%',
            'page_description_template' => '%%excerpt%%',
            'post_title_template' => '%%title%% %%sep%% %%sitename%%',
            'post_description_template' => '%%excerpt%%',
            'category_title_template' => '%%term_title%% Archives %%sep%% %%sitename%%',
            'category_description_template' => '%%term_description%%',
            'blog_index_title' => 'Blog %%sep%% %%sitename%%',
            'blog_index_description' => 'Tax tips, guides and news from %%sitename%%.',

            // Search appearance: show in search results?
            'pages_noindex' => false,
            'posts_noindex' => false,
            'categories_noindex' => false,
            'default_post_schema' => 'BlogPosting',
            'default_page_schema' => 'WebPage',

            // Site representation (schema.org knowledge graph)
            'org_type' => 'Organization', // Organization | Person | AccountingService | LocalBusiness
            'org_name' => 'Taxaccolega',
            'org_legal_name' => 'Taxaccolega Chartered Accountants',
            'org_logo' => null,
            'org_phone' => '020 8127 0728',
            'org_email' => 'info@taxaccolega.co.uk',
            'org_street' => '187a London Road',
            'org_city' => 'Croydon',
            'org_region' => 'Surrey',
            'org_postal_code' => 'CR0 2RJ',
            'org_country' => 'GB',

            // Social profiles
            'facebook_url' => null,
            'twitter_username' => null,
            'linkedin_url' => null,
            'instagram_url' => null,
            'youtube_url' => null,
            'other_profiles' => [],

            // Webmaster verification + analytics
            'google_verification' => null,
            'bing_verification' => null,
            'yandex_verification' => null,
            'pinterest_verification' => null,
            'ga_measurement_id' => null,
            'gtm_container_id' => null,

            // Crawling / indexing
            'allow_indexing' => true,
            'sitemap_enabled' => true,
            'sitemap_include_categories' => true,
            'robots_txt' => "User-agent: *\nAllow: /\nDisallow: /api/\n",
            'breadcrumbs_home_label' => 'Home',
            'breadcrumbs_separator' => '»',
        ];
    }

    public static function all(): array
    {
        $stored = Setting::get(self::KEY, []);

        return array_merge(static::defaults(), is_array($stored) ? $stored : []);
    }

    public static function get(string $key, mixed $default = null): mixed
    {
        return Arr::get(static::all(), $key, $default);
    }

    public static function save(array $values): void
    {
        Setting::put(self::KEY, array_merge(static::all(), $values));
    }

    public static function siteUrl(string $path = ''): string
    {
        $base = rtrim((string) static::get('site_url'), '/');
        $path = trim($path, '/');

        // The Next.js site uses trailing slashes.
        return $path === '' ? $base.'/' : $base.'/'.$path.'/';
    }
}
