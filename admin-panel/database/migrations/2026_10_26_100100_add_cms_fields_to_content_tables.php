<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('pages', function (Blueprint $table) {
            $table->string('editor_mode')->default('visual')->after('content'); // visual | html
            $table->string('featured_image')->nullable()->after('editor_mode');
            $table->timestamp('published_at')->nullable()->after('status');
            $table->softDeletes();
        });

        Schema::table('posts', function (Blueprint $table) {
            $table->string('editor_mode')->default('visual')->after('content');
            $table->string('featured_image_url')->nullable()->after('featured_image');
            $table->string('featured_image_alt')->nullable()->after('featured_image_url');
            $table->boolean('is_featured')->default(false)->after('status');
            $table->softDeletes();
        });

        Schema::create('settings', function (Blueprint $table) {
            $table->id();
            $table->string('key')->unique();
            $table->json('value')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('settings');

        Schema::table('posts', function (Blueprint $table) {
            $table->dropSoftDeletes();
            $table->dropColumn(['editor_mode', 'featured_image_url', 'featured_image_alt', 'is_featured']);
        });

        Schema::table('pages', function (Blueprint $table) {
            $table->dropSoftDeletes();
            $table->dropColumn(['editor_mode', 'featured_image', 'published_at']);
        });
    }
};
