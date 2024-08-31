import React, { ComponentProps, useContext } from "react";
import { AccordionContext, useAccordion } from "./AccordionContex";

export interface AccordionHeaderProps extends ComponentProps<"div"> {}

export const AccordionHeader = React.forwardRef<
  HTMLDivElement,
  AccordionHeaderProps
>(({ children, ...rest }, ref) => {
  const currentUserContext = useAccordion();

  console.log("currentUserContext", currentUserContext);

  return (
    <div ref={ref} {...rest} className="accordion-header p-2">
      {children}
    </div>
  );
});

export default AccordionHeader;
