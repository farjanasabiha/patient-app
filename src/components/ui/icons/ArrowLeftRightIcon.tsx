import React from "react";
import { cn } from "@/lib/utils";

interface ArrowLeftRightIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const ArrowLeftRightIcon: React.FC<ArrowLeftRightIconProps> = ({
  width = 24,
  height = 24,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
    >
      <path
        d="M16 13L19 16M19 16L16 19M19 16H5M8 11L5 8M5 8L8 5M5 8H19"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
