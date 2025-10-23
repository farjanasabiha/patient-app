"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 font-poppins", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-2",
        month: "flex flex-col gap-4",
        caption: "flex justify-center pt-1 relative items-center w-full",
        caption_label: "text-sm font-semibold text-[#1C1C1E]",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "h-7 w-7 bg-transparent p-0 text-[#8E8E93] hover:text-[#7E22CE] hover:bg-[#F2DEFC] border-[#8E8E93] rounded-[3px]"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-x-1",
        head_row: "flex",
        head_cell: "text-[#8E8E93] rounded-md w-8 font-semibold text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-[#F2DEFC] [&:has([aria-selected].day-range-end)]:rounded-[3px]",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-[3px] [&:has(>.day-range-start)]:rounded-[3px] first:[&:has([aria-selected])]:rounded-[3px] last:[&:has([aria-selected])]:rounded-[3px]"
            : "[&:has([aria-selected])]:rounded-[3px]"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "h-8 w-8 p-0 font-normal text-[14px] rounded-[3px] text-[#1C1C1E] hover:bg-[#F2DEFC] hover:text-[#7E22CE] focus-visible:bg-[#F2DEFC] focus-visible:text-[#7E22CE] focus-visible:ring-2 focus-visible:ring-[#7E22CE] focus-visible:ring-offset-0"
        ),
        day_range_start: "day-range-start",
        day_range_end: "day-range-end",
        day_selected:
          "bg-[#7E22CE] text-white hover:bg-[#6B1CAD] hover:text-white focus:bg-[#7E22CE] focus:text-white",
        day_today: "bg-[#F2DEFC] text-[#7E22CE] font-semibold",
        day_outside: "text-[#8E8E93] opacity-50",
        day_disabled: "text-[#8E8E93] opacity-30",
        day_range_middle:
          "aria-selected:bg-[#F2DEFC] aria-selected:text-[#7E22CE]",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
