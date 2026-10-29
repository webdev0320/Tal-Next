/**
 * Sync industry pages from src/data/industryPages to the admin panel database
 * This ensures industry pages like locum-accountants appear in the Filament admin panel
 */

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Read industry page data files
const industryPagesDir = path.join(__dirname, '../src/data/industryPages');
const files = fs.readdirSync(industryPagesDir).filter(f => f.endsWith('.js') && f !== 'index.js');

console.log(`Found ${files.length} industry page data files`);

// Parse each industry page file
const industryPages = {};

for (const file of files) {
  const slug = file.replace('.js', '');
  try {
    const filePath = path.join(industryPagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract the default export (the page config object)
    // The file format is: "const page = {...}; export default page;"
    const match = content.match(/export default (\w+);/);
    if (match) {
      const varName = match[1];
      // Find the assignment
      const assignmentMatch = content.match(new RegExp(`const ${varName}\\s*=\\s*({[\\s\\S]*?});\\s*export`));
      if (assignmentMatch) {
        try {
          const pageData = JSON.parse(`(${assignmentMatch[1]})`);
          industryPages[slug] = pageData;
          console.log(`✓ Loaded: ${slug}`);
        } catch (e) {
          console.error(`✗ Failed to parse ${slug}: ${e.message}`);
        }
      }
    }
  } catch (e) {
    console.error(`✗ Error reading ${file}: ${e.message}`);
  }
}

// Display summary
console.log('\n=== Sync Summary ===');
console.log(`Total industry pages loaded: ${Object.keys(industryPages).length}`);

for (const slug of Object.keys(industryPages)) {
  const page = industryPages[slug];
  console.log(`  - ${slug}: "${page.title}"`);
}

console.log('\nTo add these pages to the database, run the appropriate database command.');
console.log('Example: Insert into pages table with title, slug, content, status = "published"');