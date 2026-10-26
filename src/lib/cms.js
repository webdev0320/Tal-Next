/**
 * Build-time access to content managed in the Laravel admin (admin-panel).
 *
 * Reads the snapshot written by scripts/fetch-cms.mjs (src/data/cms.json).
 * Without a snapshot, blog posts fall back to public/blogs.json and no
 * admin SEO overrides are applied. Server-only: uses fs. Page SEO overrides
 * live in ./cms-seo.js, which is safe to import from client code.
 */

import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

export { seoToMetadata } from './cms-seo.js';

let _cms;
let _posts;

function readJson(file) {
  const p = path.join(process.cwd(), file);
  return existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : null;
}

function loadCms() {
  if (_cms === undefined) _cms = readJson('src/data/cms.json');
  return _cms;
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
    seo: null,
  };
}

/** All published posts, newest first. */
export function getPosts() {
  if (!_posts) {
    const cms = loadCms();
    const posts = cms?.posts ?? (readJson('public/blogs.json')?.posts ?? []).map(fromBlogsJson);
    const sorted = [...posts].sort((a, b) => new Date(b.published_at) - new Date(a.published_at));
    const link = (p) => (p ? { title: p.title, slug: p.slug, path: `/blog/${p.slug}/` } : null);
    // previous = older post, next = newer post (same as the API's single-post endpoint)
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
