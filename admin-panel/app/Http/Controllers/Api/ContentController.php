<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Page;
use App\Models\Post;
use App\Support\Seo\SeoResolver;
use App\Support\Seo\SeoSettings;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

/**
 * Public, read-only content API consumed by the Next.js site.
 *
 * Only published content is exposed. Every item includes a fully resolved
 * "seo" object (title, description, canonical, robots, OG, Twitter, JSON-LD).
 */
class ContentController extends Controller
{
    protected function json(array $payload, int $status = 200): JsonResponse
    {
        return response()
            ->json($payload, $status, [], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE)
            ->header('Cache-Control', 'public, max-age=60, stale-while-revalidate=300');
    }

    // --------------------------------------------------------------- pages

    public function pages(Request $request): JsonResponse
    {
        $pages = Page::published()->with(['seo', 'parent'])->orderBy('sort_order')->orderBy('title')->get();
        // full=1 adds content + resolved SEO (see posts()).
        $full = $request->boolean('full');

        return $this->json([
            'data' => $pages->map(fn (Page $p) => $full
                ? array_merge($this->pageSummary($p), ['content' => $p->content, 'seo' => $p->resolvedSeo()])
                : $this->pageSummary($p)
            )->values(),
        ]);
    }

    /** {path} may be nested, e.g. "accounts/bookkeeping". */
    public function page(string $path): JsonResponse
    {
        $path = trim($path, '/');
        $slug = Str::afterLast($path, '/') ?: 'home';

        $page = Page::published()->with(['seo', 'parent', 'children' => fn ($q) => $q->published()])
            ->where('slug', $slug)
            ->first();

        if (! $page || ($path !== '' && $page->frontendPath() !== $path && $page->slug !== $path)) {
            return $this->json(['message' => 'Page not found.'], 404);
        }

        return $this->json(['data' => array_merge($this->pageSummary($page), [
            'content' => $page->content,
            'children' => $page->children->map(fn (Page $c) => $this->pageSummary($c))->values(),
            'seo' => $page->resolvedSeo(),
        ])]);
    }

    protected function pageSummary(Page $page): array
    {
        return [
            'id' => $page->id,
            'title' => $page->title,
            'slug' => $page->slug,
            'path' => '/'.ltrim($page->frontendPath().'/', '/'),
            'url' => $page->frontendUrl(),
            'parent_id' => $page->parent_id,
            'sort_order' => $page->sort_order,
            'featured_image' => $page->featuredImageUrl(),
            'published_at' => $page->published_at?->toIso8601String(),
            'updated_at' => $page->updated_at?->toIso8601String(),
        ];
    }

    // --------------------------------------------------------------- posts

    public function posts(Request $request): JsonResponse
    {
        $perPage = min(100, max(1, (int) $request->integer('per_page', 15)));

        $query = Post::published()
            ->with(['seo', 'category', 'author'])
            ->when($request->filled('category'), fn ($q) => $q->whereHas('category', fn ($c) => $c->where('slug', $request->string('category'))))
            ->when($request->boolean('featured'), fn ($q) => $q->where('is_featured', true))
            ->when($request->filled('q'), function ($q) use ($request) {
                $term = '%'.$request->string('q').'%';
                $q->where(fn ($w) => $w->where('title', 'like', $term)->orWhere('excerpt', 'like', $term));
            })
            ->orderByDesc('is_featured')
            ->orderByDesc('published_at')
            ->orderByDesc('id');

        if ($request->boolean('all')) {
            $posts = $query->get();
            // full=1 adds content + resolved SEO, so a static build needs one request instead of one per post.
            $full = $request->boolean('full');

            return $this->json([
                'data' => $posts->map(fn (Post $p) => $full
                    ? array_merge($this->postSummary($p), ['content' => $p->content, 'seo' => $p->resolvedSeo()])
                    : $this->postSummary($p)
                )->values(),
                'meta' => ['total' => $posts->count()],
            ]);
        }

        $paginator = $query->paginate($perPage)->withQueryString();

        return $this->json([
            'data' => collect($paginator->items())->map(fn (Post $p) => $this->postSummary($p))->values(),
            'meta' => [
                'current_page' => $paginator->currentPage(),
                'last_page' => $paginator->lastPage(),
                'per_page' => $paginator->perPage(),
                'total' => $paginator->total(),
            ],
            'seo' => $this->blogIndexSeo($paginator->currentPage()),
        ]);
    }

