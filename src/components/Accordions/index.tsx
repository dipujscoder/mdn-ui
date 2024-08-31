import React, { ComponentProps, forwardRef } from "react";
import AccordionProvider from "./AccordionContex";

export interface AccordionItemProps extends ComponentProps<"div"> {
  open: boolean;
  children: React.ReactNode;
}

export const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, open, ...rest }) => {
    const _value = {
      open,
    };

    return (
      <div {...rest} className="accordion-item border">
        <AccordionProvider value={_value}>{children}</AccordionProvider>
      </div>
    );
  }
);

export interface AccordionProps extends ComponentProps<"div"> {
  children: React.ReactNode;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, ...rest }) => {
    return (
      <div {...rest} className="accordion">
        {children}
      </div>
    );
  }
);
