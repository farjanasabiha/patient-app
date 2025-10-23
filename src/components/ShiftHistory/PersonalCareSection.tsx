"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CollapsibleSection } from "../Common/sections/CollapsibleSection";

interface PersonalCareSectionProps {
  days: string[];
  weekDates?: string[];
}

const PersonalCareSection: React.FC<PersonalCareSectionProps> = ({ days }) => {
  // Items for Services Requested
  const servicesRequestedItems = [
    "Brush Teeth / Clean Dentures",
    "Clean Hearing Aid(s)",
    "Clean Nasal Cannula",
    "Shave (Electric)",
    "Routine Skin Care",
    "Dressing / Undressing",
    "Nail Care (Filing, DO NOT CUT)",
    "Foot Care",
  ];

  // Items for Bath
  const bathItems = ["Bed", "Sponge", "Tub", "Shower"];

  // Items for Toileting
  const toiletingItems = [
    "Toilet",
    "Bedside Commode",
    "Bed Pan",
    "Urinal",
    "Toilet Hygiene",
  ];

  // Items for Hair Care
  const hairCareItems = ["Wash", "Shampoo"];

  // Items for Incontinent Care
  const incontinentCareItems = ["Changing Diapers", "Skin Care"];

  return (
    <CollapsibleSection
      title="Personal Care"
      className="mt-0"
    >
      <div className="flex flex-col gap-[12px]">
        {/* Services Requested Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Services Requested
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

              {servicesRequestedItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex flex-row w-full ${
                    index !== servicesRequestedItems.length - 1
                      ? "border-b border-[#C7C7CC]"
                      : ""
                  }`}
                >
                  <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                    {item}
                  </div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex-1 flex justify-center items-center p-3"
                    >
                      <Checkbox />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bath Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Bath
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

              {bathItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex flex-row w-full ${
                    index !== bathItems.length - 1
                      ? "border-b border-[#C7C7CC]"
                      : ""
                  }`}
                >
                  <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                    {item}
                  </div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex-1 flex justify-center items-center p-3"
                    >
                      <Checkbox />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Toileting Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Toileting
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

              {toiletingItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex flex-row w-full ${
                    index !== toiletingItems.length - 1
                      ? "border-b border-[#C7C7CC]"
                      : ""
                  }`}
                >
                  <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                    {item}
                  </div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex-1 flex justify-center items-center p-3"
                    >
                      <Checkbox />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hair Care Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Hair Care
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

              {hairCareItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex flex-row w-full ${
                    index !== hairCareItems.length - 1
                      ? "border-b border-[#C7C7CC]"
                      : ""
                  }`}
                >
                  <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                    {item}
                  </div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex-1 flex justify-center items-center p-3"
                    >
                      <Checkbox />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Incontinent Care Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Incontinent Care
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

              {incontinentCareItems.map((item, index) => (
                <div
                  key={item}
                  className={`flex flex-row w-full ${
                    index !== incontinentCareItems.length - 1
                      ? "border-b border-[#C7C7CC]"
                      : ""
                  }`}
                >
                  <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                    {item}
                  </div>
                  {days.map((day) => (
                    <div
                      key={day}
                      className="flex-1 flex justify-center items-center p-3"
                    >
                      <Checkbox />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default PersonalCareSection;
