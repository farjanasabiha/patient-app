"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { CollapsibleSection } from "../Common/sections/CollapsibleSection";

interface NotesAndSignaturesSectionProps {
  days: string[];
}

const NotesAndSignaturesSection: React.FC<NotesAndSignaturesSectionProps> = ({
  days,
}) => {
  return (
    <CollapsibleSection
      title="Notes and Signatures"
      className="mt-3"
    >
      <div className="flex flex-col gap-[12px]">
        {/* Caregiver Notes Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Caregiver Notes
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

              <div className="flex flex-row w-full">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Notes
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3 h-[63px]"
                  >
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="flex flex-row items-start px-[15px] py-[12px] gap-[10px] w-[99px] h-[45px] font-poppins font-normal text-[14px] leading-[21px] text-[#0071A4] hover:text-[#005a83] hover:underline transition-colors whitespace-nowrap">
                            See Notes
                          </button>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-[300px] p-3">
                          <p className="text-sm">
                            Patient was in good spirits today. Completed all
                            scheduled activities and took medications on time.
                            Appetite was good and finished all meals. No
                            concerns to report.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Signature Table */}
        <div className="overflow-x-auto">
          <div className="min-w-[800px]">
            <div className="flex flex-col bg-white rounded-[10px] overflow-hidden border border-[#C7C7CC]">
              <div className="flex flex-row w-full border-b border-[#C7C7CC]">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  Signature
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
                  Aide
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3"
                  >
                    <span className="font-['Damion'] text-[14px] leading-[19px] text-[#1C1C1E]">
                      SampleSign
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-row w-full">
                <div className="flex-[0_0_260px] flex items-center p-3 font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
                  Patient
                </div>
                {days.map((day) => (
                  <div
                    key={day}
                    className="flex-1 flex justify-center items-center p-3"
                  >
                    <span className="font-['Damion'] text-[14px] leading-[19px] text-[#1C1C1E]">
                      SampleSign
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CollapsibleSection>
  );
};

export default NotesAndSignaturesSection;
