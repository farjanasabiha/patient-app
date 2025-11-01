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
      <div className="space-y-4 sm:space-y-6 grid grid-cols-2 gap-10">
        {/* Smoking Habits Section */}
        <CollapsibleSection title="Smoking Habits">
<div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-3 sm:gap-6 px-3">
  <div className="md:justify-self-start">
    <FormLabel>
      Client Smokes
    </FormLabel>
    <RadioGroup className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <RadioGroupItem value="yes" id="smoking-yes" />
        <label>
          Yes
        </label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="no" id="smoking-no" />
        <label>
          No
        </label>
      </div>
    </RadioGroup>
  </div>
  

  <div className="md:justify-self-end">
    <FormLabel>
      Degree of Problem
    </FormLabel>
    <RadioGroup>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="mild" id="smoking-mild" />
        <FormLabel>
          No Problem
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="moderate" id="smoking-moderate" />
        <FormLabel>
          Some Problem
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="severe" id="smoking-severe" />
        <FormLabel>
          Major Problem
        </FormLabel>
      </div>
    </RadioGroup>
  </div>
</div>

        </CollapsibleSection>

        {/* Alcohol Consumption Section */}
        <CollapsibleSection title="Alcohol Consumption">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 px-3">
            <div className="md:justify-self-start">
              <FormLabel>
                Client Drinks
              </FormLabel>
              <RadioGroup className="flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="yes" id="alcohol-yes" />
                  <label>
                    Yes
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no" id="alcohol-no" />
                  <label>
                    No
                  </label>
                </div>
              </RadioGroup>
            </div>
            <div className="md:justify-self-end">
              <FormLabel>
                Degree of Problem
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="mild" id="alcohol-mild" />
                  <FormLabel>
                    No Problem
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="moderate" id="smoking-moderate" />
                  <FormLabel>
                    Some Problem
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="severe" id="smoking-severe" />
                  <FormLabel>
                    Major Problem
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Eating Habits Section */}
        <CollapsibleSection title="Eating Habits">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 px-3">
            <div>
              <FormLabel>
                Select Diet
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" id="eating-independent" />
                  <FormLabel>
                    Good
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="needs-assistance"
                    id="eating-assistance"
                  />
                  <FormLabel>
                    Fair
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dependent" id="eating-dependent" />
                  <FormLabel>
                    Poor
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
            <div>
              <FormLabel>
                Comments
              </FormLabel>
              <Textarea
                placeholder="Enter Text"
              />
            </div>
          </div>
        </CollapsibleSection>
        {/* Current Diet Section */}
        <CollapsibleSection title="Current Diet">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6 px-3">
            <div>
              <FormLabel>
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
                    <FormLabel>
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
<div className="space-y-3">
              <div>
              <FormLabel>
                Takes Supplement (E.g. Ensure)
              </FormLabel>
              <Input
                placeholder="Supplements"
              />
            </div>
            <div>
              <FormLabel>
                Nutritional Requirement
              </FormLabel>
              <Input
                placeholder="Nutritional Requirement"
              />
            </div>
</div>
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div className="px-3">
            <FormLabel>
              Additional Notes
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
            />
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
