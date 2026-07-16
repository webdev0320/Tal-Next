import { stripHtml, absoluteUrl, SITE } from './seo.js';

/**
 * Breadcrumb JSON-LD
 * @param {Array<{name: string, url: string}>} items
 */
export function breadcrumbJsonLd(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Article/Blog post JSON-LD
 * @param {{ title: string, description: string, date: string, author: string, url: string, imageUrl?: string }} post
 */
export function articleJsonLd(post) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author || SITE.legalName,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: absoluteUrl('/images/logo.png'),
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': post.url,
    },
    image: post.imageUrl || absoluteUrl(SITE.defaultImage),
  };
}

/**
 * FAQ JSON-LD
 * @param {Array<{q: string, a: string}>} faqs
 */
export function faqJsonLd(faqs) {
  if (!faqs?.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: stripHtml(faq.a, 500),
      },
    })),
  };
}
