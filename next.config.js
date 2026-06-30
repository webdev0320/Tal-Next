/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  compress: false,
  images: {
    unoptimized: true,
  },
  // Forces trailing slashes on all URLs so folders/files resolve correctly on Apache
  trailingSlash: true, 
};

export default nextConfig;