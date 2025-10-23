"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CollapsibleSection } from "../Common/sections/CollapsibleSection";

interface HomemakingSectionProps {
  days: string[];
}

const HomemakingSection: React.FC<HomemakingSectionProps> = ({ days }) => {
  // Items for Services Requested
  const servicesRequestedItems = [
    "Make Bed",
    "Change Linen",
    "Laundry",
    "Other (specify)",
    "Other (specify)",
  ];

  // Items for Homemaking Tasks
  const homemakingTasksItems = [
    "Vacuum / Sweep Floors",
    "Dust Furniture",
    "Clean Over / Microwave",
    "Wet Mop Floors",
    "Clean Kitchen Surfaces",
    "Clean Bathroom Sink",
    "Clean Bathtub / Shower",
    "Clean Toilet",
  ];

  return (
    <CollapsibleSection
      title="Homemaking Tasks"
      className="mt-3"
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
                  key={`${item}-${index}`}
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

        {/* Homemaking Tasks Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Homemaking Tasks
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

              {homemakingTasksItems.map((item, index) => (
                <div
                  key={`${item}-${index}`}
                  className={`flex flex-row w-full ${
                    index !== homemakingTasksItems.length - 1
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

export default HomemakingSection;
