"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import DynamicMedications from "@/components/Common/Forms/DynamicMedications";

export default function MedicalInfo1() {
  return (
    <div className="mx-auto px-[1px]">
      {/* Form Sections */}
      <div className="space-y-6">
        {/* Height, Weight, Vital Signs Section */}
        <CollapsibleSection title="Height, Weight, Vital Signs">
          <div className="flex flex-col gap-3">
            {/* First Row */}
            <div className="flex flex-row items-center gap-6">

                        {/* Height */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel required>Height</FormLabel>
  <div className="flex items-center justify-between border rounded-md px-3 py-1">
    <div className="flex items-center gap-1">
      <input
        type="number"
        placeholder="5"
        className="w-10 outline-none text-center"
      />
      <span className="text-sm text-[#1C1C1E]">ft</span>
    </div>
    <div className="flex items-center gap-1">
      <input
        type="number"
        placeholder="4"
        className="w-10 outline-none text-center"
      />
      <span className="text-sm text-[#1C1C1E]">in</span>
    </div>
  </div>
</div>



          {/* Weight */}
          <div className="flex flex-col gap-0.5 flex-1">
            <FormLabel required>Weight</FormLabel>
            <div className="relative">
              <Input
                type="number"
                placeholder="100"
                className="pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                lbs
              </span>
            </div>
          </div>

{/* Blood Pressure */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
    Blood Pressure
  </FormLabel>

  <div className="relative w-full">
    <Input
      className="w-full text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 pr-14"
      placeholder="120/80"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
      mmHG
    </span>
  </div>
</div>


{/* Temperature */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
    Temperature
  </FormLabel>

  <div className="relative w-full">
    <Input
      className="w-full text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 pr-10"
      placeholder="97.2"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
      °F
    </span>
  </div>
</div>


{/* Pulse */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
    Pulse
  </FormLabel>

  <div className="relative w-full">
    <Input
      className="w-full text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 pr-12"
      placeholder="78"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
      bpm
    </span>
  </div>
</div>


{/* Respirations */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
    Respirations
  </FormLabel>

  <div className="relative w-full">
    <Input
      className="w-full text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 pr-12"
      placeholder="19"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
      bpm
    </span>
  </div>
</div>

            </div>

            {/* Second Row */}
            <div className="flex flex-row gap-6">
{/* Oxygen Saturation */}
<div className="flex flex-col gap-0.5 flex-1">
  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
    Oxygen Saturation
  </FormLabel>

  <div className="relative w-full">
    <Input
      className="w-full text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 pr-10"
      placeholder="98"
    />
    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
      %
    </span>
  </div>
</div>


              {/* Weight Status */}
              <div className="flex flex-col gap-0.5 flex-1">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Weight Status
                </FormLabel>
                <RadioGroup className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="increase" id="increase" />
                    <FormLabel
                      htmlFor="increase"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      Increase
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="static" id="static" />
                    <FormLabel
                      htmlFor="static"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      Static
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="decrease" id="decrease" />
                    <FormLabel
                      htmlFor="decrease"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      Decrease
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>

              {/* Reason for weight change */}
              <div className="flex flex-col gap-0.5 flex-1">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Reason for any weight change
                </FormLabel>
                <Textarea
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5 h-[76px] resize-none"
                  placeholder="Reason"
                />
              </div>
            </div>

            {/* Third Row */}
            <div className="flex flex-row gap-6">
              {/* Pain */}
              <div className="flex flex-col gap-0.5 flex-1">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Pain
                </FormLabel>
                <RadioGroup className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="yes" id="pain-yes" />
                    <FormLabel
                      htmlFor="pain-yes"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      Yes
                    </FormLabel>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="no" id="pain-no" />
                    <FormLabel
                      htmlFor="pain-no"
                      className="text-sm font-normal text-[#1C1C1E]"
                    >
                      No
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>

              {/* Level of pain */}
              <div className="flex flex-col gap-0.5 flex-1">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Level of pain
                </FormLabel>
                <Input
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                  placeholder="7"
                />
              </div>

              {/* Location & Description */}
              <div className="flex flex-col gap-0.5 flex-1">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Location & Description
                </FormLabel>
                <Input
                  className="text-sm font-normal text-[#1C1C1E] border-[#8E8E93] rounded px-2.5 py-1.5"
                  placeholder="Location & Description"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Medical Information Section */}
        <CollapsibleSection title="Medical Information">
          <div className="space-y-3">
            <div>
              <FormLabel>History of Present Illness</FormLabel>
              <Textarea className="min-h-[80px]" placeholder="Enter Text" />
            </div>

            <div>
              <FormLabel>Past History</FormLabel>
              <Textarea className="min-h-[80px]" placeholder="Enter Text" />
            </div>

            <div>
              <FormLabel>Family & Personal History</FormLabel>
              <Textarea className="min-h-[80px]" placeholder="Enter Text" />
            </div>

            <div>
              <FormLabel>General Appearance</FormLabel>
              <Textarea className="min-h-[80px]" placeholder="Enter Text" />
            </div>

            {/* Medical Systems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <FormLabel>Skin</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>HEENT (Head, Eye, Ear)</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Neck</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Chest & Lungs</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Cardiovascular</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Abdomen</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Genitourinary</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Rectal</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
              <div>
                <FormLabel>Musculoskeletal System</FormLabel>
                <Textarea className="min-h-[80px]" placeholder="Enter Text" />
              </div>
            </div>

            <div className="md:w-1/3">
              <FormLabel>Neurological/Psychiatry</FormLabel>
              <Textarea className="min-h-[80px]" placeholder="Enter Text" />
            </div>
          </div>
        </CollapsibleSection>


                {/* Alert & Oriented (A & O) Score */}
        <CollapsibleSection title="Alert & Oriented (A & O)">
  <div className="bg-gray-100 rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-center mb-4">AO Score</h2>
          
          <div className="space-y-3">
            <div>
              <span className="font-semibold">AO: X1, X2, X3, X4</span>
              <span className="ml-8">Alert and oriented to person, place, time, and situation</span>
            </div>
            
            <p className="text-gray-700">
              Based on how many questions are answered correctly would determine the number after the X.
            </p>
            
            <p className="text-gray-700">
              For example: let's say patient has Dementia and can only tell me his name. I would then say: Patient is awake and alert-oriented X1. Because he only knew his name. He didn't know where he was, what year or day it was, or why he was in the hospital.
            </p>
          </div>
        </div>

        {/* Assessment Form Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden  border border-gray-200">
          {/* Table Header */}
          <div className="grid grid-cols-[200px_1fr_1fr] bg-white border border-gray-200">
            <div className="px-6 py-4 font-semibold text-gray-900">
              AO: X1, X2, X3, X4
            </div>
            <div className="px-6 py-4 font-semibold text-gray-900 ">
              Question
            </div>
            <div className="px-6 py-4 font-semibold text-gray-900 ">
              Patient Response
            </div>
          </div>

          {/* Oriented to person */}
          <div className="grid grid-cols-[200px_1fr_1fr] border border-gray-200">
            <div className="px-6 py-4 text-gray-900">
              Oriented to person
            </div>
            <div className="px-6 py-4 text-gray-900 ">
              What's your name?
            </div>
            <div className="px-6 py-4 ">
              <Input
                type="text"
                placeholder="Enter response or no response"
              />
            </div>
          </div>

          {/* Oriented to place */}
          <div className="grid grid-cols-[200px_1fr_1fr] border border-gray-200">
            <div className="px-6 py-4 text-gray-900">
              Oriented to place
            </div>
            <div className="px-6 py-4 text-gray-900 ">
              Where are we at right now?
            </div>
            <div className="px-6 py-4 ">
              <Input
                type="text"
                placeholder="Enter response or no response"
              />
            </div>
          </div>

          {/* Oriented to time */}
          <div className="grid grid-cols-[200px_1fr_1fr] border border-gray-200">
            <div className="px-6 py-4 text-gray-900">
              Oriented to time
            </div>
            <div className="px-6 py-4 text-gray-900 ">
              What's today's date, or what year is it?
            </div>
            <div className="px-6 py-4 ">
              <Input
                type="text"
                placeholder="Enter response or no response"
              />
            </div>
          </div>

          {/* Oriented to situation */}
          <div className="grid grid-cols-[200px_1fr_1fr] border border-gray-200">
            <div className="px-6 py-4 text-gray-900">
              Oriented to situation
            </div>
            <div className="px-6 py-4 text-gray-900 ">
              Why are you talking to me?
            </div>
            <div className="px-6 py-4 ">
              <Input
                type="text"
                placeholder="Enter response or no response"
              />
            </div>
          </div>

          {/* AO Score */}
          <div className="grid grid-cols-[200px_1fr_1fr] border border-gray-200">
            <div className="px-6 py-4 text-gray-900">
              AO Score
            </div>
            <div className="px-6 py-4  col-span-2">
              <Input
                type="text"
                placeholder="Enter X1, X2, X3, or X4"
              />
            </div>
          </div>
        </div>
        </CollapsibleSection>



        {/* Additional Notes Section */}
        <CollapsibleSection title="Additional Notes">
          <div>
            <FormLabel>Additional Notes</FormLabel>
            <Textarea className="min-h-[80px]" placeholder="Enter Text" />
          </div>
        </CollapsibleSection>

        {/* Medications Section */}
        <CollapsibleSection title="Medications">
          {/* Frequency Table */}
          <div className="bg-[#e5e5ea] p-4 rounded mb-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Frequency</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium">QD or qd:</span>
                <span className="ml-2">Once daily</span>
              </div>
              <div>
                <span className="font-medium">BID or bid:</span>
                <span className="ml-2">Twice daily</span>
              </div>
              <div>
                <span className="font-medium">TID or tid:</span>
                <span className="ml-2">Three times daily</span>
              </div>
              <div>
                <span className="font-medium">Frequency</span>
              </div>
              <div>
                <span className="font-medium">QID or qid:</span>
                <span className="ml-2">Four times daily</span>
              </div>
              <div>
                <span className="font-medium">QHS:</span>
                <span className="ml-2">At bedtime</span>
              </div>
              <div>
                <span className="font-medium">Q4H:</span>
                <span className="ml-2">Every 4 hours</span>
              </div>
              <div></div>
              <div>
                <span className="font-medium">PRN:</span>
                <span className="ml-2">As needed</span>
              </div>
            </div>
          </div>

          {/* Quantity Table */}
          <div className="bg-[#e5e5ea] p-4 rounded mb-6">
            <h3 className="text-lg font-semibold mb-4 text-center">Quantity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div>
                <span className="font-medium">tab(s):</span>
                <span className="ml-2">Tablet(s)</span>
              </div>
              <div>
                <span className="font-medium">cap(s):</span>
                <span className="ml-2">Capsule(s)</span>
              </div>
              <div>
                <span className="font-medium">ml:</span>
                <span className="ml-2">Milliliter</span>
              </div>
              <div>
                <span className="font-medium">Quantity</span>
              </div>
              <div>
                <span className="font-medium">g:</span>
                <span className="ml-2">Gram</span>
              </div>
              <div>
                <span className="font-medium">mg:</span>
                <span className="ml-2">Milligram</span>
              </div>
              <div>
                <span className="font-medium">mcg:</span>
                <span className="ml-2">Microgram</span>
              </div>
            </div>
          </div>

          {/* Dynamic Medication Entries */}
          <DynamicMedications
            minMedications={2}
            showCollapsibleSection={false}
            showFrequencyGuide={false}
            showQuantityGuide={false}
          />
        </CollapsibleSection>
      </div>
    </div>
  );
}
