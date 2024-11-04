import { NextRequest } from "next/server";
import crypto from "crypto";

const algorithm = "aes-256-cbc";

// Defining key
const secret = process.env.ENCRYPTION_KEY as string;
const key = Buffer.from(secret, "hex");

function decrypt(encryptedData: string, ivHex: string) {
  // Convert the IV and encrypted data from hex format to buffers
  const iv = Buffer.from(ivHex, "hex");
  const encryptedText = Buffer.from(encryptedData, "hex");

  // Create Decipheriv with algorithm, key, and iv
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);

  // Decrypt the text
  let decrypted = decipher.update(encryptedText).toString("hex");
  decrypted += decipher.final("utf8");

  // Return the decrypted text
  return decrypted;
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { encryptedData, ivHex } = body;

  const decrypted = decrypt(encryptedData, ivHex);

  return Response.json({
    decryptedData: decrypted,
  });
}
