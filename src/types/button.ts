import type { ReactNode } from "react";

// generic types
import { colors } from "./generic";

// typescript types
export type variant = "filled" | "outlined" | "gradient" | "text";
export type size = "sm" | "md" | "lg";
export type color = "white" | "black" | colors;
export type fullWidth = boolean;
export type className = string;
export type children = ReactNode;
export type loading = boolean;
