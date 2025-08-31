/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
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
      // Redirect any subdomain (except reserved ones) to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: ':subdomain.localglobalweb.com',
          },
        ],
        // Exclude system/email subdomains
        beforeFiles: [
          { type: 'host', value: 'mail.localglobalweb.com', negate: true },
          { type: 'host', value: 'webmail.localglobalweb.com', negate: true },
          { type: 'host', value: 'cpanel.localglobalweb.com', negate: true },
          { type: 'host', value: 'ftp.localglobalweb.com', negate: true },
        ],
        destination: 'https://www.localglobalweb.com/:path*',
        permanent: true,
      },
      // Redirect all HTTP traffic to HTTPS
      {
        source: '/:path*',
        protocol: 'http',
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

