import fs from 'fs';
import path from 'path';

const xml = fs.readFileSync('public/pages.xml', 'utf-8');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);

function extractField(itemXml, tag) {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  let m = itemXml.match(cdata);
  if (m) return m[1].trim();
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  m = itemXml.match(plain);
  return m ? m[1].trim() : '';
}

function extractMeta(itemXml, key) {
  const re = new RegExp(
    `<wp:meta_key><!\\[CDATA\\[${key}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>`,
    'i'
  );
  const m = itemXml.match(re);
  return m ? m[1].trim() : '';
}

const targets = [
  'emi-schemes',
  'inheritance-tax-planning',
  'let-property-campaign',
  'cryptocurrency',
  'charities',
];

const results = {};

for (const t of targets) {
  const block = items.find(b => extractField(b, 'link').includes(t));
  if (!block) continue;
  
  const elRaw = extractMeta(block, '_elementor_data');
  if (elRaw && elRaw.length > 100) {
    try {
      let parsed = JSON.parse(elRaw);
      if (typeof parsed === 'string') parsed = JSON.parse(parsed);
      
      const images = [];
      function findImages(obj) {
        if (!obj) return;
        if (typeof obj === 'object') {
          if (obj.url && typeof obj.url === 'string' && obj.url.match(/\.(png|jpg|jpeg|webp)/i)) {
            images.push(obj.url);
          }
          if (obj.image && obj.image.url && typeof obj.image.url === 'string') {
            images.push(obj.image.url);
          }
          Object.values(obj).forEach(findImages);
        } else if (Array.isArray(obj)) {
          obj.forEach(findImages);
        }
      }
      findImages(parsed);
      
      results[t] = [...new Set(images)].filter(u => u.includes('taxaccolega.co.uk/wp-content/uploads/'));
    } catch (e) {
    }
  }
}

fs.writeFileSync('found-images.json', JSON.stringify(results, null, 2));
