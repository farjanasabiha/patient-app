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

export default function NutritionAndActivities() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6  grid grid-cols-2 gap-10">
        {/* Nutrition Section */}
        <CollapsibleSection title="Nutrition">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
            {/* Meal Preparation */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Meal Preparation
              </FormLabel>
              <div className="space-y-2">
                {["Breakfast", "Lunch", "Dinner", "Food for next day"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`meal-${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="w-6 h-6"
                      />
                      <FormLabel
                        htmlFor={`meal-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Meal Preparation Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Meal Preparation Frequency
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


            {/* Feeding */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Feeding
              </FormLabel>
              <div className="space-y-2">
                {["Reinforce diet", "Serving", "Clean up"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`feeding-${item.toLowerCase().replace(/\s+/g, "-")}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`feeding-${item
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

            {/* Feeding Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Feeding Frequency
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

            {/* Fluids */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Fluids
              </FormLabel>
              <RadioGroup defaultValue="no">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="fluids-yes" />
                  <FormLabel
                    htmlFor="fluids-yes"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Yes
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="fluids-no" />
                  <FormLabel
                    htmlFor="fluids-no"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    No
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

            {/* Fluid Restrictions */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Fluid Restrictions
              </FormLabel>
              <div className="space-y-2">
                {["Encourage", "Restrict"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox
                      id={`fluid-${item.toLowerCase()}`}
                      className="w-6 h-6"
                    />
                    <FormLabel
                      htmlFor={`fluid-${item.toLowerCase()}`}
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            {/* Other */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-nutrition" className="w-6 h-6" />
                <Input placeholder="Enter Text" className="flex-1" />
              </div>
            </div>

            {/* Other Frequency */}
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

          </div>
        </CollapsibleSection>

        {/* Activities/Assistive Devices Section */}
        <CollapsibleSection title="Activities/Assistive Devices">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3">
            {/* Ambulations */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Ambulations
              </FormLabel>
              <div className="space-y-2">
                {["Walking", "Rollator", "Walker", "Cane", "Wheelchair"].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`ambulation-${item.toLowerCase()}`}
                        className="w-6 h-6"
                      />
                      <FormLabel
                        htmlFor={`ambulation-${item.toLowerCase()}`}
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Ambulation Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Ambulation Frequency
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

            {/* Take client for a walk */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Take client for a walk
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="take-client-walk" className="w-6 h-6" />
                <FormLabel
                  htmlFor="take-client-walk"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Take client for a walk
                </FormLabel>
              </div>
            </div>

            {/* Take client for a walk Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Take client for a walk Frequency
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

            {/* Transferring */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Transferring
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="transferring" className="w-6 h-6" />
                <FormLabel
                  htmlFor="transferring"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Transferring
                </FormLabel>
              </div>
            </div>

            {/* Transferring Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Transferring Frequency
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

            {/* Turning/Positioning */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Turning/Positioning
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="turning-positioning" className="w-6 h-6" />
                <FormLabel
                  htmlFor="turning-positioning"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Turning/Positioning
                </FormLabel>
              </div>
            </div>

            {/* Turning/Positioning Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Turning/Positioning Frequency
              </FormLabel>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2hrs">2hrs</SelectItem>
                  <SelectItem value="4hrs">4hrs</SelectItem>
                  <SelectItem value="6hrs">6hrs</SelectItem>
                  <SelectItem value="8hrs">8hrs</SelectItem>
                  <SelectItem value="every-visit">Every Visit</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Complete Bedrest */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Complete Bedrest
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="complete-bedrest" className="w-6 h-6" />
                <FormLabel
                  htmlFor="complete-bedrest"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Complete Bedrest
                </FormLabel>
              </div>
            </div>

            {/* Complete Bedrest Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Complete Bedrest Frequency
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

            {/* Supervision/Assistance with exercise and therapy */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Supervision/Assistance with exercise and therapy
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="supervision-assistance" className="w-6 h-6" />
                <FormLabel
                  htmlFor="supervision-assistance"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Supervision/Assistance with exercise and therapy
                </FormLabel>
              </div>
            </div>

            {/* Complete Bedrest Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Supervision/Assistance with exercise and therapy Frequency
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

            {/* Weight bearing restrictions */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Weight bearing restrictions
              </FormLabel>
              <RadioGroup defaultValue="no">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="weight-bearing-yes" />
                  <FormLabel
                    htmlFor="weight-bearing-yes"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Yes
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="weight-bearing-no" />
                  <FormLabel
                    htmlFor="weight-bearing-no"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    No
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

            {/* Bedrest with bathroom privileges */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Bedrest with bathroom privileges
              </FormLabel>
              <RadioGroup defaultValue="no">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="bedrest-yes" />
                  <FormLabel
                    htmlFor="bedrest-yes"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Yes
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="bedrest-no" />
                  <FormLabel
                    htmlFor="bedrest-no"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    No
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

            {/* Up as tolerated */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Up as tolerated
              </FormLabel>
              <RadioGroup defaultValue="no">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="up-as-tolerated-yes" />
                  <FormLabel
                    htmlFor="up-as-tolerated-yes"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Yes
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="up-as-tolerated-no" />
                  <FormLabel
                    htmlFor="up-as-tolerated-no"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    No
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

            {/* Other */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-activities" className="w-6 h-6" />
                <Input placeholder="Enter Text" className="flex-1" />
              </div>
            </div>

            {/* Other Frequency */}
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

          </div>
        </CollapsibleSection>

        {/* Related Duties Section */}
        <CollapsibleSection title="Related Duties">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3">
            {/* Medication reminders */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Medication reminders
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="medication-reminders" className="w-6 h-6" />
                <FormLabel
                  htmlFor="medication-reminders"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Medication reminders
                </FormLabel>
              </div>
            </div>

            {/* Medication reminders Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Medication reminders Frequency
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

            {/* Pick up mail */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Pick up mail
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="pick-up-mail" className="w-6 h-6" />
                <FormLabel
                  htmlFor="pick-up-mail"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Pick up mail
                </FormLabel>
              </div>
            </div>

            {/* Pick up mail Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Pick up mail Frequency
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

            {/* Grocery Shopping */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Grocery Shopping
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="grocery-shopping" className="w-6 h-6" />
                <FormLabel
                  htmlFor="grocery-shopping"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Grocery Shopping
                </FormLabel>
              </div>
            </div>

            {/* Grocery Shopping Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Grocery Shopping Frequency
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

            {/* Trash Management */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Trash Management
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="trash-management" className="w-6 h-6" />
                <FormLabel
                  htmlFor="trash-management"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Trash Management
                </FormLabel>
              </div>
            </div>

            {/* Trash Management Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Trash Management Frequency
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

            {/* Other 1 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-duties-1" className="w-6 h-6" />
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

            {/* Other 2 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-duties-2" className="w-6 h-6" />
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
          </div>
        </CollapsibleSection>

        {/* Home Visit / Telephone Check Section */}
        <CollapsibleSection title="Home Visit / Telephone Check">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-3">
            {/* Friendly Home Visit Check */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Friendly Home Visit Check
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="friendly-home-visit" className="w-6 h-6" />
                <FormLabel
                  htmlFor="friendly-home-visit"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Friendly Home Visit Check
                </FormLabel>
              </div>
            </div>

            {/* Friendly Home Visit Check Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Friendly Home Visit Check Frequency
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

            {/* Telephone Check/Monitor */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Telephone Check/Monitor
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="telephone-check" className="w-6 h-6" />
                <FormLabel
                  htmlFor="telephone-check"
                  className="text-sm font-normal text-[#1C1C1E]"
                >
                  Telephone Check/Monitor
                </FormLabel>
              </div>
            </div>

            {/* Telephone Check/Monitor Frequency */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Telephone Check/Monitor Frequency
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

            {/* Other 1 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-visit-1" className="w-6 h-6" />
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

            {/* Other 2 */}
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Other
              </FormLabel>
              <div className="flex items-center gap-2">
                <Checkbox id="other-visit-2" className="w-6 h-6" />
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
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
