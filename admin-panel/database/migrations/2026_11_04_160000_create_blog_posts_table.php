<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * Blog content, kept in dedicated tables (same idea as pages / pages_content):
 * blog_posts holds the URL + metadata of every /blog URL, blog_contents holds
 * the editable HTML body. Populated from the WordPress export (public/blogs.json)
 * by Database\Seeders\BlogPostsSeeder.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blog_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->index();         // post slug, or archive page number; not unique
            $table->string('url')->unique();         // "/blog/{slug}" or "/blog/page/2"
            $table->string('kind')->default('post')->index(); // post | archive
            $table->text('excerpt')->nullable();
            $table->foreignId('category_id')->nullable()->constrained()->nullOnDelete();
            $table->foreignId('author_id')->nullable()->constrained('users')->nullOnDelete();
            $table->string('featured_image')->nullable();
            $table->string('featured_image_url')->nullable();
            $table->string('featured_image_alt')->nullable();
            $table->boolean('is_featured')->default(false);
            $table->string('status')->default('draft')->index();
            $table->timestamp('published_at')->nullable();
            $table->unsignedInteger('sort_order')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_posts');
    }
};
