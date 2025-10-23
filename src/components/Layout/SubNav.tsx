"use client";

import { OxygenIcon } from "@/components/ui/icons/OxygenIcon";
import { MediumFallIcon } from "@/components/ui/icons/MediumFallIcon";
import { TAL2Icon } from "@/components/ui/icons/TAL2Icon";

interface SubNavProps {
  patientName: string;
  dob: string;
  age: number;
  phone: string;
  diagnosisCodes: string[];
  hasEmergency?: boolean;
  hasFallRisk?: boolean;
  hasTAL?: boolean;
}

export function SubNav({
  patientName,
  dob,
  age,
  phone,
  diagnosisCodes,
  hasEmergency = false,
  hasFallRisk = false,
  hasTAL = false,
}: SubNavProps) {
  return (
    <div className="w-full px-7 py-1.5 bg-indigo-500 inline-flex justify-between items-center">
      <div className="justify-center text-white text-xs font-semibold font-['Poppins']">
        Name: {patientName}
      </div>
      <div className="justify-center text-white text-xs font-semibold font-['Poppins']">
        DOB: {dob}
      </div>
      <div className="justify-center text-white text-xs font-semibold font-['Poppins']">
        Age: {age} years
      </div>
      <div className="justify-center text-white text-xs font-semibold font-['Poppins']">
        Phone: {phone}
      </div>
      <div className="justify-center text-white text-xs font-semibold font-['Poppins']">
        Diagnosis Code(s): {diagnosisCodes.join(", ")}
      </div>
      <div className="flex justify-start items-center gap-1">
        {hasEmergency && (
          <div
            data-state="On Oxygen"
            className="bg-sky-300 rounded-[2px] flex justify-start items-center gap-2.5"
          >
            <OxygenIcon width={24} height={24} className="text-[#1C1C1E]" />
          </div>
        )}
        {hasFallRisk && (
          <div
            data-state="Medium"
            className="bg-yellow-400 rounded-sm flex justify-start items-center"
          >
            <MediumFallIcon width={24} height={24} className="text-[#1C1C1E]" />
          </div>
        )}
        {hasTAL && (
          <div
            data-state="TAL 2"
            className="bg-blue-900 rounded-sm flex justify-start items-center"
          >
            <TAL2Icon width={24} height={24} className="text-white" />
          </div>
        )}
      </div>
    </div>
  );
}
