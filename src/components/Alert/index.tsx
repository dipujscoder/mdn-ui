import React, { forwardRef, ComponentProps, useState } from "react";
import { twMerge } from "tailwind-merge";
import alert from "../../theme/components/alerts";
import objectToString from "../../utils/objectToString";

// types
import type { color, className, children } from "../../types/alert";

export interface AlertProps extends ComponentProps<"div"> {
  color?: color;
  className?: className;
  children: children;
  close?: boolean;
}

export const Alert = forwardRef<HTMLElement, AlertProps>(
  ({ color, className, children, close }) => {
    const [open, setOpen] = useState<boolean>(false);

    const { defaultProps, styles, variants }: any = alert;
    const { base } = styles;

    color = color ?? defaultProps?.color;

    const _baseButton = objectToString(base?.initial);
    const _colorVarient = objectToString(variants[`${color}`]);
    const _hidden = open ? "hidden" : null;
    const _close = objectToString(styles?.close);

    console.log("_colorVarient", _colorVarient);

    // Merge All Class
    const _classes = twMerge(_baseButton, className, _colorVarient, _hidden);
    const _closeClasses = twMerge(_close);

    const _handleClose = () => {
      if (close) {
        setOpen(true);
      }
    };

    return (
      <div className={_classes}>
        {children}
        {close && (
          <span onClick={_handleClose} className={_closeClasses}>
            <svg
              height="1rem"
              version="1.1"
              viewBox="0 0 512 512"
              width="1rem"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
            </svg>
          </span>
        )}
      </div>
    );
  }
);

export default Alert;
