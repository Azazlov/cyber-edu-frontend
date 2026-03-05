import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/cyber-edu-frontend',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
