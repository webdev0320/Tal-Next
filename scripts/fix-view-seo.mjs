import fs from 'fs';
import path from 'path';

const viewsDir = path.join(process.cwd(), 'src', 'views');

// Files with real (non-lorem-ipsum) FAQ content
const viewFiles = [
  'BookkeepingServices.jsx',
  'CompanyTaxReturn.jsx',
  'ConsolidatedAccounts.jsx',
  'ConstructionIndustryScheme.jsx',
  'EmiSchemes.jsx',
  'InheritanceTaxPlanning.jsx',
  'VatAccountants.jsx',
  'CryptocurrencyTax.jsx',
  'PersonalIncomeTax.jsx',
  'LetPropertyCampaign.jsx',
  'ManagementAccounts.jsx',
  'PayrollServices.jsx',
  'Pensions.jsx',
  'SelfAssessment.jsx',
  'StatutoryAccounts.jsx',
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const fileName = path.basename(filePath, '.jsx');

  // Skip if already processed
  if (content.includes('faqJsonLd') || content.includes('BreadcrumbJsonLd')) {
    return false;
  }

  // Check if file has FAQ data
  const hasFaqs = content.includes('const faqs = [') || content.includes('faqs = [');

  // 1. Add imports
  const imports = [];
  if (hasFaqs) {
    imports.push("import { faqJsonLd } from '../lib/seo-generators';");
    imports.push("import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';");
  } else {
    imports.push("import BreadcrumbJsonLd from '../components/BreadcrumbJsonLd';");
  }

  // Add imports after the last import line
  const lastImportMatch = content.match(/^import .+$/gm);
  if (lastImportMatch) {
    const lastImport = lastImportMatch[lastImportMatch.length - 1];
    content = content.replace(lastImport, `${lastImport}\n${imports.join('\n')}`);
  }

  // 2. Add BreadcrumbJsonLd and faqJsonLd before the closing </div> at the end
  // Find the last </div> in the return statement
  const scripts = [];

  // For BreadcrumbJsonLd, we need to extract breadcrumb data from the file
  // Pattern 1: breadcrumbs prop passed to PageHero
  const breadcrumbMatch = content.match(/breadcrumbs=\{\[[\s\S]*?\]\}/);
  if (breadcrumbMatch) {
    // Extract from PageHero breadcrumbs prop
    const breadcrumbStr = breadcrumbMatch[0];
    const items = [];
    const itemRegex = /\{\s*label:\s*['"](.+?)['"]\s*,\s*link:\s*['"](.+?)['"]/g;
    let m;
    while ((m = itemRegex.exec(breadcrumbStr)) !== null) {
      items.push({ name: m[1], url: `https://www.taxaccolega.co.uk${m[2]}` });
    }
    // Also handle active items (no link)
    const activeRegex = /\{\s*label:\s*['"](.+?)['"]\s*,\s*active:\s*true/g;
    while ((m = activeRegex.exec(breadcrumbStr)) !== null) {
      items.push({ name: m[1], url: '' });
    }
    if (items.length > 0) {
      scripts.push(`<BreadcrumbJsonLd items={${JSON.stringify(items)}} />`);
    }
  }

  // Pattern 2: Inline breadcrumbs in JSX (nav aria-label="breadcrumb")
  // Pattern 3: const breadcrumbs = [...] array
  
  // 3. Add faqJsonLd
  if (hasFaqs) {
    // Find the faqs array content
    const faqsMatch = content.match(/const faqs = \[([\s\S]*?)\];/);
    if (faqsMatch) {
      // Extract q and a pairs
      const faqPairs = [];
      const faqRegex = /\{\s*q:\s*['"](.+?)['"]\s*,\s*a:\s*['"](.+?)['"]/g;
      let m;
      while ((m = faqRegex.exec(faqsMatch[0])) !== null) {
        faqPairs.push({ q: m[1], a: m[2] });
      }
      if (faqPairs.length > 0) {
        scripts.push(`{(() => { const faqData = faqJsonLd(${JSON.stringify(faqPairs)}); return faqData ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} /> : null; })()}`);
      }
    }
  }

  if (scripts.length === 0) {
    return false;
  }

  // Find the last </div> before the component closing
  // We'll add the scripts before the last closing </div> of the return statement
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
    const before = content.substring(0, lastDivIndex);
    const after = content.substring(lastDivIndex);
    content = before + '\n      ' + scripts.join('\n      ') + '\n      ' + after;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
}

// Main
let updated = 0;
let skipped = 0;

for (const fileName of viewFiles) {
  const filePath = path.join(viewsDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`SKIP (not found): ${fileName}`);
    skipped++;
    continue;
  }

  try {
    const changed = processFile(filePath);
    if (changed) {
      console.log(`UPDATED: ${fileName}`);
      updated++;
    } else {
      console.log(`SKIP (no changes): ${fileName}`);
      skipped++;
    }
  } catch (err) {
    console.error(`ERROR: ${fileName} - ${err.message}`);
    skipped++;
  }
}

console.log(`\nDone. Updated: ${updated}, Skipped: ${skipped}`);
