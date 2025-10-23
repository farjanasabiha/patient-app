"use client";

import { FC } from "react";
import { useState } from "react";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

interface FormData {
  levelOfCare: string;
  amountPerVisit: string;
  frequencyOfService: string;
  durationOfService: string;
  noResponsesElaboration: string;
  serviceAgreementCompliance: string;
  serviceAgreementElaboration: string;
  carePlanAppropriate: string;
  carePlanChanges: string;
}

const CaseManagement: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    levelOfCare: "",
    amountPerVisit: "",
    frequencyOfService: "",
    durationOfService: "",
    noResponsesElaboration: "",
    serviceAgreementCompliance: "",
    serviceAgreementElaboration: "",
    carePlanAppropriate: "",
    carePlanChanges: "",
  });

  // Helper component for yes/no radio questions
  const YesNoRadioGroup = ({
    value,
    onChange,
    name,
    label,
  }: {
    value: string;
    onChange: (value: string) => void;
    name: string;
    label: string;
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

  return (
    <div>
      <CollapsibleSection title="Case Management">
        <div className="space-y-6">
          {/* Required Activities Section */}
          <div>
            <div className="text-zinc-900 text-sm font-semibold mb-3">
              Required activities/duties are being performed according to:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <YesNoRadioGroup
                value={formData.levelOfCare}
                onChange={(value) =>
                  setFormData({ ...formData, levelOfCare: value })
                }
                name="level-of-care"
                label="Level/type of care, as identified in Care Plan"
              />

              <YesNoRadioGroup
                value={formData.amountPerVisit}
                onChange={(value) =>
                  setFormData({ ...formData, amountPerVisit: value })
                }
                name="amount-per-visit"
                label="Amount/time per visit, as identified in Care Plan"
              />

              <YesNoRadioGroup
                value={formData.frequencyOfService}
                onChange={(value) =>
                  setFormData({ ...formData, frequencyOfService: value })
                }
                name="frequency-of-service"
                label="Frequency of service delivery, as stipulated in Care Plan"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-3">
              <YesNoRadioGroup
                value={formData.durationOfService}
                onChange={(value) =>
                  setFormData({ ...formData, durationOfService: value })
                }
                name="duration-of-service"
                label="Duration/period for provision of service, as stated in Care Plan"
              />

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Elaborate for &quot;No&quot; responses
                </FormLabel>
                <Textarea
                  value={formData.noResponsesElaboration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      noResponsesElaboration: e.target.value,
                    })
                  }
                  placeholder="Enter Text"
                  className="min-h-[80px] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Service Agreement Section */}
          <div>
            <div className="text-zinc-900 text-sm font-semibold mb-3">
              Service is being provided in accordance with the Service
              Agreement:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <YesNoRadioGroup
                value={formData.serviceAgreementCompliance}
                onChange={(value) =>
                  setFormData({
                    ...formData,
                    serviceAgreementCompliance: value,
                  })
                }
                name="service-agreement"
                label="Service is being provided in accordance with Service Agreement"
              />

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Elaborate for &quot;No&quot; responses
                </FormLabel>
                <Textarea
                  value={formData.serviceAgreementElaboration}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      serviceAgreementElaboration: e.target.value,
                    })
                  }
                  placeholder="Enter Text"
                  className="min-h-[80px] bg-white"
                />
              </div>
            </div>
          </div>

          {/* Care Plan Section */}
          <div>
            <div className="text-zinc-900 text-sm font-semibold mb-3">
              Care Plan is appropriate at this time to meet client&apos;s needs
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <YesNoRadioGroup
                value={formData.carePlanAppropriate}
                onChange={(value) =>
                  setFormData({ ...formData, carePlanAppropriate: value })
                }
                name="care-plan"
                label="Care Plan is appropriate at this time to meet client's needs"
              />

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  If &quot;No&quot; what changes will be made to the Care Plan
                  and/or what referrals are indicated?
                </FormLabel>
                <Textarea
                  value={formData.carePlanChanges}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      carePlanChanges: e.target.value,
                    })
                  }
                  placeholder="Enter Text"
                  className="min-h-[80px] bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default CaseManagement;
