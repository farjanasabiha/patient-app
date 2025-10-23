"use client";

import { useState } from "react";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

interface FormData {
  workerName: string;
  sufficientTraining: string;
  trainingElaboration: string;
  // Assessment of Worker's competency
  followsCarePlan: string;
  followsProcedures: string;
  completesActivities: string;
  usesSafeTechniques: string;
  documentsNotations: string;
  recordsInformation: string;
  deliversReports: string;
  maintainsConfidentiality: string;
  reportsHealthConcerns: string;
  appliesJudgment: string;
  handlesChanges: string;
  worksInTeam: string;
  relaysConcerns: string;
  needsHelpElaboration: string;
  // Assessment of Worker's understanding
  usesUniversalPrecautions: string;
  appliesInfectionControl: string;
  usesBodyMechanics: string;
  followsSafetyMeasures: string;
  followsEnvironmentSafety: string;
  followsDressCode: string;
  wearsIdentificationBadge: string;
  followsWorkEthics: string;
  needsHelpNoElaboration: string;
  // Additional training and changes
  additionalTraining: string;
  additionalTrainingElaboration: string;
  medicalNeedsTraining: string;
  medicalNeedsElaboration: string;
  dutiesChange: string;
  dutiesChangeElaboration: string;
  increaseSupervision: string;
  supervisionElaboration: string;
  additionalComments: string;
}

