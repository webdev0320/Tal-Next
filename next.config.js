import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,    // Next.js default image optimization requires a live Node.js server
  },
  
  // webpack config removed as it broke wp-content.js file imports
};

export default nextConfig;