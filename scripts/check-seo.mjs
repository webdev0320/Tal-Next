import fs from 'fs';

const data = JSON.parse(fs.readFileSync('public/seo-metadata.json', 'utf-8'));
const keys = Object.keys(data);

let withDesc = 0;
let withTitle = 0;
let emptyBoth = 0;

for (const k of keys) {
  const item = data[k];
  if (item.title) withTitle++;
  if (item.description) withDesc++;
  if (!item.title && !item.description) emptyBoth++;
}

console.log(`Total keys: ${keys.length}`);
console.log(`With title: ${withTitle}`);
console.log(`With description: ${withDesc}`);
console.log(`Empty both: ${emptyBoth}`);

// Print some keys that have both title and description
console.log('Sample keys with title and description:');
const samples = keys.filter(k => data[k].title && data[k].description).slice(0, 10);
console.log(JSON.stringify(samples.map(s => ({ path: s, seo: data[s] })), null, 2));
