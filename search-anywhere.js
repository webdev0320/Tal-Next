import fs from 'fs';
import path from 'path';

function printAllFiles(dir) {
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat && stat.isDirectory()) {
        if (file !== 'node_modules' && file !== '.next') {
          printAllFiles(fullPath);
        }
      } else {
        if (file.endsWith('.jsx') || file.endsWith('.tsx') || file.endsWith('.js')) {
          console.log(fullPath);
        }
      }
    }
  } catch(e) {}
}

printAllFiles('.');
