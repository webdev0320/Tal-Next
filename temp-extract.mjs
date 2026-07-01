import fs from 'fs';
import path from 'path';

// Parse taxationConfig to extract all data
// We can use a trick: run a node script that imports it, then dumps it to JSON
const script = `
import { taxationConfig } from './src/views/taxationConfig.js';
console.log(JSON.stringify(taxationConfig, null, 2));
`;
fs.writeFileSync('temp-extract.mjs', script);
