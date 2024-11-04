import { Steps } from "./enums";
import { Step } from "./interfaces";

export type Variant = "primary" | "secondary" | "danger";
export type StepsObject = {
  [key in Steps]: Step;
};
