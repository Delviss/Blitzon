/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "Blitzon";
const basePath = isProd ? `/${repo}` : "";

process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath
  },
  // Squeeze the JS payload with package-level tree-shaking — framer-motion in
  // particular ships a lot of code we never reach.
  experimental: {
    optimizePackageImports: ["framer-motion", "lenis"]
  },
  compiler: {
    // Strip debug console.* from production bundles; keep error/warn.
    removeConsole: isProd ? { exclude: ["error", "warn"] } : false
  },
  productionBrowserSourceMaps: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "lh3.googleusercontent.com" }
    ]
  }
};

export default nextConfig;
