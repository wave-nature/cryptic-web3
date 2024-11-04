"use client";

import { MouseEvent } from "react";
import Button from "../ui/Button";

export interface AllDoneProps {
  onClick: (step: number, e: MouseEvent<HTMLButtonElement>) => void;
}

function AllDone({ onClick }: AllDoneProps) {
  return (
    <>
      <div className="text-center space-y-3 h-full flex flex-col justify-center">
        <h1 className="text-5xl text-white">All Done 👍</h1>
        <p className="text-gray-400 text-lg">
          You have successfully created your wallet
        </p>
      </div>
      <div className="w-full space-y-3">
        <Button
          text="Get Started"
          variant={"primary"}
          onClick={onClick.bind(null, 3)}
        />
      </div>
    </>
  );
}

export default AllDone;
