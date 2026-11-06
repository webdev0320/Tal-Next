<?php

namespace App\Observers;

use App\Models\BlogPost;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

/**
 * Whenever a blog post is saved or deleted in the Filament admin, ping the
 * Next.js frontend's /api/revalidate webhook so its ISR cache drops and the
 * next visitor sees the change immediately.
 *
 * Runs synchronously with the save (a queue worker is NOT required). Failures
 * are logged but never block saving a post — the frontend also revalidates on
 * a 60s time-based fallback.
 */
class BlogPostObserver
{
    public function saved(BlogPost $post): void
    {
        $this->revalidateFrontend();
    }

    public function deleted(BlogPost $post): void
    {
        $this->revalidateFrontend();
    }

    private function revalidateFrontend(): void
    {
        if (! config('services.frontend_sync.enabled')) {
            return;
        }

        $url = rtrim(config('services.frontend_sync.frontend_url'), '/').'/api/revalidate';

        try {
            $response = Http::withHeaders([
                'x-revalidate-token' => (string) config('services.frontend_sync.revalidate_token'),
            ])->timeout(10)->post($url);

            Log::channel('stack')->info('Frontend blog revalidate', [
                'url' => $url,
                'status' => $response->status(),
                'body' => $response->json(),
            ]);
        } catch (\Throwable $e) {
            // Non-fatal: the frontend's 60s revalidate fallback will catch up.
            Log::channel('stack')->warning('Frontend blog revalidate failed: '.$e->getMessage(), ['url' => $url]);
        }
    }
}
