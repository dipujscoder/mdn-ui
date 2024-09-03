import React, { forwardRef, ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import { card } from "../../theme/components/cards";
import objectToString from "../../utils/objectToString";

export * from "./CardHeader";
export * from "./CardBody";
export * from "./CardFooter";

export interface CardProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export const Card = forwardRef<HTMLElement, CardProps>(
  ({ className, children }) => {
    const _styles = objectToString(card.styles);

    const _classess = twMerge(className, _styles);

    return <div className={_classess}>{children}</div>;
  }
);

export default Card;
