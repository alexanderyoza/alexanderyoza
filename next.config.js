/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Projects merged into Experience — keep old links working.
      { source: '/projects', destination: '/work', permanent: true },
    ]
  },
}

module.exports = nextConfig
