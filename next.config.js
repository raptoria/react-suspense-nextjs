/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "experimental-edge",
    serverComponents: true
  },
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig

