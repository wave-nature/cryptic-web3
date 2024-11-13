"use client";

import { useState, MouseEvent, ChangeEvent, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

import Welcome from "@/components/auth/Welcome";
import CreatePassword from "@/components/auth/CreatePassword";
import RecoveryPhase from "@/components/auth/RecoveryPhase";
import AllDone from "@/components/auth/AllDone";
import { getCookie } from "@/utils/helpers";

function RegisterPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [recoveryPhrase, setRecoveryPhrase] = useState<string[]>([]);

  async function onClick(step: number, e: MouseEvent<HTMLButtonElement>) {
    if (step === 3) return router.replace("/");
    if (step === 1) {
      if (!password || !confirmPassword)
        return toast.error("Please fill all fields");

      const { data } = await axios.post("/api/auth/register", {
        text: password,
      });
      // save data to cookies
      document.cookie = `token=${data.payload.encryptedData}`;
      document.cookie = `iv=${data.payload.iv}`;
    }
    setStep((prev) => prev + 1);
  }

  function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
  }
  function onConfirmPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  function addRecoveryPhrase(index: number, phrase: string) {
    const prevRecoveryPhrase = [...recoveryPhrase];
    prevRecoveryPhrase[index] = phrase;
    setRecoveryPhrase(prevRecoveryPhrase);
  }

  function navigateBack() {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  }

  const steps = [
    <Welcome onClick={onClick} />,
    <CreatePassword
      onClick={onClick}
      onPasswordChange={onPasswordChange}
      onConfirmPasswordChange={onConfirmPasswordChange}
      password={password}
      confirmPassword={confirmPassword}
    />,
    <RecoveryPhase
      onClick={onClick}
      addRecoveryPhrase={addRecoveryPhrase}
      recoveryPhrase={recoveryPhrase}
    />,
    <AllDone onClick={onClick} />,
  ];

  const currentComponent = steps[step];

  return (
    <div className="flex flex-col items-center justify-between h-full">
      {step !== 0 && (
        <div className=" mr-auto">
          <button
            className="bg-gray-200 px-2 py-1 rounded-full text-gray-800 flex justify-center items-center text-xl"
            onClick={navigateBack}
          >
            &larr;
          </button>
        </div>
      )}
      {currentComponent}
    </div>
  );
}

export default RegisterPage;
