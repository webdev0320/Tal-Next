import { cache } from 'react';

import { SITE, stripHtml } from './seo.js';

/**
 * Global SEO settings from the admin panel (Filament "SEO Settings" page).
 *
 * The admin exposes them at GET /api/seo/settings. This module fetches them
 * server-side (cached 60s, matching the CMS pages) and degrades gracefully to
 * the hardcoded defaults from src/lib/seo.js when the admin API is down.
 */

const ADMIN_API_URL = (process.env.ADMIN_API_URL || 'http://127.0.0.1:8000/api').replace(/\/+$/, '');

// Legacy values that lived hardcoded in layout/Analytics before settings existed.
const LEGACY_GSC_VERIFICATION = 'LVXkLoL3h9hRA_dNK2JMNtJEZTStezytJnyeB_7jwkA';

const DEFAULTS = {
  site: {
    name: SITE.name,
    tagline: 'Chartered Accountants in London',
    url: SITE.url,
    language: 'en-GB',
    separator: '|',
    default_image: SITE.defaultImage,
    blog_base: 'blog',
    category_base: 'blog/category',
  },
  home: {
    title: `${SITE.name} | London Chartered Accountants`,
    description: SITE.defaultDescription,
    canonical: `${SITE.url}/`,
  },
  blog: {
    title: `Blog | ${SITE.name}`,
    description: 'Tax tips, guides and news from Taxaccolega.',
    canonical: `${SITE.url}/blog/`,
    robots: { index: true, follow: true },
  },
  templates: {
    page: { title: '%%title%% %%sep%% %%sitename%%', description: '%%excerpt%%' },
    post: { title: '%%title%% %%sep%% %%sitename%%', description: '%%excerpt%%' },
    category: { title: '%%term_title%% Archives %%sep%% %%sitename%%', description: '%%term_description%%' },
  },
  indexing: {
    allow: true,
    pages_noindex: false,
    posts_noindex: false,
    categories_noindex: false,
  },
  organization: {
    type: 'Organization',
    name: SITE.name,
    legal_name: SITE.legalName,
    logo: null,
    phone: SITE.phone,
    email: SITE.email,
    address: {
      street: SITE.address.street,
      city: SITE.address.city,
      region: SITE.address.region,
      postal_code: SITE.address.postalCode,
      country: SITE.address.country,
    },
  },
  social: { facebook: null, twitter: null, linkedin: null, instagram: null, youtube: null, other: [] },
  verification: {},
  analytics: {},
};

/**
 * Fetch the global SEO settings once per request (React cache) with a 60s
 * Next.js data cache and a hard 5s timeout, mirroring src/lib/pages.js.
 * @returns {Promise<object>} merged settings (defaults ⊕ admin values)
 */
export const getGlobalSeo = cache(async () => {
  try {
    const res = await fetch(`${ADMIN_API_URL}/seo/settings`, {
      next: { revalidate: 60 },
      headers: { Accept: 'application/json' },
      // Be kind to the fallback: never let a hung backend hold a request forever.
      signal: AbortSignal.timeout(30000),
    });

    if (!res.ok) {
      throw new Error(`Admin API ${res.status} for ${ADMIN_API_URL}/seo/settings`);
    }

    const json = await res.json();
    return { ...DEFAULTS, ...(json.data || {}) };
  } catch {
    return DEFAULTS;
  }
});

/**
 * Resolve the Yoast-style template variables from the settings.
 * @param {object} settings
 */
export function templateVars(settings) {
  return {
    title: '',
    excerpt: '',
    term_title: '',
    term_description: '',
    sitename: settings.site?.name || SITE.name,
    sep: settings.site?.separator || '|',
    tagline: settings.site?.tagline || '',
    currentyear: new Date().getFullYear(),
  };
}

/**
 * Apply a Yoast-style title/description template.
 * Mirrors the admin's SeoSettings replacement (tokens, then whitespace collapse).
 * @param {string} template
 * @param {object} vars token values without the %%..%% wrappers, plus sitename/sep/tagline/currentyear
 * @returns {string}
 */
export function applyTemplate(template, vars = {}) {
  if (!template) return '';
  const text = String(template)
    .replace(/%%title%%/g, vars.title ?? '')
    .replace(/%%excerpt%%/g, vars.excerpt ?? '')
    .replace(/%%term_title%%/g, vars.term_title ?? '')
    .replace(/%%term_description%%/g, vars.term_description ?? '')
    .replace(/%%sitename%%/g, vars.sitename ?? '')
    .replace(/%%sep%%/g, vars.sep ?? '|')
    .replace(/%%tagline%%/g, vars.tagline ?? '')
    .replace(/%%currentyear%%/g, vars.currentyear ?? new Date().getFullYear());

  return text.replace(/\s+/g, ' ').trim();
}

/**
 * Merge the global indexing flags (and the env kill-switch) into a robots rule.
 * The env var still wins over the admin so staging deploys stay de-indexed.
 * @param {object} indexing settings.indexing
 * @param {'pages'|'posts'|'categories'} [kind]
 * @param {boolean} [alreadyIndexable=true] the per-page SEO verdict
 */
export function resolveRobots(indexing = {}, kind, alreadyIndexable = true) {
  const envAllowed = process.env.NEXT_PUBLIC_ALLOW_INDEXING !== 'false';
  const adminAllowed = (indexing.allow ?? true) && !(kind && indexing[`${kind}_noindex`]);
  const index = envAllowed && adminAllowed && alreadyIndexable;

  return {
    index,
    follow: true,
    ...(index
      ? {
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        }
      : {}),
  };
}

