/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  basePath: '/cafe-932km',
  assetPrefix: '/cafe-932km/',
  trailingSlash: true
}

export default nextConfig;
