import fs from 'fs';
import path from 'path';

// Let's read a chunk of pages.xml and print it, or write a script to find one page and print its XML tags.
// Since pages.xml is huge, we should parse it line by line or use a simple regex search to find the structure of a <item> block.

const xmlPath = 'public/pages.xml';
if (!fs.existsSync(xmlPath)) {
  console.error('pages.xml not found');
  process.exit(1);
}

const fileStream = fs.createReadStream(xmlPath, { encoding: 'utf8' });

let chunk = '';
fileStream.on('data', (data) => {
  chunk += data;
  if (chunk.includes('</item>')) {
    // Print the first item block
    const startIdx = chunk.indexOf('<item>');
    const endIdx = chunk.indexOf('</item>');
    if (startIdx !== -1 && endIdx !== -1) {
      console.log('--- FIRST ITEM START ---');
      const itemText = chunk.substring(startIdx, endIdx + 7);
      console.log(itemText.substring(0, 1500));
      fileStream.destroy();
    }
  }
});
