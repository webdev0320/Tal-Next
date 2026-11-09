/**
 * Blog data source for the frontend.
 *
 * Static export: posts are fetched from the Laravel admin API
 * (`ADMIN_API_URL/posts?all=1&full=1`) once per build. Saving a post in the
 * admin starts the GitHub Actions deploy, which rebuilds the site.
 *
 * Fallback: if the API is unreachable (e.g. backend not running), pages render
 * from the committed public/blogs.json snapshot so the site never breaks.
 *
 * Server-only: uses fs + Next.js fetch caching.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

const ADMIN_API_URL = (process.env.ADMIN_API_URL || 'http://127.0.0.1:8000/api').replace(/\/+$/, '');

function firstImage(html) {
  return String(html || '').match(/<img[^>]+src="([^">]+)"/i)?.[1] || null;
}

/**
 * The WordPress export left page chrome inside many posts: whole embedded
 * HTML documents (the ID verification popup form with its own <style> rules
 * such as `button { color: #fff !important }`), share icons and popup buttons.
 * Those leak into the site header and layout, so strip them at render time.
 */
function cleanContent(html) {
  let c = String(html || '');
  // Embedded documents: drop the ones that carry the popup form, unwrap the rest.
  c = c.replace(/<!DOCTYPE html>[\s\S]*?<\/html>/gi, (doc) => {
    if (/<form[\s>]|idForm|openPopupBtn|closePopupBtn/i.test(doc)) return '';
    const body = doc.match(/<body[^>]*>([\s\S]*)<\/body>/i);
    return body ? body[1] : doc.replace(/<head[\s\S]*?<\/head>/gi, '');
  });
  return c
    .replace(/<!DOCTYPE[^>]*>/gi, '')
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<\/?(html|body)[^>]*>/gi, '')
    .replace(/<(style|script|noscript)[^>]*>[\s\S]*?<\/\1>/gi, '')
    .replace(/<form[\s\S]*?<\/form>/gi, '')
    .replace(/<(link|meta)[^>]*>/gi, '')
    .replace(/<button[^>]*id="?(openPopupBtn|closePopupBtn)"?[^>]*>[\s\S]*?<\/button>/gi, '')
    .replace(/<a[^>]+href="https?:\/\/(www\.)?(facebook\.com|twitter\.com|plus\.google\.com)[^"]*"[^>]*>[\s\S]*?<\/a>/gi, '')
    .replace(/\[wpforms[^\]]*\]/gi, '')
    .replace(/Book a free Consultancy|Related Posts/gi, '')
    // Close <strong>/<b>/<em> tags left open inside a heading, paragraph or list item,
    // otherwise the browser carries the bold/italic on through the rest of the post.
    .replace(/(<(h[1-6]|p|li)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi, (m, open, tag, inner, close) => {
      let fixed = inner;
      for (const t of ['strong', 'b', 'em']) {
        const opened = (inner.match(new RegExp(`<${t}(\\s[^>]*)?>`, 'gi')) || []).length;
        const closed = (inner.match(new RegExp(`</${t}>`, 'gi')) || []).length;
        if (opened > closed) fixed += `</${t}>`.repeat(opened - closed);
      }
      return open + fixed + close;
    })
    .trim();
}

function toIso(date) {
  const d = new Date(String(date || '').replace(' ', 'T'));
  return Number.isNaN(d.getTime()) ? null : d.toISOString();
}

/** Normalise one post from the admin API response. */
function fromApiPost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: cleanContent(post.content),
    excerpt: post.excerpt || '',
    featured_image: post.featured_image || post.featured_image_url || null,
    featured_image_alt: post.title,
    author: post.author ? { name: post.author.name || post.author } : null,
    category: post.category || post.categories?.[0] || null,
    published_at: toIso(post.published_at),
    updated_at: null,
  };
}

/** Normalise one post from the public/blogs.json fallback snapshot. */
function fromBlogsJson(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: cleanContent(post.content),
    excerpt: post.excerpt || '',
    featured_image: post.featured_image_url || null,
    featured_image_alt: post.title,
    author: post.author ? { name: post.author } : null,
    category: post.categories?.[0] || null,
    published_at: toIso(post.date),
    updated_at: null,
  };
}

function linkPosts(sorted) {
  const link = (p) => (p ? { title: p.title, slug: p.slug, path: `/blog/${p.slug}/` } : null);
  // previous = older post, next = newer post
  return sorted.map((p, i) => ({ ...p, previous: link(sorted[i + 1]), next: link(sorted[i - 1]) }));
}

function sortByDate(posts) {
  return [...posts].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
}

/** Fallback snapshot in public/blogs.json (same shape the export script writes). */
function readBlogsJson() {
  const p = path.join(process.cwd(), 'public/blogs.json');
  if (!existsSync(p)) return [];
  try {
    const raw = JSON.parse(readFileSync(p, 'utf8'));
    return (raw.posts ?? []).map(fromBlogsJson);
  } catch {
    return [];
  }
}

/**
 * All published posts, newest first, fetched ONCE per build process.
 *
 * The full posts payload is ~10 MB and takes several seconds, and Next.js can't
 * cache anything over 2 MB, so without this every page re-downloaded it, hit
 * the old 5s timeout, and silently fell back to the stale public/blogs.json.
 *
 * On CI (GitHub Actions sets CI=true) a failed API call fails the build
 * instead, so outdated content is never deployed. Locally it still falls
 * back to public/blogs.json so `npm run dev` works without the backend.
 */
let postsPromise;

async function fetchPostsFromApi() {
  let lastError;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${ADMIN_API_URL}/posts?all=1&full=1`, {
        cache: 'no-store',
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(60000),
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      const { data } = await res.json();
      if (!Array.isArray(data) || data.length === 0) throw new Error('API returned no posts');
      return linkPosts(sortByDate(data.map(fromApiPost)));
    } catch (err) {
      lastError = err;
      console.warn(`[cms] posts API attempt ${attempt} failed: ${err.message}`);
    }
  }
  throw lastError;
}

export function getPosts() {
  if (!postsPromise) {
    postsPromise = fetchPostsFromApi().catch((err) => {
      if (process.env.CI) {
        throw new Error(`[cms] posts API unavailable on CI (${err.message}); refusing to build from stale public/blogs.json`);
      }
      console.warn(`[cms] API unavailable (${err.message}); falling back to public/blogs.json`);
      return linkPosts(sortByDate(readBlogsJson()));
    });
  }
  return postsPromise;
}

/** @param {string} slug */
export async function getPost(slug) {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) || null;
}

/** Lightweight post summaries for the blog listing (no content shipped to the client). */
export async function getPostSummaries() {
  const posts = await getPosts();
  return posts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    date: p.published_at,
    featured_image_url: p.featured_image || firstImage(p.content),
  }));
}
