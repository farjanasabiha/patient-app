import React from "react";
import { cn } from "@/lib/utils";

interface PayerServiceIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const PayerServiceIcon: React.FC<PayerServiceIconProps> = ({
  width = 20,
  height = 20,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
    >
      <path
        d="M7 14H17M1 12.6853V12.5C1 11.6716 1.67157 11 2.5 11H2.54054C3.34658 11 4.00021 11.6534 4.00021 12.4595C4.00021 12.8103 3.8862 13.1519 3.67568 13.4326L1 17.0002L4 17M7 9H17M7 4H17M1 2L3 1V7"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
