import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // webpack config removed as it broke wp-content.js file imports
};

export default nextConfig;