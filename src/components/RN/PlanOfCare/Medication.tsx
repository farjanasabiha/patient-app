"use client";

import DynamicMedications from "@/components/Common/Forms/DynamicMedications";

export default function Medication() {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6">
        {/* Medications Section with guides */}
        <DynamicMedications
          title="Medications"
          minMedications={2}
          showCollapsibleSection={true}
          showFrequencyGuide={true}
          showQuantityGuide={true}
        />
      </div>
    </div>
  );
}
