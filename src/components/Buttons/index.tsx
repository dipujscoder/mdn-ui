import { ComponentProps, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// types
import type {
  variant,
  size,
  color,
  fullWidth,
  className,
  children,
  loading,
} from "../../types/button";
import button from "../../theme/components/buttons";
import objectToString from "../../utils/objectToString";

export interface ButtonProps extends ComponentProps<"button"> {
  variant?: variant;
  size?: size;
  color?: color;
  fullWidth?: fullWidth;
  className?: className;
  children: children;
  loading?: loading;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant, size, color, fullWidth, className, children, loading, ...rest },
    ref
  ) => {
    const { defaultProps, styles }: any = button;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps?.variant;
    size = size ?? defaultProps?.size;
    color = color ?? defaultProps?.color;

    const _baseButton = objectToString(base?.initial);
    const _buttonVariant = objectToString(variants[`${variant}`][`${color}`]);
    const _buttonSize = objectToString(sizes[`${size}`]);

    // Merge All Class
    const _classes = twMerge(
      _baseButton,
      _buttonVariant,
      _buttonSize,
      className
    );

    return (
      <button
        className={_classes}
        {...rest}
        ref={ref}
        disabled={rest.disabled ?? loading}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "MDNTailwind.Button";

export default Button;
