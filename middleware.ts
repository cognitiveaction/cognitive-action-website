import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, COOKIE_VALUE } from "@/lib/auth";

const PROTECTED_PATHS = ["/home", "/services", "/platform", "/about"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = PROTECTED_PATHS.some(
    (path) => pathname === path || pathname.startsWith(path + "/")
  );

  if (!isProtected) return NextResponse.next();

  const authCookie = request.cookies.get(COOKIE_NAME);
  if (authCookie?.value === COOKIE_VALUE) return NextResponse.next();

  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/home/:path*", "/services/:path*", "/platform/:path*", "/about/:path*"],
};
