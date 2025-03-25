/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Enables static site export
    images: {
      unoptimized: true, // Optional: Helps with static export if using next/image
    },
  };
  
  export default nextConfig;
  