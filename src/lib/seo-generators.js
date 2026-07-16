import { readFileSync, existsSync } from 'fs';
import path from 'path';
import { createMetadata, stripHtml, absoluteUrl, SITE } from './seo.js';
import { industryPages } from '../data/industryPages/index.js';
import { taxationSeo } from '../data/seo/taxationSeo.js';
import { packagesSeo } from '../data/seo/packagesSeo.js';

const publicDir = path.join(process.cwd(), 'public');

/**
 * Strip <h1> tags from HTML content to avoid duplicate H1 violations.
 * @param {string} html
 * @returns {string}
 */
export function stripH1(html) {
  return String(html || '').replace(/<h1[^>]*>/gi, '').replace(/<\/h1>/gi, '');
}

// ── JSON SEO maps loaded once at module level ──────────────────────────────
let _seoMetadata = null;
let _blogSeo = null;

function getSeoMetadata() {
  if (!_seoMetadata) {
    const p = path.join(publicDir, 'seo-metadata.json');
    _seoMetadata = existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {};
  }
  return _seoMetadata;
}

function getBlogSeo() {
  if (!_blogSeo) {
    const p = path.join(publicDir, 'blog-seo.json');
    _blogSeo = existsSync(p) ? JSON.parse(readFileSync(p, 'utf8')) : {};
  }
  return _blogSeo;
}

/**
 * @param {string} slugPath
 * @returns {{ title?: string, content?: string } | null}
 */
export function readWpPageData(slugPath) {
  const filePath = path.join(publicDir, 'wp-data', `${slugPath}.json`);
  if (!existsSync(filePath)) return null;
  try {
    return JSON.parse(readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForTaxationSlug(slug) {
  const seo = taxationSeo[slug];

  if (seo) {
    return createMetadata({
      title: seo.title,
      description: seo.description || seo.subtitle,
      path: `/taxation/${slug}`,
      keywords: seo.keywords,
    });
  }

  // Fallback: seo-metadata.json
  const jsonSeo = getSeoMetadata()[`/taxation/${slug}`];
  if (jsonSeo?.title) {
    return createMetadata({
      title: jsonSeo.title,
      description: jsonSeo.description,
      path: `/taxation/${slug}`,
      keywords: jsonSeo.keywords,
    });
  }

  const wpData = readWpPageData(`taxation/${slug}`);
  const title = wpData?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return createMetadata({
    title,
    description: stripHtml(wpData?.content) || `Expert ${title.toLowerCase()} advice from Taxaccolega chartered accountants in London.`,
    path: `/taxation/${slug}`,
    keywords: ['tax services uk', 'tax accountants london', slug.replace(/-/g, ' ')],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForPackageSlug(slug) {
  const seo = packagesSeo[slug];

  if (seo) {
    return createMetadata({
      title: seo.title,
      description: seo.description,
      path: `/packages/${slug}`,
      keywords: seo.keywords,
    });
  }

  // Fallback: seo-metadata.json
  const jsonSeo = getSeoMetadata()[`/packages/${slug}`];
  if (jsonSeo?.title) {
    return createMetadata({
      title: jsonSeo.title,
      description: jsonSeo.description,
      path: `/packages/${slug}`,
      keywords: jsonSeo.keywords,
    });
  }

  const wpData = readWpPageData(`packages/${slug}`) || readWpPageData(slug);
  const title = wpData?.title || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return createMetadata({
    title,
    description: stripHtml(wpData?.content) || `Accounting package for ${title.toLowerCase()} from Taxaccolega. Fixed fees and expert UK support.`,
    path: `/packages/${slug}`,
    keywords: ['accounting packages uk', 'fixed fee accountant', slug.replace(/-/g, ' ')],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata}
 */
export function metadataForIndustrySlug(slug) {
  const config = industryPages[slug];
  const wpData = readWpPageData(`industries/${slug}`);

  // Fallback: seo-metadata.json
  const jsonSeo = getSeoMetadata()[`/industries/${slug}`];

  const title =
    config?.title ||
    jsonSeo?.title ||
    wpData?.title ||
    slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
  const description =
    config?.subtitle ||
    jsonSeo?.description ||
    stripHtml(wpData?.content) ||
    `Specialist ${title.toLowerCase()} accountants in London. Industry-specific tax, bookkeeping and compliance support from Taxaccolega.`;

  return createMetadata({
    title: title.endsWith('Accountants UK') ? title : `${title} Accountants UK`,
    description,
    path: `/industries/${slug}`,
    keywords: [
      ...(jsonSeo?.keywords || []),
      `${title.toLowerCase()} accountant`,
      'industry accountant uk',
      'specialist accountant london',
    ],
  });
}

/**
 * @param {string} slug
 * @returns {import('next').Metadata | null}
 */
export function metadataForBlogSlug(slug) {
  // Priority 1: blog-seo.json (generated from blogs.json excerpts)
  const blogSeo = getBlogSeo();
  const seo = blogSeo[slug];
  if (seo?.title) {
    return createMetadata({
      title: seo.title,
      description: seo.description,
      path: `/blog/${slug}`,
      type: 'article',
      keywords: seo.keywords || ['tax advice uk', 'accounting blog', slug.replace(/-/g, ' ')],
    });
  }

  // Priority 2: blogs.json excerpt fallback
  const blogsPath = path.join(publicDir, 'blogs.json');
  if (!existsSync(blogsPath)) return null;

  try {
    const data = JSON.parse(readFileSync(blogsPath, 'utf8'));
    const post = data.posts?.find((entry) => entry.slug === slug);
    if (!post) return null;

    const description =
      stripHtml(post.excerpt) ||
      stripHtml(post.content) ||
      `Read ${post.title} — tax and accounting insights from Taxaccolega.`;

    return createMetadata({
      title: `${post.title} | Taxaccolega`,
      description,
      path: `/blog/${slug}`,
      type: 'article',
      openGraph: {
        type: 'article',
        publishedTime: post.date,
        authors: post.author ? [post.author] : undefined,
      },
    });
  } catch {
    return null;
  }
}

/**
 * @param {string[]} slugParts
 * @returns {import('next').Metadata}
 */
export function metadataForCatchAllSlug(slugParts) {
  const slugPath = slugParts.join('/');
  const urlPath = `/${slugPath}`;

  // Fallback: seo-metadata.json
  const jsonSeo = getSeoMetadata()[urlPath];
  if (jsonSeo?.title) {
    return createMetadata({
      title: jsonSeo.title,
      description: jsonSeo.description,
      path: urlPath,
      keywords: jsonSeo.keywords,
    });
  }

  const wpData = readWpPageData(slugPath);
  const fallbackTitle = slugParts
    .at(-1)
    ?.replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase());

  const title = wpData?.title || fallbackTitle || 'Our Services';
  const description =
    stripHtml(wpData?.content) ||
    `Expert ${title.toLowerCase()} services from Taxaccolega chartered accountants. HMRC-compliant accounting and tax support in London.`;

  return createMetadata({
    title,
    description,
    path: urlPath,
    keywords: ['accountants london', 'chartered accountants', title.toLowerCase()],
  });
}

// JSON-LD helpers moved to src/lib/jsonld.js (client-safe, no fs dependency)
