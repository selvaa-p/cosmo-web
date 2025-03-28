/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps with debugging and better React performance
    experimental: {
    serverActions: true, // If using Next.js server actions
  },
};

export default nextConfig;
