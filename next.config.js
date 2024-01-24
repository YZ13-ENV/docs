const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: '*'
        }
    ]
}
}

module.exports = withMDX(nextConfig)