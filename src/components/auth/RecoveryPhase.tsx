"use client";
import { MouseEvent, useState } from "react";
import { toast } from "react-hot-toast";

import Button from "../ui/Button";
import Input from "../ui/Input";

export interface RecoveryPhraseProps {
  onClick: (step: number, e: MouseEvent<HTMLButtonElement>) => void;
  recoveryPhrase: string[];
  addRecoveryPhrase: (index: number, phrase: string) => void;
}

const readOnly = true;

function RecoveryPhrase({ onClick, recoveryPhrase }: RecoveryPhraseProps) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="text-center space-y-3 flex flex-col justify-center">
        <h1 className="text-3xl text-white">Recovery Phrase</h1>
        <p className="text-yellow-200 text-lg">
          Write down the following words in the correct order
        </p>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: 12 })
          .fill(1)
          .map((_, i: number) => (
            <div className="relative" key={i + 1}>
              <span className=" absolute top-[10px] left-2">{i + 1}</span>
              <Input
                value={recoveryPhrase[0]}
                onChange={(e) => {}}
                className="ps-6 w-full"
                readOnly={readOnly}
              />
            </div>
          ))}
      </div>

      <div className="flex items-center justify-center gap-2 mb-4 w-full">
        <Input
          type="checkbox"
          className="w-4 h-4 accent-indigo-500"
          value={isChecked ? "1" : "0"}
          onChange={(e) => {
            setIsChecked(!isChecked);
          }}
        />
        <p className="text-white">I saved my secret phrase</p>
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

export default RecoveryPhrase;
