"use client";

import React from "react";
import AddNewComplaint from "@/components/Complaints/AddNewComplaint";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import { useRouter } from "next/navigation";

const PatientComplaintFormPage: React.FC = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleSubmit = () => {
    // TODO: replace with real submission
    console.log("Patient complaint submitted");
    router.push("/complaints");
  };

  return (
    <div className="mx-auto px-[1px]">
      {/* Form Content */}
      <div>
        <AddNewComplaint />
      </div>

      {/* Navigation Buttons */}
      <StepNavigation
        currentStep={0}
        totalSteps={1}
        onBack={handleBack}
        isLastStep={true}
        onSubmit={handleSubmit}
        submitButtonText="Submit"
      />
    </div>
  );
};

export default PatientComplaintFormPage;
