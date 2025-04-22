/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cafe-932km',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: '/cafe-932km/'
}

export default nextConfig;