const VERIFICATION_META_NAMES = {
  google: 'google-site-verification',
  bing: 'msvalidate.01',
  yandex: 'yandex-verification',
  pinterest: 'pinterest-site-verification',
};

/**
 * Webmaster verification meta tags from the admin settings.
 * Falls back to the legacy Google verification so nothing regresses when the
 * admin hasn't filled these in yet.
 * @param {object} [verification] settings.verification
 * @returns {{ name: string, content: string }[]}
 */
export function verificationTags(verification = {}) {
  const google = verification.google || process.env.NEXT_PUBLIC_GSC_SITE_VERIFICATION || LEGACY_GSC_VERIFICATION;
  const resolved = { google, ...verification };

  return Object.entries(resolved)
    .filter(([, content]) => Boolean(content))
    .map(([engine, content]) => ({ name: VERIFICATION_META_NAMES[engine] || engine, content }));
}

/**
 * Root (layout-level) metadata driven by the global settings.
 * @returns {Promise<import('next').Metadata>}
 */
export async function buildRootMetadata() {
  const seo = await getGlobalSeo();
  const { site, home, indexing, organization } = seo;
  const url = site.url || SITE.url;
  const title = home.title || `${SITE.name} | London Chartered Accountants`;
  const description = home.description || SITE.defaultDescription;
  const image = site.default_image || SITE.defaultImage;
  const imageUrl = image.startsWith('http') ? image : `${url.replace(/\/+$/, '')}${image}`;

  return {
    metadataBase: new URL(url),
    title: {
      default: title,
      template: `%s ${site.separator || '|'} ${site.name}`,
    },
    description,
    keywords: SITE.defaultKeywords,
    authors: [{ name: organization.legal_name || SITE.legalName, url }],
    creator: organization.legal_name || SITE.legalName,
    publisher: organization.legal_name || SITE.legalName,
    formatDetection: SITE && {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: SITE.defaultImage,
      apple: SITE.defaultImage,
    },
    robots: resolveRobots(indexing),
    openGraph: {
      type: 'website',
      locale: (site.language || 'en-GB').replace('-', '_'),
      url,
      siteName: site.name || SITE.name,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: site.name || SITE.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
    category: 'Accounting',
  };
}

/**
 * Metadata for the blog index (and paginated variants), driven by settings.
 * @param {{ pageNumber?: number }} [options]
 * @returns {Promise<import('next').Metadata>}
 */
export async function buildBlogIndexMetadata({ pageNumber } = {}) {
  const seo = await getGlobalSeo();
  const vars = templateVars(seo);
  const baseTitle = pageNumber
    ? applyTemplate(seo.templates.page.title, { ...vars, title: `Blog - Page ${pageNumber}` })
    : seo.blog.title;
  const baseDescription = pageNumber
    ? `${seo.blog.description} Archive page ${pageNumber}.`
    : seo.blog.description;

  return {
    // The settings already render "%%sep%% %%sitename%%" into the title, so
    // bypass the parent layout template to avoid a doubled site name.
    title: { absolute: baseTitle },
    description: baseDescription,
    alternates: { canonical: seo.blog.canonical },
    robots: resolveRobots(seo.indexing, 'blog'),
    openGraph: {
      type: 'website',
      locale: (seo.site.language || 'en-GB').replace('-', '_'),
      url: seo.blog.canonical,
      siteName: seo.site.name || SITE.name,
      title: baseTitle,
      description: baseDescription,
    },
    twitter: {
      card: 'summary_large_image',
      title: baseTitle,
      description: baseDescription,
    },
  };
}

/**
 * Metadata for a single blog post, applying the admin's post title/description
 * templates and the posts_noindex flag.
 * @param {object} post
 * @returns {Promise<import('next').Metadata>}
 */
export async function buildPostMetadata(post) {
  const seo = await getGlobalSeo();
  const vars = templateVars(seo);
  const excerpt = stripHtml(post.excerpt || post.content);

  const title =
    applyTemplate(seo.templates.post.title, { ...vars, title: post.title, excerpt }) || post.title;
  const description =
    applyTemplate(seo.templates.post.description, { ...vars, title: post.title, excerpt }) || excerpt;

  const image = post.featured_image || undefined;
  const imageUrl = image && !image.startsWith('http') ? `${seo.site.url.replace(/\/+$/, '')}${image}` : image;

  return {
    // The post template already renders "%%sep%% %%sitename%%" — keep it absolute
    // so the layout template doesn't append the site name a second time.
    title: { absolute: title },
    description,
    keywords: post.keywords ?? SITE.defaultKeywords,
    alternates: { canonical: `${seo.site.url.replace(/\/+$/, '')}/blog/${post.slug}/` },
    robots: resolveRobots(seo.indexing, 'posts'),
    openGraph: {
      type: 'article',
      locale: (seo.site.language || 'en-GB').replace('-', '_'),
      url: `${seo.site.url.replace(/\/+$/, '')}/blog/${post.slug}/`,
      siteName: seo.site.name || SITE.name,
      title,
      description,
      ...(imageUrl ? { images: [{ url: imageUrl, alt: title }] } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      ...(imageUrl ? { images: [imageUrl] } : {}),
    },
  };
}
