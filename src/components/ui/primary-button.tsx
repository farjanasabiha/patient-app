"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "secondary" | "danger";
  size?: "default" | "sm" | "lg";
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  children: React.ReactNode;
}

const variantStyles = {
  primary: "bg-[#7E22CE] hover:bg-[#6B1CAD] text-white border-none",
  outline: "border border-[#7E22CE] text-[#7E22CE] hover:bg-[#F2DEFC] bg-white",
  secondary: "bg-[#F2DEFC] text-[#7E22CE] hover:bg-[#E9D5F5] border-none",
  danger: "bg-[#EF4444] hover:bg-[#DC2626] text-white border-none",
};

const sizeStyles = {
  default: "h-[31px] px-[10px] py-[5px] text-[14px] gap-[10px] rounded-[6px]",
  sm: "h-[28px] px-[8px] py-[4px] text-[12px] gap-[4px] rounded-[4px]",
  lg: "h-[40px] px-[16px] py-[8px] text-[16px] gap-[12px] rounded-[8px]",
};

export function PrimaryButton({
  variant = "primary",
  size = "default",
  icon: Icon,
  iconPosition = "left",
  fullWidth,
  className,
  children,
  ...props
}: PrimaryButtonProps) {
  return (
    <Button
      className={cn(
        // Base styles
        "flex items-center justify-center font-poppins font-semibold leading-[21px] transition-colors",
        // Variant styles
        variantStyles[variant],
        // Size styles
        sizeStyles[size],
        // Full width
        fullWidth && "w-full",
        // Custom classes
        className
      )}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon className="w-6 h-6 stroke-[2px]" />
      )}
      {children}
      {Icon && iconPosition === "right" && (
        <Icon className="w-6 h-6 stroke-[2px]" />
      )}
    </Button>
  );
}
