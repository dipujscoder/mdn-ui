import React, { ComponentProps, useContext } from "react";
import { AccordionContext, useAccordion } from "./AccordionContex";

export interface AccordionHeaderProps extends ComponentProps<"div"> {}

export const AccordionHeader = React.forwardRef<
  HTMLDivElement,
  AccordionHeaderProps
>(({ children, ...rest }, ref) => {
  const _accordion = useAccordion();

  console.log("dipu", _accordion);

  return (
    <div ref={ref} {...rest} className="accordion-header">
      <div className="p-2">{children}</div>
    </div>
  );
});

export default AccordionHeader;
