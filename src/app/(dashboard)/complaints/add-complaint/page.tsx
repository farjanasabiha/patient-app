"use client";

import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import AddNewComplaint from "@/components/Complaints/AddNewComplaint";
import InvestigationResolution from "@/components/Complaints/InvestigationResolution";
import React from "react";

const AddComplaintPage = () => {
  // Progress steps data
  const progressSteps = [
    { id: "complainant-complaint", label: "Complainant & Complaint" },
    { id: "investigation-resolution", label: "Investigation & Resolution" },
  ];

  const { currentStep, handleNext, handleBack } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Complaint form submitted");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <AddNewComplaint />;
      case 1:
        return <InvestigationResolution />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Complaints", href: "/complaints" },
          { label: "New Complaint", active: true },
        ]}
      />

      {/* Progress Steps */}
      <div className="w-full p-[35px] mx-auto bg-[#ffffff] mb-8">
        <ProgressStepper steps={progressSteps} currentStep={currentStep} />
      </div>

      {/* Form Content */}
      <div>{renderStep()}</div>

      {/* Centralized Navigation */}
      <StepNavigation
        currentStep={currentStep}
        totalSteps={progressSteps.length}
        onNext={handleNext}
        onBack={handleBack}
        isLastStep={currentStep === progressSteps.length - 1}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddComplaintPage;
