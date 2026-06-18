import type { NextConfig } from "next";

// This project can be hosted two ways:
//  - GitHub Pages: served from /<repo>, so it needs a basePath.
//  - Vercel: served from the domain root, so NO basePath.
// Vercel sets process.env.VERCEL === "1" during its builds.
const isProd = process.env.NODE_ENV === "production";
const isVercel = !!process.env.VERCEL;
const onGitHubPages = isProd && !isVercel;

const nextConfig: NextConfig = {
  output: "export",
  basePath: onGitHubPages ? "/waltoa" : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
