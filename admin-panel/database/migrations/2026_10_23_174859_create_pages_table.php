<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Pages double as the URL registry: every path the website serves (plus legacy
 * WordPress paths kept for redirects) has one row, keyed by `url`.
 * Populated by Database\Seeders\PageUrlsSeeder. The page body lives in pages_content.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->index();                 // last path segment; not unique across sections
            $table->string('url')->unique();                 // canonical path, e.g. "/accounts/bookkeeping-services"
            $table->string('type')->default('page')->index(); // page | industry | account | taxation | package | blog | redirect | legacy
            $table->string('featured_image')->nullable();
            $table->string('status')->default('draft')->index();
            $table->timestamp('published_at')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->foreignId('parent_id')->nullable()->constrained('pages')->nullOnDelete();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
