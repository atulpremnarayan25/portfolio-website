import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-website",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/portfolio-website",
  },
};

export default nextConfig;
