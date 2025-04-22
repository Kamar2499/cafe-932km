/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/cafe-932km',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true
}

export default nextConfig;
