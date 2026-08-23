import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lucifer-portfolio",
  assetPrefix: "/lucifer-portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;