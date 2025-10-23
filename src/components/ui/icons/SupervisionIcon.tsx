import React from "react";
import { cn } from "@/lib/utils";

interface SupervisionIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const SupervisionIcon: React.FC<SupervisionIconProps> = ({
  width = 28,
  height = 28,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
    >
      <path
        d="M11 21.5H26M2 19.528V19.25C2 18.0074 3.00736 17 4.25 17H4.31081C5.51987 17 6.50032 17.9802 6.50032 19.1892C6.50032 19.7155 6.3293 20.2279 6.01351 20.6489L2 26.0003L6.5 26M11 14H26M11 6.5H26M2 3.5L5 2V11"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
