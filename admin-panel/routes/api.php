<?php

use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\HeaderMenuController;
use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

// Menus
Route::get('/header-menu', [HeaderMenuController::class, 'index']);
Route::get('/menus/header', [HeaderMenuController::class, 'index']);
Route::get('/menu/header', [HeaderMenuController::class, 'index']);
Route::get('/menus/{location}', [HeaderMenuController::class, 'show']);

// Content (published only)
Route::get('/pages', [ContentController::class, 'pages']);
Route::get('/pages/{path}', [ContentController::class, 'page'])->where('path', '.*');
Route::get('/posts', [ContentController::class, 'posts']);
Route::get('/posts/{slug}', [ContentController::class, 'post']);
Route::get('/categories', [ContentController::class, 'categories']);
Route::get('/categories/{slug}', [ContentController::class, 'category']);

// Global SEO
Route::get('/seo/settings', [ContentController::class, 'seoSettings']);
Route::get('/seo/robots.txt', [SitemapController::class, 'robots']);
