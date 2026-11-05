<?php

namespace Database\Seeders;

use App\Models\Page;
use App\Models\PageContent;
use Illuminate\Database\Seeder;

/**
 * Imports the rendered HTML of every site page into pages_content.
 *
 * The seed file is generated from the static export:
 *   npm run build && node scripts/export-page-content.mjs
 *
 * Rows edited in the admin (source = admin) are left untouched unless
 * PAGES_CONTENT_OVERWRITE=1 is set.
 */
class PagesContentSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/pages-content.json');

        if (! is_file($path)) {
            echo "Page content not found: {$path}\n";
            echo "Run `npm run build && node scripts/export-page-content.mjs` first.\n";

            return;
        }

        $rows = json_decode((string) file_get_contents($path), true);

        if (! is_array($rows)) {
            echo "Could not decode {$path}\n";

            return;
        }

        $overwrite = (bool) env('PAGES_CONTENT_OVERWRITE', false);
        $pageIds = Page::withTrashed()->pluck('id', 'url');
        $stats = ['imported' => 0, 'kept' => 0, 'missing' => 0];

        foreach ($rows as $row) {
            $url = '/'.trim((string) ($row['url'] ?? ''), '/');
            $pageId = $pageIds[$url] ?? null;

            if ($pageId === null) {
                $stats['missing']++;
                echo "  ✗ No page row for {$url} (run PageUrlsSeeder first)\n";

                continue;
            }

            $existing = PageContent::where('page_id', $pageId)->first();

            if ($existing && $existing->source === 'admin' && ! $overwrite) {
                $stats['kept']++;

                continue;
            }

            PageContent::updateOrCreate(
                ['page_id' => $pageId],
                [
                    'content' => (string) ($row['content'] ?? ''),
                    'editor_mode' => 'html',
                    'json_ld' => $row['json_ld'] ?? [],
                    'source' => 'next-export',
                ]
            );

            $stats['imported']++;
        }

        echo "Page content: {$stats['imported']} imported, {$stats['kept']} kept (edited in admin), {$stats['missing']} without a page.\n";
    }
}
