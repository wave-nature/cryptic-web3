import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  cookieStore.set("logged_in", "");
  cookieStore.set("new_user", "");
  cookieStore.set("iv", "");
  cookieStore.set("token", "");

  return Response.json({
    status: true,
    message: "Successfully deleted account",
  });
}
