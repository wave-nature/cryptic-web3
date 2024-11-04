"use client";

import { MouseEvent, ChangeEvent } from "react";
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
              value={password}
              onChange={onPasswordChange}
              errorMessage={
                password && password.length < 6 ? "Must be strong password" : ""
              }
            />
            <Input
              type="password"
              placeholder="Confirm Password"
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
      <div className="flex items-center mb-4 w-full">
        <Input type="checkbox" className="h-4 w-16 accent-indigo-500" />
        <p className="text-white w-full">I agree to the Terms of Service</p>
      </div>
      <div className="w-full space-y-3">
        <Button
          text="Continue"
          variant={"primary"}
          onClick={onClick.bind(null, 1)}
        />
      </div>
    </>
  );
}

export default CreatePassword;
