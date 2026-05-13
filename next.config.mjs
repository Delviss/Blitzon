/** @type {import('next').NextConfig} */
// The site is served at the root of the custom domain (blitzonconsulting.de),
// so basePath/assetPrefix must stay empty — keeping `/Blitzon` here 404s every
// asset under the custom domain.
const isProd = process.env.NODE_ENV === "production";
const basePath = "";

process.env.NEXT_PUBLIC_BASE_PATH = basePath;

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: "",
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
