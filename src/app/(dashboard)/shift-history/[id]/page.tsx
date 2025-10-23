"use client";

import React from "react";
import { useParams } from "next/navigation";
import ViewShiftHistory from "@/components/ShiftHistory/ViewShiftHistory";
import caregiverData from "@/data/CaregiverData";

const ShiftHistoryDetailsPage = () => {
  const params = useParams<{ id: string }>();
  const id = Number(params?.id);

  const shift = caregiverData.find((s) => s.id === id);

  const props = {
    caregiverName: shift?.name || "Unknown Caregiver",
    patientDOB: shift?.dob || "--/--/----",
    fromDate: new Date(),
    toDate: new Date(),
    isReport: false,
  };

  return (
    <div className="h-full">
      <ViewShiftHistory {...props} />
    </div>
  );
};

export default ShiftHistoryDetailsPage;
