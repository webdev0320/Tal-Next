<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * WordPress-style post body: one row per blog post, holding the editable HTML.
 * Shared interactive widgets are stored as shortcodes ([contact_form], ...),
 * same convention as pages_content. Populated by Database\Seeders\BlogPostsSeeder.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('blog_contents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('blog_post_id')->unique()->constrained('blog_posts')->cascadeOnDelete();
            $table->longText('content')->nullable();        // HTML with shortcodes
            $table->string('editor_mode')->default('html'); // visual | html
            $table->json('json_ld')->nullable();           // schema.org blocks extracted from the body
            $table->string('source')->nullable();          // wp-import | admin
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('blog_contents');
    }
};
