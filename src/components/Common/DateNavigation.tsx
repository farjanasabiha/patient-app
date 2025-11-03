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
    <div className="flex flex-row justify-between items-center p-0 gap-1 md:gap-2 w-full min-h-[31px]">
      {/* Left Navigation Arrow */}
      <button
        onClick={onPrevious}
        className="flex items-center justify-center w-8 sm:w-[36px] h-8 sm:h-[31px] bg-[#7E22CE] rounded-[6px] hover:bg-[#581890] cursor-pointer flex-shrink-0 transition-colors"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
      </button>

      {/* Date Text */}
      <div className="flex items-center flex-1 justify-center">
        <span className="font-poppins font-semibold text-[10px] md:text-[14px] text-[#1C1C1E] text-center truncate">
          {currentDate}
        </span>
      </div>

      {/* Right Navigation Arrow */}
      <button
        onClick={onNext}
        className="flex items-center justify-center w-8 sm:w-[36px] h-8 sm:h-[31px] bg-[#7E22CE] rounded-[6px] hover:bg-[#581890] cursor-pointer flex-shrink-0 transition-colors"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={2} />
      </button>
    </div>
  );
}
