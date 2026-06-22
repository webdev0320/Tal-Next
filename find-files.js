import fs from 'fs';
import path from 'path';

function search(dir, depth = 0) {
  if (depth > 5) return; // avoid too deep recursive loops
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      if (file === 'node_modules' || file === '.next' || file === '.git') continue;
      const fullPath = path.join(dir, file);
      
      if (file.includes('Home') || file.includes('react-pages') || file.includes('wp-data')) {
        console.log('Match found:', fullPath);
      }
      
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        search(fullPath, depth + 1);
      }
    }
  } catch (e) {
    // ignore permission errors
  }
}

console.log('Searching current directory...');
search('.');
console.log('Search completed.');
