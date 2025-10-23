"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export default function MedicalInfo2() {
  const OtherCheckboxWithInput = ({ label }: { label: string }) => (
    <div className="flex flex-row items-start gap-2 h-[54px]">
      <div className="flex-none order-0 w-6 h-6">
        <Checkbox className="border-2 border-[#8E8E93]" />
      </div>
      <div className="flex flex-col justify-center items-start gap-0.5 flex-1 order-1 w-[269.67px] h-[54px]">
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
        {/* Medication & Safety Section */}
        <CollapsibleSection title="Medication & Safety">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Medication Allergies, Food, and Other Allergies
              </FormLabel>
              <Input
                placeholder="Allergies"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Drug Interactions
              </FormLabel>
              <Input
                placeholder="Interactions"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
              />
            </div>
            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Safety Measures
              </FormLabel>
              <Input
                placeholder="Safety Measures"
                className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Prognosis Section */}
        <CollapsibleSection title="Prognosis">
          <div>
            <FormLabel className="text-xs font-semibold text-[#8E8E93]">
              Prognosis
            </FormLabel>
            <RadioGroup defaultValue="fair" className="space-y-2">
              {["Poor", "Guarded", "Fair", "Good", "Excellent"].map((value) => (
                <div key={value} className="flex items-center gap-2">
                  <RadioGroupItem
                    value={value.toLowerCase()}
                    id={value.toLowerCase()}
                  />
                  <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                    {value}
                  </FormLabel>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CollapsibleSection>

        {/* Dental Care Section */}
        <CollapsibleSection title="Dental Care">
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Does patient have dental problems?
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="dental-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dental-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Is patient under care of dentist?
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="dentist-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dentist-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Can patient clean food effectively?
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="clean-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="clean-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Dental State
              </FormLabel>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "No Dentures",
                  "Dentures Damaged",
                  "Full Upper",
                  "Full Lower",
                  "Partial Denture",
                  "Not Wearing Dentures",
                  "No Teeth",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox id={item.toLowerCase().replace(/\s+/g, "-")} />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Dentist Name
                </FormLabel>
                <Input
                  placeholder="Dentist Name"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Dentist Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Dentist Visit
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="dentist-current" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dentist-visit-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Vision Section */}
        <CollapsibleSection title="Vision">
          <div className="space-y-4">


            <div className="grid grid-cols-3 gap-6">
                          <div>
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Select Vision
              </FormLabel>
              <div className="grid grid-cols-1 gap-2">
                {[
                  "Unimpaired",
                  "Blind - Safe in familiar locale",
                  "Adequate for personal care",
                  "Blind - Requires assistance",
                  "Distinguishes only light or dark",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Checkbox id={item.toLowerCase().replace(/\s+/g, "-")} />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Cataracts
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="left" id="left-eye" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Left Eye
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="right" id="right-eye" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Right Eye
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="both" id="both-eyes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Both
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Macular Degeneration
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="macular-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="macular-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Wears Glasses
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="glasses-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="glasses-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Ophthalmologist Name
                </FormLabel>
                <Input
                  placeholder="Ophthalmologist Name"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Ophthalmologist Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Ophthalmologist Visit
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="ophthal-current" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="ophthal-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Hearing Section */}
        <CollapsibleSection title="Hearing">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Select Hearing
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Unimpaired",
                    "Mild Impairment",
                    "Moderate Impairment but not a threat",
                    "No safety",
                    "Impaired - safety threat exists",
                    "Totally Deaf",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox id={item.toLowerCase().replace(/\s+/g, "-")} />
                      <FormLabel
                        htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Uses Hearing Aid(s)
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="hearing-aid-yes" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="hearing-aid-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="left" id="left-ear" />
                    <FormLabel
                      htmlFor="left-ear"
                      className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                    >
                      Left Ear
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="right" id="right-ear" />
                    <FormLabel
                      htmlFor="right-ear"
                      className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                    >
                      Right Ear
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  ENT Name
                </FormLabel>
                <Input
                  placeholder="ENT Name"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  ENT Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                />
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  ENT Visit
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="ent-current" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="ent-no" />
                    <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Mental Health Section */}
        <CollapsibleSection title="Mental Health">
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Attitude
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Cooperative",
                    "Indifferent",
                    "Resistive",
                    "Demanding",
                    "Suspicious",
                    "Hostile",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox id={`attitude-${item.toLowerCase()}`} />
                      <FormLabel
                        htmlFor={`attitude-${item.toLowerCase()}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Mental Status
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Oriented",
                    "Forgetful",
                    "Conscious",
                    "Depressed",
                    "Disoriented",
                    "Lethargic",
                    "Agitated",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox id={`mental-${item.toLowerCase()}`} />
                      <FormLabel
                        htmlFor={`mental-${item.toLowerCase()}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                  <OtherCheckboxWithInput label="Other" />
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Appearances
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Well Groomed",
                    "Adequate",
                    "Disheveled",
                    "Inappropriately Dressed",
                    "Not Dressed",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`appearance-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      />
                      <FormLabel
                        htmlFor={`appearance-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Self Direction
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Independent",
                    "Needs Motivation",
                    "Dependent",
                    "Needs Direction",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`direction-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      />
                      <FormLabel
                        htmlFor={`direction-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Behavioral
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Normal",
                    "Wandering",
                    "Sun Downing",
                    "Restless",
                    "Hostile",
                    "Withdrawn",
                    "Self Destructive",
                    "Safety Hazard",
                    "Aggressive",
                    "Verbal",
                    "Physical",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`behavioral-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      />
                      <FormLabel
                        htmlFor={`behavioral-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Influences
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Appropriate",
                    "Inappropriate",
                    "Anxious",
                    "Blunted",
                    "Euphoric",
                    "Depressed",
                    "Angry",
                    "Mood Swings",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox
                        id={`influences-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      />
                      <FormLabel
                        htmlFor={`influences-${item
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Thought Content
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Normal",
                    "Can't Assess",
                    "Delusions",
                    "Obsessions",
                    "Phobias",
                    "Persecutory",
                    "Guilt",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox id={`thought-${item.toLowerCase()}`} />
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Perceptions
                </FormLabel>
                <div className="space-y-2">
                  {[
                    "Normal",
                    "Hallucinations",
                    "Auditory",
                    "Visual",
                    "Tactile",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox id={`perception-${item.toLowerCase()}`} />
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] pointer-events-none">
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                  <OtherCheckboxWithInput label="Other" />
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Cognitions
                </FormLabel>
                <div className="space-y-2">
                  {["Normal", "Impairment", "Mild", "Moderate", "Severe"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Checkbox id={`cognition-${item.toLowerCase()}`} />
                        <FormLabel
                          htmlFor={`cognition-${item.toLowerCase()}`}
                          className="text-sm font-normal text-[#1C1C1E] pointer-events-none"
                        >
                          {item}
                        </FormLabel>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Insight and Judgment Row */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Insights
                </FormLabel>
                <div className="space-y-2 mt-2">
                  {["Good", "Partial", "None"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox className="w-6 h-6" />
                      <FormLabel className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none">
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  Judgment
                </FormLabel>
                <div className="space-y-2 mt-2">
                  {["Good", "Adequate", "None"].map((item) => (
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
          </div>
        </CollapsibleSection>

        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div>
            <FormLabel className="text-xs font-semibold text-[#8E8E93]">
              Additional Notes
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 min-h-[120px] resize-none"
            />
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
