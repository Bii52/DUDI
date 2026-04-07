import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Security: Bắt lỗi build để phát hiện các vấn đề sớm
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  // Security headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Prevent MIME type sniffing
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          // Prevent clickjacking attacks
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          // Enable XSS protection
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          // Control referrer information
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          // Disable unnecessary permissions
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()",
          },
          // Content Security Policy
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // 'unsafe-inline' cần thiết cho Next.js inline styles/scripts
              // 'unsafe-eval' chỉ bật trong dev mode (webpack HMR cần), production giữ an toàn
              `script-src 'self' 'unsafe-inline'${process.env.NODE_ENV === 'development' ? " 'unsafe-eval'" : ""}`,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https: data: blob:",
              "font-src 'self' data:",
              "media-src 'self'",
              "connect-src 'self' https://api.builder.io",
              // Ngăn chặn Flash/Java applets và plugin độc hại
              "object-src 'none'",
              // Ngăn chặn base tag injection
              "base-uri 'self'",
              // Chỉ cho phép form submit về same-origin
              "form-action 'self'",
              // Chặn framing từ domain khác (bảo vệ clickjacking thêm lần nữa)
              "frame-ancestors 'self'",
              // Tự động upgrade HTTP requests sang HTTPS
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },

  images: {
    // Optimized: Added smaller image sizes to avoid over-serving on mobile
    deviceSizes: [256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.builder.io",
      },
    ],
  },
};

export default nextConfig;
