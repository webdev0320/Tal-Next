import fs from 'fs';

const blogsData = JSON.parse(fs.readFileSync('public/blogs.json', 'utf-8'));

function stripHtml(html, maxLen = 160) {
  const text = String(html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#8217;|&amp;|&quot;|&lt;|&gt;|&#8220;|&#8221;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return text.length <= maxLen ? text : text.slice(0, maxLen - 1).trimEnd() + '…';
}

const blogSeo = {};
for (const post of blogsData.posts) {
  const desc = post.excerpt
    ? stripHtml(post.excerpt, 160)
    : stripHtml(post.content, 160);

  blogSeo[post.slug] = {
    title: `${post.title} | Taxaccolega`,
    description: desc || `Tax and accounting insight: ${post.title}. Expert advice from Taxaccolega London.`,
    keywords: [
      ...(post.tags || []).map(t => t.name || t).filter(Boolean).slice(0, 3),
      ...(post.categories || []).map(c => c.name || c).filter(Boolean).slice(0, 2),
    ].filter(Boolean),
  };
}

fs.writeFileSync('public/blog-seo.json', JSON.stringify(blogSeo, null, 2), 'utf-8');
console.log(`Generated blog-seo.json with ${Object.keys(blogSeo).length} entries`);
