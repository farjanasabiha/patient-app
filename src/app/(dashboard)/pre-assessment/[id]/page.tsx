"use client";

import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import PreAssessmentForm from "@/components/PreAssessment/PreAssessmentForm";

const PreAssessmentPage = () => {
  const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  const progressSteps = [{ id: "pre-assessment", label: "Pre-Assessment" }];

  const { currentStep, handleNext, handleBack } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Pre-Assessment form submitted");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PreAssessmentForm />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto">
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          {
            label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          { label: "Pre-Assessment", active: true },
        ]}
      />
      <div>{renderStep()}</div>
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

export default PreAssessmentPage;
