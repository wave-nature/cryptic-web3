"use client";

import { MouseEvent } from "react";
import Button from "../ui/Button";

export interface WelcomeProps {
  onClick: (step: number, e: MouseEvent<HTMLButtonElement>) => void;
}

function Welcome({ onClick }: WelcomeProps) {
  return (
    <>
      <div className="text-center space-y-3 h-full flex flex-col justify-center">
        <h1 className="text-5xl text-white">Cryptic</h1>
        <p className="text-gray-400 text-lg">
          Let's get started by importing your wallet or you can create new one.
        </p>
      </div>
      <div className="w-full space-y-3">
        <Button
          text="Create a new wallet"
          variant={"primary"}
          onClick={onClick.bind(null, 0)}
        />
        <Button
          text="Recovery old one"
          variant={"secondary"}
          onClick={onClick.bind(null, 0)}
        />
      </div>
    </>
  );
}

export default Welcome;
