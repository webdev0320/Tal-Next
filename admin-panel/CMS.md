# Taxaccolega Admin: CMS & SEO

This file explains how to manage pages, blog posts and Yoast-style SEO in the Filament admin, and which API the Next.js site reads from.

## Page URL registry

The `pages` table is the canonical list of every non-blog URL on the site — the 173 Next.js static routes, static redirect stubs (`public/taxation/*/index.html`) and **all legacy WordPress URLs from `public/page_urls.json`**. Each row has:

- `url` (unique, e.g. `/accounts/bookkeeping-services`) — the canonical path
- `type` — `page | industry | account | taxation | package | redirect | legacy`
- `status` — legacy/redirect rows are seeded as **draft** (they no longer exist as real pages); everything else is published

Page bodies (HTML with shortcodes like `[contact_form]`/`[reviews_slider]`, and the extracted JSON-LD) live in `pages_content`, one row per page.

```bash
# Regenerate the URL list after adding/removing routes
node scripts/generate-page-urls.mjs      # writes seeders/data/page-urls.json + blog-posts.json
php artisan db:seed --class=PageUrlsSeeder

# Re-import page bodies from the static export
npm run build && node scripts/export-page-content.mjs
php artisan db:seed --class=PagesContentSeeder      # keeps admin edits unless PAGES_CONTENT_OVERWRITE=1

# Backfill professional SEO settings for every URL (idempotent with the committed manifest)
node scripts/generate-professional-seo.mjs
php artisan db:seed --class=ProfessionalSeoSeeder
```

Professional SEO backfill uses `public/seo-metadata.json`, `src/data/seo/staticPages.js`, the industry/accounts page data and `public/blog-seo.json`, then writes complete `seo_meta` rows for all 803 URLs (title, description, focus keyword, related keywords, robots, breadcrumb title, schema types, OG/Twitter fields, cornerstone flags). Legacy/redirect rows and the internal test post are marked noindex; current pages and `/blog` are indexable. Re-run it after route changes.

## Blog content tables

The 150 blog URLs live in dedicated tables, not in `pages`:

- **`blog_posts`** — URL registry + post metadata: `url` (unique), `slug`, `kind` (`post` | `archive` — `/blog` and `/blog/page/2`…`/10` are archive rows), `title`, `excerpt`, `category_id`, `author_id`, `featured_image`/`featured_image_url`, `is_featured`, `status`, `published_at`, soft deletes.
- **`blog_contents`** — the editable HTML body of each post (same shortcode convention as pages), plus extracted JSON-LD. `source` is `wp-import` or `admin`.

Import / re-import from the WordPress export:

```bash
php artisan db:seed --class=BlogPostsSeeder
```

`BlogPostsSeeder` reads `public/blogs.json` (bodies, excerpts, authors, categories, dates, featured images) and `public/blog-seo.json` (SEO title/description per slug). The 140 posts all exist in the export, so a fresh migrate + seed imports everything. Each author becomes a user with a random password; **Settings → Users → reset password** to let anyone log in.

`php artisan migrate:fresh --seed` rebuilds everything: **653 page rows** (187 current + 466 legacy) and **150 blog rows** (140 posts + 10 archives), **173 page bodies** in `pages_content`, **140 blog bodies** in `blog_contents`, and **803 `seo_meta` rows** (professional titles, descriptions, keywords, robots, breadcrumbs, OG/Twitter and schema). (Only statically exported pages and the published WordPress posts have bodies; legacy/redirect/archives intentionally have none.)

## Setup after pulling these changes

```bash
cd admin-panel
php artisan migrate:fresh --seed    # full rebuild (drops and recreates all tables)
php artisan storage:link            # needed for uploaded images (featured / social images)
```

If you don't want to wipe the database, run the seeders individually instead (`php artisan db:seed --class=PageUrlsSeeder`, `php artisan db:seed --class=PagesContentSeeder`, `php artisan db:seed --class=BlogPostsSeeder`, `php artisan db:seed --class=ProfessionalSeoSeeder`). Note the Page/Blog URL seeders are `updateOrCreate` — they overwrite seeded titles/slugs/URLs but never touch `*_contents` bodies for rows whose `source` is `admin`.

The migration moves the existing `meta_title` / `meta_description` values into the new `seo_meta` table, then drops those two columns.

Imported posts open in the **HTML** editor, because the visual editor would strip their inline WordPress/Elementor styles.

## Admin features

