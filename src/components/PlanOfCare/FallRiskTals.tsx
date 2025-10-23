"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { BadgeHelp, User2, Bed } from "lucide-react";

export default function FallRiskTals() {
  const fallRiskLevels = [
    { label: "Low Risk", range: "5 - 11" },
    { label: "Medium Risk", range: "12 - 15" },
    { label: "High Risk", range: "16 - 20" },
  ];

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-2 gap-10">
        {/* History of Falls Section */}
        <CollapsibleSection title="History of Falls">
          <div className="px-3">
          <div className="text-sm font-semibold mb-4">
            Note: For an accurate history, consult patient/resident / family /
            medical records.
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Checkbox id="prior-falls" />
              <FormLabel htmlFor="prior-falls">
                Falls prior to this admission (home or referring facility)
                and/or during current stay.
              </FormLabel>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Information Obtained From
                </FormLabel>
                <Input placeholder="Enter source" className="bg-sky-50" />
              </div>
            </div>

            {/* Separator 1 */}
            <div className="flex items-center gap-2 my-4">
              <span className="text-sm text-neutral-600">1.</span>
              <div className="flex-1 border-t-2 border-dashed border-stone-300"></div>
            </div>

            {/* Last Fall Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Last Fall
                </FormLabel>
                <Input placeholder="Time Ago" className="bg-sky-50" />
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  How
                </FormLabel>
                <Select>
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slip">Slip</SelectItem>
                    <SelectItem value="trip">Trip</SelectItem>
                    <SelectItem value="loss-of-balance">
                      Loss of Balance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Where? / Comments
                </FormLabel>
                <Input placeholder="Enter comments" className="bg-sky-50" />
              </div>
            </div>

            {/* Separator 2 */}
            <div className="flex items-center gap-2 my-4">
              <span className="text-sm text-neutral-600">2.</span>
              <div className="flex-1 border-t-2 border-dashed border-stone-300"></div>
            </div>

            {/* Previous Fall Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Previous Fall
                </FormLabel>
                <Input placeholder="Time Ago" className="bg-sky-50" />
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  How
                </FormLabel>
                <Select>
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="slip">Slip</SelectItem>
                    <SelectItem value="trip">Trip</SelectItem>
                    <SelectItem value="loss-of-balance">
                      Loss of Balance
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Where? / Comments
                </FormLabel>
                <Input placeholder="Enter comments" className="bg-sky-50" />
              </div>
            </div>
          </div>
          </div>
        </CollapsibleSection>

        {/* Fall Risk Status Section */}
        <CollapsibleSection title="Part 1: Fall Risk Status">
          <div className="px-3">
          <div className="space-y-4">
            {/* Automatic High Risk Status */}
            <div className="w-full bg-white rounded-[10px] flex flex-col">
              <div className="w-full bg-white rounded-t-[10px] border border-stone-300">
                <div className="w-full flex items-center">
                  <div className="flex-1 px-3.5 py-3">
                    <div className="text-sm font-semibold">
                      Automatic High Risk Status (if ticked, then Fall Risk is
                      automatically <span className="text-red-600">High</span>)
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white border border-t-0 border-stone-300">
                <div className="px-3.5 py-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="functional-status" />
                    <FormLabel
                      htmlFor="functional-status"
                      className="flex-1 text-sm text-black font-normal"
                    >
                      Recent change in functional status and / or medications
                      affecting safe mobility (or anticipated)
                    </FormLabel>
                  </div>
                </div>
              </div>

              <div className="w-full bg-white rounded-b-[10px] border border-t-0 border-stone-300">
                <div className="px-3.5 py-3">
                  <div className="flex items-center gap-2">
                    <Checkbox id="dizziness" />
                    <FormLabel
                      htmlFor="dizziness"
                      className="flex-1 text-sm text-black font-normal"
                    >
                      Dizziness / postural hypotension
                    </FormLabel>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Level Section */}
            <div className="bg-gray-100 rounded-md p-4">
              <h3 className="text-sm font-semibold mb-3">Risk Level</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fallRiskLevels.map((level) => (
                  <div key={level.label} className="flex items-center gap-2">
                    <span className="w-24 text-sm font-semibold">
                      {level.label}:
                    </span>
                    <span className="text-sm">{level.range}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Factor Table */}
            <div className="border border-stone-300 rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="text-left p-3 w-1/3 font-semibold">
                      Risk Factor
                    </th>
                    <th className="text-left p-3 font-semibold">Level</th>
                    <th className="text-left p-3 w-16 font-semibold">Score</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-stone-300">
                    <td className="p-3">
                      <div className="font-semibold">Recent Falls</div>
                      <div className="text-sm">
                        (Refer history of falls section above)
                      </div>
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="one">One fall</SelectItem>
                          <SelectItem value="multiple">
                            Multiple falls
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 text-center">X</td>
                  </tr>
                  <tr className="border-b border-stone-300">
                    <td className="p-3">
                      <div className="font-semibold">Medications</div>
                      <div className="text-sm">
                        (Sedatives, Anti-Depressants, Anti-Parkinson&apos;s,
                        Diuretics, Anti-hypertensives, hypnotics)
                      </div>
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="some">
                            Taking some listed medications
                          </SelectItem>
                          <SelectItem value="multiple">
                            Taking multiple listed medications
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 text-center">X</td>
                  </tr>
                  <tr className="border-b border-stone-300">
                    <td className="p-3">
                      <div className="font-semibold">Psychological</div>
                      <div className="text-sm">
                        Anxiety, Depression, ↓Cooperation, ↓Insight or
                        ↓Judgement{" "}
                        <span className="font-semibold">esp. re mobility</span>
                      </div>
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="none">None</SelectItem>
                          <SelectItem value="mild">Mild impairment</SelectItem>
                          <SelectItem value="severe">
                            Severe impairment
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 text-center">X</td>
                  </tr>
                  <tr className="border-b border-stone-300">
                    <td className="p-3">
                      <div className="font-semibold">Cognitive Status</div>
                      <div className="text-sm">
                        AMTS: Hodkinson Abbreviated Mental Test Score
                      </div>
                    </td>
                    <td className="p-3">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normal">Normal</SelectItem>
                          <SelectItem value="mild">Mild impairment</SelectItem>
                          <SelectItem value="severe">
                            Severe impairment
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="p-3 text-center">X</td>
                  </tr>
                  <tr>
                    <td className="p-3">
                      <div className="font-semibold">Fall Risk Status</div>
                    </td>
                    <td className="p-3">
                      <div>
                        <span className="text-green-500 font-semibold">
                          Low Risk
                        </span>{" "}
                        OR{" "}
                        <span className="text-amber-500 font-semibold">
                          Medium Risk
                        </span>{" "}
                        OR{" "}
                        <span className="text-red-600 font-semibold">
                          High Risk
                        </span>
                      </div>
                    </td>
                    <td className="p-3 text-center">XX/20</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </CollapsibleSection>

        {/* Part 2: Risk Factor Checklist */}
        <CollapsibleSection title="Part 2: Risk Factor Checklist">
          <div className="px-3">
          <div className="border border-stone-300 rounded-[10px] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-stone-300">
                  <th className="w-[20%] min-w-[150px] px-3.5 py-3 text-left text-sm font-semibold text-zinc-900">
                    Factor
                  </th>
                  <th className="w-[60%] px-3.5 py-3 text-left text-sm font-semibold text-zinc-900">
                    Description
                  </th>
                  <th className="w-[20%] min-w-[120px] px-3.5 py-3 text-left text-sm font-semibold text-zinc-900">
                    Y/N
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Vision
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Reports / observed difficulty seeing - objects / signs /
                      finding way around
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Mobility
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Mobility status unknown or appears unsafe / impulsive /
                      forgets gait aid
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Transfers
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Transfer status unknown or appears unsafe, ie.
                      over-reaches, impulsive
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Behaviors
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="space-y-2.5">
                      <div className="h-8 text-sm text-zinc-900">
                        Observed or reported agitation, confusion,
                        disorientations
                      </div>
                      <div className="h-8 text-sm text-zinc-900">
                        Difficulty following instructions, or non-compliant
                        (observed or known)
                      </div>
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <div className="space-y-2.5">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Activities of Daily Living (A.D.L&apos;s)
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="space-y-2.5">
                      <div className="h-8 text-sm text-zinc-900">
                        Observed risk-taking behaviors, or reported from
                        referrer / previous facility
                      </div>
                      <div className="h-8 text-sm text-zinc-900">
                        Observed unsafe use of equipment
                      </div>
                      <div className="h-8 text-sm text-zinc-900">
                        Unsafe footwear / inappropriate clothing
                      </div>
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <div className="space-y-2.5">
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select>
                        <SelectTrigger className="bg-sky-50">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Environment
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Difficulties with orientation to environment, ie. areas
                      between bed / bathroom / dining room
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Nutrition
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Underweight / low appetite
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr className="border-b border-stone-300">
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Continence
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <div className="text-sm text-zinc-900">
                      Reported or known urgency / nocturia / accidents
                    </div>
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
                <tr>
                  <td className="w-[20%] min-w-[150px] px-3.5 py-3">
                    <div className="text-sm font-semibold text-zinc-900">
                      Other
                    </div>
                  </td>
                  <td className="w-[60%] px-3.5 py-3">
                    <Input placeholder="Enter Text" className="bg-sky-50" />
                  </td>
                  <td className="w-[20%] min-w-[120px] px-3.5 py-3">
                    <Select>
                      <SelectTrigger className="bg-sky-50">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes</SelectItem>
                        <SelectItem value="no">No</SelectItem>
                      </SelectContent>
                    </Select>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          </div>
        </CollapsibleSection>

        {/* Part 3: Action Plan */}
        <CollapsibleSection title="Part 3: Action Plan">
          <div className="px-3">
          <div className="space-y-4">
            <div className="text-sm">
              For Risk factors identified in Part 1 &amp; 2, list strategies
              below to manage falls risk.
            </div>
            <div className="border border-stone-300 rounded-md">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-300">
                    <th className="text-left p-3 w-1/3 text-sm font-semibold">
                      Problem List
                    </th>
                    <th className="text-left p-3 text-sm font-semibold">
                      Intervention Strategies / Referrals
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5, 6, 7].map((index) => (
                    <tr key={index}>
                      <td className="p-3">
                        <Input
                          placeholder="Enter problem"
                          className="bg-sky-50"
                        />
                      </td>
                      <td className="p-3">
                        <Input
                          placeholder="Enter intervention strategy"
                          className="bg-sky-50"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          </div>
        </CollapsibleSection>

        {/* TALS Guidance Section */}
        <CollapsibleSection title="TALS Guidance - Transportation Assistance Level (TAL) Scale">
          <div className="px-3">
          <div className="w-full bg-white rounded-[10px] flex flex-col">
            {/* Header */}
            <div className="w-full bg-white rounded-t-[10px] border border-stone-300">
              <div className="w-full flex items-center">
                <div className="flex-1 px-3.5 py-3">
                  <h3 className="text-black text-sm font-semibold">
                    Select TALS
                  </h3>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="w-full bg-white rounded-b-[10px] border border-t-0 border-stone-300">
              <div className="p-3.5">
                <RadioGroup defaultValue="wheelchair" className="space-y-1">
                  <div className="w-full flex items-center gap-2">
                    <RadioGroupItem
                      value="non-ambulatory"
                      id="non-ambulatory"
                    />
                    <Bed className="w-9 h-9 text-neutral-600" />
                    <FormLabel
                      htmlFor="non-ambulatory"
                      className="flex-1 text-sm text-black font-normal"
                    >
                      Non-ambulatory [TAL–1]
                    </FormLabel>
                  </div>

                  <div className="w-full flex items-center gap-2">
                    <RadioGroupItem value="wheelchair" id="wheelchair" />
                    <BadgeHelp className="w-9 h-9 text-neutral-600" />
                    <FormLabel
                      htmlFor="wheelchair"
                      className="flex-1 text-sm text-black font-normal"
                    >
                      Wheelchair [TAL–2]
                    </FormLabel>
                  </div>

                  <div className="w-full flex items-center gap-2">
                    <RadioGroupItem value="ambulatory" id="ambulatory" />
                    <User2 className="w-9 h-9 text-neutral-600" />
                    <FormLabel
                      htmlFor="ambulatory"
                      className="flex-1 text-sm text-black font-normal"
                    >
                      Ambulatory [TAL-3]
                    </FormLabel>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
