import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The live site is plain HTML on LiteSpeed (no Node server): `next build`
  // must write the static site to out/, which the deploy rsyncs.
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // webpack config removed as it broke wp-content.js file imports
};

export default nextConfig;