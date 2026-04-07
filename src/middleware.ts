import { NextRequest, NextResponse } from "next/server";

export function middleware(_request: NextRequest) {
  const response = NextResponse.next();

  // Tắt DNS prefetching để giảm rò rỉ thông tin
  response.headers.set("X-DNS-Prefetch-Control", "off");

  // HSTS: Bắt buộc HTTPS trong 2 năm, bao gồm subdomain và cho phép preload
  // Lưu ý: chỉ bật preload sau khi đã submit vào hstspreload.org
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );

  // Ngăn chặn cross-origin information leaks
  response.headers.set("Cross-Origin-Opener-Policy", "same-origin");
  response.headers.set("Cross-Origin-Resource-Policy", "same-origin");

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
