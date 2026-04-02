import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "bwdhvfiovnfqtlsfyusp.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default createNextIntlPlugin()(nextConfig);
