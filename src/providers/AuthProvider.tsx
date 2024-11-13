"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { getCookie } from "@/utils/helpers";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const newUser = getCookie("new_user");
    const loggedIn = getCookie("logged_in");

    console.log("newUser", newUser, "loggedIn", loggedIn);
    if (newUser && !loggedIn) {
      router.push("/auth/login");
    } else if (newUser && loggedIn) {
      router.push("/home");
    } else {
      router.push("/auth");
    }

    setTimeout(() => {
      setMounted(true);
    }, 100);
  }, []);

  if (!mounted) return null;

  return children;
}
