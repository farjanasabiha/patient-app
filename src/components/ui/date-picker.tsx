"use client";

import * as React from "react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "./icons/CalendarIcon";

interface DatePickerProps {
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  className?: string;
  placeholder?: string;
  format?: string;
}

export function DatePicker({
  date,
  setDate,
  className,
  placeholder = "Select date",
  format: dateFormat = "PPP",
}: DatePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-full justify-start text-left font-normal  rounded-[3px] border border-[#8E8E93] h-[31px] px-3",
            !date && "text-muted-foreground",
            className
          )}
        >
          {date ? (
            format(date, dateFormat)
          ) : (
            <span className="text-[#8E8E93]">{placeholder}</span>
          )}
          <CalendarIcon className="h-5 w-5 text-[#8E8E93] ml-auto" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border-b border-b-[#7E22CE]"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}