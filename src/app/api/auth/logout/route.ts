import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.set("logged_in", "");

  return Response.json({
    status: true,
    message: "Successfully logged out",
  });
}
