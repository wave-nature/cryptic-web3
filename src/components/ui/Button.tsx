"use client";

import { ButtonProps } from "@/types/interfaces";

function Button({
  text = "Click Me",
  className = "",
  variant = "primary",
  onClick,
  ...props
}: ButtonProps) {
  const variantClasses = {
    primary: `bg-indigo-500 text-white hover:bg-indigo-600`,
    secondary: `bg-gray-500 text-white hover:bg-gray-600`,
    danger: `bg-red-500 text-white hover:bg-red-600`,
  };

  return (
    <button
      className={`w-full py-3 px-4 rounded-xl ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
