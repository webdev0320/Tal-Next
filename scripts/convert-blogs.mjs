import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const blogsJsonPath = path.join(__dirname, '../public/blogs.json');
const blogSeoPath = path.join(__dirname, '../public/blog-seo.json');

if (!fs.existsSync(blogsJsonPath)) {
  console.error('blogs.json not found');
  process.exit(1);
}

const blogsData = JSON.parse(fs.readFileSync(blogsJsonPath, 'utf-8'));
const blogSeoData = fs.existsSync(blogSeoPath)
  ? JSON.parse(fs.readFileSync(blogSeoPath, 'utf-8'))
  : {};

const posts = blogsData.posts || [];
const outputBlogDir = path.join(__dirname, '../src/app/blog');
const SITE_URL = 'https://www.taxaccolega.co.uk';

function stripHtml(html, maxLen = 160) {
  const text = String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#8217;|&amp;|&quot;|&lt;|&gt;|&#8220;|&#8221;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length <= maxLen ? text : text.slice(0, maxLen - 1).trimEnd() + '\u2026';
}

const flexibleRegex = (str) => new RegExp(str.split(/\s+/).join('\\s*(?:<[^>]+>)*\\s*'), 'gi');
const patternsToRemove = [
  'Book a free Consultancy', 'Related Posts', 'Personal Details', 'Fornames',
  'id="openPopupBtn"', 'id=openPopupBtn'
];

console.log(`Processing ${posts.length} blog posts...`);

let generated = 0;
let skipped = 0;

posts.forEach((post) => {
  if (!post.slug) { skipped++; return; }

  // Cleanup content
  let cleanedContent = post.content || '';
  patternsToRemove.forEach(pattern => {
    cleanedContent = cleanedContent.replace(flexibleRegex(pattern), '');
  });
  cleanedContent = cleanedContent.replace(/\[wpforms\s+id="34483"\]/g, '');
  cleanedContent = cleanedContent.replace(/From 18 November 2025.*?<\/p>/gs, '');
  cleanedContent = cleanedContent.replace(/<!DOCTYPE html>[\s\S]*?<\/html>/gi, '');

  // Escape backticks in content for template literal safety
  const escapedContent = cleanedContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${');

  const formattedDate = new Date(post.date).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric'
  });

  // SEO metadata
  const seo = blogSeoData[post.slug] || {};
  const metaTitle = seo.title || `${post.title} | Taxaccolega`;
  const metaDescription = seo.description
    || stripHtml(post.excerpt)
    || stripHtml(post.content)
    || `Expert tax insight: ${post.title}. Advice from Taxaccolega London chartered accountants.`;

  const canonicalUrl = `${SITE_URL}/blog/${post.slug}/`;

  const pageContent = `import React from 'react';
import Link from 'next/link';
import ContactSection from '../../../components/ContactSection';

export const metadata = {
  title: ${JSON.stringify(metaTitle)},
  description: ${JSON.stringify(metaDescription)},
  alternates: { canonical: ${JSON.stringify(canonicalUrl)} },
  openGraph: {
    type: 'article',
    title: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(metaDescription)},
    url: ${JSON.stringify(canonicalUrl)},
    siteName: 'Taxaccolega',
    publishedTime: ${JSON.stringify(post.date)},
  },
  twitter: {
    card: 'summary_large_image',
    title: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(metaDescription)},
  },
};

export default function Page() {
  return (
    <div className="blog-post-page bg-light">
      <header className="py-5 text-center" style={{ background: 'linear-gradient(135deg, #1d3c45 0%, #11252b 100%)' }}>
        <div className="container py-4">
          <h1 className="display-4 fw-bold text-white">${post.title.replace(/"/g, '&quot;')}</h1>
          <p className="text-white-50">${formattedDate} | By ${post.author || 'Taxaccolega'}</p>
        </div>
      </header>
      
      <main className="container py-5">
        <article className="card border-0 shadow-sm p-4 p-md-5">
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: \`${escapedContent}\` }} />
        </article>
      </main>

      <div className="container mb-5">
        <Link href="/blog" className="btn btn-brand">&laquo; Back to Blog</Link>
      </div>

      <ContactSection />
    </div>
  );
}
`;

  const routeDir = path.join(outputBlogDir, post.slug);
  if (!fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }
  fs.writeFileSync(path.join(routeDir, 'page.jsx'), pageContent, 'utf-8');
  generated++;
});

console.log(`Done: ${generated} blog pages generated, ${skipped} skipped.`);
