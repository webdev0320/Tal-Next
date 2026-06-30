/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: false, // Disables Gzip/Brotli generation that triggers the MIME error
  images: {
    unoptimized: true, // Needed for standard public_html static hosting
  }
};

export default nextConfig;