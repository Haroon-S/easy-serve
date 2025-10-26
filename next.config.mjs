/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['server-test.booklyz.com'],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ['server-test.booklyz.com', '*.booklyz.com', 'booklyz.com'],
    },
  },
};

export default nextConfig;
