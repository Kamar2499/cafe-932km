/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  basePath: '/cafe-932km',
  images: {
    unoptimized: true,
    remotePatterns: []
  },
  trailingSlash: true,
  reactStrictMode: true,
  assetPrefix: '/cafe-932km/',
  experimental: {
    appDir: true
  }
}

export default nextConfig;