    public function post(string $slug): JsonResponse
    {
        $post = Post::published()->with(['seo', 'category', 'author'])->where('slug', $slug)->first();

        if (! $post) {
            return $this->json(['message' => 'Post not found.'], 404);
        }

        $related = Post::published()->with(['category'])
            ->whereKeyNot($post->id)
            ->when($post->category_id, fn ($q) => $q->where('category_id', $post->category_id))
            ->latest('published_at')->limit(3)->get();

        $previous = Post::published()->where('published_at', '<', $post->published_at)->latest('published_at')->first(['id', 'title', 'slug']);
        $next = Post::published()->where('published_at', '>', $post->published_at)->oldest('published_at')->first(['id', 'title', 'slug']);

        return $this->json(['data' => array_merge($this->postSummary($post), [
            'content' => $post->content,
            'seo' => $post->resolvedSeo(),
            'related' => $related->map(fn (Post $p) => $this->postSummary($p))->values(),
            'previous' => $previous ? ['title' => $previous->title, 'slug' => $previous->slug, 'path' => '/'.$previous->frontendPath().'/'] : null,
            'next' => $next ? ['title' => $next->title, 'slug' => $next->slug, 'path' => '/'.$next->frontendPath().'/'] : null,
        ])]);
    }

    protected function postSummary(Post $post): array
    {
        $resolver = SeoResolver::for($post);

        return [
            'id' => $post->id,
            'title' => $post->title,
            'slug' => $post->slug,
            'path' => '/'.$post->frontendPath().'/',
            'url' => $post->frontendUrl(),
            'excerpt' => filled($post->excerpt) ? $post->excerpt : $resolver->excerpt(),
            'featured_image' => $post->featuredImageUrl(),
            'featured_image_alt' => $post->featured_image_alt ?: $post->title,
            'category' => $post->category ? ['name' => $post->category->name, 'slug' => $post->category->slug] : null,
            'author' => $post->author ? ['id' => $post->author->id, 'name' => $post->author->name] : null,
            'is_featured' => $post->is_featured,
            'reading_time' => $post->readingTime(),
            'published_at' => $post->published_at?->toIso8601String(),
            'updated_at' => $post->updated_at?->toIso8601String(),
        ];
    }

    protected function blogIndexSeo(int $page = 1): array
    {
        $s = SeoSettings::all();
        $sep = $s['separator'];
        $replace = fn (string $t) => trim(str_replace(
            ['%%sitename%%', '%%sep%%', '%%tagline%%', '%%currentyear%%'],
            [$s['site_name'], $sep, $s['tagline'], now()->format('Y')],
            $t,
        ));
        $base = trim($s['blog_base'], '/');
        $title = $replace((string) $s['blog_index_title']);

        return [
            'title' => $page > 1 ? "{$title} {$sep} Page {$page}" : $title,
            'description' => $replace((string) $s['blog_index_description']),
            'canonical' => SeoSettings::siteUrl($page > 1 ? "{$base}/page/{$page}" : $base),
            'robots' => ['index' => (bool) $s['allow_indexing'], 'follow' => true],
        ];
    }

    // ---------------------------------------------------------- categories

    public function categories(): JsonResponse
    {
        $categories = Category::with('seo')
            ->withCount(['posts' => fn ($q) => $q->published()])
            ->orderBy('name')->get();

        return $this->json([
            'data' => $categories->map(fn (Category $c) => [
                'id' => $c->id,
                'name' => $c->name,
                'slug' => $c->slug,
                'description' => $c->description,
                'path' => '/'.$c->frontendPath().'/',
                'posts_count' => $c->posts_count,
            ])->values(),
        ]);
    }