- **Blog Posts / Pages**: WordPress-style editor with a Publish box (status, date, author), category, featured image (upload or URL) and Visual/HTML editor. List views have status tabs (All / Published / Drafts / Pending / Scheduled / Trash), SEO and readability traffic lights, filters, bulk publish/draft, duplicate, trash/restore and "View on site".
- **Scheduled posts** go live automatically once their `published_at` date has passed. The API checks this on every request, so no cron job is needed.
- **SEO box** (on posts, pages and categories), based on Yoast:
  - *SEO*: focus keyphrase, Google snippet preview (mobile/desktop), SEO title and meta description with `%%variables%%`, and a live SEO analysis.
  - *Readability*: sentence and paragraph length, subheadings, passive voice, transition words and Flesch reading ease.
  - *Social*: Open Graph and X (Twitter) title, description and image.
  - *Advanced*: noindex, nofollow, noimageindex/noarchive/nosnippet, canonical URL, breadcrumb title, schema page/article type and cornerstone flag.
- **SEO → SEO Settings**: site name, URL, separator, default image, title/description templates for each content type, noindex per content type, organization schema, social profiles, Google/Bing verification, GA4/GTM, global indexing switch, robots.txt and breadcrumbs.
- **Dashboard**: content stats plus a Yoast-style "SEO overview" of scores.

Template variables: `%%title%% %%sitename%% %%sep%% %%tagline%% %%excerpt%% %%category%% %%author%% %%date%% %%modified%% %%currentyear%% %%term_title%% %%term_description%% %%focuskw%%`

## Public API (read-only, published content only)

| Endpoint | Returns |
|---|---|
| `GET /api/posts?page=1&per_page=15&category=slug&q=term&featured=1` | Paginated post summaries, `meta`, and blog-archive `seo` |
| `GET /api/posts?all=1` | Every published post, unpaginated. Use this for `generateStaticParams` |
| `GET /api/posts/{slug}` | Post + `content` + resolved `seo` + `related`, `previous`, `next` |
| `GET /api/pages` / `GET /api/pages/{nested/path}` | Pages (nested paths such as `accounts/bookkeeping`) |
| `GET /api/categories` / `GET /api/categories/{slug}` | Categories (+ `seo`) |
| `GET /api/seo/settings` | Global settings: site, home, blog, organization, social, verification, analytics |
| `GET /api/seo/robots.txt` | Generated robots.txt |
| `GET /sitemap_index.xml`, `/post-sitemap.xml`, `/page-sitemap.xml`, `/category-sitemap.xml` | XML sitemaps (noindex and canonicalised items are excluded) |

`/api/posts*` is backed by the `blog_posts` / `blog_contents` tables.

Every `seo` object has this shape, ready to map onto Next.js `generateMetadata`:

```json
{
  "title": "…", "description": "…", "canonical": "https://taxaccolega.co.uk/blog/slug/",
  "robots": { "index": true, "follow": true, "content": "index, follow, max-snippet:-1, …" },
  "open_graph": { "type": "article", "title": "…", "description": "…", "url": "…", "image": "…" },
  "twitter": { "card": "summary_large_image", "title": "…", "image": "…" },
  "breadcrumbs": [{ "name": "Home", "url": "…" }],
  "schema": { "@context": "https://schema.org", "@graph": [ … ] }
}
```

Output the `schema` object as-is inside `<script type="application/ld+json">`.

`GET /api/posts?all=1&full=1` and `GET /api/pages?full=1` add `content` and `seo` to every item, so a static build can fetch everything in one request. Every `seo` object also has a `custom` map (`title`, `description`, `canonical`, `robots`, `open_graph`, `twitter`) that shows which fields an editor set explicitly.

## How the Next.js site uses this

The Next.js frontend is currently **disconnected** from this admin panel. It makes no API calls and reads no CMS snapshot:

- The header menu is static (`src/components/Navbar.jsx`).
- Blog pages build from the committed `public/blogs.json` (`src/lib/cms.js`).
- Page SEO uses the hand-written data in `src/data/seo/`.
- `npm run build` no longer fetches from this app.

Admin changes therefore do not reach the website until the integration is reintroduced. The API endpoints documented above remain available for the admin UI and any future integration.

## Notes

- `public/robots.txt` in this Laravel app is a static file, and the web server serves it before Laravel's `/robots.txt` route. Delete that file if you want the dynamic version served at `/robots.txt`; `/api/seo/robots.txt` works either way.
