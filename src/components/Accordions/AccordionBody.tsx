import React, { useContext, ComponentProps, forwardRef } from "react";
import { useAccordion } from "./AccordionContex";
import classNames from "classnames";

export interface AccordionBodyProps extends ComponentProps<"div"> {}

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, ...rest }, ref) => {
    const _accordionState = useAccordion();

    return (
      <div
        className={classNames("accordion-body p-2", {
          hidden: !_accordionState.open,
        })}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

export default AccordionBody;
