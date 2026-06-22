import fs from 'fs';
import path from 'path';

function listDir(dir, depth = 0) {
  if (depth > 2) return;
  try {
    const list = fs.readdirSync(dir);
    for (const file of list) {
      const fullPath = path.join(dir, file);
      // Let's filter out standard system directories
      if (['proc', 'sys', 'dev', 'lib', 'lib64', 'bin', 'sbin', 'etc', 'var', 'usr', 'opt', 'root'].includes(file) && depth === 0) {
        continue;
      }
      console.log('  '.repeat(depth) + file + (fs.statSync(fullPath).isDirectory() ? ' (dir)' : ''));
      if (fs.statSync(fullPath).isDirectory()) {
        listDir(fullPath, depth + 1);
      }
    }
  } catch (e) {
    // ignore errors
  }
}

console.log('Listing root...');
listDir('/');
