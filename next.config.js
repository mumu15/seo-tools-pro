/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'wordcountertool.net' }],
        destination: 'https://www.wordcountertool.net/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig