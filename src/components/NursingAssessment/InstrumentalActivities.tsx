"use client";

import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Textarea } from "../ui/textarea";

export default function InstrumentalActivities() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-4 sm:space-y-6">
      {/* Instrumental Activities Section */}
      <CollapsibleSection
        title="Instrumental Activities of Daily Living"
        className="w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* First Column - Preparing Food */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Preparing Food
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="adequate" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Adequate if ingredients supplied
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="inadequate" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Can make or buy meals but diet is inadequate
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Physically or mentally unable to prepare food
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No opportunity to prepare food or chooses not to prepare food
                  </FormLabel>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Second Column - Housekeeping */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Housekeeping
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="needs-help" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Generally independent but needs help with heavier tasks
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="light-tasks" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Can perform only light tasks adequately
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="light-tasks-inadequate" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Performs light tasks but not adequately
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="needs-supervision" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Needs regular help and/or supervision
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No opportunity to do housework or chooses not to do housework
                  </FormLabel>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Third Column - Shopping */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Shopping
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="small-items" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent but for small items only
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="accompanied" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Can shop if accompanied
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Physically or mentally unable to shop
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No opportunity to shop or chooses not to shop
                  </FormLabel>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Fourth Column - Transportation */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Transportation
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="private-vehicle" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Uses private vehicle
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="taxi-bus" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Uses taxi or bus
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="accompanied" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Must be accompanied
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="driven" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Must be driven
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Physically or mentally unable to travel
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="ambulance" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Needs ambulance for transporting
                  </FormLabel>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Fifth Column - Telephones */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Telephones
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="independent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dial-known" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Can dial well known numbers
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="answers-only" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Answers telephone only
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Physically or mentally unable to use telephone
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="no-opportunity" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    No opportunity to use telephone or chooses not to use telephone
                  </FormLabel>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Sixth Column - Medications/Treatments */}
          <div className="flex flex-col gap-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Medications/Treatments
            </FormLabel>
            <RadioGroup>
              <div className="space-y-2 text-black">
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="responsible" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Completely responsible for self
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="requires-reminder" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Requires reminder or assistance
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="prepared" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Responsible if medications prepared in Blistopax
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unable" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Physically or mentally unable to take medications and conduct treatments
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="resists" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Resists taking medication or conducting treatments
                  </FormLabel>
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
        <div className="w-full">
          <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
            Additional Notes
          </FormLabel>
          <Textarea
            placeholder="Enter Text"
            className="w-full min-h-[200px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] resize-none mt-2"
          />
        </div>
      </CollapsibleSection>
      </div>
    </div>
  );
}
