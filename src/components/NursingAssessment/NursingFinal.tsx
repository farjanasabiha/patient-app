import React from "react";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "@/components/ui/date-picker";

const NursingFinal: React.FC = () => {
  return (
    <div className="flex flex-col bg-white gap-6 rounded-md">
      {/* Diagnosis Section */}
      <CollapsibleSection title="Diagnosis">
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-3 gap-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-3">
              {/* Primary Diagnosis Code */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Patient Primary Diagnosis Code
                </label>
                <Input
                  placeholder="Primary Diagnosis Code"
                  className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]"
                />
              </div>
              {/* Secondary Diagnosis Code */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Patient Secondary Diagnosis Code
                </label>
                <Input
                  placeholder="Secondary Diagnosis Code"
                  className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]"
                />
              </div>
              {/* Type of Service */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Type of Service needed
                </label>
                <Select>
                  <SelectTrigger className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]">
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="type1">Service Type 1</SelectItem>
                    <SelectItem value="type2">Service Type 2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3">
              {/* Primary Diagnosis */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Patient Primary Diagnosis
                </label>
                <Input
                  placeholder="Primary Diagnosis"
                  className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]"
                />
              </div>
              {/* Secondary Diagnosis */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Patient Secondary Diagnosis
                </label>
                <Input
                  placeholder="Secondary Diagnosis"
                  className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]"
                />
              </div>
              {/* Level of Service */}
              <div className="flex flex-col gap-0.5">
                <label className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px]">
                  Level of Service needed
                </label>
                <Select>
                  <SelectTrigger className="h-[31px] border-[#8E8E93] font-poppins text-[14px] leading-[21px] text-[#1C1C1E]">
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Level 1</SelectItem>
                    <SelectItem value="2">Level 2</SelectItem>
                    <SelectItem value="3">Level 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Column 3 - Empty */}
            <div></div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Vaccination Status Section */}
      <CollapsibleSection title="Vaccination Status">
        <div className="flex flex-col gap-3">
          {/* COVID-19 Row */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Is all COVID 19 vaccinations done?
              </label>
              <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="covid-yes" />
                  <label htmlFor="covid-yes">Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="covid-no" />
                  <label htmlFor="covid-no">No</label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Notes for Covid 19 vaccine
              </label>
              <Textarea placeholder="Enter Text" className="h-[100px]" />
            </div>
            <div className="flex-1" />
          </div>

          {/* Flu Row */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Is all FLU vaccinations done?
              </label>
              <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="flu-yes" />
                  <label htmlFor="flu-yes">Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="flu-no" />
                  <label htmlFor="flu-no">No</label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Notes for Flu vaccine
              </label>
              <Textarea placeholder="Enter Text" className="h-[100px]" />
            </div>
            <div className="flex-1" />
          </div>

          {/* Pneumococcal Row */}
          <div className="flex gap-6">
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Is all Pneumococcal vaccinations done?
              </label>
              <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="pneumo-yes" />
                  <label htmlFor="pneumo-yes">Yes</label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="pneumo-no" />
                  <label htmlFor="pneumo-no">No</label>
                </div>
              </RadioGroup>
            </div>
            <div className="flex-1">
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Notes for Pneumococcal vaccine
              </label>
              <Textarea placeholder="Enter Text" className="h-[100px]" />
            </div>
            <div className="flex-1" />
          </div>
        </div>
      </CollapsibleSection>

      {/* Signature & Date Section */}
      <CollapsibleSection title="Signature & Date">
        <div className="flex justify-center gap-6">
          <div className="flex flex-col gap-3 w-1/3">
            <div>
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                RN Signature
              </label>
              <div className="w-full h-[100px] border border-[#8E8E93] rounded" />
              <button className="mt-3 px-5 py-1.5 bg-[#C7C7CC] text-white rounded-md font-semibold">
                Clear
              </button>
            </div>
            <div>
              <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                Sign Date
              </label>
              <DatePicker
                placeholder="MM/DD/YYYY"
                className="h-[31px] border-[#8E8E93]"
                date={new Date()}
                setDate={(date) => {
                  console.log(date);
                }}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default NursingFinal;
