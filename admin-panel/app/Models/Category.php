<?php

namespace App\Models;

use App\Models\Concerns\HasSeo;
use App\Support\Seo\SeoSettings;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory, HasSeo;

    protected $fillable = ['name', 'slug', 'description'];

    public function posts(): HasMany
    {
        return $this->hasMany(Post::class);
    }

    public function isPubliclyVisible(): bool
    {
        return true;
    }

    public function frontendPath(): string
    {
        return trim(SeoSettings::get('category_base', 'blog/category'), '/').'/'.$this->slug;
    }

    protected static function booted(): void
    {
        static::saving(function (Category $category) {
            if (empty($category->slug)) {
                $category->slug = Str::slug($category->name);
            }
        });

        static::deleting(fn (Category $category) => $category->seo()->delete());
    }
}
