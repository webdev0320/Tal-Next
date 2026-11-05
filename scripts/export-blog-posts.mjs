/**
 * Sync blog posts from the Laravel admin-panel API into public/blogs.json.
 *
 * The Next.js site is fully static and reads public/blogs.json (see src/lib/cms.js),
 * while the Filament admin edits the database. This script is the bridge: it pulls
 * every published post (with content) from the admin API and rewrites the JSON
 * file in the same WordPress-export shape cms.js consumes.
 *
 * Usage:
 *   node scripts/export-blog-posts.mjs                 # uses http://127.0.0.1:8000
 *   ADMIN_API_URL=http://127.0.0.1:8000 node scripts/export-blog-posts.mjs
 *
 * After running it, rebuild the site (npm run build) so pages pick up the changes.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const blogsJsonPath = path.join(__dirname, '..', 'public', 'blogs.json');

const baseUrl = (process.env.ADMIN_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');

function toUtc(date) {
  const d = new Date(String(date).replace(' ', 'T'));
  return Number.isNaN(d.getTime()) ? '' : d.toUTCString();
}

function mapPost(post) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    link: post.url || `https://taxaccolega.co.uk/blog/${post.slug}/`,
    date: post.published_at ? String(post.published_at).replace('T', ' ').slice(0, 19) : '',
    pubDate: post.published_at ? toUtc(post.published_at) : '',
    author: post.author?.name || '',
    status: 'publish',
    categories: post.category ? [post.category] : [],
    tags: [],
    excerpt: post.excerpt || '',
    content: post.content || '',
    featuredImageId: null,
    featured_image_url: post.featured_image || null,
  };
}

async function main() {
  if (!existsSync(blogsJsonPath)) {
    console.error(`blogs.json not found at ${blogsJsonPath}`);
    process.exit(1);
  }

  console.log(`Fetching published posts from ${baseUrl}/api/posts?all=1&full=1 ...`);
  const res = await fetch(`${baseUrl}/api/posts?all=1&full=1`);
  if (!res.ok) {
    console.error(`API request failed: ${res.status} ${res.statusText}`);
    process.exit(1);
  }
  const { data } = await res.json();
  if (!Array.isArray(data) || data.length === 0) {
    console.error('API returned no posts — aborting to avoid wiping blogs.json.');
    process.exit(1);
  }

  const current = JSON.parse(readFileSync(blogsJsonPath, 'utf8'));
  const posts = data.map(mapPost);

  const output = {
    ...current,
    posts,
    meta: {
      ...(current.meta || {}),
      totalPosts: posts.length,
      categories: [...new Set(posts.flatMap((p) => (p.categories || []).map((c) => c.name)))].sort(),
      tags: [...new Set(posts.flatMap((p) => p.tags || []))].sort(),
    },
  };

  writeFileSync(blogsJsonPath, JSON.stringify(output, null, 2) + '\n');
  console.log(`Wrote ${posts.length} posts to ${blogsJsonPath}`);
  console.log('Run `npm run build` (or restart dev server) to see the changes.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
