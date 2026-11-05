<?php

namespace App\Observers;

use App\Jobs\SyncFrontendBlogContent;
use App\Models\BlogPost;

/**
 * Whenever a blog post is saved or deleted in the Filament admin, queue a sync
 * of the content into the Next.js site's public/blogs.json (and optionally a
 * static rebuild, see FRONTEND_AUTO_BUILD in .env).
 */
class BlogPostObserver
{
    public function saved(BlogPost $post): void
    {
        if (! config('services.frontend_sync.enabled')) {
            return;
        }

        SyncFrontendBlogContent::dispatch();
    }

    public function deleted(BlogPost $post): void
    {
        if (! config('services.frontend_sync.enabled')) {
            return;
        }

        SyncFrontendBlogContent::dispatch();
    }
}
