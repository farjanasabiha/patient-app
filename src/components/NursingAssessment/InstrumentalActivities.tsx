"use client";

import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Textarea } from "../ui/textarea";

export default function InstrumentalActivities() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-4 sm:space-y-6 grid grid-cols-2 gap-10">
      {/* Instrumental Activities Section */}
      <CollapsibleSection
        title="Instrumental Activities of Daily Living"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-3">
          {/* First Column - Preparing Food */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Preparing Food
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <label>
                    Independent
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="adequate" />
                  <label>
                    Adequate if ingredients supplied
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="inadequate" />
                  <label>
                    Can make or buy meals but diet is inadequate
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <label>
                    Physically or mentally unable to prepare food
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <label>
                    No opportunity to prepare food or chooses not to prepare
                    food
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Second Column - Housekeeping */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Housekeeping
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <label>
                    Independent
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="needs-help" />
                  <label>
                    Generally independent but needs help with heavier tasks
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="light-tasks" />
                  <label>
                    Can perform only light tasks adequately
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="light-tasks-inadequate" />
                  <label>
                    Performs light tasks but not adequately
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="needs-supervision" />
                  <label>
                    Needs regular help and/or supervision
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <label>
                    No opportunity to do housework or chooses not to do
                    housework
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Third Column - Shopping */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Shopping
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <label>
                    Independent
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="small-items" />
                  <label>
                    Independent but for small items only
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="accompanied" />
                  <label>
                    Can shop if accompanied
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <label>
                    Physically or mentally unable to shop
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <label>
                    No opportunity to shop or chooses not to shop
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Fourth Column - Transportation */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Transportation
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="private-vehicle" />
                  <label>
                    Uses private vehicle
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="taxi-bus" />
                  <label>
                    Uses taxi or bus
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <label>
                    Independent
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="accompanied" />
                  <label>
                    Must be accompanied
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="driven" />
                  <label>
                    Must be driven
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <label>
                    Physically or mentally unable to travel
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="ambulance" />
                  <label>
                    Needs ambulance for transporting
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Fifth Column - Telephones */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Telephones
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <label>
                    Independent
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dial-known" />
                  <label>
                    Can dial well known numbers
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="answers-only" />
                  <label>
                    Answers telephone only
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <label>
                    Physically or mentally unable to use telephone
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <label>
                    No opportunity to use telephone or chooses not to use
                    telephone
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Sixth Column - Medications/Treatments */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Medications/Treatments
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 sm:space-y-3 lg:space-y-4 2xl:space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="responsible" />
                  <label>
                    Completely responsible for self
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="requires-reminder" />
                  <label>
                    Requires reminder or assistance
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="prepared" />
                  <label>
                    Responsible if medications prepared in Blistopax
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <label>
                    Physically or mentally unable to take medications and
                    conduct treatments
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="resists" />
                  <label>
                    Resists taking medication or conducting treatments
                  </label>
                </div>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CollapsibleSection>

      {/* Additional Notes Section */}
      <CollapsibleSection
        title="Additional Notes"
        className="w-full text-[#7E22CE]"
      >
        <div className="w-full px-3">
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
