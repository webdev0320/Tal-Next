<?php

namespace App\Console\Commands;

use App\Jobs\SyncFrontendBlogContent;
use Illuminate\Console\Command;

class BlogSyncFrontend extends Command
{
    protected $signature = 'blog:sync-frontend {--build : Also run the Next.js production build}';

    protected $description = 'Sync published blog posts into the Next.js site (blogs.json), optionally rebuilding it';

    public function handle(): int
    {
        if ($this->option('build')) {
            config()->set('services.frontend_sync.auto_build', true);
        }

        $this->info('Dispatching frontend blog sync...');
        SyncFrontendBlogContent::dispatch();

        return self::SUCCESS;
    }
}
