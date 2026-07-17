export const dynamic = 'force-static';
import { SITE } from '../lib/seo.js';
import { staticPages } from '../data/seo/staticPages.js';
import { taxationSeo } from '../data/seo/taxationSeo.js';
import { packagesSeo } from '../data/seo/packagesSeo.js';
import fs from 'fs';
import path from 'path';

/** @returns {Promise<import('next').MetadataRoute.Sitemap>} */
export default async function sitemap() {
  const routes = [];
  const processedUrls = new Set();

  const addRoute = (urlPath, priority = 0.5, changeFrequency = 'weekly') => {
    // Normalize trailing slash and site domain
    const cleanPath = urlPath === '/' ? '' : urlPath;
    const url = `${SITE.url}${cleanPath}`;
    
    if (!processedUrls.has(url)) {
      processedUrls.add(url);
      routes.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      });
    }
  };

  // 1. Core Home page
  addRoute('/', 1.0, 'daily');

  // 2. Static pages defined in staticPages.js
  const staticPaths = Object.keys(staticPages);
  for (const routePath of staticPaths) {
    // Determine priority
    let priority = 0.8;
    if (routePath.includes('/pricing') || routePath.includes('/contact-us')) {
      priority = 0.9;
    } else if (routePath.includes('/legal') || routePath.includes('/privacy-policy')) {
      priority = 0.3;
    }
    addRoute(routePath, priority, 'weekly');
  }

  // 3. Taxation sub-pages
  const taxationSlugs = Object.keys(taxationSeo);
  for (const slug of taxationSlugs) {
    addRoute(`/taxation/${slug}`, 0.8, 'weekly');
  }

  // 4. Package sub-pages
  const packagesSlugs = Object.keys(packagesSeo);
  for (const slug of packagesSlugs) {
    addRoute(`/packages/${slug}`, 0.8, 'weekly');
  }

  // 5. Dynamic blog posts (loaded from generated blog-seo.json database)
  try {
    const blogSeoPath = path.join(process.cwd(), 'public/blog-seo.json');
    if (fs.existsSync(blogSeoPath)) {
      const blogSeo = JSON.parse(fs.readFileSync(blogSeoPath, 'utf8'));
      const blogSlugs = Object.keys(blogSeo);
      for (const slug of blogSlugs) {
        addRoute(`/blog/${slug}`, 0.6, 'monthly');
      }
    }
  } catch (e) {
    console.error('Error processing blog pages in sitemap:', e);
  }

  return routes;
}
