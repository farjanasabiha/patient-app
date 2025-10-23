"use client";

import { useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Plus, Trash2 } from "lucide-react";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import {
  useDynamicMedications,
  Medication,
} from "../../../hooks/useDynamicMedications";

export type { Medication };

interface DynamicMedicationsProps {
  title?: string;
  minMedications?: number;
  initialMedications?: Medication[];
  onMedicationsChange?: (medications: Medication[]) => void;
  showCollapsibleSection?: boolean;
  showFrequencyGuide?: boolean;
  showQuantityGuide?: boolean;
  className?: string;
}

export default function DynamicMedications({
  title = "Medications",
  minMedications = 2,
  initialMedications = [],
  onMedicationsChange,
  showCollapsibleSection = false,
  showFrequencyGuide = true,
  showQuantityGuide = true,
  className = "",
}: DynamicMedicationsProps) {
  const {
    medications,
    addMedication,
    updateMedication,
    removeMedication,
    canRemove,
  } = useDynamicMedications({
    initialMedications,
    minMedications,
  });

  // Notify parent component when medications change
  useEffect(() => {
    if (onMedicationsChange) {
      onMedicationsChange(medications);
    }
  }, [medications, onMedicationsChange]); 

  const frequencyOptions = [
    { label: "OD or qd", description: "Once daily", value: "qd" },
    { label: "BID or bid", description: "Twice daily", value: "bid" },
    { label: "TID or tid", description: "Three times daily", value: "tid" },
    { label: "QID or qid", description: "Four times daily", value: "qid" },
    { label: "QHS", description: "At bedtime", value: "qhs" },
    { label: "Q4H", description: "Every 4 hours", value: "q4h" },
    { label: "PRN", description: "As needed", value: "prn" },
  ];

  const quantityOptions = [
    { label: "tab(s)", description: "Tablet(s)" },
    { label: "cap(s)", description: "Capsule(s)" },
    { label: "mL", description: "Milliliter" },
    { label: "g", description: "Gram" },
    { label: "mg", description: "Milligram" },
    { label: "mcg", description: "Microgram" },
  ];

  const MedicationContent = () => (
    <div className={`space-y-6 ${className}`}>
      {/* Frequency Guide */}
      {showFrequencyGuide && (
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-sm font-semibold mb-3 text-center">Frequency</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {frequencyOptions.map((option) => (
              <div key={option.label} className="flex items-center gap-2">
                <span className="w-20 text-sm font-semibold">
                  {option.label}:
                </span>
                <span className="text-sm">{option.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quantity Guide */}
      {showQuantityGuide && (
        <div className="bg-gray-100 rounded-md p-4">
          <h3 className="text-sm font-semibold mb-3 text-center">Quantity</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quantityOptions.map((option) => (
              <div key={option.label} className="flex items-center gap-2">
                <span className="w-20 text-sm font-semibold">
                  {option.label}:
                </span>
                <span className="text-sm">{option.description}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Dynamic Medication Sections */}
      <div className="space-y-4">
        {medications.map((medication: Medication, index: number) => (
          <div key={medication.id}>
            {/* Separator with Delete Button */}
            <div className="flex items-center gap-4 my-4">
              <span className="text-sm font-semibold">{index + 1}.</span>
              <div className="flex-1 border-t-1 border-stone-300"></div>
              {canRemove && index >= minMedications && (
                <PrimaryButton
                  variant="outline"
                  size="sm"
                  className="w-8 h-8 p-1 border-red-300 text-red-500 hover:bg-red-50"
                  onClick={() => removeMedication(medication.id)}
                >
                  <Trash2 className="w-4 h-4" />
                </PrimaryButton>
              )}
            </div>

            {/* Medication Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Medication
                </FormLabel>
                <Input
                  placeholder="Enter medication"
                  className="bg-sky-50"
                  value={medication.medication}
                  onChange={(e) =>
                    updateMedication(
                      medication.id,
                      "medication",
                      e.target.value
                    )
                  }
                />
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Dose
                </FormLabel>
                <Input
                  placeholder="Enter dose"
                  className="bg-sky-50"
                  value={medication.dose}
                  onChange={(e) =>
                    updateMedication(medication.id, "dose", e.target.value)
                  }
                />
              </div>
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Frequency
                </FormLabel>
                <Select
                  value={medication.frequency}
                  onValueChange={(value) =>
                    updateMedication(medication.id, "frequency", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    {frequencyOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label} - {option.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="space-y-1">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Route/Changes
                </FormLabel>
                <Input
                  placeholder="Enter route/changes"
                  className="bg-sky-50"
                  value={medication.route}
                  onChange={(e) =>
                    updateMedication(medication.id, "route", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add Medication Button */}
      <div className="flex justify-end mt-4">
        <PrimaryButton
          size="lg"
          className="w-[48px] h-[48px] rounded-[24px] p-[12px]"
          onClick={addMedication}
        >
          <Plus className="w-6 h-6" />
        </PrimaryButton>
      </div>
    </div>
  );

  if (showCollapsibleSection) {
    return (
      <CollapsibleSection title={title}>
        <MedicationContent />
      </CollapsibleSection>
    );
  }

  return <MedicationContent />;
}
