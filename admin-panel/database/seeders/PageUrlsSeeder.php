<?php

namespace Database\Seeders;

use App\Models\Page;
use Illuminate\Database\Seeder;

/**
 * Populates the pages table with every URL the website serves.
 *
 * The URL list is generated from the Next.js routes, blog JSON and the legacy
 * WordPress export by `node scripts/generate-page-urls.mjs`.
 */
class PageUrlsSeeder extends Seeder
{
    public function run(): void
    {
        $path = database_path('seeders/data/page-urls.json');

        if (! is_file($path)) {
            echo "URL manifest not found: {$path}\n";
            echo "Run `node scripts/generate-page-urls.mjs` first.\n";

            return;
        }

        $rows = json_decode((string) file_get_contents($path), true);

        if (! is_array($rows)) {
            echo "Could not decode {$path}\n";

            return;
        }

        $created = 0;
        $updated = 0;

        foreach ($rows as $row) {
            $url = '/'.trim((string) ($row['url'] ?? ''), '/');

            $page = Page::updateOrCreate(
                ['url' => $url],
                [
                    'slug' => $row['slug'] ?? 'home',
                    'title' => $row['title'] ?? 'Untitled',
                    'type' => $row['type'] ?? 'page',
                    'status' => $row['status'] ?? 'published',
                ]
            );

            $page->wasRecentlyCreated ? $created++ : $updated++;
        }

        echo "Page URLs synced: {$created} created, {$updated} updated.\n";
    }
}
