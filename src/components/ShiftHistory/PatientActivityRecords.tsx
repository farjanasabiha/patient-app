"use client";

import { useState } from "react";
import PersonalCareSection from "./PersonalCareSection";
import NutritionSection from "./NutritionSection";
import ActivitiesSection from "./ActivitiesSection";
import RelatedDutiesSection from "./RelatedDutiesSection";
import HomemakingSection from "./HomemakingSection";
import NotesAndSignaturesSection from "./NotesAndSignaturesSection";

import { DateNavigation } from "../Common/DateNavigation";
import { Breadcrumb } from "../Common/breadcrumbs/Breadcrumb";
import {
  formatShortDate,
  formatWeekDateRange,
  getWeekStartDate,
  getWeekEndDate,
} from "@/lib/time";

interface PatientActivityRecordsProps {
  patientName: string;
  patientDOB: string;
  breadcrumbItems?: Array<{
    label: string;
    href?: string;
    active?: boolean;
  }>;
}

const PatientActivityRecords: React.FC<PatientActivityRecordsProps> = ({
  patientName,
  patientDOB,
  breadcrumbItems,
}) => {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [currentWeek, setCurrentWeek] = useState({
    start: getWeekStartDate(new Date()),
    end: getWeekEndDate(new Date()),
  });

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
    return formatWeekDateRange(currentWeek.start, currentWeek.end);
  };

  const getDatesForWeek = () => {
    const dates = [] as string[];
    const weekStart = new Date(currentWeek.start);

    for (let i = 0; i < 7; i++) {
      const date = new Date(weekStart);
      date.setDate(weekStart.getDate() + i);
      dates.push(formatShortDate(date));
    }

    return dates;
  };

  const weekDates = getDatesForWeek();

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col gap-[12px]">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <Breadcrumb
            items={
              breadcrumbItems || [
                {
                  label: "Patient Activity Records",
                  href: "/patient-activity",
                },
                { label: patientName, active: true },
              ]
            }
          />
        </div>

        {/* Patient Name and DOB */}
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold">{patientName}</h2>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold">
            DOB: {patientDOB}
          </p>
        </div>

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
    </div>
  );
};

export default PatientActivityRecords;
