<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Response;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;

/**
 * Yoast-style XML sitemaps (sitemap_index.xml + one sitemap per content type)
 * and a dynamic robots.txt. All URLs point at the Next.js front end.
 */
class SitemapController extends Controller
{
    protected function xml(string $body): Response
    {
        return response('<?xml version="1.0" encoding="UTF-8"?>'."\n".$body, 200, [
            'Content-Type' => 'application/xml; charset=UTF-8',
            'X-Robots-Tag' => 'noindex, follow',
            'Cache-Control' => 'public, max-age=300',
        ]);
    }

    protected function enabled(): bool
    {
        return (bool) SeoSettings::get('sitemap_enabled', true) && (bool) SeoSettings::get('allow_indexing', true);
    }

    public function index(): Response
    {
        abort_unless($this->enabled(), 404);

        $maps = [
            'post-sitemap.xml' => Post::published()->max('updated_at'),
            'page-sitemap.xml' => Page::published()->max('updated_at'),
        ];
        if (SeoSettings::get('sitemap_include_categories', true) && ! SeoSettings::get('categories_noindex')) {
            $maps['category-sitemap.xml'] = Category::max('updated_at');
        }

        $body = '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
        foreach ($maps as $file => $lastmod) {
            $body .= '<sitemap><loc>'.e(url($file)).'</loc>'
                .($lastmod ? '<lastmod>'.e(Carbon::parse($lastmod)->toAtomString()).'</lastmod>' : '')
                .'</sitemap>';
        }

        return $this->xml($body.'</sitemapindex>');
    }

    public function posts(): Response
    {
        abort_unless($this->enabled(), 404);

        $posts = Post::published()->with('seo')->latest('updated_at')->get();
        $blogUrl = SeoSettings::siteUrl(SeoSettings::get('blog_base', 'blog'));

        return $this->xml($this->urlset($posts, [['loc' => $blogUrl, 'lastmod' => $posts->max('updated_at')]]));
    }

    public function pages(): Response
    {
        abort_unless($this->enabled(), 404);

        return $this->xml($this->urlset(Page::published()->with(['seo', 'parent'])->orderBy('sort_order')->get()));
    }

    public function categories(): Response
    {
        abort_unless($this->enabled() && SeoSettings::get('sitemap_include_categories', true), 404);

        return $this->xml($this->urlset(Category::with('seo')->has('posts')->get()));
    }

    /**
     * @param  Collection<int, Model>  $records
     */
    protected function urlset(Collection $records, array $extra = []): string
    {
        $body = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">';

        foreach ($extra as $row) {
            $body .= '<url><loc>'.e($row['loc']).'</loc>'
                .($row['lastmod'] ? '<lastmod>'.e(Carbon::parse($row['lastmod'])->toAtomString()).'</lastmod>' : '')
                .'</url>';
        }

        foreach ($records as $record) {
            $resolver = SeoResolver::for($record);
            $own = SeoSettings::siteUrl($record->frontendPath());

            // Skip noindex content and content canonicalised to another URL (Yoast behaviour).
            if (! $resolver->isIndexable() || rtrim($resolver->canonical(), '/') !== rtrim($own, '/')) {
                continue;
            }

            $body .= '<url><loc>'.e($own).'</loc>';
            if ($record->updated_at) {
                $body .= '<lastmod>'.e($record->updated_at->toAtomString()).'</lastmod>';
            }
            if (method_exists($record, 'featuredImageUrl') && ($img = $record->featuredImageUrl())) {
                $body .= '<image:image><image:loc>'.e($img).'</image:loc></image:image>';
            }
            $body .= '</url>';
        }

        return $body.'</urlset>';
    }

    public function robots(): Response
    {
        $s = SeoSettings::all();

        if (! $s['allow_indexing']) {
            $txt = "User-agent: *\nDisallow: /\n";
        } else {
            $txt = rtrim((string) $s['robots_txt'])."\n";
            if ($s['sitemap_enabled'] && ! str_contains(strtolower($txt), 'sitemap:')) {
                $txt .= "\nSitemap: ".rtrim((string) $s['site_url'], '/')."/sitemap_index.xml\n";
            }
        }

        return response($txt, 200, ['Content-Type' => 'text/plain; charset=UTF-8', 'Cache-Control' => 'public, max-age=300']);
    }
}
