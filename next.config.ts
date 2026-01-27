import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Set basePath if deploying to a repository subfolder (e.g. /repo-name)
  // basePath: "/incoterm-for-dummies",
};

export default nextConfig;
