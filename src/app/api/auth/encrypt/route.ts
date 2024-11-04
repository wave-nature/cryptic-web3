import { NextRequest } from "next/server";
import crypto from "crypto";

const algorithm = "aes-256-cbc";

// Defining key
const secret =
  process.env.ENCRYPTION_KEY as string;
const key = Buffer.from(secret, "hex");

// Defining iv
const iv = crypto.randomBytes(16);

// An encrypt function
function encrypt(text: string) {
  // Creating Cipheriv with its parameter
  let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(key), iv);

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

  return Response.json({
    encryptedData: encrypted,
  });
}
