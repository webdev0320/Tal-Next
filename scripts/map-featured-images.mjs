import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const xmlPath = path.join(__dirname, '../public/images_links.xml');
const blogsJsonPath = path.join(__dirname, '../public/blogs.json');

// 1. Parse the XML to build a mapping: wp:post_id → wp:attachment_url
const xml = fs.readFileSync(xmlPath, 'utf-8');
const idToUrl = {};

const itemRegex = /<item>([\s\S]*?)<\/item>/g;
let itemMatch;
while ((itemMatch = itemRegex.exec(xml)) !== null) {
  const itemXml = itemMatch[1];

  const idMatch = itemXml.match(/<wp:post_id>(\d+)<\/wp:post_id>/);
  const urlMatch = itemXml.match(/<wp:attachment_url><!\[CDATA\[(.+?)\]\]><\/wp:attachment_url>/);

  if (idMatch && urlMatch) {
    idToUrl[idMatch[1]] = urlMatch[1];
  }
}

const totalImages = Object.keys(idToUrl).length;
console.log(`Parsed ${totalImages} images from images_links.xml`);

// 2. Read blogs.json and inject featured_image_url
const blogsData = JSON.parse(fs.readFileSync(blogsJsonPath, 'utf-8'));
const posts = blogsData.posts || [];

let mapped = 0;
let skipped = 0;

posts.forEach((post) => {
  if (post.featuredImageId && idToUrl[post.featuredImageId]) {
    post.featured_image_url = idToUrl[post.featuredImageId];
    mapped++;
  } else {
    post.featured_image_url = '';
    skipped++;
  }
});

// 3. Write back to blogs.json
fs.writeFileSync(blogsJsonPath, JSON.stringify(blogsData, null, 2), 'utf-8');

console.log(`Done: ${mapped} featured images mapped, ${skipped} posts with no matching image.`);
