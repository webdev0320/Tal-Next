const fs = require('fs');
const path = require('path');

const POSTS_PER_PAGE = 15;

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.taxaccolega.co.uk',
  generateRobotsTxt: true,
  outDir: 'out',
  transform: async (config, path) => {
    // Ensure trailing slashes, matching the site's stated URL format
    const normalized = path.endsWith('/') ? path : `${path}/`;
    return {
      loc: normalized,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const blogsPath = path.join(process.cwd(), 'public', 'blogs.json');
    const blogsData = JSON.parse(fs.readFileSync(blogsPath, 'utf-8'));
    const totalPages = Math.ceil(blogsData.posts.length / POSTS_PER_PAGE);

    const paths = [];
    for (let page = 2; page <= totalPages; page += 1) {
      paths.push({
        loc: `${config.siteUrl}/blog/page/${page}/`,
        changefreq: 'weekly',
        priority: 0.7,
        lastmod: new Date().toISOString(),
      });
    }
    return paths;
  },
}
