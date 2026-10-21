import { cpSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(__dirname, '..', 'api');
const destination = path.join(__dirname, '..', 'out', 'api');

if (!existsSync(source)) {
  console.log('No api/ directory found, skipping.');
  process.exit(0);
}

cpSync(source, destination, { recursive: true });
console.log('Copied api/ into out/api');
