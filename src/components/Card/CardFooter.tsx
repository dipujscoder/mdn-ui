import React, { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cardFooter } from "../../theme/components/cards";
import objectToString from "../../utils/objectToString";

export interface CardFooterProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter = forwardRef<HTMLElement, CardFooterProps>(
  ({ className, children }) => {
    const _styles = objectToString(cardFooter.styles);

    const _classess = twMerge(className, _styles);

    return <div className={_classess}>{children}</div>;
  }
);