const WorkerCompetency = () => {
  const [formData, setFormData] = useState<FormData>({
    workerName: "",
    sufficientTraining: "",
    trainingElaboration: "",
    followsCarePlan: "",
    followsProcedures: "",
    completesActivities: "",
    usesSafeTechniques: "",
    documentsNotations: "",
    recordsInformation: "",
    deliversReports: "",
    maintainsConfidentiality: "",
    reportsHealthConcerns: "",
    appliesJudgment: "",
    handlesChanges: "",
    worksInTeam: "",
    relaysConcerns: "",
    needsHelpElaboration: "",
    usesUniversalPrecautions: "",
    appliesInfectionControl: "",
    usesBodyMechanics: "",
    followsSafetyMeasures: "",
    followsEnvironmentSafety: "",
    followsDressCode: "",
    wearsIdentificationBadge: "",
    followsWorkEthics: "",
    needsHelpNoElaboration: "",
    additionalTraining: "",
    additionalTrainingElaboration: "",
    medicalNeedsTraining: "",
    medicalNeedsElaboration: "",
    dutiesChange: "",
    dutiesChangeElaboration: "",
    increaseSupervision: "",
    supervisionElaboration: "",
    additionalComments: "",
  });


  // Helper component for yes/no radio questions
  const YesNoRadioGroup = ({
    value,
    onChange,
    name,
    label,
    yesLabel = "Yes",
    noLabel = "No",
  }: {
    value: string;
    onChange: (value: string) => void;
    name: string;
    label: string;
    yesLabel?: string;
    noLabel?: string;
  }) => (
    <div className="flex flex-col gap-0.5">
      <FormLabel className="text-xs font-semibold text-neutral-400">
        {label}
      </FormLabel>
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <RadioGroupItem value="yes" id={`${name}-yes`} />
            <FormLabel
              htmlFor={`${name}-yes`}
              className="text-sm font-normal text-zinc-900"
            >
              {yesLabel}
            </FormLabel>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="no" id={`${name}-no`} />
            <FormLabel
              htmlFor={`${name}-no`}
              className="text-sm font-normal text-zinc-900"
            >
              {noLabel}
            </FormLabel>
          </div>
        </div>
      </RadioGroup>
    </div>
  );

  return (
    <div className="mx-auto px-[1px] space-y-6">
      <CollapsibleSection title="Homecare Worker's Competency & Abilities">
        <div className="space-y-6">
          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Homecare Worker Name
              </FormLabel>
              <Input
                value={formData.workerName}
                onChange={(e) =>
                  setFormData({ ...formData, workerName: e.target.value })
                }
                placeholder="Homecare Worker Full Name"
                className="bg-sky-50"
              />
            </div>
          </div>

          {/* Training Assessment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.sufficientTraining}
              onChange={(value) =>
                setFormData({ ...formData, sufficientTraining: value })
              }
              name="sufficient-training"
              label="Worker received sufficient training and/orientation to competently conduct the duties of the assignment."
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Elaborate for &quot;No&quot; responses
              </FormLabel>
              <Textarea
                value={formData.trainingElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    trainingElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Assessment of Worker's competency and abilities">
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.followsCarePlan}
              onChange={(value) =>
                setFormData({ ...formData, followsCarePlan: value })
              }
              name="follows-care-plan"
              label="Follows Care Plan as written"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.followsProcedures}
              onChange={(value) =>
                setFormData({ ...formData, followsProcedures: value })
              }
              name="follows-procedures"
              label="Follows procedural instructions carefully, correctly, and consistently"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.completesActivities}
              onChange={(value) =>
                setFormData({ ...formData, completesActivities: value })
              }
              name="completes-activities"
              label="Completes assigned duties/activities competently"
              noLabel="Needs Help"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.usesSafeTechniques}
              onChange={(value) =>
                setFormData({ ...formData, usesSafeTechniques: value })
              }
              name="uses-safe-techniques"
              label="Uses appropriate and safe techniques in the provision of care"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.documentsNotations}
              onChange={(value) =>
                setFormData({ ...formData, documentsNotations: value })
              }
              name="documents-notations"
              label="Documents written notations, according to case management requirements"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.recordsInformation}
              onChange={(value) =>
                setFormData({ ...formData, recordsInformation: value })
              }
              name="records-information"
              label="Records client functioning information accurately, thoroughly and consistently"
              noLabel="Needs Help"
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.deliversReports}
              onChange={(value) =>
                setFormData({ ...formData, deliversReports: value })
              }
              name="delivers-reports"
              label="Delivers relevant and timely reports to Supervisor and co-workers"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.maintainsConfidentiality}
              onChange={(value) =>
                setFormData({ ...formData, maintainsConfidentiality: value })
              }
              name="maintains-confidentiality"
              label="Applies and maintains confidentiality measures"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.reportsHealthConcerns}
              onChange={(value) =>
                setFormData({ ...formData, reportsHealthConcerns: value })
              }
              name="reports-health-concerns"
              label="Is alert for, and reports concerns, which impact the client's health and safety"
              noLabel="Needs Help"
            />
          </div>

          {/* Fourth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.appliesJudgment}
              onChange={(value) =>
                setFormData({ ...formData, appliesJudgment: value })
              }
              name="applies-judgment"
              label="Applies tack, and good judgment"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.handlesChanges}
              onChange={(value) =>
                setFormData({ ...formData, handlesChanges: value })
              }
              name="handles-changes"
              label="Is receptive to, and can handle, changes"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.worksInTeam}
              onChange={(value) =>
                setFormData({ ...formData, worksInTeam: value })
              }
              name="works-in-team"
              label="Works well as a member of the Client Care Team"
              noLabel="Needs Help"
            />
          </div>

          {/* Fifth Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.relaysConcerns}
              onChange={(value) =>
                setFormData({ ...formData, relaysConcerns: value })
              }
              name="relays-concerns"
              label="Relays concerns about own skills and/or knowledge deficits to Supervisor"
              noLabel="Needs Help"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Elaborate for &quot;Needs Help&quot; responses
              </FormLabel>
              <Textarea
                value={formData.needsHelpElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    needsHelpElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Assessment of Worker's understanding & adherence to relevant policies, procedures & practices">
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.usesUniversalPrecautions}
              onChange={(value) =>
                setFormData({ ...formData, usesUniversalPrecautions: value })
              }
              name="uses-universal-precautions"
              label="Uses Universal Precautions appropriately"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.appliesInfectionControl}
              onChange={(value) =>
                setFormData({ ...formData, appliesInfectionControl: value })
              }
              name="applies-infection-control"
              label="Applies proper Infection Control Techniques"
              noLabel="Needs Help"
            />

            <YesNoRadioGroup
              value={formData.usesBodyMechanics}
              onChange={(value) =>
                setFormData({ ...formData, usesBodyMechanics: value })
              }
              name="uses-body-mechanics"
              label="Uses appropriate Body Mechanics"
              noLabel="Needs Help"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.followsSafetyMeasures}
              onChange={(value) =>
                setFormData({ ...formData, followsSafetyMeasures: value })
              }
              name="follows-safety-measures"
              label="Follows personal safety measures"
            />

            <YesNoRadioGroup
              value={formData.followsEnvironmentSafety}
              onChange={(value) =>
                setFormData({ ...formData, followsEnvironmentSafety: value })
              }
              name="follows-environment-safety"
              label="Follows home environment safety measures"
            />

            <YesNoRadioGroup
              value={formData.followsDressCode}
              onChange={(value) =>
                setFormData({ ...formData, followsDressCode: value })
              }
              name="follows-dress-code"
              label="Dresses according to Dress Code"
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.wearsIdentificationBadge}
              onChange={(value) =>
                setFormData({ ...formData, wearsIdentificationBadge: value })
              }
              name="wears-identification-badge"
              label="Wears Agency's Identification Badge"
            />

            <YesNoRadioGroup
              value={formData.followsWorkEthics}
              onChange={(value) =>
                setFormData({ ...formData, followsWorkEthics: value })
              }
              name="follows-work-ethics"
              label="Follows Standards of Conduct & Work Ethics"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Elaborate for &quot;Needs Help&quot; and &quot;No&quot;
                responses
              </FormLabel>
              <Textarea
                value={formData.needsHelpNoElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    needsHelpNoElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>

          {/* Additional Training Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.additionalTraining}
              onChange={(value) =>
                setFormData({ ...formData, additionalTraining: value })
              }
              name="additional-training"
              label="Arrange for, or provide, additional training to improve the Worker's competency"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                If &quot;Yes,&quot; elaborate
              </FormLabel>
              <Textarea
                value={formData.additionalTrainingElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalTrainingElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>

          {/* Medical Needs Training Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.medicalNeedsTraining}
              onChange={(value) =>
                setFormData({ ...formData, medicalNeedsTraining: value })
              }
              name="medical-needs-training"
              label="Arrange for, or provide, training to Worker to meet the medically related needs of the Client in order to achieve his/her established goals"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                If &quot;Yes,&quot; elaborate
              </FormLabel>
              <Textarea
                value={formData.medicalNeedsElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    medicalNeedsElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>

          {/* Duties Change Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.dutiesChange}
              onChange={(value) =>
                setFormData({ ...formData, dutiesChange: value })
              }
              name="duties-change"
              label="Change required in Worker's duties/activities"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                If &quot;Yes,&quot; elaborate
              </FormLabel>
              <Textarea
                value={formData.dutiesChangeElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    dutiesChangeElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>

          {/* Supervision Increase Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <YesNoRadioGroup
              value={formData.increaseSupervision}
              onChange={(value) =>
                setFormData({ ...formData, increaseSupervision: value })
              }
              name="increase-supervision"
              label="Increase needed for frequency of supervision of client's needs and/or Worker's capabilities"
            />

            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                If &quot;Yes,&quot; elaborate
              </FormLabel>
              <Textarea
                value={formData.supervisionElaboration}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    supervisionElaboration: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>

          {/* Additional Comments */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Additional Comments
              </FormLabel>
              <Textarea
                value={formData.additionalComments}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additionalComments: e.target.value,
                  })
                }
                placeholder="Enter Text"
                className="min-h-[80px] bg-white"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

    </div>
  );
};

export default WorkerCompetency;
