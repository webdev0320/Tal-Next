<?php

namespace Database\Seeders;

use App\Models\BlogPost;
use App\Models\Page;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

/**
 * Backfills professional SEO settings into seo_meta for every registered URL.
 *
 * Data comes from `database/seeders/data/professional-seo.json`, generated from
 * the SEO copy that already exists in the repo (public/seo-metadata.json,
 * src/data/seo/staticPages.js, industry/accounts page data, public/blog-seo.json).
 *
 * Safe re-run: existing rows are updated in place; titles/descriptions are
 * overwritten only by values from the committed manifest.
 */
class ProfessionalSeoSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/professional-seo.json');

        if (! is_file($path)) {
            echo "SEO manifest not found: {$path}\n";
            echo "Run `node scripts/generate-professional-seo.mjs` first.\n";

            return;
        }

        $rows = json_decode((string) file_get_contents($path), true);

        if (! is_array($rows)) {
            echo "Could not decode {$path}\n";

            return;
        }

        $stats = ['pages' => 0, 'posts' => 0, 'not_found' => 0, 'noindex' => 0];

        foreach ($rows as $row) {
            $url = '/'.trim((string) ($row['url'] ?? ''), '/');
            $class = (($row['seoable_type'] ?? Page::class) === BlogPost::class ? BlogPost::class : Page::class);

            $model = $class::where('url', $url)->first();

            if (! $model) {
                $stats['not_found']++;
                echo "  ✗ No {$class} for {$url}\n";

                continue;
            }

            $seo = $model->seo()->firstOrNew();
            $seo->fill([
                'title' => $row['title'] ?? null,
                'description' => $row['description'] ?? null,
                'focus_keyword' => $row['focus_keyword'] ?? null,
                'related_keywords' => $row['related_keywords'] ?? [],
                'robots_index' => $row['robots_index'] ?? 'default',
                'robots_follow' => (bool) ($row['robots_follow'] ?? true),
                'breadcrumb_title' => $row['breadcrumb_title'] ?? null,
                'schema_page_type' => $row['schema_page_type'] ?? null,
                'schema_article_type' => $row['schema_article_type'] ?? null,
                'is_cornerstone' => (bool) ($row['is_cornerstone'] ?? false),
                'og_title' => $row['og_title'] ?? null,
                'og_description' => $row['og_description'] ?? null,
                'og_image' => $row['og_image'] ?? null,
                'twitter_title' => $row['twitter_title'] ?? null,
                'twitter_description' => $row['twitter_description'] ?? null,
                'twitter_image' => $row['twitter_image'] ?? null,
            ]);
            $seo->setRelation('seoable', $model);
            $seo->save();

            ($class === BlogPost::class) ? $stats['posts']++ : $stats['pages']++;
            if (($row['robots_index'] ?? 'index') === 'noindex') {
                $stats['noindex']++;
            }
        }

        echo "SEO settings: {$stats['pages']} pages, {$stats['posts']} blog entries, ";
        echo "{$stats['noindex']} noindex, {$stats['not_found']} missing records.\n";
    }
}
