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
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export default function HomeMakingTask() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6">
        {/* Homemaking Tasks Section */}
        <CollapsibleSection title="Homemaking Tasks">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Make Bed */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Make Bed
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="make-bed" className="w-6 h-6" />
                <FormLabel
                  htmlFor="make-bed"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Make Bed
                </FormLabel>
              </div>
            </div>

            {/* Make Bed Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Make Bed Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Change Linen */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Change Linen
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="change-linen" className="w-6 h-6" />
                <FormLabel
                  htmlFor="change-linen"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Change Linen
                </FormLabel>
              </div>
            </div>

            {/* Change Linen Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Change Linen Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Laundry */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Laundry
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="laundry" className="w-6 h-6" />
                <FormLabel
                  htmlFor="laundry"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Laundry
                </FormLabel>
              </div>
            </div>

            {/* Laundry Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Laundry Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Other 1 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-task-1" className="w-6 h-6" />
                <Input placeholder="Enter Text" className="flex-1" />
              </div>
            </div>

            {/* Other 1 Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Other 2 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-task-2" className="w-6 h-6" />
                <Input placeholder="Enter Text" className="flex-1" />
              </div>
            </div>

            {/* Other 2 Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Light Housekeeping */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Select Light Housekeeping
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Vacuum/Sweep Floors",
                  "Dust Furniture",
                  "Clean Oven/Microwave",
                  "Wet Mop Floors",
                  "Clean Kitchen Surfaces",
                  "Clean Bathroom Sink",
                  "Clean Bathtub/Shower",
                  "Clean Toilet",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`housekeeping-${item
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "-")}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`housekeeping-${item
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, "-")}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            {/* Light Housekeeping Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Light Housekeeping Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="daily">Daily</SelectItem>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="as-needed">As Needed</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div></div>

            {/* Notes Section */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Plan of Care Notes
              </FormLabel>
              <Textarea placeholder="Enter Text" className="min-h-[96px]" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Safety Measures Notes
              </FormLabel>
              <Textarea placeholder="Enter Text" className="min-h-[96px]" />
            </div>

            <div></div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
