import React, { createContext, useContext, forwardRef } from "react";

export interface AccordionContextType {
  open: boolean;
}

export const AccordionContext = createContext<AccordionContextType | null>(
  null
);

export function useAccordion() {
  const accordionContext = useContext(AccordionContext);

  if (!accordionContext) {
    throw new Error(
      "useAccordion()  must be used within an Accordion. It happens when you use AccordionHeader or AccordionBody components outside the Accordion component."
    );
  }

  return accordionContext;
}

export interface AccordionContextProviderProps {
  children: React.ReactNode;
  value: AccordionContextType;
}

export const AccordionProvider = ({
  value,
  children,
}: AccordionContextProviderProps) => {
  return (
    <AccordionContext.Provider value={value}>
      {children}
    </AccordionContext.Provider>
  );
};

export default AccordionProvider;
