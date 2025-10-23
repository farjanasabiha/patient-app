"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Plus, Trash2 } from "lucide-react";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { useDynamicDiagnoses, Diagnosis } from "@/hooks/useDynamicDiagnoses";

export type { Diagnosis };

interface DynamicDiagnosisProps {
  title?: string;
  minDiagnoses?: number;
  initialDiagnoses?: Diagnosis[];
  onDiagnosesChange: (diagnoses: Diagnosis[]) => void;
  showCollapsibleSection?: boolean;
}

export default function DynamicDiagnosis({
  title = "Diagnosis",
  minDiagnoses = 2,
  initialDiagnoses = [],
  onDiagnosesChange,
  showCollapsibleSection = false,
}: DynamicDiagnosisProps) {
  const {
    diagnoses,
    addDiagnosis,
    updateDiagnosis,
    removeDiagnosis,
    canRemove,
  } = useDynamicDiagnoses({
    initialDiagnoses,
    minDiagnoses,
  });

  // Notify parent component when diagnoses change
  useEffect(() => {
    onDiagnosesChange(diagnoses);
  }, [diagnoses, onDiagnosesChange]);

  const getDiagnosisLabel = (index: number) => {
    if (index === 0) return "Primary";
    if (index === 1) return "Secondary";
    return `${index + 1}`;
  };

  const DiagnosisContent = () => (
    <div className="flex flex-col gap-3">
      {diagnoses.map((diagnosis, index) => (
        <div key={diagnosis.id} className="flex flex-col gap-3 mb-3">
          {/* Section Header with Number and Delete Button */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-[#1C1C1E] font-poppins">
              {index + 1}.
            </span>
            <div className="flex-1 h-px bg-[#C7C7CC]" />
            {canRemove && index >= minDiagnoses && (
              <PrimaryButton
                variant="outline"
                size="sm"
                className="w-8 h-8 p-1 border-red-300 text-red-500 hover:bg-red-50"
                onClick={() => removeDiagnosis(diagnosis.id)}
              >
                <Trash2 className="w-4 h-4" />
              </PrimaryButton>
            )}
          </div>

          {/* Diagnosis Fields */}
          <div className="flex flex-row items-center gap-6">
            <div className="flex flex-col gap-0.5 flex-1">
              <FormLabel>
                Patient {getDiagnosisLabel(index)} Diagnosis Code
              </FormLabel>
              <Input
                placeholder={`${getDiagnosisLabel(index)} Diagnosis Code`}
                value={diagnosis.code}
                onChange={(e) =>
                  updateDiagnosis(diagnosis.id, "code", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-0.5 flex-1">
              <FormLabel>
                Patient {getDiagnosisLabel(index)} Diagnosis
              </FormLabel>
              <Input
                placeholder={`${getDiagnosisLabel(index)} Diagnosis`}
                value={diagnosis.description}
                onChange={(e) =>
                  updateDiagnosis(diagnosis.id, "description", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-0.5 flex-1">
              {/* Empty column for grid alignment */}
            </div>
          </div>
        </div>
      ))}

      {/* Add Button */}
      <div className="flex justify-end mb-3">
        <PrimaryButton
          size="lg"
          className="w-[48px] h-[48px] rounded-[24px] p-[12px]"
          onClick={addDiagnosis}
        >
          <Plus className="w-6 h-6" />
        </PrimaryButton>
      </div>
    </div>
  );

  if (showCollapsibleSection) {
    return (
      <CollapsibleSection title={title}>
        <DiagnosisContent />
      </CollapsibleSection>
    );
  }

  return <DiagnosisContent />;
}
