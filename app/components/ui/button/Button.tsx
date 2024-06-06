import { cn } from "@/app/utils/utils";
import Link from "next/link";
import React, { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { variants } from "./constant";

type AsValue = "button" | "a";
type Variants = "plain" | "primaryColor";
type PropTypes = {
  as: AsValue;
  children?: ReactNode;
  className?: string;
  href?: string;
  variant?: Variants;
};

const Button = forwardRef<
  HTMLButtonElement,
  PropTypes & ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
>(({ as, children, variant, className, href, ...props }, ref) => {
  const Component = as || "button";
  if (as === "button") {
    if (href) {
      throw new Error("href is not allowed");
    }
    return (
      <Component
        className={cn("w-full p-3", variants[variant ?? "plain"], className)}
        {...props}
      >
        {children}
      </Component>
    );
  } else if (as === "a" && href) {
    return (
      <Link
        href={href}
        className={cn("", variants[variant ?? "plain"], className)}
      >
        {children}
      </Link>
    );
  }

  return null;
});

Button.displayName = "Button";

export default Button;
