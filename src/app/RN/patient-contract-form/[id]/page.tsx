"use client";

import PatientContactProfile from "@/components/PatientContact/PatientContactProfile";
import HIPAAAuthorizationForm from "@/components/PatientContact/PatientHipaaForm";
import SignatureDate from "@/components/PatientContact/SignatureDate";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import { useParams, useRouter } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";

const PatientContactFormPage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    { id: "profile", label: "Profile" },
    { id: "hipaa", label: "HIPAA" },
    { id: "signature", label: "Signature & Date" },
  ];

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission and redirect to RN patient dashboard
    console.log("Form submitted");
    alert("Patient Contract submitted successfully!");
    
    // Redirect to RN patient dashboard
    setTimeout(() => {
      router.push("/RN/patient-dashboard?source=patient-contract");
    }, 100);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PatientContactProfile />;
      case 1:
        return <HIPAAAuthorizationForm />;
      case 2:
        return <SignatureDate />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patient Dashboard", href: "/RN/patient-dashboard" },
          { label: "Patient Contract", active: true },
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

export default PatientContactFormPage;
