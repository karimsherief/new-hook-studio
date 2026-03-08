import { forwardRef } from "react";

export const Label = forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className = "", ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`block text-sm font-medium text-zinc-700${className}`}
      {...props}
    />
  );
});
Label.displayName = "Label";
