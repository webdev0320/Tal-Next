/**
 * extract-elementor-content-batch567.mjs
 * Extracts content for Batches 5 (bank/fintech), 6 (niches), and 7 (utility).
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const xmlPath = path.join(ROOT, 'public', 'pages.xml');

const TARGET_PATHS = [
  // Batch 5 – bank/fintech
  '/anna', '/tide', '/mettle', '/monzo', '/revolut', '/starling',
  // Batch 6 – niches
  '/property-landlords', '/furnished-holiday-letting', '/hotels-restaurants-bars',
  '/hairdressers-beauty-barbers', '/jewellers', '/construction-builders',
  '/media-creative-industries', '/optician-optometrists', '/autumn-budget-2024',
  // Batch 7 – utility/misc
  '/core-package', '/spvs', '/payment-confirmation', '/payment-failed',
  '/team-member', '/testimonial',
];

const DOMAIN = 'https://www.taxaccolega.co.uk';

function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-').replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/\s+/g, ' ').trim();
}

function extractElementorContent(widgetArray) {
  const sections = [];
  let cur = null;

  function flush() {
    if (cur && (cur.title || cur.paragraphs.length || cur.bullets.length || cur.faqs.length)) {
      sections.push(cur);
    }
    cur = null;
  }

  function process(w) {
    const type = w.widgetType || w.elType;
    const s = w.settings || {};

    if (type === 'heading') {
      const text = stripHtml(s.title || '');
      if (!text) return;
      flush();
      cur = { title: text, paragraphs: [], bullets: [], faqs: [] };
    } else if (type === 'text-editor') {
      const html = s.editor || '';
      const lis = [...html.matchAll(/<li[^>]*>(.*?)<\/li>/gis)];
      if (!cur) cur = { title: '', paragraphs: [], bullets: [], faqs: [] };
      if (lis.length > 0) {
        lis.forEach(m => { const t = stripHtml(m[1]); if (t) cur.bullets.push(t); });
      } else {
        const ps = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gis)];
        if (ps.length > 0) {
          ps.forEach(m => { const t = stripHtml(m[1]); if (t && !t.match(/lorem ipsum/i)) cur.paragraphs.push(t); });
        } else {
          const t = stripHtml(html);
          if (t && !t.match(/lorem ipsum/i)) cur.paragraphs.push(t);
        }
      }
    } else if (type === 'icon-box') {
      const title = stripHtml(s.title_text || '');
      const desc  = stripHtml(s.description_text || '');
      if (!cur) cur = { title: '', paragraphs: [], bullets: [], faqs: [] };
      if (title) cur.bullets.push(`**${title}**: ${desc}`);
      else if (desc) cur.bullets.push(desc);
    } else if (type === 'accordion') {
      if (!cur) cur = { title: '', paragraphs: [], bullets: [], faqs: [] };
      (s.tabs || []).forEach(tab => {
        const q = stripHtml(tab.tab_title || '');
        const a = stripHtml(tab.tab_content || '');
        if (q) cur.faqs.push({ q, a });
      });
    }

    if (w.elements && Array.isArray(w.elements)) w.elements.forEach(process);
  }

  if (Array.isArray(widgetArray)) widgetArray.forEach(process);
  flush();
  return sections;
}

function extractField(xml, tag) {
  const cdata = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`, 'i');
  let m = xml.match(cdata);
  if (m) return m[1].trim();
  const plain = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  m = xml.match(plain);
  return m ? m[1].trim() : '';
}

function extractMeta(xml, key) {
  const re = new RegExp(
    `<wp:meta_key><!\\[CDATA\\[${key}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>`,
    'i'
  );
  const m = xml.match(re);
  return m ? m[1].trim() : '';
}

console.log('Reading pages.xml …');
const xml = fs.readFileSync(xmlPath, 'utf8');
const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
console.log(`Found ${items.length} XML items\n`);

const results = [];

for (const targetPath of TARGET_PATHS) {
  const urls = [DOMAIN + targetPath + '/', DOMAIN + targetPath];
  const block = items.find(b => {
    const link = extractField(b, 'link');
    return urls.includes(link) || link.endsWith(targetPath + '/') || link.endsWith(targetPath);
  });

  if (!block) {
    console.warn(`⚠  NOT FOUND: ${targetPath}`);
    results.push({ path: targetPath, found: false, title: '', seo: { title: '', description: '' }, sections: [], faqs: [] });
    continue;
  }

  const title    = stripHtml(extractField(block, 'title'));
  const seoTitle = extractMeta(block, '_yoast_wpseo_title');
  const seoDesc  = extractMeta(block, '_yoast_wpseo_metadesc');

  let sections = [];
  let faqs     = [];

  const elRaw = extractMeta(block, '_elementor_data');
  if (elRaw && elRaw.length > 100) {
    try {
      let parsed = JSON.parse(elRaw);
      if (typeof parsed === 'string') parsed = JSON.parse(parsed);
      sections = extractElementorContent(parsed);
      sections.forEach(s => { faqs.push(...s.faqs); s.faqs = []; });
    } catch (e) {
      console.warn(`  Elementor parse error on ${targetPath}: ${e.message}`);
    }
  }

  if (sections.length === 0) {
    const content = extractField(block, 'content:encoded');
    if (content && content.length > 50) {
      const ps = [...content.matchAll(/<p[^>]*>(.*?)<\/p>/gis)]
        .map(m => stripHtml(m[1])).filter(p => p.length > 20 && !p.match(/lorem ipsum/i));
      if (ps.length) sections.push({ title: '', paragraphs: ps, bullets: [], faqs: [] });
    }
  }

  // Filter Lorem Ipsum and contact/CTA noise
  sections = sections.filter(s => {
    const text = [s.title, ...s.paragraphs, ...s.bullets].join(' ');
    if (text.match(/lorem ipsum/i) && s.faqs.length === 0) return false;
    if (s.title === 'Get in Touch') return false;
    if (!s.title && s.paragraphs.length === 0 && s.bullets.every(b => b.match(/phone|email|whatsapp|address/i))) return false;
    if (s.paragraphs.some(p => p.includes('Send Us a Message'))) return false;
    return true;
  });

  console.log(`✅ ${targetPath}: ${sections.length} sections, ${faqs.length} FAQs`);
  results.push({ path: targetPath, found: true, title, seo: { title: seoTitle, description: seoDesc }, sections, faqs });
}

const out = path.join(ROOT, 'scripts', 'batch567-content.json');
fs.writeFileSync(out, JSON.stringify(results, null, 2), 'utf8');
console.log(`\n✅ Written: ${out}`);
