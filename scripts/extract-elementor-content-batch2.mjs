/**
 * extract-elementor-content-batch2.mjs
 * Extracts content from Elementor JSON data inside public/pages.xml for Batch 2
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const TARGET_PATHS = [
  '/business-start-up',
  '/construction-industry-scheme',
  '/ir35-contractors-review',
  '/contractors-insurance',
  '/start-ups-basic',
  '/business-plan'
];

function normalisePath(url) {
  let p = url.replace(/^https?:\/\/[^/]+/, '').toLowerCase();
  if (!p.startsWith('/')) p = '/' + p;
  if (p !== '/' && p.endsWith('/')) p = p.slice(0, -1);
  return p;
}

function extractMetaValue(xml, metaKey) {
  const regex = new RegExp(
    `<wp:postmeta>\\s*<wp:meta_key><!\\[CDATA\\[${metaKey}\\]\\]><\\/wp:meta_key>\\s*<wp:meta_value><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/wp:meta_value>\\s*<\\/wp:postmeta>`,
    'i'
  );
  const m = xml.match(regex);
  return m ? m[1].trim() : null;
}

function stripTags(html) {
  if (!html) return '';
  return html
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/[ \t]+/g, ' ')
    .trim();
}

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/\[et_pb[^\]]*\]/gi, '')
    .replace(/\[\/et_pb[^\]]*\]/gi, '')
    .replace(/\[elementor[^\]]*\]/gi, '')
    .replace(/\[vc_[^\]]*\]/gi, '')
    .replace(/\[[^\]]+\]/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, '–')
    .replace(/&#8212;/g, '—')
    .trim();
}

function parseElementorData(data) {
  const sections = [];
  let currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };

  const walk = (el) => {
    if (!el) return;

    if (el.elType === 'section') {
      if (currentSection.paragraphs.length > 0 || currentSection.title || currentSection.faqs.length > 0) {
        sections.push(currentSection);
      }
      currentSection = { title: '', paragraphs: [], bullets: [], faqs: [] };
    }

    if (el.elType === 'widget') {
      const type = el.widgetType;
      const settings = el.settings || {};

      if (type === 'heading') {
        const text = stripTags(settings.title || '');
        if (text && text.length > 2 && !/contact|faqs|our clients|recent reviews|benefits/i.test(text)) {
          if (!currentSection.title) {
            currentSection.title = text;
          } else {
            currentSection.paragraphs.push(`## ${text}`);
          }
        }
      } else if (type === 'text-editor') {
        const html = settings.editor || '';
        const cleaned = cleanHtml(html);
        if (cleaned) {
          const paras = cleaned.split(/<\/p>|<br\s*\/?>/i)
            .map(p => stripTags(p))
            .filter(p => p.length > 10 && !/id verification|companies house|from 18 november/i.test(p));
          currentSection.paragraphs.push(...paras);
        }
      } else if (type === 'icon-box') {
        const title = stripTags(settings.title_text || '');
        const desc = stripTags(settings.description_text || '');
        if (title || desc) {
          currentSection.bullets.push(`${title ? `**${title}**: ` : ''}${desc}`);
        }
      } else if (type === 'accordion' || type === 'toggle') {
        const items = settings.tabs || settings.items || [];
        items.forEach(item => {
          const q = stripTags(item.tab_title || item.toggle_title || '');
          const a = stripTags(item.tab_content || item.toggle_content || '');
          if (q && a && !/lorem ipsum/i.test(q)) {
            currentSection.faqs.push({ q, a });
          }
        });
      }
    }

    if (el.elements && Array.isArray(el.elements)) {
      el.elements.forEach(walk);
    }
  };

  if (Array.isArray(data)) {
    data.forEach(walk);
  }
  if (currentSection.paragraphs.length > 0 || currentSection.title || currentSection.faqs.length > 0) {
    sections.push(currentSection);
  }

  return sections.filter(s => s.paragraphs.length > 0 || s.bullets.length > 0 || s.faqs.length > 0);
}

console.log('Reading pages.xml...');
const xmlPath = path.join(ROOT, 'public', 'pages.xml');
const xml = fs.readFileSync(xmlPath, 'utf8');

const items = xml.split('<item>').slice(1).map(block => '<item>' + block.split('</item>')[0] + '</item>');

const results = [];

for (const targetPath of TARGET_PATHS) {
  const item = items.find(item => {
    const linkMatch = item.match(/<link>([^<]+)<\/link>/);
    if (!linkMatch) return false;
    return normalisePath(linkMatch[1]) === targetPath;
  });

  if (!item) {
    results.push({ path: targetPath, found: false });
    continue;
  }

  const titleMatch = item.match(/<title>([^<]+)<\/title>/);
  let title = titleMatch ? titleMatch[1].trim() : '';
  if (title.includes('<![CDATA[')) {
    title = title.replace('<![CDATA[', '').replace(']]>', '').trim();
  }

  const yoastTitle = extractMetaValue(item, '_yoast_wpseo_title');
  const yoastDesc = extractMetaValue(item, '_yoast_wpseo_metadesc');

  const elementorMatch = item.match(/<wp:meta_key><!\[CDATA\[_elementor_data\]\]><\/wp:meta_key>\s*<wp:meta_value><!\[CDATA\[([\s\S]*?)\]\]><\/wp:meta_value>/);

  let sections = [];
  let faqs = [];

  if (elementorMatch) {
    try {
      const data = JSON.parse(elementorMatch[1]);
      sections = parseElementorData(data);
      sections.forEach(s => {
        if (s.faqs && s.faqs.length > 0) {
          faqs.push(...s.faqs);
          s.faqs = [];
        }
      });
    } catch (e) {
      console.error(`Error parsing elementor data for ${targetPath}:`, e.message);
    }
  }

  results.push({
    path: targetPath,
    found: true,
    title,
    seo: {
      title: yoastTitle || title,
      description: yoastDesc || `Professional ${title.toLowerCase()} accounting services in London from Taxaccolega.`,
    },
    sections,
    faqs
  });
}

const outPath = path.join(__dirname, 'batch2-content.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log(`Successfully wrote Batch 2 parsed content to ${outPath}`);
