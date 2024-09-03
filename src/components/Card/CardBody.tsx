import React, { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { cardBody } from "../../theme/components/cards";
import objectToString from "../../utils/objectToString";

export interface CardBodyProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const CardBody = forwardRef<HTMLElement, CardBodyProps>(
  ({ className, children }) => {
    const _styles = objectToString(cardBody.styles);

    const _classess = twMerge(className, _styles);

    return <div className={_classess}>{children}</div>;
  }
);
