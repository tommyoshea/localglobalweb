/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      // Redirect root domain (non-www) to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'localglobalweb.com',
          },
        ],
        destination: 'https://www.localglobalweb.com/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [];
  },
  trailingSlash: false,
  poweredByHeader: false,
};

module.exports = nextConfig;




/*  @type {import('next').NextConfig} 
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return []
  },
  async rewrites() {
    return []
  },
  trailingSlash: false,
  poweredByHeader: false,
}

module.exports = nextConfig */

