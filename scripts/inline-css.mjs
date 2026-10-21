import Beasties from 'beasties';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'out');

const findHtmlFiles = (dir) => {
  const files = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findHtmlFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(path.relative(outDir, fullPath));
    }
  }
  return files;
};

const htmlFiles = findHtmlFiles(outDir);
console.log(`Found ${htmlFiles.length} HTML files to process...`);

const beasties = new Beasties({
  path: outDir,
  publicPath: '/',
  preload: 'media',
  noscriptFallback: true,
  pruneSource: false,
  compress: true,
  logLevel: 'warn',
  mergeStylesheets: true,
  inlineThreshold: 8192,
});

let count = 0;
for (const file of htmlFiles) {
  const filePath = path.join(outDir, file);
  const html = readFileSync(filePath, 'utf-8');
  const result = await beasties.process(html);
  writeFileSync(filePath, result, 'utf-8');
  count++;
  if (count % 50 === 0) console.log(`  ${count}/${htmlFiles.length}`);
}

console.log(`Done. Processed ${count} HTML files.`);
