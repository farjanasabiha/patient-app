"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateNavigationProps {
  currentDate: string;
  view: "day" | "week";
  onViewChange: (view: "day" | "week") => void;
  onPrevious: () => void;
  onNext: () => void;
}

export function DateNavigation({
  currentDate,
  view,
  onViewChange,
  onPrevious,
  onNext,
}: DateNavigationProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center w-full sm:h-[31px] gap-3">
      <div className="flex w-full sm:w-auto justify-between sm:justify-start">
        {/* Left Navigation Arrows */}
        <div className="flex items-center w-[72px] h-[31px]">
          <button
            onClick={onPrevious}
            className="flex items-center justify-center w-[36px] h-[31px] bg-green-darker rounded-l-md p-[3.5px_6px] hover:bg-green-darkest"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={onNext}
            className="flex items-center justify-center w-[36px] h-[31px] bg-green-darker rounded-r-md p-[3.5px_6px] hover:bg-green-darkest"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* View Toggle - Right side on mobile, hidden on desktop */}
        <div className="flex items-center gap-2 w-[128px] h-[31px] sm:hidden">
          <button
            onClick={() => onViewChange("day")}
            className={`flex justify-center items-center w-[60px] h-[31px] rounded-md px-[10px] py-[5px] ${
              view === "day"
                ? "border border-green-darker bg-green-darker text-white font-semibold"
                : "border border-green-darker hover:bg-green-hover"
            }`}
          >
            <span
              className={`font-poppins font-semibold text-[14px] leading-[21px] w-[40px] h-[21px] text-center ${
                view === "day" ? "text-white" : "text-green-darker"
              }`}
            >
              Day
            </span>
          </button>
          <button
            onClick={() => onViewChange("week")}
            className={`flex justify-center items-center w-[60px] h-[31px] rounded-md px-[10px] py-[5px] ${
              view === "week"
                ? "bg-green-darker text-white font-semibold"
                : "border border-green-darker hover:bg-green-hover"
            }`}
          >
            <span
              className={`font-poppins font-semibold text-[14px] leading-[21px] w-[40px] h-[21px] text-center ${
                view === "week" ? "text-white" : "text-green-darker"
              }`}
            >
              Week
            </span>
          </button>
        </div>
      </div>

      {/* Date Text - Center on mobile */}
      <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E] w-full sm:w-[243px] h-[21px] flex items-center justify-center mt-2 sm:mt-0">
        {currentDate}
      </span>

      {/* View Toggle - Hidden on mobile, visible on desktop */}
      <div className="hidden sm:flex items-center gap-2 w-[128px] h-[31px]">
        <button
          onClick={() => onViewChange("day")}
          className={`flex justify-center items-center w-[60px] h-[31px] rounded-md px-[10px] py-[5px] ${
            view === "day"
              ? "border border-green-darker bg-green-darker text-white font-semibold"
              : "border border-green-darker hover:bg-green-hover"
          }`}
        >
          <span
            className={`font-poppins font-semibold text-[14px] leading-[21px] w-[40px] h-[21px] text-center ${
              view === "day" ? "text-white" : "text-green-darker"
            }`}
          >
            Day
          </span>
        </button>
        <button
          onClick={() => onViewChange("week")}
          className={`flex justify-center items-center w-[60px] h-[31px] rounded-md px-[10px] py-[5px] ${
            view === "week"
              ? "bg-green-darker text-white font-semibold"
              : "border border-green-darker hover:bg-green-hover"
          }`}
        >
          <span
            className={`font-poppins font-semibold text-[14px] leading-[21px] w-[40px] h-[21px] text-center ${
              view === "week" ? "text-white" : "text-green-darker"
            }`}
          >
            Week
          </span>
        </button>
      </div>
    </div>
  );
}
