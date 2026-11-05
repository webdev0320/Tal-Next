<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Symfony\Component\Process\Process;

/**
 * Pushes the latest published posts from the database into the Next.js site
 * (public/blogs.json via scripts/export-blog-posts.mjs) and, when
 * FRONTEND_AUTO_BUILD=true, also runs the Next.js production build.
 */
class SyncFrontendBlogContent implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public int $timeout = 900;

    public function handle(): void
    {
        $frontendDir = dirname(__DIR__, 3); // repo root (admin-panel/..)

        // 1. Export DB content -> public/blogs.json
        $export = new Process(
            ['node', 'scripts/export-blog-posts.mjs'],
            $frontendDir,
            ['ADMIN_API_URL' => config('services.frontend_sync.api_url')],
            null,
            120,
        );
        $export->mustRun();
        Log::channel('stack')->info('Frontend blog export finished', ['output' => $export->getOutput()]);

        // 2. Optional full static rebuild of the Next.js site
        if (config('services.frontend_sync.auto_build')) {
            $build = new Process(
                [config('services.frontend_sync.npm_binary', 'npm'), 'run', 'build'],
                $frontendDir,
                null,
                null,
                600,
            );
            $build->mustRun();
            Log::channel('stack')->info('Frontend rebuild finished', ['output' => $build->getOutput()]);
        }
    }

    public function failed(\Throwable $e): void
    {
        Log::channel('stack')->error('Frontend blog sync failed: '.$e->getMessage());
    }
}
