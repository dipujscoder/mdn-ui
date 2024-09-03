import alert from "./alertStyle";

// Types
import type { color, className } from "../../../types/alert";

export interface ButtonStyleTypes {
  defaultProps?: {
    color?: color;
    className?: className;
  };
  styles?: {
    base?: {
      initial?: object;
    };
    close?: object;
  };
  variants?: typeof alert;
}

const button: ButtonStyleTypes = {
  defaultProps: {
    color: "gray",
    className: "",
  },
  styles: {
    base: {
      initial: {
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        textAlign: "text-left",
        transition: "transition-all",
        border: "border",
        padding: "p-5",
        borderRadius: "rounded",
        display: "flex items-center",
        position: "relative",
      },
    },
    close: {
      position: "absolute",
      right: "right-5",
      cursor: "cursor-pointer",
    },
  },
  variants: alert,
};

export default button;
