import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  // Strict mode for better development warnings
  reactStrictMode: true,
};

export default nextConfig;
