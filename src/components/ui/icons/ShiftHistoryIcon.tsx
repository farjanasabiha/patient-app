import React from "react";
import { cn } from "@/lib/utils";

interface ShiftHistoryIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ShiftHistoryIcon: React.FC<ShiftHistoryIconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
    >
      <path
        d="M10 5V10H15M10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10C19 14.9706 14.9706 19 10 19Z"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
