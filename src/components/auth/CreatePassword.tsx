"use client";

import { MouseEvent, ChangeEvent, useState } from "react";
import { toast } from "react-hot-toast";

import Button from "../ui/Button";
import Input from "../ui/Input";

export interface CreatePasswordProps {
  password: string;
  confirmPassword: string;
  onClick: (step: number, e: MouseEvent<HTMLButtonElement>) => void;
  onPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onConfirmPasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function CreatePassword({
  password,
  confirmPassword,
  onClick,
  onPasswordChange,
  onConfirmPasswordChange,
}: CreatePasswordProps) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <div className="text-center space-y-3 h-full w-full flex flex-col justify-center">
        <h1 className="text-3xl text-white">Create Password</h1>
        <p className="text-gray-400 text-lg">
          You will use this to unlock your wallet
        </p>

        <div className="mt-4">
          <div className=" space-y-3">
            <Input
              type="password"
              placeholder="Password"
              className="w-full"
              value={password}
              onChange={onPasswordChange}
              errorMessage={
                password && password.length < 6 ? "Must be strong password" : ""
              }
            />
            <Input
              type="password"
              placeholder="Confirm Password"
              className="w-full"
              value={confirmPassword}
              onChange={onConfirmPasswordChange}
              errorMessage={
                password && confirmPassword && password !== confirmPassword
                  ? "Both password must be same!"
                  : ""
              }
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mb-4 w-full">
        <Input
          type="checkbox"
          className="h-4 w-4 accent-indigo-500"
          value={isChecked ? "1" : "0"}
          onChange={() => setIsChecked(!isChecked)}
        />
        <p className="text-white">I agree to the Terms of Service</p>
      </div>
      <div className="w-full space-y-3">
        <Button
          text="Continue"
          variant={"primary"}
          onClick={(e) => {
            if (!isChecked)
              return toast.error("Please agree to the terms of service");
            onClick(1, e);
          }}
        />
      </div>
    </>
  );
}

export default CreatePassword;
