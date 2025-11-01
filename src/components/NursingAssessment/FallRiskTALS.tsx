"use client";

import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { User, ShipWheelIcon as Wheelchair, UserX } from "lucide-react";

export default function FallRiskTALS() {
  const riskFactors = [
    {
      factor: "Vision",
      description:
        "Reports / observed difficulty seeing - objects / signs / finding way around",
    },
    {
      factor: "Mobility",
      description:
        "Mobility status unknown or appears unsafe / impulsive / forgets gait aid",
    },
    {
      factor: "Transfers",
      description:
        "Transfer status unknown or appears unsafe, ie. over-reaches, impulsive",
    },
    {
      factor: "Behaviors",
      descriptions: [
        "Observed or reported agitation, confusion, disorientations",
        "Difficulty following instructions, or non-compliant (observed or known)",
      ],
    },
    {
      factor: "Activities of Daily Living (A.D.L's)",
      descriptions: [
        "Observed risk-taking behaviors, or reported from referrer / previous facility",
        "Observed unsafe use of equipment",
        "Unsafe footwear / inappropriate clothing",
      ],
    },
    {
      factor: "Environment",
      description:
        "Difficulties with orientation to environment, ie. areas between bed / bathroom / dining room",
    },
    {
      factor: "Nutrition",
      description: "Underweight / low appetite",
    },
    {
      factor: "Continence",
      description: "Reported or known urgency / nocturia / accidents",
    },
    {
      factor: "Other",
      description: "",
      isInput: true,
    },
  ];

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-4 sm:space-y-6">
        {/* History of Falls Section */}
        <CollapsibleSection title="History of Falls">
          <div className="flex flex-col items-start gap-3">
            <p className="text-sm text-[#1c1c1e] mb-1">
              <strong>Note:</strong> For an accurate history, consult
              patient/resident / family / medical records.
            </p>

            {/* Falls checkbox - matches design spec */}
            <div className="flex flex-col items-start gap-3 w-full">
              <div className="flex flex-row items-center gap-2 w-full min-h-[24px]">
                <div className="flex-none order-0 w-6 h-6">
                  <Checkbox
                    id="falls-prior"
                    className="border-2 border-[#8E8E93]"
                  />
                </div>
                <FormLabel
                  htmlFor="falls-prior"
                  className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] flex items-center flex-grow"
                >
                  Falls prior to this admission (home or referring facility)
                  and/or during current stay
                </FormLabel>
              </div>

              {/* Information Obtained From - matches design spec */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full min-h-[51px]">
                <div className="flex flex-col items-start gap-0.5 w-full sm:w-[calc(100%/3)]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins'] h-[18px] w-full">
                    Information Obtained From
                  </FormLabel>
                  <Input
                    placeholder="From"
                    className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                  />
                </div>
                <div className="w-[calc(100%/3)]"></div>
                <div className="w-[calc(100%/3)]"></div>
              </div>
            </div>

            {/* Fall history rows */}
            <div className="space-y-4 w-full mt-2">
              {[1, 2, 3].map((row, index) => (
                <div key={row} className="space-y-2">
                  {/* Numbered divider */}
                  <div className="flex flex-row items-center gap-2.5 w-full h-[18px]">
                    <span className="text-xs font-medium text-[#1C1C1E] w-[30px] h-[18px]">
                      {index === 0 ? "1." : index === 1 ? "2." : "3."}
                    </span>
                    <div className="h-0 border-t border-[#C7C7CC] flex-grow"></div>
                  </div>

                  {/* Input fields row */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full min-h-[51px]">
                    <div className="flex flex-col items-start gap-0.5 w-full sm:w-[calc(100%/3)]">
                      <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins'] h-[18px] w-full">
                        {index === 0 ? "Last Fall" : "Previous Fall"}
                      </FormLabel>
                      <Input
                        placeholder="Time Ago"
                        className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-0.5 w-full sm:w-[calc(100%/3)]">
                      <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins'] h-[18px] w-full">
                        How
                      </FormLabel>
                      <Select>
                        <SelectTrigger className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slip">Slip</SelectItem>
                          <SelectItem value="trip">Trip</SelectItem>
                          <SelectItem value="faint">Faint</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex flex-col items-start gap-0.5 w-full sm:w-[calc(100%/3)]">
                      <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins'] h-[18px] w-full">
                        Where? / Comments
                      </FormLabel>
                      <Input
                        placeholder="Comments"
                        className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CollapsibleSection>

        {/* Fall Risk Status Section */}
        <CollapsibleSection title="Part 1 : Fall Risk Status">
          {/* Automatic High Risk Status Box */}
          <div className="flex flex-col items-start p-0 bg-white rounded-[10px] flex-none order-12 self-stretch flex-grow-0 border border-[#C7C7CC] overflow-hidden">
            {/* Header Row */}
            <div className="flex flex-row items-center p-0 bg-white flex-none order-0 self-stretch flex-grow-0 min-h-[45px] border-b border-[#C7C7CC]">
              <div className="flex flex-row items-center p-[12px_15px] gap-[10px] flex-grow">
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-grow">
                  Automatic High Risk Status (if ticked, then Fall Risk is
                  automatically High)
                </span>
              </div>
            </div>

            {/* First Checkbox Row */}
            <div className="flex flex-row items-center p-0 bg-white flex-none order-1 self-stretch flex-grow-0 min-h-[48px] border-b border-[#C7C7CC]">
              <div className="flex flex-row items-center p-[12px_15px] gap-[10px] flex-grow">
                <div className="flex flex-row items-center p-0 gap-[8px] flex-grow">
                  <div className="flex-none order-0 w-[24px] h-[24px]">
                    <Checkbox
                      id="recent-change"
                      className="border-2 border-[#8E8E93]"
                    />
                  </div>
                  <FormLabel
                    htmlFor="recent-change"
                    className="font-['Poppins'] font-normal text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-grow"
                  >
                    Recent change in functional status and / or medications
                    affecting safe mobility (or anticipated)
                  </FormLabel>
                </div>
              </div>
            </div>

            {/* Second Checkbox Row */}
            <div className="flex flex-row items-center p-0 bg-white flex-none order-2 self-stretch flex-grow-0 min-h-[48px]">
              <div className="flex flex-row items-center p-[12px_15px] gap-[10px] flex-grow">
                <div className="flex flex-row items-center p-0 gap-[8px] flex-grow">
                  <div className="flex-none order-0 w-[24px] h-[24px]">
                    <Checkbox
                      id="dizziness"
                      className="border-2 border-[#8E8E93]"
                    />
                  </div>
                  <FormLabel
                    htmlFor="dizziness"
                    className="font-['Poppins'] font-normal text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-grow"
                  >
                    Dizziness / postural hypotension
                  </FormLabel>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Level Box */}
          <div className="flex flex-col items-start p-[10px] gap-[12px] bg-[#E5E5EA] rounded-[6px] flex-none order-13 self-stretch flex-grow-0 mt-6">
            {/* Risk Level Title */}
            <div className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-center mx-auto text-[#1C1C1E] flex-none order-0 self-stretch flex-grow-0">
              Risk Level
            </div>

            {/* Risk Level Values */}
            <div className="flex flex-col items-start p-0 gap-[4px] flex-none order-1 self-stretch flex-grow-0">
              <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-3 items-center p-0 gap-[24px] flex-none order-0 self-stretch flex-grow-0">
                {/* Low Risk */}
                <div className="flex flex-row items-center p-0 gap-[2px] flex-none order-0 flex-grow-1">
                  <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-0 flex-grow-0">
                    Low Risk:
                  </span>
                  <span className="font-['Poppins'] font-normal text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-1 flex-grow-0">
                    5 - 11
                  </span>
                </div>

                {/* Medium Risk */}
                <div className="flex flex-row items-center p-0 gap-[2px] flex-none order-1 flex-grow-1">
                  <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-0 flex-grow-0">
                    Medium Risk:
                  </span>
                  <span className="font-['Poppins'] font-normal text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-1 flex-grow-0">
                    12 - 15
                  </span>
                </div>

                {/* High Risk */}
                <div className="flex flex-row items-center p-0 gap-[2px] flex-none order-2 flex-grow-1">
                  <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-0 flex-grow-0">
                    High Risk:
                  </span>
                  <span className="font-['Poppins'] font-normal text-[14px] leading-[21px] flex items-center text-[#1C1C1E] flex-none order-1 flex-grow-0">
                    16 - 20
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factor Table */}
          <div className="w-full border border-[#C7C7CC] rounded-lg overflow-x-auto mt-6">
            {/* Header Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[45px] bg-white border-b border-[#C7C7CC]">
              <div className="flex items-center px-[15px] py-3 flex-[3]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Risk Factor
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-[5]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Level
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-1">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Score
                </span>
              </div>
            </div>

            {/* Recent Falls Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[68px] bg-white border-b border-[#C7C7CC]">
              <div className="flex flex-col justify-center px-[15px] py-3 flex-[3]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Recent Falls
                </span>
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                  (Refer history of falls section above)
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-[5]">
                <Select>
                  <SelectTrigger className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full">
                    <SelectValue placeholder="None in last 12 months" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">None in last 12 months</SelectItem>
                    <SelectItem value="1-2">1-2 in last 12 months</SelectItem>
                    <SelectItem value="3+">3+ in last 12 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center px-[15px] py-3 flex-1">
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] text-center">
                  2
                </span>
              </div>
            </div>

            {/* Medical History Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[89px] bg-white border-b border-[#C7C7CC]">
              <div className="flex flex-col justify-center px-[15px] py-3 flex-[3]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Medical History
                </span>
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                  (Seizures, Anti-Depressants, Anti-Parkinson&apos;s, Diuretics,
                  Anti-Hypertensives, Hypnotics)
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-[5]">
                <Select>
                  <SelectTrigger className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center px-[15px] py-3 flex-1">
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] text-center">
                  X
                </span>
              </div>
            </div>

            {/* Psychological Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[89px] bg-white border-b border-[#C7C7CC]">
              <div className="flex flex-col justify-center px-[15px] py-3 flex-[3]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Psychological
                </span>
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                  (Anxiety, Depression, Cooperativeness, Insight or Judgement
                  esp. re mobility)
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-[5]">
                <Select>
                  <SelectTrigger className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center px-[15px] py-3 flex-1">
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] text-center">
                  X
                </span>
              </div>
            </div>

            {/* Cognitive Status Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[89px] bg-white border-b border-[#C7C7CC]">
              <div className="flex flex-col justify-center px-[15px] py-3 flex-[3]">
                <span className="text-sm font-semibold text-[#1C1C1E] font-['Poppins']">
                  Cognitive Status
                </span>
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                  (Alert - Inattention Abbreviated Mental Test)
                </span>
              </div>
              <div className="flex items-center px-[15px] py-3 flex-[5]">
                <Select>
                  <SelectTrigger className="h-[31px] px-2.5 py-1.5 border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins'] w-full">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-center px-[15px] py-3 flex-1">
                <span className="text-sm font-normal text-[#1C1C1E] font-['Poppins'] text-center">
                  X
                </span>
              </div>
            </div>

            {/* Fall Risk Status Row */}
            <div className="flex flex-row items-center w-full min-w-[600px] min-h-[45px]">
              <div className="flex flex-col justify-center px-[15px] flex-[3]">
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] flex items-center text-[#1C1C1E]">
                  Fall Risk Status
                </span>
              </div>
              <div className="flex flex-row items-center justify-center flex-[4] gap-2">
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-[#30DB5B]">
                  Low Risk
                </span>
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  OR
                </span>
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-[#FF9F0A]">
                  Medium Risk
                </span>
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                  OR
                </span>
                <span className="font-['Poppins'] font-semibold text-[14px] leading-[21px] text-[#FF0D00]">
                  High Risk
                </span>
              </div>
              <div className="flex items-center justify-center px-[15px] py-3 flex-1">
                <span className="font-['Poppins'] font-normal text-[14px] leading-[21px] text-[#1C1C1E] text-center">
                  XX/20
                </span>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Risk Factor Checklist */}
        <CollapsibleSection title="Part 2: Risk Factor Checklist">
          <div className="overflow-x-auto">
          <div className="flex flex-col bg-white border border-[#C7C7CC] rounded-[10px] min-w-[600px]">
            {/* Header Row */}
            <div className="flex items-center border-b border-[#C7C7CC] rounded-t-[10px]">
              <div className="flex items-center p-3 flex-[2]">
                <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                  Factor
                </span>
              </div>
              <div className="flex items-center p-3 flex-[5]">
                <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                  Description
                </span>
              </div>
              <div className="flex items-center p-3 flex-1">
                <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                  Y/N
                </span>
              </div>
            </div>

            {/* Risk Factor Rows */}
            {riskFactors.map((factor, index) => (
              <div
                key={index}
                className={`flex items-center border-b border-[#C7C7CC] ${
                  index === riskFactors.length - 1
                    ? "rounded-b-[10px] border-b-0"
                    : ""
                }`}
              >
                <div className="flex flex-col justify-center p-3 flex-[2]">
                  <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                    {factor.factor}
                  </span>
                </div>
                <div
                  className={`${
                    factor.descriptions ? "flex flex-col" : "flex items-center"
                  } p-3 flex-[5] ${factor.descriptions ? "gap-2" : ""}`}
                >
                  {factor.isInput ? (
                    <Input
                      placeholder="Enter Text"
                      className="h-[31px] border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                    />
                  ) : factor.descriptions ? (
                    factor.descriptions.map((desc, i) => (
                      <span
                        key={i}
                        className="font-['Poppins'] text-sm text-[#1C1C1E]"
                      >
                        {desc}
                      </span>
                    ))
                  ) : (
                    <span className="font-['Poppins'] text-sm text-[#1C1C1E]">
                      {factor.description}
                    </span>
                  )}
                </div>
                <div
                  className={`flex ${
                    factor.descriptions ? "flex-col gap-2" : "items-center"
                  } justify-center p-3 flex-1`}
                >
                  {factor.descriptions ? (
                    factor.descriptions.map((_, i) => (
                      <Select key={i}>
                        <SelectTrigger className="h-[31px] border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    ))
                  ) : (
                    <Select>
                      <SelectTrigger className="h-[31px] border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins']">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </div>
              </div>
            ))}
          </div>
          </div>
        </CollapsibleSection>

        {/* Action Plan Section */}
        <CollapsibleSection title="Part 3: Action Plan">
          <p className="text-sm text-[#1C1C1E] font-['Poppins'] mb-4">
            For Risk factors identified in Part 1 & 2, list strategies below to
            manage falls risk.
          </p>

          <div className="flex flex-col bg-white border border-[#C7C7CC] rounded-[10px]">
            {/* Header Row */}
            <div className="flex items-center border-b border-[#C7C7CC] rounded-t-[10px]">
              <div className="flex items-center p-3 flex-[3]">
                <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                  Problem List
                </span>
              </div>
              <div className="flex items-center p-3 flex-[5]">
                <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                  Intervention Strategies / Referrals
                </span>
              </div>
            </div>

            {/* Input Rows */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className={`flex items-center border-b border-[#C7C7CC] ${
                  i === 8 ? "rounded-b-[10px] border-b-0" : ""
                }`}
              >
                <div className="flex flex-col justify-center p-3 flex-[3]">
                  <Input
                    placeholder="Enter Text"
                    className="h-[31px] border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                  />
                </div>
                <div className="flex flex-col justify-center p-3 flex-[5]">
                  <Input
                    placeholder="Enter Text"
                    className="h-[31px] border border-[#8E8E93] rounded text-sm font-normal text-[#1C1C1E] font-['Poppins']"
                  />
                </div>
              </div>
            ))}
          </div>
        </CollapsibleSection>

        {/* TALS Guidance Section */}
        <CollapsibleSection title="TALS Guidance - Transportation Assistance Level (TAL) Scale">
          <div className="flex flex-col bg-white border border-[#C7C7CC] rounded-[10px]">
            {/* Header Row */}
            <div className="flex items-center p-[12px_15px] h-[45px] border-b border-[#C7C7CC] rounded-t-[10px]">
              <span className="font-['Poppins'] font-semibold text-sm text-[#1C1C1E]">
                Select TALS
              </span>
            </div>

            {/* Options Container */}
            <div className="p-[12px_15px]">
              <RadioGroup defaultValue="tal-1" className="flex flex-col gap-1">
                {/* Non-ambulatory Option */}
                <div className="flex flex-row items-center gap-2 h-[38px]">
                  <RadioGroupItem value="tal-1" id="tal-1" />
                  <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#002D9B] rounded-[3px]">
                    <UserX className="w-[28.5px] h-[28.5px] text-white" />
                  </div>
                  <label
                    htmlFor="tal-1"
                    className="font-['Poppins'] text-sm text-[#1C1C1E] flex-grow"
                  >
                    Non-ambulatory [TAL–1]
                  </label>
                </div>

                {/* Wheelchair Option */}
                <div className="flex flex-row items-center gap-2 h-[38px]">
                  <RadioGroupItem value="tal-2" id="tal-2" />
                  <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#002D9B] rounded-[3px]">
                    <Wheelchair className="w-[28.5px] h-[28.5px] text-white" />
                  </div>
                  <label
                    htmlFor="tal-2"
                    className="font-['Poppins'] text-sm text-[#1C1C1E] flex-grow"
                  >
                    Wheelchair [TAL–2]
                  </label>
                </div>

                {/* Ambulatory Option */}
                <div className="flex flex-row items-center gap-2 h-[38px]">
                  <RadioGroupItem value="tal-3" id="tal-3" />
                  <div className="flex items-center justify-center w-[38px] h-[38px] bg-[#002D9B] rounded-[3px]">
                    <User className="w-[28.5px] h-[28.5px] text-white" />
                  </div>
                  <label
                    htmlFor="tal-3"
                    className="font-['Poppins'] text-sm text-[#1C1C1E] flex-grow"
                  >
                    Ambulatory [TAL-3]
                  </label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
