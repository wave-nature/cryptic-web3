"use client";

import { InputProps } from "@/types/interfaces";

function Input({ className, errorMessage, ...props }: InputProps) {
  return (
    <>
      <input
        {...props}
        className={`p-2 text-lg bg-slate-500 rounded-lg w-full text-slate-100 font-medium focus:bg-slate-800 placeholder:text-slate-400 ${className} ${
          errorMessage && "outline-red-400"
        }`}
      />
      {errorMessage && (
        <p className=" text-sm text-red-400 text-left">{errorMessage}</p>
      )}
    </>
  );
}

export default Input;
