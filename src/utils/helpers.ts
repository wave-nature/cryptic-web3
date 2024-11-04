// Helper function to convert a base64 string to a CryptoKey
async function importKeyFromBase64(base64Key: string) {
  const rawKey = Uint8Array.from(atob(base64Key), (c) => c.charCodeAt(0));
  return crypto.subtle.importKey("raw", rawKey, { name: "AES-GCM" }, false, [
    "encrypt",
    "decrypt",
  ]);
}

// Encrypt function
export async function encryptText(
  text: string
): Promise<{ iv: string; encryptedData: string }> {
  const key = await importKeyFromBase64(
    process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string
  );
  const encoder = new TextEncoder();
  const encodedText = encoder.encode(text);

  // Generate a random initialization vector (IV)
  const iv = crypto.getRandomValues(new Uint8Array(12));

  // Encrypt the text
  const encryptedContent = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encodedText
  );

  console.log({ iv, encryptedContent });

  return { iv: "dsfas", encryptedData: "" };

  //   return {
  //     iv: Buffer.from(iv).toString("base64"), // Convert IV to Base64 for storage
  //     encryptedData: Buffer.from([...new Uint8Array(encryptedContent)]).toString(
  //       "base64"
  //     ),
  //   };
}

// Decrypt function
export async function decryptText(encryptedData: string, ivBase64: string) {
  const key = await importKeyFromBase64(
    process.env.NEXT_PUBLIC_ENCRYPTION_KEY as string
  );
  const iv = new Uint8Array(
    atob(ivBase64)
      .split("")
      .map((char) => char.charCodeAt(0))
  );
  const encryptedArray = new Uint8Array(
    atob(encryptedData)
      .split("")
      .map((char) => char.charCodeAt(0))
  );

  const decryptedContent = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv: iv,
    },
    key,
    encryptedArray
  );

  const decoder = new TextDecoder();
  return decoder.decode(decryptedContent);
}
