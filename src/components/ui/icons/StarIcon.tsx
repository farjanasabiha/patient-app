import React from "react";
import { cn } from "@/lib/utils";

interface StarIconProps {
  width?: number;
  height?: number;
  className?: string;
}

export const StarIcon: React.FC<StarIconProps> = ({
  width = 33,
  height = 32,
  className = "",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors", className)}
    >
      <path
        d="M1.83545 13.5052C1.36557 13.0706 1.62081 12.2851 2.25636 12.2097L11.2617 11.1416C11.5207 11.1109 11.7457 10.9482 11.855 10.7114L15.6533 2.47669C15.9214 1.89554 16.7476 1.89543 17.0156 2.47658L20.814 10.7112C20.9232 10.9481 21.1467 11.1112 21.4058 11.1419L30.4116 12.2097C31.0472 12.2851 31.3017 13.0709 30.8318 13.5054L24.1747 19.6629C23.9832 19.84 23.8979 20.1036 23.9487 20.3594L25.7155 29.2539C25.8403 29.8816 25.1722 30.368 24.6137 30.0554L16.7007 25.6249C16.4731 25.4975 16.1966 25.4981 15.969 25.6255L8.05517 30.0543C7.49671 30.3669 6.82742 29.8816 6.95215 29.2539L8.71922 20.3599C8.77006 20.1041 8.68501 19.8399 8.49351 19.6628L1.83545 13.5052Z"
        className="stroke-current"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
