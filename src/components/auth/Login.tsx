"use client";

import { ChangeEvent, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

import Button from "../ui/Button";
import Input from "../ui/Input";
import { getCookie } from "@/utils/helpers";

export interface LoginProps {}

function Login() {
  const [password, setPassword] = useState("");

  function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }

  async function login() {
    try {
      toast.loading("Logging in...");
      const encryptedData = getCookie("token");
      const iv = getCookie("iv");

      const { data } = await axios.post("/api/auth/login", {
        password: password,
        encryptedData,
        iv,
      });
      toast.dismiss();
      if (data.status) {
        toast.success("Successfully logged in");
        location.href = "/";
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Error while logging in");
    }
  }
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="text-center space-y-3 h-full w-full flex flex-col justify-center">
        <h1 className="text-3xl text-white">Unlock Wallet</h1>
        <p className="text-gray-400 text-lg">
          Please enter password to unlock your wallet
        </p>

        <div className="mt-4">
          <div className=" space-y-3">
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              value={password}
              onChange={onPasswordChange}
            />
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <Button text="Continue" variant={"primary"} onClick={login} />
      </div>
    </div>
  );
}

export default Login;
