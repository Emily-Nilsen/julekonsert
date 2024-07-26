import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    domains: ['res.cloudinary.com'],
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md'],
  experimental: {
    scrollRestoration: true,
  },
  async redirects() {
    return [
      {
        source: '/index.md',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs/:slug.md',
        destination: '/docs/:slug',
        permanent: true,
      },
    ]
  },
}

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig)
)
