"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export default function LivingHabits() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-3 gap-10">
        {/* Smoking Habits Section */}
        <CollapsibleSection title="Smoking Habits">
<div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-3 px-3">
  <div className="md:justify-self-start">
    <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
      Client Smokes
    </FormLabel>
    <RadioGroup className="">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="yes" id="smoking-yes" />
        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
          Yes
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="no" id="smoking-no" />
        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
          No
        </FormLabel>
      </div>
    </RadioGroup>
  </div>
  

  <div className="md:justify-self-end">
    <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
      Degree of Problem
    </FormLabel>
    <RadioGroup>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="mild" id="smoking-mild" />
        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
          No Problem
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="moderate" id="smoking-moderate" />
        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
          Some Problem
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="severe" id="smoking-severe" />
        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
          Major Problem
        </FormLabel>
      </div>
    </RadioGroup>
  </div>
</div>

        </CollapsibleSection>

        {/* Alcohol Consumption Section */}
        <CollapsibleSection title="Alcohol Consumption">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-3">
            <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Client Drinks
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="alcohol-yes" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Yes
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="alcohol-no" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
            <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Degree of Problem
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mild" id="alcohol-mild" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No Problem
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="moderate" id="smoking-moderate" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Some Problem
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="severe" id="smoking-severe" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Major Problem
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Eating Habits Section */}
        <CollapsibleSection title="Eating Habits">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Select Diet
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" id="eating-independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Good
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="needs-assistance"
                    id="eating-assistance"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Fair
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dependent" id="eating-dependent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Poor
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Comments
              </FormLabel>
              <Textarea
                placeholder="Enter Text"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[100px] resize-none"
              />
            </div>
          </div>
        </CollapsibleSection>
        {/* Current Diet Section */}
        <CollapsibleSection title="Current Diet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Select Diet
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Regular",
                  "Low Salt",
                  "Diabetic",
                  "Vegetarian",
                  "Low Fat",
                  "Other",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox className="w-6 h-6" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
<div className="space-y-3">
              <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Takes Supplement (E.g. Ensure)
              </FormLabel>
              <Input
                placeholder="Supplements"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <FormLabel className="text-lg mb-6 font-medium text-[#8E8E93] font-['Poppins']">
                Nutritional Requirement
              </FormLabel>
              <Input
                placeholder="Nutritional Requirement"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
              />
            </div>
</div>
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div>
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Additional Notes
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[100px] resize-none w-full"
            />
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
