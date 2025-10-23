"use client";
import { useParams, useRouter } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import DischargeOrTransfter from "@/components/DischargeOrTransfter/DischargeOrTransfter";
import SummaryofCare from "@/components/DischargeOrTransfter/SummaryofCare";
import SignAndDate from "@/components/DischargeOrTransfter/SignAndDate";

const DischargeOrTransferPage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    { id: "profile", label: "Profile" },
    { id: "summary-of-care", label: "Summary of Care" },
    { id: "sign-date", label: "Sign & Date" },
  ];

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  // Custom back handler that navigates to patient dashboard when on first step
  const handleBackClick = () => {
    if (currentStep === 0) {
      // If on first step, go back to patient dashboard
      if (patientId) {
        router.push(`/patient/${patientId}`);
      } else {
        router.back();
      }
    } else {
      // Otherwise use the step navigation back
      handleBack();
    }
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <DischargeOrTransfter />;
      case 1:
        return <SummaryofCare />;
      case 2:
        return <SignAndDate />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          {
            label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          { label: "Discharge / Transfer (01/01/2025)", active: true },
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
        onBack={handleBackClick}
        isLastStep={currentStep === progressSteps.length - 1}
        onSubmit={handleSubmit}
        submitButtonText="Discharge & Fax to Doctor"
      />
    </div>
  );
};

export default DischargeOrTransferPage;
