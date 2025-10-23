"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface Step {
  label: string;
  id: string;
}

export interface ProgressStepperProps {
  steps: Step[];
  currentStep: number;
  className?: string;
  onStepClick?: (stepIndex: number) => void;
  allowClickNavigation?: boolean;
  navigationStrategy?: "free" | "sequential" | "custom";
}

export const ProgressStepper: React.FC<ProgressStepperProps> = ({
  steps,
  currentStep,
  className,
  onStepClick,
  allowClickNavigation = true,
  navigationStrategy = "sequential",
}) => {
  const handleStepClick = (stepIndex: number) => {
    if (!allowClickNavigation || !onStepClick) return;

    // Apply navigation strategy
    switch (navigationStrategy) {
      case "free":
        // Allow navigation to any step
        onStepClick(stepIndex);
        break;
      case "sequential":
        // Allow navigation to completed steps or next step only
        if (stepIndex <= currentStep + 1) {
          onStepClick(stepIndex);
        }
        break;
      case "custom":
        // Let the parent component handle all logic
        onStepClick(stepIndex);
        break;
      default:
        if (stepIndex <= currentStep + 1) {
          onStepClick(stepIndex);
        }
    }
  };
  return (
    <div className={cn("w-full mx-auto px-12 bg-[#ffffff]", className)}>
      <div className="flex flex-col items-start gap-1 w-full">
        {/* Stepper Row with Dots and Lines */}
        <div className="flex items-center w-full">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              {/* Dot Container */}
              <div className="flex flex-col items-center relative">
                <div
                  className={cn(
                    "flex items-center justify-center w-5 h-5 rounded-full transition-colors duration-200",
                    index <= currentStep ? "bg-[#7e22ce]" : "bg-[#8e8e93]",
                    allowClickNavigation && onStepClick
                      ? "cursor-pointer hover:opacity-80"
                      : ""
                  )}
                  onClick={() => handleStepClick(index)}
                >
                  {index === currentStep ? (
                    <div className="w-2 h-2 rounded-full bg-[#ffffff]"></div>
                  ) : null}
                </div>

                {/* Label directly below each dot */}
                <div
                  className={cn(
                    "absolute top-10 text-center w-[200px]",
                    allowClickNavigation && onStepClick ? "cursor-pointer" : ""
                  )}
                  onClick={() => handleStepClick(index)}
                >
                  <span
                    className={cn(
                      "font-medium text-sm transition-colors duration-200",
                      index <= currentStep
                        ? "text-[#1c1c1e]"
                        : "text-[#8e8e93]",
                      allowClickNavigation && onStepClick
                        ? "hover:opacity-80"
                        : ""
                    )}
                  >
                    {step.label}
                  </span>
                </div>
              </div>

              {/* Connecting Line (except after last step) */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-px bg-[#c7c7cc]"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressStepper;
