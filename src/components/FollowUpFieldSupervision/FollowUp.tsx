"use client";

import { useState } from "react";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { SignaturePad } from "@/components/ui/signature-pad";

// Styles constants
const STYLES = {
  formLabel: "text-xs font-semibold text-neutral-400",
  optionLabel: "text-sm font-normal text-zinc-900",
  inputField: "bg-white",
};

// RadioQuestion component for reuse
type RadioQuestionWithDateProps = {
  id: string;
  label: string;
  value: string;
  date: Date | undefined;
  onChange: (value: string) => void;
  onDateChange: (date: Date | undefined) => void;
};

const RadioQuestionWithDate: React.FC<RadioQuestionWithDateProps> = ({
  id,
  label,
  value,
  date,
  onChange,
  onDateChange,
}) => (
  <div className="flex flex-col gap-0.5">
    <FormLabel className={STYLES.formLabel}>{label}</FormLabel>
    <div className="space-y-2">
      <RadioGroup value={value} onValueChange={onChange}>
        <div className="flex flex-row items-start gap-2">
          <RadioGroupItem value="yes" id={`${id}-yes`} className="mt-1" />
          <div className="flex-1 flex flex-col justify-center items-start gap-0.5">
            <FormLabel htmlFor={`${id}-yes`} className={STYLES.optionLabel}>
              Yes
            </FormLabel>
            <DatePicker
              date={date}
              setDate={onDateChange}
              className={`w-full border border-[#8E8E93] rounded-[3px] ${
                value === "yes"
                  ? "bg-[#F1FBFF]"
                  : "bg-gray-100 pointer-events-none opacity-50"
              }`}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <RadioGroupItem value="no" id={`${id}-no`} />
          <FormLabel htmlFor={`${id}-no`} className={STYLES.optionLabel}>
            No
          </FormLabel>
        </div>
      </RadioGroup>
    </div>
  </div>
);

const FollowUp = () => {
  const [formData, setFormData] = useState({
    clientFollowUp: "",
    clientFollowUpDate: undefined as Date | undefined,
    workerFollowUp: "",
    workerFollowUpDate: undefined as Date | undefined,
    routineFollowUpDate: undefined as Date | undefined,
    methodOfContact: "",
    rnSignature: null as string | null,
    rnSignDate: undefined as Date | undefined,
    rnName: "",
    rnPosition: "",
    workerSignature: null as string | null,
    workerSignDate: undefined as Date | undefined,
  });

  return (
    < div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <CollapsibleSection title="Follow Up">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <RadioQuestionWithDate
              id="client-followup"
              label='Follow-up to assess client requirements needed. If "Yes", note date:'
              value={formData.clientFollowUp}
              date={formData.clientFollowUpDate}
              onChange={(value) =>
                setFormData({ ...formData, clientFollowUp: value })
              }
              onDateChange={(date) =>
                setFormData({ ...formData, clientFollowUpDate: date })
              }
            />

            <RadioQuestionWithDate
              id="worker-followup"
              label='Follow-up to assess Worker&apos;s competency. If "Yes", note date:'
              value={formData.workerFollowUp}
              date={formData.workerFollowUpDate}
              onChange={(value) =>
                setFormData({ ...formData, workerFollowUp: value })
              }
              onDateChange={(date) =>
                setFormData({ ...formData, workerFollowUpDate: date })
              }
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-0.5">
              <FormLabel className={STYLES.formLabel}>
                Routine follow up to be conducted
              </FormLabel>
              <DatePicker
                date={formData.routineFollowUpDate}
                setDate={(date) =>
                  setFormData({ ...formData, routineFollowUpDate: date })
                }
                className="w-full"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel className={STYLES.formLabel}>
                Method of Contact
              </FormLabel>
              <RadioGroup
                value={formData.methodOfContact}
                onValueChange={(value) =>
                  setFormData({ ...formData, methodOfContact: value })
                }
                className="flex flex-col gap-2"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="home_visit" id="method-home-visit" />
                  <FormLabel
                    htmlFor="method-home-visit"
                    className={STYLES.optionLabel}
                  >
                    Home Visit
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="telephone" id="method-telephone" />
                  <FormLabel
                    htmlFor="method-telephone"
                    className={STYLES.optionLabel}
                  >
                    Telephone
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Sign & Date">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
          {/* RN Section */}
          <div className="space-y-3">
              <SignaturePad
                label="RN Signature"
                value={formData.rnSignature}
                onChange={(signature) =>
                  setFormData({ ...formData, rnSignature: signature })
                }
                height={96}
                className="w-full"
                placeholder="Sign here"
                clearButtonText="Clear"
                clearButtonVariant="outline"
                clearButtonSize="sm"
              />

              <FormLabel className={STYLES.formLabel}>RN Sign Date</FormLabel>
              <DatePicker
                date={formData.rnSignDate}
                setDate={(date) =>
                  setFormData({ ...formData, rnSignDate: date })
                }
                className="w-full"
              />

              <FormLabel className={STYLES.formLabel}>Name of RN</FormLabel>
              <Input
                value={formData.rnName}
                onChange={(e) =>
                  setFormData({ ...formData, rnName: e.target.value })
                }
                placeholder="RN Name"
                className={STYLES.inputField}
              />

              <FormLabel className={STYLES.formLabel}>Position</FormLabel>
              <Input
                value={formData.rnPosition}
                onChange={(e) =>
                  setFormData({ ...formData, rnPosition: e.target.value })
                }
                placeholder="RN Position"
                className={STYLES.inputField}
              />
          </div>

          {/* Worker Section */}
          <div className="space-y-3">
            <SignaturePad
                label="Signature of Homecare Worker"
                value={formData.workerSignature}
                onChange={(signature) =>
                  setFormData({ ...formData, workerSignature: signature })
                }
                height={96}
                className="w-full"
                placeholder="Sign here"
                clearButtonText="Clear"
                clearButtonVariant="outline"
                clearButtonSize="sm"
              />

              <FormLabel className={STYLES.formLabel}>
                Homecare Worker Sign Date
              </FormLabel>
              <DatePicker
                date={formData.workerSignDate}
                setDate={(date) =>
                  setFormData({ ...formData, workerSignDate: date })
                }
                className="w-full"
              />
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default FollowUp;
