"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function Settings() {
  const router = useRouter();
  async function logout() {
    toast.loading("Logging out...");
    await axios.get("/api/auth/logout");
    toast.dismiss();
    location.href = "/";
  }
  async function deleteAccount() {
    toast.loading("Deleting account...");
    await axios.get("/api/auth/delete-account");
    toast.dismiss();
    location.href = "/";
  }

  return (
    <div className="flex flex-col items-center h-full space-y-4">
      <div className=" mr-auto">
        <button
          className="bg-gray-200 px-2 py-1 rounded-full text-gray-800 flex justify-center items-center text-xl"
          onClick={() => {
            router.replace("/home");
          }}
        >
          &larr;
        </button>
      </div>
      <div className="flex flex-col gap-3 w-full">
        <button
          className="border-red-500 border w-full rounded-md text-white px-4 py-1"
          onClick={logout}
        >
          Logout
        </button>
        <button
          className="bg-red-500 text-white w-full rounded-md px-4 py-1"
          onClick={deleteAccount}
        >
          Delete Account
        </button>
      </div>
    </div>
  );
}
