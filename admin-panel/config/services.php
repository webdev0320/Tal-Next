<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Next.js frontend sync
    |--------------------------------------------------------------------------
    |
    | When a blog post is saved in the admin, the site's public/blogs.json is
    | refreshed automatically (FRONTEND_SYNC_ENABLED=true). Set
    | FRONTEND_AUTO_BUILD=true to also run the Next.js production build after
    | every export; leave false if the deploy pipeline builds separately.
    |
    */

    'frontend_sync' => [
        'enabled' => env('FRONTEND_SYNC_ENABLED', true),
        'auto_build' => env('FRONTEND_AUTO_BUILD', false),
        'api_url' => env('FRONTEND_ADMIN_API_URL', 'http://127.0.0.1:8000'),
        'npm_binary' => env('FRONTEND_NPM_BINARY', 'npm'),
    ],

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Resend, Postmark, AWS, and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'key' => env('POSTMARK_API_KEY'),
    ],

    'resend' => [
        'key' => env('RESEND_API_KEY'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

];
