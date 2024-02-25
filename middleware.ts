import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { env } from "process";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, _response: NextResponse) {
  const cookie =
    env.NODE_ENV === "development"
      ? request.cookies.get("next-auth.session-token")
      : request.cookies.get("next-auth.session-token");

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  } else return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/events"],
};
