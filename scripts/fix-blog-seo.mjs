import fs from 'fs';
import path from 'path';

const blogDir = path.join(process.cwd(), 'src', 'app', 'blog');

function getBlogDirs() {
  return fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && d.name !== '[slug]')
    .map(d => d.name);
}

function processFile(filePath, slug) {
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Skip if already processed
  if (content.includes('articleJsonLd')) {
    return false;
  }

  // 1. Add imports after existing imports
  const importLine = "import { stripH1, articleJsonLd } from '../../../lib/seo-generators';";
  if (!content.includes("stripH1")) {
    content = content.replace(
      /import ContactSection from ['"]\.\.\/\.\.\/\.\.\/components\/ContactSection['"]\s*;?/,
      `$&\n${importLine}`
    );
  }

  // 2. Extract metadata fields for articleJsonLd
  const titleMatch = content.match(/title:\s*["'](.+?)["']/);
  const descMatch = content.match(/description:\s*["'](.+?)["']/);
  const canonicalMatch = content.match(/canonical:\s*["'](https:\/\/www\.taxaccolega\.co\.uk\/blog\/[^"']+)["']/);
  const publishedMatch = content.match(/publishedTime:\s*["'](.+?)["']/);
  
  const title = titleMatch ? titleMatch[1] : '';
  const description = descMatch ? descMatch[1] : '';
  const url = canonicalMatch ? canonicalMatch[1] : `https://www.taxaccolega.co.uk/blog/${slug}/`;
  const date = publishedMatch ? publishedMatch[1] : '';

  // 3. Wrap dangerouslySetInnerHTML content with stripH1
  content = content.replace(
    /dangerouslySetInnerHTML=\{\{\s*__html:\s*`/g,
    'dangerouslySetInnerHTML={{ __html: stripH1(`'
  );
  content = content.replace(
    /`\s*\}\}/g,
    '`) }}'
  );

  // 4. Add articleJsonLd script tag before ContactSection
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    datePublished: date,
    dateModified: date,
    author: {
      '@type': 'Person',
      name: 'Shehriyar Lateef',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Taxaccolega',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  const articleScript = `\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(articleSchema)}) }} />\n      `;
  
  // Insert before ContactSection
  content = content.replace(
    /(<ContactSection\s*\/?>)/,
    `${articleScript}$1`
  );

  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
}

// Main
const dirs = getBlogDirs();
let updated = 0;
let skipped = 0;

for (const slug of dirs) {
  const pageFile = path.join(blogDir, slug, 'page.jsx');
  if (!fs.existsSync(pageFile)) {
    console.log(`SKIP (no page.jsx): ${slug}`);
    skipped++;
    continue;
  }

  try {
    const changed = processFile(pageFile, slug);
    if (changed) {
      console.log(`UPDATED: ${slug}`);
      updated++;
    } else {
      console.log(`SKIP (already processed): ${slug}`);
      skipped++;
    }
  } catch (err) {
    console.error(`ERROR: ${slug} - ${err.message}`);
    skipped++;
  }
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
