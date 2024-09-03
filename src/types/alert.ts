import type { ReactNode } from "react";

// generic types
import { colors } from "./generic";

// typescript types
export type color = "light" | "dark" | colors;
export type className = string;
export type children = ReactNode;
