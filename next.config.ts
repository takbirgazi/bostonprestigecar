import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'maamun.xyz',
      },
      {
        protocol: 'https',
        hostname: 'bostonexpresscab.com',
      },
      {
        protocol: 'https',
        hostname: 'apis.bostonexpresscab.com',
      },
      {
        protocol: 'https',
        hostname: 'bostonprestigecar.com',
      },
      {
        protocol: 'https',
        hostname: 'admin.bostonprestigecar.com',
      },
    ],
  },

};

export default nextConfig;
