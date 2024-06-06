import { cn } from "@/app/utils/utils";
import React, { forwardRef, InputHTMLAttributes } from "react";
import { variants } from "./constant";

type Variants = "plain" | "primaryColor";

type PropTypes = {
  variant: Variants;
  className?: string;
};

const TextField = forwardRef<
  HTMLInputElement,
  PropTypes & InputHTMLAttributes<HTMLInputElement>
>(({ className, variant, ...props }) => {
  return (
    <input
      {...props}
      className={cn("", variants[variant ?? "plain"], className)}
    />
  );
});

TextField.displayName = "TextField";

export default TextField;
