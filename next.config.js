/** @type {import('next').NextConfig} */
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

module.exports = nextConfig
