"use client";

import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

// Base styles for all label variants
const baseStyles =
  "w-full font-poppins font-normal pb-2 leading-normal text-black text-base font-feature-settings-case";

const labelVariants = cva(baseStyles);

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

interface FormLabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
  required?: boolean;
  children: React.ReactNode;
}

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  FormLabelProps
>(({ className, required, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(baseStyles, className)}
    {...props}
  >
    {children}
    {required && <span className="text-black text-base ml-0.5 ">*</span>}
  </LabelPrimitive.Root>
));
FormLabel.displayName = "FormLabel";

const RequiredLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(baseStyles, className)}
    {...props}
  >
    {children}
    <span className="text-black text-base ml-0.5">*</span>
  </LabelPrimitive.Root>
));
RequiredLabel.displayName = "RequiredLabel";

export { Label, FormLabel, RequiredLabel };
