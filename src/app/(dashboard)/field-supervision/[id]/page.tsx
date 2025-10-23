"use client";

import { useParams } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import InitialFieldSupervision from "@/components/InitialFieldSupervision/InitialFieldSupervision";
import HomecareWorkerGuidance from "@/components/InitialFieldSupervision/HomecareWorkerGuidance";
import FollowUp from "@/components/InitialFieldSupervision/FollowUp";

const PlanOfCarePage = () => {
  const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    { id: "initial-field-supervision", label: "Initial Field Supervision" },
    { id: "homecare-work-guidance", label: "Homecare Work Guidance" },
    { id: "follow-up", label: "Follow Up" },
  ];

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <InitialFieldSupervision />;
      case 1:
        return <HomecareWorkerGuidance />;
      case 2:
        return <FollowUp />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patients Roster", href: "/" },
          {
            label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          { label: "Initial Field Supervision", active: true },
        ]}
      />

      {/* Progress Steps */}
      <div className="w-full p-8 mx-auto bg-[#ffffff] mb-8">
        <ProgressStepper
          steps={progressSteps}
          currentStep={currentStep}
          onStepClick={goToStep}
          allowClickNavigation={true}
          navigationStrategy="sequential"
        />
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

export default PlanOfCarePage;
