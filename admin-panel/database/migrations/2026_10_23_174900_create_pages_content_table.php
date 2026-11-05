<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

/**
 * WordPress-style page body: one row per page, holding the editable HTML.
 *
 * Shared interactive widgets are stored as shortcodes ([contact_form],
 * [reviews_slider], ...) that the Next.js site swaps for React components.
 * Structured data found in the page body is kept separately in json_ld.
 * Populated by Database\Seeders\PagesContentSeeder.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('pages_content', function (Blueprint $table) {
            $table->id();
            $table->foreignId('page_id')->unique()->constrained('pages')->cascadeOnDelete();
            $table->longText('content')->nullable();          // HTML with shortcodes
            $table->string('editor_mode')->default('html');   // visual | html
            $table->json('json_ld')->nullable();              // schema.org blocks extracted from the body
            $table->string('source')->nullable();             // next-export | admin
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('pages_content');
    }
};
