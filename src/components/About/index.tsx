import React, { ReactNode } from "react";
import AboutProvider from "./AboutContext";

type Props = {
  children: ReactNode;
  open: boolean;
};

export default function About({ children, open }: Props) {
  return <AboutProvider open={open}>{children}</AboutProvider>;
}
