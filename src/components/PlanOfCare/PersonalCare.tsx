"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export default function PersonalCare() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-2 gap-10">
        {/* Patient's Functional Limitations Section */}
        <CollapsibleSection title="Patient's Functional Limitations">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
            {/* Select Limitations */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Select Limitations
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Hearing",
                  "Speech",
                  "Vision",
                  "Mobility",
                  "Swallowing",
                  "Breathing",
                  "Cognition",
                  "Performing Activities of Daily Living",
                ].map((limitation) => (
                  <div key={limitation} className="flex items-center gap-2">
                    <Checkbox
                      id={`limitation-${limitation}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`limitation-${limitation}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {limitation}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

<div>
              {/* Select Allergy(ies) */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Select Allergy(ies)
              </FormLabel>
              <div className="space-y-2">
                <RadioGroup defaultValue="no">
                  <div className="flex flex-row items-start gap-2">
                    <RadioGroupItem
                      value="yes"
                      id="allergy-yes"
                      className="mt-1"
                    />
                    <div className="flex-1 flex flex-col justify-center items-start gap-0.5">
                      <FormLabel
                        htmlFor="allergy-yes"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        Yes
                      </FormLabel>
                      <Input
                        placeholder="Enter Text"
                        className="h-8 px-2.5 py-[5px] bg-[#F1FBFF] border border-[#8E8E93] rounded-[3px] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="allergy-no" />
                    <FormLabel
                      htmlFor="allergy-no"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            {/* Special Diet and/or Nutritional Needs */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Special Diet and/or Nutritional Needs
              </FormLabel>
              <div className="space-y-2">
                <RadioGroup defaultValue="no">
                  <div className="flex flex-row items-start gap-2">
                    <RadioGroupItem
                      value="yes"
                      id="diet-yes"
                      className="mt-1"
                    />
                    <div className="flex-1 flex flex-col justify-center items-start gap-0.5">
                      <FormLabel
                        htmlFor="diet-yes"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        Yes
                      </FormLabel>
                      <Input
                        placeholder="Enter Text"
                        className="h-8 px-2.5 py-[5px] bg-[#F1FBFF] border border-[#8E8E93] rounded-[3px] w-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="diet-no" />
                    <FormLabel
                      htmlFor="diet-no"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          {/* Height */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Height</FormLabel>
            <div className="flex gap-3">
              {/* Feet input */}
              <div className="relative flex-1">
                <Input
                  placeholder="5"
                  className="pr-8"
                  type="number"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
                  ft
                </span>
              </div>
              {/* Inches input */}
              <div className="relative flex-1">
                <Input
                  placeholder="4"
                  className="pr-8"
                  type="number"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
                  in
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Weight</FormLabel>
            <div className="relative">
              <Input
                type="number"
                placeholder="100"
                className="pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                lbs
              </span>
            </div>
          </div>
</div>
          </div>


        </CollapsibleSection>

        {/* Personal Care Section */}
        <CollapsibleSection title="Personal Care">
          {/* Brush Teeth/Clean Dentures */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Brush Teeth/Clean Dentures
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="brush-teeth" className="w-6 h-6" />
                <FormLabel
                  htmlFor="brush-teeth"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Brush Teeth/Clean Dentures
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Brush Teeth/Clean Dentures Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice-daily">Twice Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clean Hearing Aid(s) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Clean Hearing Aid(s)
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="clean-hearing-aid" className="w-6 h-6" />
                <FormLabel
                  htmlFor="clean-hearing-aid"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Clean Hearing Aid(s)
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Clean Hearing Aid(s) Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Clean Nasal Cannula */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3     ">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Clean Nasal Cannula
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="clean-nasal-cannula" className="w-6 h-6" />
                <FormLabel
                  htmlFor="clean-nasal-cannula"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Clean Nasal Cannula
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Clean Nasal Cannula Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Shave (Electric) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Shave (Electric)
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="shave-electric" className="w-6 h-6" />
                <FormLabel
                  htmlFor="shave-electric"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Shave (Electric)
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Shave (Electric) Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Routine Skin Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Routine Skin Care
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="routine-skin-care" className="w-6 h-6" />
                <FormLabel
                  htmlFor="routine-skin-care"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Routine Skin Care
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Routine Skin Care Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dressing/Undressing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Dressing/Undressing
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="dressing-undressing" className="w-6 h-6" />
                <FormLabel
                  htmlFor="dressing-undressing"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Dressing/Undressing
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Dressing/Undressing Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice-daily">Twice Daily</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Bath */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Bath
              </FormLabel>
              <div className="space-y-2">
                {["Bed", "Sponge", "Tub", "Shower"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`bath-${item.toLowerCase()}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`bath-${item.toLowerCase()}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Bath Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice-weekly">Twice Weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Hair Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Hair Care
              </FormLabel>
              <div className="space-y-2">
                {["Wash", "Shampoo"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`hair-${item.toLowerCase()}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`hair-${item.toLowerCase()}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Hair Care Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="twice-weekly">Twice Weekly</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Toileting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Toileting
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Toilet",
                  "Bedside Commode",
                  "Bedpan",
                  "Urinal",
                  "Toilet Hygiene",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`toilet-${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`toilet-${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Toileting Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Nail Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Nail Care
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="nail-care" className="w-6 h-6" />
                <FormLabel
                  htmlFor="nail-care"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Nail Care (Filing, DO NOT CUT)
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Nail Care Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Foot Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Foot Care
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="foot-care" className="w-6 h-6" />
                <FormLabel
                  htmlFor="foot-care"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Foot Care
                </FormLabel>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Foot Care Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="biweekly">Bi-weekly</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Incontinent Care */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-3 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Incontinent Care
              </FormLabel>
              <div className="space-y-2">
                {["Changing Diapers", "Skin Care"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`incontinent-${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`incontinent-${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Incontinent Care Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                  <SelectItem value="scheduled">Scheduled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
