import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentPropsWithoutRef<"input">
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-[31px] w-full rounded-[3px] border border-[#8E8E93] bg-white px-[10px] py-[5px]",
        "font-poppins text-[14px] leading-[21px] text-[#1C1C1E]",
        "placeholder:text-[#c4c4c4]",
        "focus:outline-none focus:border-[#7E22CE] focus:ring-1 focus:ring-[#7E22CE]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };