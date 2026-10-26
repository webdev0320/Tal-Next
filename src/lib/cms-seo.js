/**
 * Maps SEO from the Laravel admin (admin-panel) onto Next.js Metadata.
 *
 * Client-safe (no fs): src/lib/seo.js imports this and is itself used by client
 * views. Page SEO comes from src/data/cms-pages.json, written by
 * scripts/fetch-cms.mjs and kept small (editor-set page SEO only).
 */

/** @typedef {import('next').Metadata} Metadata */

import cmsPages from '../data/cms-pages.json';
import { ALLOW_INDEXING, getRobots } from './seo.js';

function normalizePath(p) {
  const trimmed = String(p || '/').replace(/^\/+|\/+$/g, '');
  return trimmed ? `/${trimmed}/` : '/';
}

/**
 * Resolved SEO for an admin-managed page at this path, or null.
 * Only pages with editor-set SEO are in the snapshot.
 * @param {string} pagePath
 */
export function getPageSeo(pagePath) {
  return cmsPages[normalizePath(pagePath)] || null;
}

/**
 * Metadata for the SEO fields an editor set on the admin page at this path.
 * Fields left on their defaults are omitted, so hand-written SEO still wins.
 * @param {string} pagePath
 * @returns {Metadata}
 */
export function pageSeoOverrides(pagePath) {
  const seo = getPageSeo(pagePath);
  const custom = seo?.custom;
  if (!custom) return {};

  const full = seoToMetadata(seo);
  const overrides = {};
  if (custom.title) overrides.title = full.title;
  if (custom.description) overrides.description = full.description;
  if (custom.canonical) overrides.alternates = full.alternates;
  if (custom.robots) overrides.robots = full.robots;
  if (custom.open_graph || custom.title || custom.description) overrides.openGraph = full.openGraph;
  if (custom.twitter || custom.title || custom.description) overrides.twitter = full.twitter;
  return overrides;
}

/**
 * Maps an admin `seo` object (see admin-panel/CMS.md) onto Next.js Metadata.
 * @param {any} seo
 * @returns {Metadata}
 */
export function seoToMetadata(seo) {
  const og = seo.open_graph || {};
  const tw = seo.twitter || {};
  const r = seo.robots || {};

  const robots = ALLOW_INDEXING
    ? {
        index: r.index !== false,
        follow: r.follow !== false,
        nocache: !!r.noarchive,
        googleBot: {
          index: r.index !== false,
          follow: r.follow !== false,
          noimageindex: !!r.noimageindex,
          ...(r.nosnippet ? { nosnippet: true } : { 'max-snippet': -1 }),
          'max-image-preview': 'large',
          'max-video-preview': -1,
        },
      }
    : getRobots();

  return {
    title: { absolute: seo.title },
    description: seo.description || undefined,
    alternates: seo.canonical ? { canonical: seo.canonical } : undefined,
    robots,
    openGraph: {
      type: og.type === 'article' ? 'article' : 'website',
      locale: og.locale,
      siteName: og.site_name,
      title: og.title || seo.title,
      description: og.description || seo.description || undefined,
      url: og.url || seo.canonical,
      ...(og.image ? { images: [{ url: og.image, alt: og.title || seo.title }] } : {}),
      ...(og.type === 'article'
        ? {
            publishedTime: og.published_time,
            modifiedTime: og.modified_time,
            section: og.section,
          }
        : {}),
    },
    twitter: {
      card: tw.card || 'summary_large_image',
      title: tw.title || seo.title,
      description: tw.description || seo.description || undefined,
      ...(tw.image || og.image ? { images: [tw.image || og.image] } : {}),
    },
  };
}
