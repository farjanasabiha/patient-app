"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Textarea } from "../ui/textarea";

export default function AttendantSocialProfile() {
  const OtherCheckboxWithInput = ({ label }: { label: string }) => (
    <div className="flex flex-row items-start gap-2 h-[54px]">
      <div className="flex-none order-0 w-6 h-6">
        <Checkbox className="border-2 border-[#8E8E93]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-0.5 w-[calc(66.67vw/3)] order-1 h-[54px]">
        <FormLabel className="text-sm font-normal text-[#1C1C1E] w-full h-[21px] flex items-center pointer-events-none font-['Poppins']">
          {label}
        </FormLabel>
        <Input
          placeholder="Enter Text"
          className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
        />
      </div>
    </div>
  );
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6">
        {/* Attendant Profile Section */}
        <CollapsibleSection title="Attendant Profile">
          <div className="flex flex-row items-start gap-6">
            {/* Attendant */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Attendant
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Checkbox id="independent" className="w-6 h-6" />
                  <FormLabel
                    htmlFor="independent"
                    className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none"
                  >
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="needs-attendant" className="w-6 h-6" />
                  <FormLabel
                    htmlFor="needs-attendant"
                    className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none"
                  >
                    Needs an attendant
                  </FormLabel>
                </div>
              </div>
            </div>

            {/* Attendant needs met by */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Attendant needs met by
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                {["Spouse", "Friend", "Family"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox className="w-6 h-6" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
                <OtherCheckboxWithInput label="Other" />
              </div>
            </div>

            {/* Frequency of attendant assistance */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Frequency of attendant assistance
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                {[
                  "Intermittent",
                  "Constantly",
                  "During Day",
                  "During Night",
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
          </div>
        </CollapsibleSection>

        {/* Social Profile Section */}
        <CollapsibleSection title="Social Profile">
          <div className="flex flex-row items-start gap-6">
            {/* Housing */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Housing
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {[
                  "House",
                  "Apartment",
                  "Condominium",
                  "Mobile Home",
                  "Room",
                  "Facility",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem value={item.toLowerCase()} />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
                <div className="flex flex-row items-start gap-2 h-[54px]">
                  <div className="flex-none order-0 w-6 h-6">
                    <RadioGroupItem value="other" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-0.5 w-[calc(66.67vw/3)] order-1 h-[54px]">
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] w-full h-[21px] flex items-center pointer-events-none font-['Poppins']">
                      Other
                    </FormLabel>
                    <Input
                      placeholder="Enter Text"
                      className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Living Companions */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Living Companions
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {[
                  "Lives alone",
                  "Lives with spouse or spousal equivalent",
                  "Lives with adult children",
                  "Lives with child(ren)",
                  "Lives with other adult male",
                  "Lives with other adult female",
                  "Principal helper",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={item.toLowerCase().replace(/\s+/g, "-")}
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Housing Area */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Housing Area
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {["Urban", "Rural"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem value={item.toLowerCase()} />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Housing Ownership */}
          <div className="flex flex-row items-start gap-6 mt-6">
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Housing Ownership
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {["Self owned", "Rental"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={item.toLowerCase().replace(/\s+/g, "-")}
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
        </CollapsibleSection>

        {/* Religion & Ethnicity Section */}
        <CollapsibleSection title="Religion & Ethnicity">
          <div className="flex flex-row items-start gap-6">
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Religion & Ethnicity
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                {["Religion", "Ethnicity"].map((item) => (
                  <div
                    key={item}
                    className="flex flex-row items-start gap-2 h-[54px]"
                  >
                    <div className="flex-none order-0 w-6 h-6">
                      <Checkbox className="border-2 border-[#8E8E93]" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-0.5 w-[calc(66.67vw/3)] order-1 h-[54px]">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] w-full h-[21px] flex items-center pointer-events-none font-['Poppins']">
                        {item}
                      </FormLabel>
                      <Input
                        placeholder="Enter Text"
                        className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1" />
            <div className="flex-1" />
          </div>
        </CollapsibleSection>

        {/* Orders for Discipline & Goals Section */}
        <CollapsibleSection title="Orders for Discipline & Goals">
          <div className="flex flex-row items-start gap-6">
            {/* Orders of Discipline 1 */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Orders of Discipline 1
              </FormLabel>
              <Textarea
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[220px] resize-none"
                defaultValue="The RN to assess the patient and supervise the aide at least every six months. Additional assessments must be conducted as needed (PRN) in response to observable changes in the patient's condition, post-hospitalization, or following rehabilitation. The RN to document findings, update the care plan accordingly, and ensure compliance with state regulations."
              />
            </div>

            {/* Orders of Discipline 2 */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Orders of Discipline 2
              </FormLabel>
              <Textarea
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[220px] resize-none"
                defaultValue="PCA/HHA: To assist patient with ADLs/IADLs for 2-3 days per week, 6-8 hrs per visit."
              />
            </div>

            {/* Goals/Rehabilitation */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Goals/Rehabilitation
              </FormLabel>
              <Textarea
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[220px] resize-none"
                defaultValue="Assist with ADLs, Fall precaution and prevention, Maintain adequate nutrition and hydration, keep patient encouraged and motivated. watch for any unusual signs and symptoms, and if noted, report to the supervising RN."
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div className="flex flex-col items-start gap-0.5 w-full">
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
