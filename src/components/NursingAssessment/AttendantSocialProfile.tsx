"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Textarea } from "../ui/textarea";

export default function AttendantSocialProfile() {
  const OtherCheckboxWithInput = ({ label }: { label: string }) => (
    <div className="flex flex-row items-start gap-2 min-h-[54px]">
      <div className="flex-none order-0 w-6 h-6">
        <Checkbox className="border-2 border-[#8E8E93]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-0.5 flex-1 order-1 min-h-[54px]">
        <FormLabel>
          {label}
        </FormLabel>
        <Input
          placeholder="Enter Text"
        />
      </div>
    </div>
  );
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-4 sm:space-y-6 grid grid-cols-2 gap-10">
        {/* Attendant Profile Section */}
        <CollapsibleSection title="Attendant Profile">
          <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-6 px-3">
            {/* Attendant */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Attendant
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-2">
                  <Checkbox id="independent" className="w-6 h-6" />
                  <FormLabel
                    htmlFor="independent"
                  >
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="needs-attendant" className="w-6 h-6" />
                  <FormLabel
                    htmlFor="needs-attendant"
                  >
                    Needs an attendant
                  </FormLabel>
                </div>
              </div>
            </div>

            {/* Attendant needs met by */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Attendant needs met by
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                {["Spouse", "Friend", "Family"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox className="w-6 h-6" />
                    <FormLabel>
                      {item}
                    </FormLabel>
                  </div>
                ))}
                <OtherCheckboxWithInput label="Other" />
              </div>
            </div>

            {/* Frequency of attendant assistance */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
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
                    <FormLabel>
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
          <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-6 px-3">
            {/* Housing */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
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
                    <label>
                      {item}
                    </label>
                  </div>
                ))}
                <div className="flex flex-row items-start gap-2 min-h-[54px]">
                  <div className="flex-none order-0 w-6 h-6">
                    <RadioGroupItem value="other" />
                  </div>
                  <div className="flex flex-col justify-center items-start gap-0.5 flex-1 order-1 min-h-[54px]">
                    <label>
                      Other
                    </label>
                    <Input
                      placeholder="Enter Text"
                    />
                  </div>
                </div>
              </RadioGroup>
            </div>

            {/* Living Companions */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
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
                    <label>
                      {item}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Housing Area */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Housing Area
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {["Urban", "Rural"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem value={item.toLowerCase()} />
                    <label>
                      {item}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          {/* Housing Ownership */}
          <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-6 mt-4 sm:mt-6">
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Housing Ownership
              </FormLabel>
              <RadioGroup className="flex flex-col gap-2 w-full">
                {["Self owned", "Rental"].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <RadioGroupItem
                      value={item.toLowerCase().replace(/\s+/g, "-")}
                    />
                    <label>
                      {item}
                    </label>
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
          <div className="flex flex-col md:flex-row items-start gap-3 sm:gap-6 px-3">
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Religion & Ethnicity
              </FormLabel>
              <div className="flex flex-col gap-2 w-full">
                {["Religion", "Ethnicity"].map((item) => (
                  <div
                    key={item}
                    className="flex flex-row items-start gap-2 min-h-[54px]"
                  >
                    <div className="flex-none order-0 w-6 h-6">
                      <Checkbox className="border-2 border-[#8E8E93]" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-0.5 flex-1 order-1 min-h-[54px]">
                      <label>
                        {item}
                      </label>
                      <Input
                        placeholder="Enter Text"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-3 sm:gap-6 px-3">
            {/* Orders of Discipline 1 */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Orders of Discipline 1
              </FormLabel>
              <Textarea
                defaultValue="The RN to assess the patient and supervise the aide at least every six months. Additional assessments must be conducted as needed (PRN) in response to observable changes in the patient's condition, post-hospitalization, or following rehabilitation. The RN to document findings, update the care plan accordingly, and ensure compliance with state regulations."
              />
            </div>

            {/* Orders of Discipline 2 */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Orders of Discipline 2
              </FormLabel>
              <Textarea
                defaultValue="PCA/HHA: To assist patient with ADLs/IADLs for 2-3 days per week, 6-8 hrs per visit."
              />
            </div>

            {/* Goals/Rehabilitation */}
            <div className="flex flex-col items-start gap-0.5 flex-1">
              <FormLabel>
                Goals/Rehabilitation
              </FormLabel>
              <Textarea
                defaultValue="Assist with ADLs, Fall precaution and prevention, Maintain adequate nutrition and hydration, keep patient encouraged and motivated. watch for any unusual signs and symptoms, and if noted, report to the supervising RN."
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div className="flex flex-col items-start gap-0.5 w-full px-3">
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
