import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['pub-af582f59e5414354b524619655f459ea.r2.dev'],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "storage.tripzi.io"
      },
      {
        protocol: "https",
        hostname: "placehold.co"
      }
    ]
  }
};

export default nextConfig;
