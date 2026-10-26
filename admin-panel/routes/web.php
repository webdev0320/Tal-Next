<?php

use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::get('/', fn () => redirect('/admin'));
Route::get('/login', fn () => redirect('/admin/login'));

// Yoast-style XML sitemaps + robots.txt (URLs point at the Next.js site)
Route::get('/sitemap_index.xml', [SitemapController::class, 'index']);
Route::get('/sitemap.xml', [SitemapController::class, 'index']);
Route::get('/post-sitemap.xml', [SitemapController::class, 'posts']);
Route::get('/page-sitemap.xml', [SitemapController::class, 'pages']);
Route::get('/category-sitemap.xml', [SitemapController::class, 'categories']);
Route::get('/robots.txt', [SitemapController::class, 'robots']);
