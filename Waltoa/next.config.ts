import type { NextConfig } from "next";

// On GitHub Pages the site is served from /<repo>, so we need a basePath in
// production builds. Local dev stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "waltoa";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? `/${repo}` : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

export default nextConfig;
