<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class BlogSyncFrontend extends Command
{
    protected $signature = 'blog:sync-frontend {--build : No-op, kept for compatibility}';

    protected $description = 'Ping the Next.js frontend /api/revalidate webhook so ISR cache drops immediately';

    public function handle(): int
    {
        $url = rtrim(config('services.frontend_sync.frontend_url'), '/').'/api/revalidate';

        $this->info("Revalidating frontend at {$url} ...");

        try {
            $response = Http::withHeaders([
                'x-revalidate-token' => (string) config('services.frontend_sync.revalidate_token'),
            ])->timeout(10)->post($url);

            $this->info('Status: '.$response->status().' '.json_encode($response->json()));

            return $response->successful() ? self::SUCCESS : self::FAILURE;
        } catch (\Throwable $e) {
            $this->error('Revalidate failed: '.$e->getMessage());

            return self::FAILURE;
        }
    }
}
