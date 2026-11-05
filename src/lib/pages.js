import fs from 'node:fs';
import path from 'node:path';

import { SITE } from './seo.js';

const ADMIN_API_URL = (process.env.ADMIN_API_URL || 'http://127.0.0.1:8000/api').replace(/\/+$/, '');

const REPOSITORY_ROOT = process.cwd();

const readJson = (relative) => JSON.parse(fs.readFileSync(path.join(REPOSITORY_ROOT, relative), 'utf8'));

let fallbackCache;

function fallbackRegistry() {
  if (fallbackCache) return fallbackCache;

  const pageRows = readJson('admin-panel/database/seeders/data/page-urls.json');
  const contentRows = readJson('admin-panel/database/seeders/data/pages-content.json');
  const seoRows = readJson('admin-panel/database/seeders/data/professional-seo.json');

  fallbackCache = {
    pages: new Map(pageRows.map((row) => [row.url, row])),
    content: new Map(contentRows.map((row) => [row.url, row])),
    seo: new Map(seoRows.map((row) => [row.url, row])),
  };

  return fallbackCache;
}

/** URL path used by Next.js and the CMS, always with leading/trailing slashes. */
export function normalizePath(value = '') {
  const parts = String(value).split('/').filter(Boolean);
  return parts.length ? '/' + parts.join('/') : '/';
}

export function pathFromSlug(slug) {
  if (!slug || slug.length === 0) return '/';
  return normalizePath(Array.isArray(slug) ? slug.join('/') : slug);
}

async function fetchJson(pathname, { revalidate = 60 } = {}) {
  const url = `${ADMIN_API_URL}${pathname}`;
  const res = await fetch(url, {
    next: { revalidate },
    headers: { Accept: 'application/json' },
    // Be kind to the fallback: never let a hung backend hold a request forever.
    signal: AbortSignal.timeout(5000),
  });

  if (!res.ok) {
    const error = new Error(`Admin API ${res.status} for ${url}`);
    error.status = res.status;
    throw error;
  }

  return res.json();
}

const absoluteUrl = (urlPath) => `${SITE.url.replace(/\/+$/, '')}${urlPath === '/' ? '/' : `/${urlPath}/`}`;

function buildFallbackSeo(row, pageRow) {
  const canonical = absoluteUrl(row.url);
  const title = row.title || pageRow?.title || 'Taxaccolega';
  const description = row.description || pageRow?.title || 'Taxaccolega - Chartered Accountants.';
  const keywords = Array.isArray(row.related_keywords) ? row.related_keywords : [];

  return {
    title,
    description,
    canonical,
    keywords,
    robots: {
      index: row.robots_index !== 'noindex',
      follow: row.robots_follow !== false,
      content: row.robots_index === 'noindex' ? 'noindex, follow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
    },
    open_graph: {
      type: 'website',
      locale: SITE.locale.replace('-', '_'),
      site_name: SITE.name,
      title: row.og_title || title,
      description: row.og_description || description,
      url: canonical,
      image: row.og_image || SITE.defaultImage,
    },
    twitter: {
      card: 'summary_large_image',
      title: row.twitter_title || title,
      description: row.twitter_description || description,
      image: row.twitter_image || row.og_image || SITE.defaultImage,
    },
    breadcrumbs: [
      { name: 'Home', url: absoluteUrl('/') },
      { name: title, url: canonical },
    ],
    schema: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${SITE.url.replace(/\/+$/, '')}#organization`,
          name: SITE.name,
          legalName: SITE.legalName,
          url: SITE.url,
          email: SITE.email,
          telephone: SITE.phone,
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.address.street,
            addressLocality: SITE.address.city,
            addressRegion: SITE.address.region,
            postalCode: SITE.address.postalCode,
            addressCountry: SITE.address.country,
          },
        },
        {
          '@type': 'WebSite',
          '@id': `${SITE.url.replace(/\/+$/, '')}#website`,
          url: SITE.url,
          name: SITE.name,
          publisher: { '@id': `${SITE.url.replace(/\/+$/, '')}#organization` },
          inLanguage: 'en-GB',
        },
        {
          '@type': row.schema_page_type || 'WebPage',
          '@id': canonical,
          url: canonical,
          name: title,
          description,
          isPartOf: { '@id': `${SITE.url.replace(/\/+$/, '')}#website` },
          dateModified: new Date().toISOString(),
          breadcrumb: { '@id': `${canonical}#breadcrumb` },
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${canonical}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: absoluteUrl('/') },
            { '@type': 'ListItem', position: 2, name: title, item: canonical },
          ],
        },
      ],
    },
  };
}

function fallbackPage(urlPath) {
  const registry = fallbackRegistry();
  const pageRow = registry.pages.get(urlPath);
  const seoRow = registry.seo.get(urlPath);

  // Legacy and redirect rows are deliberately not public (they 404).
  if (!pageRow || pageRow.status !== 'published' || !seoRow || seoRow.robots_index === 'noindex') {
    return null;
  }

  const contentRow = registry.content.get(urlPath);
  const canonical = absoluteUrl(urlPath);
  const title = seoRow.title || pageRow.title || 'Taxaccolega';

  return {
    data: {
      id: null,
      title,
      slug: pageRow.slug,
      path: urlPath === '/' ? '/' : `/${urlPath}/`,
      url: canonical,
      content: contentRow?.content ?? '',
      json_ld: contentRow?.json_ld ?? [],
      children: [],
      updated_at: null,
      seo: buildFallbackSeo(seoRow, pageRow),
    },
  };
}

/** Read a page by URL path. Falls back to the committed static export if the API is down. */
export async function getPageByPath(path = '') {
  const urlPath = normalizePath(path);
  const apiPath = urlPath === '/' ? '/home' : `/${urlPath.replace(/^\/+/, '')}`;

  try {
    return await fetchJson(`/pages${apiPath}`);
  } catch {
    return fallbackPage(urlPath);
  }
}
