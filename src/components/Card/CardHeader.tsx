import React, { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cardHeader } from "../../theme/components/cards";
import objectToString from "../../utils/objectToString";

export interface CardHeaderProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = forwardRef<HTMLElement, CardHeaderProps>(
  ({ className, children }) => {
    const _styles = objectToString(cardHeader.styles);

    const _classess = twMerge(className, _styles);

    return <div className={_classess}>{children}</div>;
  }
);
