/**
 * Build-time access to the blog posts in public/blogs.json.
 *
 * The Next.js app is fully self-contained: it no longer calls the Laravel
 * admin-panel API or reads any CMS snapshot. The committed JSON file is the
 * single source of truth for blog content. Server-only: uses fs.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

let _posts;

function readBlogs() {
  const p = path.join(process.cwd(), 'public/blogs.json');
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : { posts: [] };
}

function firstImage(html) {
  return String(html || '').match(/<img[^>]+src="([^">]+)"/i)?.[1] || null;
}

function fromBlogsJson(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    content: post.content || '',
    excerpt: post.excerpt || '',
    featured_image: post.featured_image_url || null,
    featured_image_alt: post.title,
    author: post.author ? { name: post.author } : null,
    category: post.categories?.[0] || null,
    published_at: post.date ? new Date(post.date.replace(' ', 'T')).toISOString() : null,
    updated_at: null,
  };
}

/** All published posts, newest first. */
export function getPosts() {
  if (!_posts) {
    const posts = (readBlogs().posts ?? []).map(fromBlogsJson);
    const sorted = [...posts].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    const link = (p) => (p ? { title: p.title, slug: p.slug, path: `/blog/${p.slug}/` } : null);
    // previous = older post, next = newer post
    _posts = sorted.map((p, i) => ({ ...p, previous: link(sorted[i + 1]), next: link(sorted[i - 1]) }));
  }
  return _posts;
}

/** @param {string} slug */
export function getPost(slug) {
  return getPosts().find((p) => p.slug === slug) || null;
}

/** Lightweight post summaries for the blog listing (no content shipped to the client). */
export function getPostSummaries() {
  return getPosts().map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    date: p.published_at,
    featured_image_url: p.featured_image || firstImage(p.content),
  }));
}
