"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DynamicEmergencyContacts from "@/components/Common/Forms/DynamicEmergencyContacts";

const EmergencyContactsProviders = () => {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-3 gap-10">
        {/* Emergency Contact Information Section */}
        <DynamicEmergencyContacts
          title="Emergency Contact Information"
          minContacts={2}
          showCollapsibleSection={true}
          className="px-3"
        />

        {/* Other Contacts Section */}
        <CollapsibleSection title="Other Contacts">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            {/* Police */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Police
              </FormLabel>
              <Input placeholder="Call 911" defaultValue="Call 911" />
            </div>

            {/* Fire */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Fire
              </FormLabel>
              <Input placeholder="Call 911" defaultValue="Call 911" />
            </div>

            {/* EMS */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                EMS
              </FormLabel>
              <Input placeholder="Call 911" defaultValue="Call 911" />
            </div>

            {/* Local Red Cross */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Local Red Cross
              </FormLabel>
              <Input placeholder="Call 911" defaultValue="Call 911" />
            </div>

            {/* Local Emergency Management Office */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Local Emergency Management Office
              </FormLabel>
              <Input placeholder="Call 911" defaultValue="Call 911" />
            </div>

            {/* Pharmacy */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Pharmacy
              </FormLabel>
              <Input placeholder="123 456 7890" />
            </div>

            {/* Neighbor */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Neighbor
              </FormLabel>
              <Input placeholder="Enter Text" />
            </div>

            {/* Relatives */}
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Relatives
              </FormLabel>
              <Input placeholder="Enter Text" />
            </div>
          </div>
        </CollapsibleSection>

        {/* Medical Equipment Provider Section */}
        <CollapsibleSection title="Medical Equipment Provider">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Name
              </FormLabel>
              <Input placeholder="Medical Equipment Provider Name" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Phone Number
              </FormLabel>
              <Input placeholder="Medical Equipment Provider Phone" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Medical Supplies Provider Section */}
        <CollapsibleSection title="Medical Supplies Provider">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Name
              </FormLabel>
              <Input placeholder="Medical Supplies Provider Name" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Phone Number
              </FormLabel>
              <Input placeholder="Medical Supplies Provider Phone" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Smoke Alarms Section */}
        <CollapsibleSection title="Smoke Alarms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                How many?
              </FormLabel>
              <Input placeholder="Enter Number" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Location of alarm(s)
              </FormLabel>
              <Input placeholder="Location of alarms" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Carbon Monoxide Alarms Section */}
        <CollapsibleSection title="Carbon Monoxide Alarms">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                How many?
              </FormLabel>
              <Input placeholder="Enter Number" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Location of alarm(s)
              </FormLabel>
              <Input placeholder="Location of alarms" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Escape Routes Section */}
        <CollapsibleSection title="Escape Routes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                How many?
              </FormLabel>
              <Input placeholder="Enter Number" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Location of escape routes
              </FormLabel>
              <Input placeholder="Location of escape routes" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Person to call in case of separation Section */}
        <CollapsibleSection title="Person to call in case of separation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 px-3">
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Name
              </FormLabel>
              <Input placeholder="Enter Name" />
            </div>
            <div className="flex flex-col items-start gap-0.5">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Phone Number
              </FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div></div>
          </div>
        </CollapsibleSection>

        {/* Ready List Section */}
        <CollapsibleSection title="Ready List">
          <div className="flex flex-col gap-3 px-3 grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">

              {/* Emergency Survival Kit */}
              <div className="flex flex-col items-start gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Emergency Survival Kit
                </FormLabel>
                <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="survival-kit-yes" />
                    <label
                      htmlFor="survival-kit-yes"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="survival-kit-no" />
                    <label
                      htmlFor="survival-kit-no"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Is the patient using oxygen? */}
              <div className="flex flex-col items-start gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Is the patient using oxygen?
                </FormLabel>
                <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="oxygen-yes" />
                    <label
                      htmlFor="oxygen-yes"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="oxygen-no" />
                    <label
                      htmlFor="oxygen-no"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Ventilator/Light support equipment */}
              <div className="flex flex-col items-start gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Ventilator/Light support equipment
                </FormLabel>
                <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="ventilator-yes" />
                    <label
                      htmlFor="ventilator-yes"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="ventilator-no" />
                    <label
                      htmlFor="ventilator-no"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {/* Food and Water store */}
              <div className="flex flex-col items-start gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Food and Water store for 3 days for each person (1 Gallon per
                  day per person)
                </FormLabel>
                <RadioGroup defaultValue="no" className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="food-water-yes" />
                    <label
                      htmlFor="food-water-yes"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="food-water-no" />
                    <label
                      htmlFor="food-water-no"
                      className="text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    >
                      No
                    </label>
                  </div>
                </RadioGroup>
              </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default EmergencyContactsProviders;
