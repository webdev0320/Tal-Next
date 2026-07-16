import fs from 'fs';
import path from 'path';

const srcDir = path.join(process.cwd(), 'src');

function findFiles(dir, ext) {
  const results = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== 'node_modules') {
      results.push(...findFiles(fullPath, ext));
    } else if (entry.isFile() && entry.name.endsWith(ext)) {
      results.push(fullPath);
    }
  }
  return results;
}

// Fix blog pages: separate stripH1 from articleJsonLd imports
const jsxFiles = findFiles(srcDir, '.jsx');
let blogFixed = 0;
let viewFixed = 0;

for (const filePath of jsxFiles) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Blog pages: import { stripH1, articleJsonLd } from '../../../lib/seo-generators'
  // Split into: import { stripH1 } from '../../../lib/seo-generators'; import { articleJsonLd } from '../../../lib/jsonld';
  const blogPattern = /import\s*\{\s*stripH1,\s*articleJsonLd\s*\}\s*from\s*['"](\.\.\/\.\.\/\.\.\/lib\/)seo-generators['"]/g;
  if (blogPattern.test(content)) {
    content = content.replace(blogPattern, "import { stripH1 } from '$1seo-generators';\nimport { articleJsonLd } from '$1jsonld'");
    changed = true;
    blogFixed++;
  }

  // View files: import { faqJsonLd } from '../lib/seo-generators'
  const viewPattern = /import\s*\{\s*faqJsonLd\s*\}\s*from\s*['"](\.\.\/lib\/)seo-generators['"]/g;
  if (viewPattern.test(content)) {
    content = content.replace(viewPattern, "import { faqJsonLd } from '$1jsonld'");
    changed = true;
    viewFixed++;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log(`Fixed ${blogFixed} blog pages and ${viewFixed} view files`);
