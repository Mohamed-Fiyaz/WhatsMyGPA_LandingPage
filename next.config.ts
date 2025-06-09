/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['example.com'], // Add any external image domains if needed
  },
  experimental: {
    optimizeCss: true,
  }
}

export default nextConfig
