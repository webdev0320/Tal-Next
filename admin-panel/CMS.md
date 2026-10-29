# Taxaccolega Admin: CMS & SEO

This file explains how to manage pages, blog posts and Yoast-style SEO in the Filament admin, and which API the Next.js site reads from.

## Setup after pulling these changes

```bash
cd admin-panel
php artisan migrate                 # adds seo_meta + settings tables and new post/page columns
php artisan storage:link            # needed for uploaded images (featured / social images)
php artisan content:import-blogs    # imports ../public/blogs.json (140 posts) + current SEO meta
```

The migration moves the existing `meta_title` / `meta_description` values into the new `seo_meta` table, then drops those two columns.

`content:import-blogs` options:

| Option | Meaning |
|---|---|
| `--dry-run` | Show what would happen without writing anything |
| `--update` | Overwrite posts that already exist. By default, existing slugs are skipped |
| `--category=blog` | Put every post in one category instead of the WordPress month categories |
| `--no-meta` | Don't import SEO title/description from `src/app/blog/*/page.jsx` |
| `--json=` / `--jsx=` | Custom paths to `blogs.json` / the blog route folder |

Imported posts open in the **HTML** editor, because the visual editor would strip their inline WordPress/Elementor styles. Each post author is created as a user with a random password. To let an author log in, reset their password under Settings → Users.

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
