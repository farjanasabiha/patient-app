"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateNavigationProps {
  currentDate: string;
  onPrevious: () => void;
  onNext: () => void;
}

export function DateNavigation({
  currentDate,
  onPrevious,
  onNext,
}: DateNavigationProps) {
  return (
    <div className="flex flex-row justify-between items-center p-0 gap-3 w-full h-[31px]">
      {/* Left Navigation Arrow */}
      <button
        onClick={onPrevious}
        className="flex items-center justify-center w-[36px] h-[31px] bg-[#7E22CE] rounded-[6px] p-[3.5px_6px] hover:bg-[#581890] cursor-pointer"
      >
        <ChevronLeft className="w-6 h-6 text-white" strokeWidth={2} />
      </button>

      {/* Date Text */}
      <div className="flex items-center">
        <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E] w-[260px] h-[21px] flex items-center justify-center font-feature-case">
          {currentDate}
        </span>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        className="flex items-center justify-center w-[36px] h-[31px] bg-[#7E22CE] rounded-[6px] p-[3.5px_6px] hover:bg-[#581890] cursor-pointer"
      >
        <ChevronRight className="w-6 h-6 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}
