import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Image optimisation ───────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],   // AVIF first, then WebP
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes:  [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 30,      // 30 days cache
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",          // Shopify images
      },
    ],
  },

  // ─── Compression ──────────────────────────────────────────────
  compress: true,

  // ─── Headers: cache + security ────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Security
          { key: "X-Content-Type-Options",    value: "nosniff"          },
          { key: "X-Frame-Options",           value: "DENY"             },
          { key: "X-XSS-Protection",          value: "1; mode=block"    },
          { key: "Referrer-Policy",           value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy",        value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        // Long-term cache for static assets
        source: "/(.*)\\.(ico|png|jpg|jpeg|svg|webp|avif|woff2|woff|ttf)",
        headers: [
          {
            key:   "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  // ─── Experimental ─────────────────────────────────────────────
  experimental: {
    optimizePackageImports: ["gsap", "lucide-react"],
    scrollRestoration: true,
  },

  // ─── Bundle analyser (run: ANALYZE=true npm run build) ────────
  // npm install @next/bundle-analyzer
  // ...(process.env.ANALYZE === "true" && {
  //   ...require("@next/bundle-analyzer")({ enabled: true })(),
  // }),
};

export default nextConfig;
