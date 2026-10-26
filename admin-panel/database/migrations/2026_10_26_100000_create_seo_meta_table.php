<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

/**
 * Yoast-style per-item SEO data, shared by pages, posts and categories.
 * Existing meta_title / meta_description values are moved into this table.
 */
return new class extends Migration
{
    public function up(): void
    {
        Schema::create('seo_meta', function (Blueprint $table) {
            $table->id();
            $table->morphs('seoable');

            // Keyphrase + snippet
            $table->string('focus_keyword')->nullable();
            $table->json('related_keywords')->nullable();
            $table->string('title')->nullable();
            $table->text('description')->nullable();
            $table->boolean('is_cornerstone')->default(false);

            // Advanced
            $table->string('canonical_url')->nullable();
            $table->string('robots_index')->default('default'); // default | index | noindex
            $table->boolean('robots_follow')->default(true);
            $table->json('robots_advanced')->nullable(); // noimageindex, noarchive, nosnippet
            $table->string('breadcrumb_title')->nullable();
            $table->string('schema_page_type')->nullable();    // WebPage, AboutPage, ContactPage, FAQPage...
            $table->string('schema_article_type')->nullable(); // Article, BlogPosting, NewsArticle, None

            // Social
            $table->string('og_title')->nullable();
            $table->text('og_description')->nullable();
            $table->string('og_image')->nullable();
            $table->string('twitter_title')->nullable();
            $table->text('twitter_description')->nullable();
            $table->string('twitter_image')->nullable();

            // Cached analysis results (0-100)
            $table->unsignedTinyInteger('seo_score')->nullable();
            $table->unsignedTinyInteger('readability_score')->nullable();

            $table->timestamps();

            $table->unique(['seoable_type', 'seoable_id']);
        });

        $now = now();
        foreach (['pages' => 'App\\Models\\Page', 'posts' => 'App\\Models\\Post'] as $tableName => $class) {
            if (! Schema::hasColumn($tableName, 'meta_title')) {
                continue;
            }

            DB::table($tableName)
                ->select('id', 'meta_title', 'meta_description')
                ->orderBy('id')
                ->chunk(200, function ($rows) use ($class, $now) {
                    $insert = [];
                    foreach ($rows as $row) {
                        if (blank($row->meta_title) && blank($row->meta_description)) {
                            continue;
                        }
                        $insert[] = [
                            'seoable_type' => $class,
                            'seoable_id' => $row->id,
                            'title' => $row->meta_title,
                            'description' => $row->meta_description,
                            'created_at' => $now,
                            'updated_at' => $now,
                        ];
                    }
                    if ($insert) {
                        DB::table('seo_meta')->insert($insert);
                    }
                });

            Schema::table($tableName, function (Blueprint $table) {
                $table->dropColumn(['meta_title', 'meta_description']);
            });
        }
    }

    public function down(): void
    {
        foreach (['pages' => 'App\\Models\\Page', 'posts' => 'App\\Models\\Post'] as $tableName => $class) {
            Schema::table($tableName, function (Blueprint $table) {
                $table->string('meta_title')->nullable();
                $table->text('meta_description')->nullable();
            });

            DB::table('seo_meta')->where('seoable_type', $class)->get()->each(function ($seo) use ($tableName) {
                DB::table($tableName)->where('id', $seo->seoable_id)->update([
                    'meta_title' => $seo->title,
                    'meta_description' => $seo->description,
                ]);
            });
        }

        Schema::dropIfExists('seo_meta');
    }
};
