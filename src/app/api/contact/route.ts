import { NextRequest, NextResponse } from "next/server";
import { z, ZodError } from "zod";

// Map lưu trữ timestamps của các request theo IP
// Key: IP string, Value: mảng timestamp (ms)
const requestCounts = new Map<string, number[]>();

// Dọn dẹp các entry cũ định kỳ để tránh memory leak
// Chạy cleanup sau mỗi 100 request thay vì dùng setInterval (an toàn hơn với serverless)
let requestCountSinceLastCleanup = 0;
const CLEANUP_INTERVAL = 100;

function cleanupOldEntries(windowMs: number): void {
  const cutoff = Date.now() - windowMs;
  for (const [ip, times] of requestCounts.entries()) {
    const fresh = times.filter((t) => t > cutoff);
    if (fresh.length === 0) {
      requestCounts.delete(ip);
    } else {
      requestCounts.set(ip, fresh);
    }
  }
}

const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Tên phải ít nhất 2 ký tự").max(100, "Tên quá dài"),
  email: z.string().email("Email không hợp lệ"),
  subject: z.string().trim().max(200, "Tiêu đề quá dài").optional().default(""),
  message: z.string().trim().min(10, "Tin nhắn phải ít nhất 10 ký tự").max(5000, "Tin nhắn quá dài"),
});


function isRateLimited(ip: string, maxRequests: number = 5, windowMs: number = 3600000): boolean {
  // Dọn dẹp định kỳ để tránh memory leak
  requestCountSinceLastCleanup++;
  if (requestCountSinceLastCleanup >= CLEANUP_INTERVAL) {
    cleanupOldEntries(windowMs);
    requestCountSinceLastCleanup = 0;
  }

  const now = Date.now();
  const windowStart = now - windowMs;

  const times = requestCounts.get(ip) || [];
  const recentRequests = times.filter((t) => t > windowStart);

  if (recentRequests.length >= maxRequests) {
    return true;
  }

  recentRequests.push(now);
  requestCounts.set(ip, recentRequests);
  return false;
}

/**
 * Lấy IP thực của client từ headers.
 * x-forwarded-for có thể chứa nhiều IP (VD: "1.2.3.4, 10.0.0.1"),
 * luôn lấy IP đầu tiên (client gốc).
 */
function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    // Lấy IP đầu tiên trong chuỗi, loại bỏ khoảng trắng
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp) return firstIp;
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function sanitizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

export async function POST(request: NextRequest) {
  try {
    // Lấy IP đúng cách – chỉ dùng IP đầu tiên từ x-forwarded-for
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { 
          error: "Quá nhiều yêu cầu. Vui lòng thử lại sau 1 giờ." 
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => ({}));

    const validatedData = contactSchema.parse(body);

    validatedData.email = sanitizeEmail(validatedData.email);

    console.log("Contact form submission:", {
      timestamp: new Date().toISOString(),
      ip,
      fullName: validatedData.fullName,
      email: validatedData.email,
      subject: validatedData.subject,
      messageLength: validatedData.message.length,
    });

    return NextResponse.json(
      { 
        message: "Cảm ơn bạn! Chúng tôi sẽ liên hệ lại sớm.",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle validation errors
    if (error instanceof ZodError) {
      return NextResponse.json(
        { 
          error: "Dữ liệu không hợp lệ",
          details: error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
        },
        { status: 400 }
      );
    }

    // Handle JSON parse errors
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: "Request body không hợp lệ" },
        { status: 400 }
      );
    }

    // Log error
    console.error("Contact form error:", error instanceof Error ? error.message : String(error));

    // Generic error response
    return NextResponse.json(
      { error: "Lỗi server. Vui lòng thử lại sau." },
      { status: 500 }
    );
  }
}

/**
 * Ngăn chặn các method khác
 */
export async function OPTIONS() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
