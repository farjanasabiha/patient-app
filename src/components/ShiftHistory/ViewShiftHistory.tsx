"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import PersonalCareSection from "./PersonalCareSection";
import NutritionSection from "./NutritionSection";
import ActivitiesSection from "./ActivitiesSection";
import RelatedDutiesSection from "./RelatedDutiesSection";
import HomemakingSection from "./HomemakingSection";
import NotesAndSignaturesSection from "./NotesAndSignaturesSection";
import { DatePicker } from "@/components/ui/date-picker";
import { PrimaryButton } from "@/components/ui/primary-button";

import { DateNavigation } from "../Common/DateNavigation";
import { ShiftHistoryDrawer } from "./ShiftHistoryDrawer";
import { Breadcrumb } from "../Common/breadcrumbs/Breadcrumb";
import {
  formatShortDate,
  formatWeekDateRange,
  getWeekStartDate,
  getWeekEndDate,
} from "@/lib/time";

interface ViewShiftHistoryProps {
  caregiverName: string;
  patientDOB: string;
  showFilters?: boolean;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
}

const ViewShiftHistory: React.FC<ViewShiftHistoryProps> = ({
  caregiverName,
  patientDOB,
  showFilters = false,
  breadcrumbItems,
}) => {
  // We're only using week view now
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  // Get current date and set up week boundaries
  const [currentWeek, setCurrentWeek] = useState({
    start: getWeekStartDate(new Date()),
    end: getWeekEndDate(new Date()),
  });

  // Add drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Filters state (for DFS)
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();

  const handleClearFilters = () => {
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  // State for other sections if needed
  // (Personal Care section manages its own state internally)

  // Nutrition section is now a separate component
  // Activities section is now a separate component
  // Related Duties section is now a separate component
  // Homemaking section is now a separate component

  const handlePreviousWeek = () => {
    const newStart = new Date(currentWeek.start);
    newStart.setDate(currentWeek.start.getDate() - 7);
    const newEnd = new Date(currentWeek.end);
    newEnd.setDate(currentWeek.end.getDate() - 7);
    setCurrentWeek({ start: newStart, end: newEnd });
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeek.start);
    newStart.setDate(currentWeek.start.getDate() + 7);
    const newEnd = new Date(currentWeek.end);
    newEnd.setDate(currentWeek.end.getDate() + 7);
    setCurrentWeek({ start: newStart, end: newEnd });
  };

  const formatDate = () => {
    // Always show week date range
    return formatWeekDateRange(currentWeek.start, currentWeek.end);
  };

  // Generate dates for the displayed days in the date row
  const getDatesForWeek = () => {
    const dates = [];
    const weekStart = new Date(currentWeek.start);

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      dates.push(formatShortDate(date));
    }

    return dates;
  };

  const weekDates = getDatesForWeek();

  // Update handleLocationClick to open drawer
  const handleLocationClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-[12px]">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb
            items={
              breadcrumbItems || [
                { label: "Shift History", href: "/shift-history" },
                { label: caregiverName, active: true },
              ]
            }
          />
        </div>

        {/* Patient Name and DOB */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">{caregiverName}</h2>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold">
            DOB: {patientDOB}
          </p>
        </div>

        {/* Conditional Filters Section (only for DFS) */}
        {showFilters && (
          <div className="flex flex-col items-start gap-0.5 w-full h-[74px]">
            {/* Filters Title */}
            <div className="w-full h-[21px] font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
              Filters
            </div>

            {/* Filters Content */}
            <div className="flex flex-row items-center gap-6 w-full h-[51px]">
              {/* Date Range: From */}
              <div className="flex flex-col items-start gap-0.5 flex-grow h-[51px]">
                <label className="w-full h-[18px] font-poppins font-semibold text-[12px] leading-[18px] text-[#8E8E93]">
                  Date Range: From
                </label>
                <DatePicker
                  date={dateFrom}
                  setDate={setDateFrom}
                  placeholder="From"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] font-poppins"
                  format="MM/dd/yyyy"
                />
              </div>

              {/* Date Range: To */}
              <div className="flex flex-col items-start gap-0.5 flex-grow h-[51px]">
                <label className="w-full h-[18px] font-poppins font-semibold text-[12px] leading-[18px] text-[#8E8E93]">
                  Date Range: To
                </label>
                <DatePicker
                  date={dateTo}
                  setDate={setDateTo}
                  placeholder="To"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] font-poppins"
                  format="MM/dd/yyyy"
                />
              </div>

              {/* Clear Filters Button Container */}
              <div className="flex flex-col justify-center items-end gap-0.5 flex-grow h-[31px]">
                <PrimaryButton
                  variant="outline"
                  onClick={handleClearFilters}
                  className="w-[125px] h-[31px] px-5 py-[5px] border-[#7E22CE] text-[#7E22CE] font-poppins font-semibold text-[14px] leading-[21px] hover:bg-gray-50"
                >
                  Clear Filters
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
        {/* Date Navigation */}
        <div className="flex items-center justify-between">
          <DateNavigation
            currentDate={formatDate()}
            onPrevious={handlePreviousWeek}
            onNext={handleNextWeek}
          />
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex sm:hidden items-center justify-center py-2 px-4 text-xs text-[#8E8E93] bg-[#F8F8F8] border border-[#C7C7CC] rounded-t-[10px]">
          <svg
            className="w-4 h-4 mr-1 text-[#8E8E93]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          <span>Scroll horizontally to see all days</span>
        </div>

        {/* First Table - Days and caregiver info */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Day
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Caregiver Name
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]"
                  >
                    Name
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Date
                </div>
                {weekDates.map((date, i) => (
                  <div
                    key={i}
                    className="flex-1 flex justify-center items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]"
                  >
                    {date}
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Clock In
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]"
                  >
                    09:00 AM
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Clock Out
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]"
                  >
                    05:00 PM
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Location
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3"
                  >
                    <button
                      className="w-9 h-9 rounded-full bg-[#F2F9E6] flex items-center justify-center hover:bg-[#e5f4d0] transition-colors"
                      onClick={handleLocationClick}
                      aria-label={`View location for ${day}`}
                    >
                      <MapPin className="h-6 w-6 text-[#7EC000]" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Personal Care Section Component */}
        <PersonalCareSection days={days} weekDates={weekDates} />

        {/* Nutrition Section Component */}
        <NutritionSection days={days} />

        {/* Activities Section Component */}
        <ActivitiesSection days={days} />

        {/* Related Duties Section Component */}
        <RelatedDutiesSection days={days} />

        {/* Homemaking Section Component */}
        <HomemakingSection days={days} />

        {/* Notes and Signatures Section Component */}
        <NotesAndSignaturesSection days={days} />
      </div>

      {/* Add the drawer component at the end */}
      <ShiftHistoryDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </div>
  );
};

export default ViewShiftHistory;
