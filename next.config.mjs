/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  // Required for GitHub Pages project site (served at /s3ngXn/)
  basePath: isProd ? '/s3ngXn' : '',
  assetPrefix: isProd ? '/s3ngXn/' : '',
}

export default nextConfig
