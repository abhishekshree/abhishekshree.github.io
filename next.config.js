const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  output: 'export',
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  experimental: {
    largePageDataBytes: 512 * 1000,
  },
})
