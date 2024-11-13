import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const loggedIn = request.cookies.get("logged_in");
  const newUser = request.cookies.get("new_user");

  console.log("loggedIn", loggedIn);
  console.log("newUser", newUser);

  // Prevent infinite loop by not applying middleware to /auth/register and /home routes
  if (
    request.nextUrl.pathname === "/auth" ||
    request.nextUrl.pathname === "/home"
  ) {
    return NextResponse.next();
  }

  // Redirect based on the presence of the token
  if (!newUser) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  if (!loggedIn && newUser) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.redirect(new URL("/home", request.url));
}

// Apply middleware only to the root path
export const config = {
  matcher: ["/", "/home"],
};
