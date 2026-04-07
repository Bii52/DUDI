
export const SECURITY_CHECKLIST = {
  environmentVariables: {
    apiKeys: "✅ Không dùng NEXT_PUBLIC_ cho API keys",
    internalUrls: "✅ Không dùng NEXT_PUBLIC_ cho internal URLs",
    solution: "✅ Đặt sensitive keys trong .env.local (server-only)",
  },

  securityHeaders: {
    // Cấu hình trong next.config.ts
    contentSecurityPolicy: "✅ CSP đã thêm – không có 'unsafe-eval', có object-src/base-uri/form-action",
    xContentTypeOptions: "✅ X-Content-Type-Options: nosniff",
    xFrameOptions: "✅ X-Frame-Options: SAMEORIGIN",
    xXssProtection: "✅ X-XSS-Protection: 1; mode=block",
    referrerPolicy: "✅ Referrer-Policy: strict-origin-when-cross-origin",
    permissionsPolicy: "✅ Permissions-Policy đã thêm",
    // Cấu hình trong middleware.ts
    hsts: "✅ Strict-Transport-Security: max-age=63072000; includeSubDomains; preload",
    dnsPrefetchControl: "✅ X-DNS-Prefetch-Control: off",
    crossOriginOpenerPolicy: "✅ Cross-Origin-Opener-Policy: same-origin",
    crossOriginResourcePolicy: "✅ Cross-Origin-Resource-Policy: same-origin",
  },

  apiRoutes: {
    contactEndpoint: "✅ /api/contact – Form validation & rate limiting 5 req/giờ/IP",
    validation: "✅ Zod schema validation",
    rateLimit: "✅ Rate limiting per IP – có cleanup tránh memory leak",
    sanitization: "✅ Input sanitization (trim, max length, email normalize)",
    ipParsing: "✅ x-forwarded-for lấy đúng IP đầu tiên (chống bypass)",
  },

  buildConfig: {
    eslint: "✅ ignoreDuringBuilds = false (catch errors)",
    typescript: "✅ ignoreBuildErrors = false (catch type errors)",
  },

  formSecurity: {
    validation: "✅ Client-side validation",
    serverValidation: "✅ Server-side validation với Zod",
    sanitization: "✅ Input sanitization (trim, max length)",
    rateLimit: "✅ Rate limiting per IP",
  },

  // ⚠️ Các mục chưa triển khai – cần làm thêm
  pending: {
    csrfProtection: "⏳ CSRF token protection chưa có",
    persistentRateLimit: "⏳ Rate limiting dùng in-memory Map – không bền vững qua serverless restarts, cần Redis/Upstash cho production",
    emailService: "⏳ Chưa cấu hình email service",
    logging: "⏳ Chưa có logging & monitoring",
  },
};

export const NEXT_STEPS = {
  1: "Cấu hình email service (SendGrid, Resend, Nodemailer)",
  2: "Thêm database để lưu contact submissions",
  3: "Implement CSRF token protection",
  4: "Cấu hình logging & monitoring",
  5: "Thêm database layer cho persistent storage",
  6: "Implement API authentication nếu cần",
  7: "Setup SSL/TLS certificate (HTTPS)",
  8: "Regular security audits & updates",
};

export const RECOMMENDED_PACKAGES = {
  emailServices: [
    "resend",
    "nodemailer", 
    "sendgrid",
  ],
  database: [
    "firebase",
    "supabase",
    "mongodb", 
    "prisma", 
  ],
  rateLimiting: [
    "express-rate-limit",
    "upstash-ratelimit",
    "p-ratelimit",
  ],
  security: [
    "zod",
    "helmet", 
    "bcrypt", 
  ],
};
