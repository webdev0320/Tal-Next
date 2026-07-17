/**
 * extract-elementor-content-batch3-4.mjs
 * Extracts Elementor/WordPress content for Batch 3 (e-commerce) and Batch 4 (software) pages.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const xmlPath = path.join(ROOT, 'public', 'pages.xml');

const TARGET_PATHS = [
  // Batch 3 - e-commerce
  '/e-commerce',
  '/amazon-seller',
  '/shopify',
  '/saas',
  '/ebay-seller',
  '/woocommerce',
  '/dropshipping',
  // Batch 4 - software
  '/xero',
  '/quickbooks',
  '/sage',
  '/freeagent',
  '/dext',
  '/taxcalc',
  '/btc-software',
  '/flow',
];

const DOMAIN = 'https://www.taxaccolega.co.uk';

function stripHtml(html) {
  return (html || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '-')
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

// Walk Elementor widget tree and extract readable content
function extractElementorContent(widgetArray) {
  const sections = [];
  let currentSection = null;

  function processWidget(widget) {
    const type = widget.widgetType || widget.elType;
    const settings = widget.settings || {};

    if (type === 'heading') {
      const text = stripHtml(settings.title || '');
      if (!text) return;
      if (!currentSection) {
        currentSection = { title: text, paragraphs: [], bullets: [], faqs: [] };
      } else {
        if (currentSection.title || currentSection.paragraphs.length || currentSection.bullets.length) {
          sections.push(currentSection);
        }
        currentSection = { title: text, paragraphs: [], bullets: [], faqs: [] };
      }
    } else if (type === 'text-editor') {
      const html = settings.editor || '';
      // Extract list items as bullets
      const liMatches = [...html.matchAll(/<li[^>]*>(.*?)<\/li>/gis)];
      if (liMatches.length > 0) {
        if (!currentSection) currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
        liMatches.forEach(m => {
          const text = stripHtml(m[1]);
          if (text) currentSection.bullets.push(text);
        });
      } else {
        // Extract paragraphs
        const pMatches = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/gis)];
        if (pMatches.length > 0) {
          if (!currentSection) currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
          pMatches.forEach(m => {
            const text = stripHtml(m[1]);
            if (text && !text.match(/^\s*$/) && !text.match(/lorem ipsum/i)) {
              currentSection.paragraphs.push(text);
            }
          });
        } else {
          const text = stripHtml(html);
          if (text && !text.match(/lorem ipsum/i)) {
            if (!currentSection) currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
            currentSection.paragraphs.push(text);
          }
        }
      }
    } else if (type === 'icon-box') {
      const title = stripHtml(settings.title_text || '');
      const desc = stripHtml(settings.description_text || '');
      if (!currentSection) currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
      if (title) currentSection.bullets.push(`**${title}**: ${desc}`);
      else if (desc) currentSection.bullets.push(desc);
    } else if (type === 'accordion') {
      const tabs = settings.tabs || [];
      if (!currentSection) currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
      tabs.forEach(tab => {
        const q = stripHtml(tab.tab_title || '');
        const a = stripHtml(tab.tab_content || '');
        if (q) currentSection.faqs.push({ q, a });
      });
    } else if (type === 'button') {
      // skip
    } else if (type === 'image') {
      // skip
    }

    // Recurse into children
    if (widget.elements && Array.isArray(widget.elements)) {
      widget.elements.forEach(processWidget);
    }
  }

  if (Array.isArray(widgetArray)) {
    widgetArray.forEach(processWidget);
  }

  if (currentSection) {
    if (currentSection.title || currentSection.paragraphs.length || currentSection.bullets.length || currentSection.faqs.length) {
      sections.push(currentSection);
    }
  }

  return sections;
}

// Simple XML field extractor
function extractField(itemXml, tag) {
  // Handle CDATA
  const cdataRe = new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]></${tag}>`, 'i');
  let m = itemXml.match(cdataRe);
  if (m) return m[1].trim();
  const plainRe = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
  m = itemXml.match(plainRe);
  if (m) return m[1].trim();
  return '';
}

function extractMeta(itemXml, metaKey) {
  const re = new RegExp(
    `<wp:meta_key><!\\[CDATA\\[${metaKey}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>`,
    'i'
  );
  const m = itemXml.match(re);
  return m ? m[1].trim() : '';
}

// ─── Main ───────────────────────────────────────────────────────────────────

console.log('Reading pages.xml …');
const xml = fs.readFileSync(xmlPath, 'utf8');

// Split into <item> blocks
const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(m => m[1]);
console.log(`Found ${itemBlocks.length} items in XML`);

const results = [];

for (const targetPath of TARGET_PATHS) {
  const targetUrl = DOMAIN + targetPath + '/';
  const targetUrl2 = DOMAIN + targetPath; // without trailing slash

  const block = itemBlocks.find(b => {
    const link = extractField(b, 'link');
    return link === targetUrl || link === targetUrl2 || link.endsWith(targetPath + '/') || link.endsWith(targetPath);
  });

  if (!block) {
    console.warn(`⚠  NOT FOUND in XML: ${targetPath}`);
    results.push({ path: targetPath, found: false, title: '', seo: { title: '', description: '' }, sections: [], faqs: [] });
    continue;
  }

  const title = stripHtml(extractField(block, 'title'));
  const seoTitle = extractMeta(block, '_yoast_wpseo_title') || extractMeta(block, '_seopress_titles_title') || '';
  const seoDesc = extractMeta(block, '_yoast_wpseo_metadesc') || extractMeta(block, '_seopress_titles_desc') || '';

  // Try Elementor data first
  const elementorDataRaw = extractMeta(block, '_elementor_data');
  let sections = [];
  let topFaqs = [];

  if (elementorDataRaw && elementorDataRaw.length > 100) {
    try {
      // Elementor data is sometimes double-serialized (JSON string of a JSON string)
      let parsed = JSON.parse(elementorDataRaw);
      if (typeof parsed === 'string') parsed = JSON.parse(parsed);
      sections = extractElementorContent(parsed);
      // Pull top-level FAQs out of sections
      sections.forEach(s => {
        if (s.faqs && s.faqs.length > 0) {
          topFaqs.push(...s.faqs);
          s.faqs = [];
        }
      });
    } catch (e) {
      console.warn(`  Could not parse Elementor data for ${targetPath}: ${e.message}`);
    }
  }

  // Fallback to content:encoded
  if (sections.length === 0) {
    const content = extractField(block, 'content:encoded');
    if (content && content.length > 50 && !content.match(/lorem ipsum/i)) {
      const pMatches = [...content.matchAll(/<p[^>]*>(.*?)<\/p>/gis)];
      const paras = pMatches.map(m => stripHtml(m[1])).filter(p => p.length > 20);
      if (paras.length > 0) {
        sections.push({ title: '', paragraphs: paras, bullets: [], faqs: [] });
      }
    }
  }

  // Filter out lorem ipsum sections
  sections = sections.filter(s => {
    const allText = [s.title, ...s.paragraphs, ...s.bullets].join(' ');
    return !allText.match(/lorem ipsum/i) || s.faqs.length > 0;
  });

  console.log(`✅ ${targetPath}: ${sections.length} sections, ${topFaqs.length} FAQs`);
  results.push({
    path: targetPath,
    found: true,
    title,
    seo: { title: seoTitle, description: seoDesc },
    sections,
    faqs: topFaqs,
  });
}

const outPath = path.join(ROOT, 'scripts', 'batch34-content.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log(`\n✅ Written to ${outPath}`);
