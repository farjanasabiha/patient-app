"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Textarea } from "../ui/textarea";

export default function DailyLiving() {
  const OtherCheckboxWithInput = ({ label }: { label: string }) => (
    <div className="flex flex-row items-start gap-2 min-h-[54px]">
      <div className="flex-none order-0 w-6 h-6">
        <Checkbox className="border-2 border-[#8E8E93]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-0.5 flex-1 order-1 min-h-[54px]">
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
      <div className="space-y-4 sm:space-y-6">
        {/* Communication Section */}
        <CollapsibleSection title="Communication">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Languages Spoken
              </FormLabel>
              <div className="space-y-2">
                {[
                  "English",
                  "Italian",
                  "French",
                  "Spanish",
                  "Chinese",
                  "Russian",
                  "Japanese",
                  "East Asian",
                ].map((item) => (
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

            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Speech
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="unimpaired" id="speech-unimpaired" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Unimpaired
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="simple-phrases-understandable"
                    id="speech-simple-understandable"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Simple Phrases - Understandable
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="simple-phrases-partially"
                    id="speech-simple-partially"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Simple Phrases - Partially Understandable
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="isolated-words"
                    id="speech-isolated-words"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Isolated Words - Understandable
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="not-understandable"
                    id="speech-not-understandable"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Speech not Understandable or does not make sense
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="does-not-speak"
                    id="speech-does-not-speak"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Does not Speak
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Understanding
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="unimpaired"
                    id="understanding-unimpaired"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Unimpaired
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="understands-simple-phrases"
                    id="understanding-simple-phrases"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Understands Simple Phrases
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="understands-key-words"
                    id="understanding-key-words"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Understands Key Words Only
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="understanding-unknown"
                    id="understanding-unknown"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Understanding Unknown
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="not-responsive"
                    id="understanding-not-responsive"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Not Responsive
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Activities of Daily Living Section */}
        <CollapsibleSection title="Activities of Daily Living">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Mobility Aids
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Uses Cane",
                  "Uses Walker",
                  "Uses Crutches",
                  "Uses Manual Wheelchair",
                  "Uses Electric Wheelchair",
                  "Uses Grab Bars",
                ].map((item) => (
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

            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Activities Permitted
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Bedrest BRP",
                  "Up as Tolerated",
                  "Transfer Bed/Chair",
                  "Exercise",
                  "Partial Weight Bearing",
                  "No Restrictions",
                ].map((item) => (
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

            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Functional Limitations
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Amputation",
                  "Bowel/Bladder",
                  "Contracture",
                  "Hearing",
                  "Paralysis",
                  "Endurance",
                  "Ambulation",
                  "Speech",
                  "Legally Blind",
                  "Dyspnea with Minimal Exertion",
                ].map((item) => (
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
          </div>

          <div className="mt-4">
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Ambulation
            </FormLabel>
            <RadioGroup>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="independent-normal"
                  id="ambulation-independent-normal"
                />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Independent in normal environments
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="independent-specific"
                  id="ambulation-independent-specific"
                />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Independent only in specific environment
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="requires-supervision"
                  id="ambulation-requires-supervision"
                />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Requires supervision
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="requires-occasional"
                  id="ambulation-requires-occasional"
                />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Requires occasional or minor assistance
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem
                  value="requires-significant"
                  id="ambulation-requires-significant"
                />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Requires significant continued assistance
                </FormLabel>
              </div>
            </RadioGroup>
          </div>
        </CollapsibleSection>

        {/* Transferring Section */}
        <CollapsibleSection title="Transferring">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Transfer Ability
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="independent"
                    id="transfer-independent"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    value="needs-supervision"
                    id="transfer-needs-supervision"
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Needs Supervision
                  </FormLabel>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <RadioGroupItem
                      value="needs-assistance"
                      id="transfer-needs-assistance"
                    />
                    <div className="flex flex-col">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        Needs Assistance
                      </FormLabel>
                      <div className="pl-0 mt-2 space-y-2">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none flex-shrink-0">
                            Needs supervision transferring to:
                          </FormLabel>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Bed
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Chair
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Toilet
                            </FormLabel>
                          </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none flex-shrink-0">
                            Needs intermittent assistance transferring to:
                          </FormLabel>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Bed
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Chair
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Toilet
                            </FormLabel>
                          </div>
                          </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none flex-shrink-0">
                            Needs continued assistance transferring to:
                          </FormLabel>
                          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Bed
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Chair
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Toilet
                            </FormLabel>
                          </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="dependent" id="transfer-dependent" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Dependent
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Bathing Section */}
        <CollapsibleSection title="Bathing">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Bathing
              </FormLabel>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent in bathtub or shower
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Independent with mechanical aid (E.g. Bath seat)
                  </FormLabel>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Checkbox className="w-6 h-6" />
                    <div className="flex flex-col space-y-2">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        Requires minor assistance or supervision
                      </FormLabel>
                      <div className="pl-6 space-y-2">
                        <div className="flex items-center gap-2">
                          <Checkbox className="w-6 h-6" />
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                            Getting in and out of tub/shower
                          </FormLabel>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox className="w-6 h-6" />
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                            Turning taps on and off
                          </FormLabel>
                        </div>
                        <div className="flex items-center gap-2">
                          <Checkbox className="w-6 h-6" />
                          <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                            Washing back
                          </FormLabel>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Requires continued assistance
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Resists assistance
                  </FormLabel>
                </div>
                <OtherCheckboxWithInput label="Other" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Dressing Section */}
        <CollapsibleSection title="Dressing">
          <div>
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Dressing
            </FormLabel>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox className="w-6 h-6" />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Independent
                </FormLabel>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Checkbox className="w-6 h-6" />
                  <div className="flex flex-col space-y-2">
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Supervision or needs some help
                    </FormLabel>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Selecting appropriate clothing
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Coordinating colors
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Checkbox className="w-6 h-6" />
                  <div className="flex flex-col space-y-2">
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Periodic or daily help needed
                    </FormLabel>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Putting on clothes
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Doing up buttons, laces, zippers
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Pulling in trousers, socks, shoes
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Determining condition or cleanliness of clothing
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Grooming & Hygiene Section */}
        <CollapsibleSection title="Grooming & Hygiene">
          <div>
            <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
              Grooming & Hygiene
            </FormLabel>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox className="w-6 h-6" />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Independent
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="w-6 h-6" />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Requires reminder, motivation and/or direction
                </FormLabel>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Checkbox className="w-6 h-6" />
                  <div className="flex flex-col space-y-2">
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Requires assistance with some things
                    </FormLabel>
                    <div className="pl-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Putting toothpaste on toothbrush
                        </FormLabel>
                      </div>
                      <div className="flex items-center gap-2">
                        <Checkbox className="w-6 h-6" />
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Using electric razor
                        </FormLabel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="w-6 h-6" />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Requires total assistance
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox className="w-6 h-6" />
                <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                  Resists assistance
                </FormLabel>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Eating Section */}
        <CollapsibleSection title="Eating">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Eating
              </FormLabel>
              <RadioGroup>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="independent"
                      id="eating-independent"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Independent
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="independent-special"
                      id="eating-independent-special"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Independent with special provision for disability
                    </FormLabel>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <RadioGroupItem
                        value="intermittent-help"
                        id="eating-intermittent-help"
                      />
                      <div className="flex flex-col space-y-2">
                        <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                          Requires intermittent help with
                        </FormLabel>
                        <div className="pl-6 space-y-2">
                          <div className="flex items-center gap-2">
                            <Checkbox className="w-6 h-6" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Cutting up/Pureeing food
                            </FormLabel>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="must-be-fed"
                      id="eating-must-be-fed"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Must be fed
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="resists-feeding"
                      id="eating-resists-feeding"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Resists feeding
                    </FormLabel>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Bladder Control Section */}
        <CollapsibleSection title="Bladder Control">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Bladder Control
              </FormLabel>
              <RadioGroup>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="totally-continent"
                      id="bladder-totally-continent"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Totally continent
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="routine-toileting"
                      id="bladder-routine-toileting"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Needs routine toileting or reminders
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="incontinent-identifiable"
                      id="bladder-incontinent-identifiable"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Incontinent due to identifiable factors
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="incontinent-once"
                      id="bladder-incontinent-once"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Incontinent once per day
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="incontinent-more"
                      id="bladder-incontinent-more"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Incontinent more than once per day
                    </FormLabel>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Bowel Control Section */}
        <CollapsibleSection title="Bowel Control">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Bowel Control
              </FormLabel>
              <RadioGroup>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="total-control"
                      id="bowel-total-control"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Has total control
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="routine-toileting"
                      id="bowel-routine-toileting"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Needs routine toileting or reminders
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="no-control-identifiable"
                      id="bowel-no-control-identifiable"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      No bowel control due to identifiable factors
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="loses-control-once"
                      id="bowel-loses-control-once"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Loses bowel control once per day
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      value="loses-control-more"
                      id="bowel-loses-control-more"
                    />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                      Loses bowel control more than once per day
                    </FormLabel>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>

        {/* Toileting Section */}
        <CollapsibleSection title="Toileting">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Toileting
              </FormLabel>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Requires raised toilet seat or commode
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Uses has difficulty with buttons and zippers
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Needs help with aids
                  </FormLabel>
                </div>
                <OtherCheckboxWithInput label="Other" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Exercising Section */}
        <CollapsibleSection title="Exercising">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-2">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Exercising
              </FormLabel>
              <div className="space-y-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Checkbox className="w-6 h-6" />
                    <div className="flex flex-col space-y-2">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        Exercises Regularly
                      </FormLabel>
                      <div className="pl-6 space-y-2">
                        <RadioGroup>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem value="daily" id="exercise-daily" />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Daily
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="alternate-days"
                              id="exercise-alternate-days"
                            />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Alternate days
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="twice-week"
                              id="exercise-twice-week"
                            />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Twice a week
                            </FormLabel>
                          </div>
                          <div className="flex items-center gap-2">
                            <RadioGroupItem
                              value="weekly"
                              id="exercise-weekly"
                            />
                            <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                              Weekly
                            </FormLabel>
                          </div>
                          <div className="flex flex-row items-start gap-2 h-[54px]">
                            <div className="flex-none order-0 w-6 h-6 mt-1">
                              <RadioGroupItem
                                value="other"
                                id="exercise-other"
                              />
                            </div>
                            <div className="flex flex-col justify-center items-start gap-0.5 w-full lg:w-[calc((66.67vw/3)-3.3rem)] order-1 h-[54px]">
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
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Checkbox className="w-6 h-6" />
                    <div className="flex flex-col space-y-2">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        Time and/or distance
                      </FormLabel>
                      <div className="w-full lg:w-[calc(66.67vw/3)]">
                        <Input
                          placeholder="Enter Text"
                          className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-start gap-2">
                    <Checkbox className="w-6 h-6" />
                    <div className="flex flex-col space-y-2">
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        Recent changes to exercise regime
                      </FormLabel>
                      <div className="w-full lg:w-[calc(66.67vw/3)]">
                        <Input
                          placeholder="Enter Text"
                          className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Exercises alone
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox className="w-6 h-6" />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                    Exercises with attendant
                  </FormLabel>
                </div>
                <OtherCheckboxWithInput label="Other" />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
            <div className="col-span-3">
              <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                Additional Notes
              </FormLabel>
              <div className="space-y-2">
                <div className="w-full">
                  <Textarea
                    placeholder="Enter Text"
                    className="w-full min-h-[200px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
