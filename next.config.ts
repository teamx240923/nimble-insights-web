import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: process.env.NODE_ENV === "production" ? "export" : undefined, // enables static export only for production
  basePath: process.env.NODE_ENV === "production" ? "/nimble-insights-web" : undefined, // basePath only for production/GH Pages
  images: {
    unoptimized: true, // disables next/image optimization (not supported on GH Pages)
  },
};

export default nextConfig;
