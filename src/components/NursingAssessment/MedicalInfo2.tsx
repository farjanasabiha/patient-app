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
      <div className="space-y-4 sm:space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Medication & Safety Section */}
        <CollapsibleSection title="Medication & Safety">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 px-3">
            <div>
              <FormLabel>
                Medication Allergies, Food, and Other Allergies
              </FormLabel>
              <Input
                placeholder="Allergies"
              />
            </div>
            <div>
              <FormLabel>
                Drug Interactions
              </FormLabel>
              <Input
                placeholder="Interactions"
              />
            </div>
            <div>
              <FormLabel>
                Safety Measures
              </FormLabel>
              <Input
                placeholder="Safety Measures"
              />
            </div>
          </div>
        </CollapsibleSection>

        {/* Prognosis Section */}
        <CollapsibleSection title="Prognosis">
          <div className="px-3">
            <FormLabel>
              Prognosis
            </FormLabel>
            <RadioGroup defaultValue="fair" className="space-y-2 grid grid-cols-3">
              {["Poor", "Guarded", "Fair", "Good", "Excellent"].map((value) => (
                <div key={value} className="flex items-start gap-2">
                  <RadioGroupItem
                    value={value.toLowerCase()}
                    id={value.toLowerCase()}
                  />
                  <FormLabel>
                    {value}
                  </FormLabel>
                </div>
              ))}
            </RadioGroup>
          </div>
        </CollapsibleSection>

        {/* Dental Care Section */}
        <CollapsibleSection title="Dental Care">
          <div className="space-y-4 px-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
                  Does patient have dental problems?
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="dental-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dental-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel>
                  Is patient under care of dentist?
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="dentist-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dentist-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel>
                  Can patient clean food effectively?
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="clean-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="clean-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div>
              <FormLabel>
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
                    <FormLabel>
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <FormLabel>
                  Dentist Name
                </FormLabel>
                <Input
                  placeholder="Dentist Name"
                />
              </div>
              <div>
                <FormLabel>
                  Dentist Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                />
              </div>
              <div>
                <FormLabel>
                  Dentist Visit
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="dentist-current" />
                    <FormLabel>
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="dentist-visit-no" />
                    <FormLabel>
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
          <div className="space-y-4 px-3">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                          <div>
              <FormLabel>
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
                    <FormLabel>
                      {item}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>
              <div>
                <FormLabel>
                  Cataracts
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="left" id="left-eye" />
                    <FormLabel>
                      Left Eye
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="right" id="right-eye" />
                    <FormLabel>
                      Right Eye
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="both" id="both-eyes" />
                    <FormLabel>
                      Both
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel>
                  Macular Degeneration
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="macular-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="macular-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
              <div>
                <FormLabel>
                  Wears Glasses
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="glasses-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="glasses-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-5">
              <div>
                <FormLabel>
                  Ophthalmologist Name
                </FormLabel>
                <Input
                  placeholder="Ophthalmologist Name"
                />
              </div>
              <div>
                <FormLabel>
                  Ophthalmologist Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                />
              </div>
              <div>
                <FormLabel>
                  Ophthalmologist Visit
                </FormLabel>
                <RadioGroup className="flex gap-4 items-center">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="ophthal-current" />
                    <FormLabel>
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="ophthal-no" />
                    <FormLabel>
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
          <div className="space-y-4 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
                  Uses Hearing Aid(s)
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="hearing-aid-yes" />
                    <FormLabel>
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="hearing-aid-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="left" id="left-ear" />
                    <FormLabel
                      htmlFor="left-ear"
                    >
                      Left Ear
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="right" id="right-ear" />
                    <FormLabel
                      htmlFor="right-ear"
                    >
                      Right Ear
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
              <div>
                <FormLabel>
                  ENT Name
                </FormLabel>
                <Input
                  placeholder="ENT Name"
                />
              </div>
              <div>
                <FormLabel>
                  ENT Phone Number
                </FormLabel>
                <Input
                  placeholder="123 456 7890"
                />
              </div>
              <div>
                <FormLabel>
                  ENT Visit
                </FormLabel>
                <RadioGroup className="space-y-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="current" id="ent-current" />
                    <FormLabel>
                      Current
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="ent-no" />
                    <FormLabel>
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
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
                {/* Mental Health Section */}
        <CollapsibleSection title="Mental Health">
          <div className="space-y-4 sm:space-y-6 px-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                  <OtherCheckboxWithInput label="Other" />
                </div>
              </div>
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
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
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
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
                      <FormLabel
                        htmlFor={`thought-${item.toLowerCase()}`}
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
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
                      <FormLabel
                        htmlFor={`perception-${item.toLowerCase()}`}
                      >
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                  <OtherCheckboxWithInput label="Other" />
                </div>
              </div>
              <div>
                <FormLabel>
                  Cognitions
                </FormLabel>
                <div className="space-y-2">
                  {["Normal", "Impairment", "Mild", "Moderate", "Severe"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-2">
                        <Checkbox id={`cognition-${item.toLowerCase()}`} />
                        <FormLabel
                          htmlFor={`cognition-${item.toLowerCase()}`}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <div>
                <FormLabel>
                  Insights
                </FormLabel>
                <div className="space-y-2 mt-2">
                  {["Good", "Partial", "None"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Checkbox className="w-6 h-6" />
                      <FormLabel>
                        {item}
                      </FormLabel>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <FormLabel>
                  Judgment
                </FormLabel>
                <div className="space-y-2 mt-2">
                  {["Good", "Adequate", "None"].map((item) => (
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
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
