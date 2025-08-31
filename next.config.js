/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      // Redirect root domain to www
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

