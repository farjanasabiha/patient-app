"use client";

import { FC } from "react";
import { useState } from "react";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Checkbox } from "@/components/ui/checkbox";

// Type for form data
interface FormData {
  needsBeingMet: string;
  comfortableNonDiscriminatory: string;
  notifiedWorkerChange: string;
  notifiedRescheduling: string;
  advisedSupervisor: string;
  advisedContact: string;
  dailyRoutineFollowed: string;
  workerOnTime: string;
  workerStaysSpecifiedTime: string;
  workerConcerns: string;
  workerQualities: string[];
  returnsChangeAndReceipts: string;
  signTimeSheet: string;
  dislikeService: string;
  agencyKnowledgeSkills: string;
  suggestionsForImprovement: string;
  overallQuality: string;
  workerTreatment: string;
  qualityToCost: string;
  noResponseComments: string;
}

const ClientSatisfaction: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    needsBeingMet: "",
    comfortableNonDiscriminatory: "",
    notifiedWorkerChange: "",
    notifiedRescheduling: "",
    advisedSupervisor: "",
    advisedContact: "",
    dailyRoutineFollowed: "",
    workerOnTime: "",
    workerStaysSpecifiedTime: "",
    workerConcerns: "",
    workerQualities: [],
    returnsChangeAndReceipts: "",
    signTimeSheet: "",
    dislikeService: "",
    agencyKnowledgeSkills: "",
    suggestionsForImprovement: "",
    overallQuality: "",
    workerTreatment: "",
    qualityToCost: "",
    noResponseComments: "",
  });

  // Helper component for yes/no radio questions
  const YesNoRadioGroup = ({
    value,
    onChange,
    name,
    label,
    number,
  }: {
    value: string;
    onChange: (value: string) => void;
    name: string;
    label: string;
    number: number;
  }) => (
    <div className="flex flex-col gap-0.5">
      <FormLabel className="text-xs font-semibold text-neutral-400">
        {number}. {label}
      </FormLabel>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yes" id={`${name}-yes`} />
            <FormLabel
              htmlFor={`${name}-yes`}
              className="text-sm font-normal text-zinc-900"
            >
              Yes
            </FormLabel>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="no" id={`${name}-no`} />
            <FormLabel
              htmlFor={`${name}-no`}
              className="text-sm font-normal text-zinc-900"
            >
              No
            </FormLabel>
          </div>
        </div>
      </RadioGroup>
    </div>
  );

  // Helper component for rating radio questions
  const RatingRadioGroup = ({
    value,
    onChange,
    name,
    label,
    options,
    number,
  }: {
    value: string;
    onChange: (value: string) => void;
    name: string;
    label: string;
    options: string[];
    number: number;
  }) => (
    <div className="flex flex-col gap-0.5">
      <FormLabel className="text-xs font-semibold text-neutral-400">
        {number}. {label}
      </FormLabel>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="flex flex-col gap-2">
          {options.map((option) => (
            <div key={option} className="flex items-center gap-2">
              <RadioGroupItem
                value={option.toLowerCase()}
                id={`${name}-${option.toLowerCase()}`}
              />
              <FormLabel
                htmlFor={`${name}-${option.toLowerCase()}`}
                className="text-sm font-normal text-zinc-900"
              >
                {option}
              </FormLabel>
            </div>
          ))}
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div>
      <CollapsibleSection title="Client Satisfaction">
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.needsBeingMet}
              onChange={(value) =>
                setFormData({ ...formData, needsBeingMet: value })
              }
              name="needs-met"
              number={1}
              label="Does the client feel their needs/wants are being met & are being provided, in accordance with the Care Plan?"
            />

            <YesNoRadioGroup
              value={formData.comfortableNonDiscriminatory}
              onChange={(value) =>
                setFormData({
                  ...formData,
                  comfortableNonDiscriminatory: value,
                })
              }
              name="comfortable"
              number={2}
              label="Does the client feel that they are cared for in a comfortable & non discriminatory way?"
            />

            <YesNoRadioGroup
              value={formData.notifiedWorkerChange}
              onChange={(value) =>
                setFormData({ ...formData, notifiedWorkerChange: value })
              }
              name="worker-change"
              number={3}
              label="Is the client notified in advance if their homecare worker is going to be changed?"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.notifiedRescheduling}
              onChange={(value) =>
                setFormData({ ...formData, notifiedRescheduling: value })
              }
              name="rescheduling"
              number={4}
              label="Is the client notified in advance if their regular services have to be rescheduled?"
            />

            <YesNoRadioGroup
              value={formData.advisedSupervisor}
              onChange={(value) =>
                setFormData({ ...formData, advisedSupervisor: value })
              }
              name="supervisor"
              number={5}
              label="Was the client advised who would be supervising their homecare worker(s)?"
            />

            <YesNoRadioGroup
              value={formData.advisedContact}
              onChange={(value) =>
                setFormData({ ...formData, advisedContact: value })
              }
              name="contact"
              number={6}
              label="Was the client advised who they/their representative/family may contact should they wish to speak to someone other than their homecare worker?"
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.dailyRoutineFollowed}
              onChange={(value) =>
                setFormData({ ...formData, dailyRoutineFollowed: value })
              }
              name="routine"
              number={7}
              label="Is the client's normal daily routine followed, as much as possible, within the provision of personal care such as getting up, meal times, and bathing arrangements?"
            />

            <YesNoRadioGroup
              value={formData.workerOnTime}
              onChange={(value) =>
                setFormData({ ...formData, workerOnTime: value })
              }
              name="on-time"
              number={8}
              label="Does the client's homecare worker(s) show up for work on time?"
            />

            <YesNoRadioGroup
              value={formData.workerStaysSpecifiedTime}
              onChange={(value) =>
                setFormData({ ...formData, workerStaysSpecifiedTime: value })
              }
              name="stays-time"
              number={9}
              label="Does their homecare worker(s) stay for the specified time?"
            />
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.workerConcerns}
              onChange={(value) =>
                setFormData({ ...formData, workerConcerns: value })
              }
              name="concerns"
              number={10}
              label="Is their anything that concerns the client about their homecare worker(s)?"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                11. Does the client find their homecare worker(s) to be:
              </FormLabel>
              <div className="space-y-2">
                {[
                  "Friendly",
                  "Respectful",
                  "Prompt",
                  "Considerate",
                  "Honest",
                  "Dependable",
                  "Polite",
                  "Believable",
                  "Efficient",
                ].map((quality) => (
                  <div key={quality} className="flex items-center gap-2">
                    <Checkbox
                      id={`quality-${quality.toLowerCase()}`}
                      checked={formData.workerQualities.includes(quality)}
                      onCheckedChange={(checked) => {
                        setFormData((prev) => ({
                          ...prev,
                          workerQualities: checked
                            ? [...prev.workerQualities, quality]
                            : prev.workerQualities.filter((q) => q !== quality),
                        }));
                      }}
                    />
                    <FormLabel
                      htmlFor={`quality-${quality.toLowerCase()}`}
                      className="text-sm font-normal text-zinc-900"
                    >
                      {quality}
                    </FormLabel>
                  </div>
                ))}
              </div>
            </div>

            <YesNoRadioGroup
              value={formData.returnsChangeAndReceipts}
              onChange={(value) =>
                setFormData({ ...formData, returnsChangeAndReceipts: value })
              }
              name="returns-change"
              number={12}
              label="If homecare worker(s) shop and/or handle money for the client, does he/she always return the change and receipt(s)?"
            />
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.signTimeSheet}
              onChange={(value) =>
                setFormData({ ...formData, signTimeSheet: value })
              }
              name="timesheet"
              number={13}
              label="Does the homecare worker(s) have the client sign his/her Employee Time Sheet after each visit?"
            />

            <YesNoRadioGroup
              value={formData.dislikeService}
              onChange={(value) =>
                setFormData({ ...formData, dislikeService: value })
              }
              name="dislike"
              number={14}
              label="Is there anything the client does not like about our service?"
            />

            <YesNoRadioGroup
              value={formData.agencyKnowledgeSkills}
              onChange={(value) =>
                setFormData({ ...formData, agencyKnowledgeSkills: value })
              }
              name="agency-knowledge"
              number={15}
              label="Does the client feel the agency has the required knowledge & skills to deliver service?"
            />
          </div>

          {/* Sixth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.suggestionsForImprovement}
              onChange={(value) =>
                setFormData({ ...formData, suggestionsForImprovement: value })
              }
              name="suggestions"
              number={16}
              label="Does the client have any suggestions for ways the agency can improve our service?"
            />

            <RatingRadioGroup
              value={formData.overallQuality}
              onChange={(value) =>
                setFormData({ ...formData, overallQuality: value })
              }
              name="overall-quality"
              number={17}
              label="How would the client rate the overall quality of service they received?"
              options={["Poor", "Fair", "Good", "Excellent"]}
            />

            <RatingRadioGroup
              value={formData.workerTreatment}
              onChange={(value) =>
                setFormData({ ...formData, workerTreatment: value })
              }
              name="worker-treatment"
              number={18}
              label="How does the client rate the homecare worker(s) treatment of them?"
              options={["Poor", "Fair", "Good", "Excellent"]}
            />
          </div>

          {/* Seventh Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RatingRadioGroup
              value={formData.qualityToCost}
              onChange={(value) =>
                setFormData({ ...formData, qualityToCost: value })
              }
              name="quality-cost"
              number={19}
              label="How does the client view the quality of service to its cost?"
              options={["Poor", "Fair", "Good", "Excellent"]}
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                20. Provide comments for all &quot;No&quot; responses to the
                above questions
              </FormLabel>
              <Textarea
                value={formData.noResponseComments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    noResponseComments: e.target.value,
                  })
                }
                placeholder="Enter comments"
                className="min-h-[144px]"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default ClientSatisfaction;
