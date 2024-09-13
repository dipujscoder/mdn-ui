import React, { useContext, ComponentProps, forwardRef } from "react";
import { useAccordion } from "./AccordionContex";
import classNames from "classnames";
import { motion, useScroll, LazyMotion, domAnimation, m } from "framer-motion";

export interface AccordionBodyProps extends ComponentProps<"div"> {}

export const AccordionBody = forwardRef<HTMLDivElement, AccordionBodyProps>(
  ({ children, ...rest }, ref) => {
    const _accordionState = useAccordion();

    console.log("_accordionState", _accordionState);

    const hidden = !_accordionState.open;

    return (
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{ opacity: hidden ? 0 : 1, height: hidden ? 0 : "auto" }}
          transition={{ duration: 0.2 }}
          className={classNames("accordion-body")}
        >
          <div className="p-2">{children}</div>
        </m.div>
      </LazyMotion>
    );
  }
);

export default AccordionBody;
