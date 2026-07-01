import fs from 'fs';

const fileContent = fs.readFileSync('public/pages.xml', 'utf-8');
const itemRegex = /<item>([\s\S]*?)<\/item>/g;
const seoData = {};
const blogSeoData = {};

let pageCount = 0;
let postCount = 0;

let match;
while ((match = itemRegex.exec(fileContent)) !== null) {
  const itemContent = match[1];

  const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
  if (!linkMatch) continue;
  let link = linkMatch[1].trim();

  let urlPath = link
    .replace('https://www.taxaccolega.co.uk', '')
    .replace('http://localhost:3000', '');
  if (!urlPath.startsWith('/')) urlPath = '/' + urlPath;
  if (urlPath.endsWith('/') && urlPath.length > 1) urlPath = urlPath.slice(0, -1);

  const postTypeMatch = itemContent.match(/<wp:post_type>([\s\S]*?)<\/wp:post_type>/);
  let postType = postTypeMatch ? postTypeMatch[1].trim() : '';
  if (postType.includes('![CDATA[')) {
    postType = postType.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
  }

  if (postType !== 'page' && postType !== 'post') continue;

  // Extract wp:postmeta blocks
  const metaRegex = /<wp:postmeta>([\s\S]*?)<\/wp:postmeta>/g;
  let metaMatch;
  let title = '';
  let description = '';
  let focusKeyword = '';

  while ((metaMatch = metaRegex.exec(itemContent)) !== null) {
    const metaContent = metaMatch[1];
    const keyMatch = metaContent.match(/<wp:meta_key>([\s\S]*?)<\/wp:meta_key>/);
    const valMatch = metaContent.match(/<wp:meta_value>([\s\S]*?)<\/wp:meta_value>/);

    if (keyMatch && valMatch) {
      let key = keyMatch[1].trim();
      let val = valMatch[1].trim();
      if (key.includes('![CDATA[')) key = key.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
      if (val.includes('![CDATA[')) val = val.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();

      if (key === 'rank_math_title' || key === '_yoast_wpseo_title') title = val;
      else if (key === 'rank_math_description' || key === '_yoast_wpseo_metadesc') description = val;
      else if (key === 'rank_math_focus_keyword' || key === '_yoast_wpseo_focuskw') focusKeyword = val;
    }
  }

  // Fallback to <title> tag
  if (!title) {
    const titleMatch = itemContent.match(/<title>([\s\S]*?)<\/title>/);
    if (titleMatch) {
      let tVal = titleMatch[1].trim();
      if (tVal.includes('![CDATA[')) tVal = tVal.replace(/^<!\[CDATA\[/, '').replace(/\]\]>$/, '').trim();
      title = tVal;
    }
  }

  // Cleanup
  const clean = (s) => s
    .replace(/&amp;/g, '&').replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/%title%/g, '').replace(/%sep%/g, '|')
    .replace(/\s+/g, ' ').trim();

  title = clean(title);
  description = clean(description);
  const keywords = focusKeyword ? focusKeyword.split(',').map(k => k.trim()) : [];

  const record = { title, description, keywords };

  if (postType === 'page') {
    seoData[urlPath] = record;
    pageCount++;
  } else if (postType === 'post') {
    // Blog post: extract slug from URL path (which is /yyyy/mm/dd/slug or /blog/slug or just /slug)
    // The link for posts in WP is typically https://site.co.uk/post-slug/
    const slug = urlPath.split('/').filter(Boolean).pop();
    if (slug) {
      blogSeoData[slug] = { title, description };
    }
    postCount++;
  }
}

fs.writeFileSync('public/seo-metadata.json', JSON.stringify(seoData, null, 2), 'utf-8');
fs.writeFileSync('public/blog-seo.json', JSON.stringify(blogSeoData, null, 2), 'utf-8');

console.log(`Extracted SEO metadata: ${pageCount} pages, ${postCount} posts`);
console.log(`Blog SEO entries: ${Object.keys(blogSeoData).length}`);
