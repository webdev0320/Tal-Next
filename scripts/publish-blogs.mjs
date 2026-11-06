/**
 * Push blog content updates to the git-hosted frontend deployment.
 *
 * Runs the export (DB -> public/blogs.json) and, if the file actually
 * changed, commits and pushes it so the git-based deployment (Vercel)
 * picks up the change and rebuilds the site.
 *
 * Usage:
 *   node scripts/publish-blogs.mjs
 *   ADMIN_API_URL=http://127.0.0.1:8000 node scripts/publish-blogs.mjs
 */

import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function git(args) {
  return execFileSync('git', args, { cwd: root, encoding: 'utf8' }).trim();
}

function slugFromBlogsJson() {
  try {
    const meta = JSON.parse(readFileSync(path.join(root, 'public', 'blogs.json'), 'utf8')).meta;
    return meta && meta.totalPosts ? ` (${meta.totalPosts} posts)` : '';
  } catch {
    return '';
  }
}

async function main() {
  // 1. Export the latest posts from the admin API into public/blogs.json.
  execFileSync(process.execPath, [path.join(__dirname, 'export-blog-posts.mjs')], {
    cwd: root,
    stdio: 'inherit',
    env: { ...process.env },
  });

  // 2. Skip if nothing changed (nothing to commit).
  git(['add', 'public/blogs.json']);
  const staged = git(['status', '--porcelain', '--', 'public/blogs.json']);
  if (!staged) {
    console.log('blogs.json unchanged — nothing to publish.');
    return;
  }

  // 3. Commit and push so the git-based deployment rebuilds the site.
  git(['commit', '-m', `chore: sync blog content from admin${slugFromBlogsJson()}`]);
  git(['push', 'origin', 'HEAD']);
  console.log('Committed and pushed blogs.json — deployment will rebuild.');
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
