import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  console.log("token", token);

  // Prevent infinite loop by not applying middleware to /auth/register and /home routes
  if (
    request.nextUrl.pathname === "/auth/register" ||
    request.nextUrl.pathname === "/"
  ) {
    return NextResponse.next();
  }

  // Redirect based on the presence of the token
  if (!token) {
    return NextResponse.redirect(new URL("/auth/register", request.url));
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// Apply middleware only to the root path
export const config = {
  matcher: ["/", ],
};
