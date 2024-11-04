import {
  ButtonHTMLAttributes,
  ChangeEvent,
  InputHTMLAttributes,
  MouseEvent,
} from "react";
import { Variant } from "./types";

export interface Button {
  text: string;
  variant: Variant;
}

export interface Step {
  title: string;
  subtitle: string;
  buttons: Button[];
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
  variant?: Variant;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export interface InputProps {
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  errorMessage?: string;
  readOnly?: boolean;
}
