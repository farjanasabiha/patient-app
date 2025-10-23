"use client";

import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import PatientAdmissionPacket from "@/components/PatientAdmissionPacket/PatientAdmissionPacket";

const PatientAdmissionPacketPage = () => {
  const progressSteps = [
    { id: "admission-packet", label: "Patient Admission Packet" },
  ];

  const { currentStep, handleNext, handleBack } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Patient Admission Packet form submitted");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PatientAdmissionPacket />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto">
      <Breadcrumb
        items={[
          { label: "My Dashboard", href: "/my-dashboard" },
          { label: "Patient Admission Packet", active: true },
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

export default PatientAdmissionPacketPage;
