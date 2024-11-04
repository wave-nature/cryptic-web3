"use client";

import Button from "../ui/Button";
import { MouseEvent } from "react";
import Input from "../ui/Input";

export interface RecoveryPhraseProps {
  onClick: (step: number, e: MouseEvent<HTMLButtonElement>) => void;
  recoveryPhrase: string[];
  addRecoveryPhrase: (index: number, phrase: string) => void;
}

const readOnly = true;

function RecoveryPhrase({ onClick, recoveryPhrase }: RecoveryPhraseProps) {
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
                className="ps-6"
                readOnly={readOnly}
              />
            </div>
          ))}
      </div>

      <div className="flex items-center mb-4 w-full mt-16">
        <Input type="checkbox" className="w-8 accent-indigo-500" />
        <p className="text-white w-full">I saved my secret phrase</p>
      </div>

      <div className="w-full space-y-3">
        <Button
          text="Continue"
          variant={"primary"}
          onClick={onClick.bind(null, 2)}
        />
      </div>
    </>
  );
}

export default RecoveryPhrase;