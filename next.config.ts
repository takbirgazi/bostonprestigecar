import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    domains: ['maamun.xyz'],
    unoptimized: true
  },
  
};

export default nextConfig;