    public function category(string $slug): JsonResponse
    {
        $category = Category::with('seo')->where('slug', $slug)->first();

        if (! $category) {
            return $this->json(['message' => 'Category not found.'], 404);
        }

        return $this->json(['data' => [
            'id' => $category->id,
            'name' => $category->name,
            'slug' => $category->slug,
            'description' => $category->description,
            'path' => '/'.$category->frontendPath().'/',
            'seo' => $category->resolvedSeo(),
        ]]);
    }

    // ----------------------------------------------------------------- seo

    public function seoSettings(): JsonResponse
    {
        $s = SeoSettings::all();
        $media = fn ($p) => SeoResolver::absoluteMediaUrl($p);
        $replace = fn (string $t) => trim(preg_replace('/\s+/', ' ', str_replace(
            ['%%sitename%%', '%%sep%%', '%%tagline%%', '%%currentyear%%'],
            [$s['site_name'], $s['separator'], $s['tagline'], now()->format('Y')],
            $t,
        )));

        return $this->json(['data' => [
            'site' => [
                'name' => $s['site_name'],
                'tagline' => $s['tagline'],
                'url' => rtrim($s['site_url'], '/'),
                'language' => $s['site_language'],
                'separator' => $s['separator'],
                'default_image' => $media($s['default_og_image']),
                'blog_base' => $s['blog_base'],
                'category_base' => $s['category_base'],
            ],
            'home' => [
                'title' => $replace((string) $s['home_title']),
                'description' => $s['home_description'],
                'canonical' => SeoSettings::siteUrl(),
            ],
            'blog' => $this->blogIndexSeo(),
            'templates' => [
                'page' => ['title' => $s['page_title_template'], 'description' => $s['page_description_template']],
                'post' => ['title' => $s['post_title_template'], 'description' => $s['post_description_template']],
                'category' => ['title' => $s['category_title_template'], 'description' => $s['category_description_template']],
            ],
            'indexing' => [
                'allow' => (bool) $s['allow_indexing'],
                'pages_noindex' => (bool) $s['pages_noindex'],
                'posts_noindex' => (bool) $s['posts_noindex'],
                'categories_noindex' => (bool) $s['categories_noindex'],
            ],
            'organization' => [
                'type' => $s['org_type'],
                'name' => $s['org_name'],
                'legal_name' => $s['org_legal_name'],
                'logo' => $media($s['org_logo']),
                'phone' => $s['org_phone'],
                'email' => $s['org_email'],
                'address' => [
                    'street' => $s['org_street'],
                    'city' => $s['org_city'],
                    'region' => $s['org_region'],
                    'postal_code' => $s['org_postal_code'],
                    'country' => $s['org_country'],
                ],
            ],
            'social' => [
                'facebook' => $s['facebook_url'],
                'twitter' => $s['twitter_username'] ? '@'.ltrim($s['twitter_username'], '@') : null,
                'linkedin' => $s['linkedin_url'],
                'instagram' => $s['instagram_url'],
                'youtube' => $s['youtube_url'],
                'other' => array_values((array) $s['other_profiles']),
            ],
            'verification' => array_filter([
                'google' => $s['google_verification'],
                'bing' => $s['bing_verification'],
                'yandex' => $s['yandex_verification'],
                'pinterest' => $s['pinterest_verification'],
            ]),
            'analytics' => array_filter([
                'ga_measurement_id' => $s['ga_measurement_id'],
                'gtm_container_id' => $s['gtm_container_id'],
            ]),
            'breadcrumbs' => [
                'home_label' => $s['breadcrumbs_home_label'],
                'separator' => $s['breadcrumbs_separator'],
            ],
        ]]);
    }
}
