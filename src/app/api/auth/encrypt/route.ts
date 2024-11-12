import { NextRequest } from "next/server";
import crypto from "crypto";
import { cookies } from "next/headers";

const algorithm = "aes-256-cbc";

// Defining key
const secret = process.env.ENCRYPTION_KEY as string;
const key = Buffer.from(secret, "hex");

// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text: string) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);

  // Updating text
  let encrypted = cipher.update(text);

  // Using concatenation
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  // Returning iv and encrypted data
  return {
    iv: iv.toString("hex"),
    encryptedData: encrypted.toString("hex"),
  };
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { text } = body;
  console.log("text", text);

  const encrypted = encrypt(text);

  // save data to cookies
  const cookieStore = await cookies();
  cookieStore.set("token", encrypted.encryptedData);
  cookieStore.set("iv", encrypted.iv);

  console.log(cookieStore.get("token"));

  return Response.json({
    payload: encrypted,
  });
}
