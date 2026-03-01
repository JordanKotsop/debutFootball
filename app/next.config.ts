import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/debutFootball",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
