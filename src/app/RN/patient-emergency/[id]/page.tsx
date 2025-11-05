"use client";

import { useParams, useRouter } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import EmergencyContactsProviders from "@/components/PatientEmergency/EmergencyContactsProviders";
import HomeSafetyChecklist from "@/components/PatientEmergency/HomeSafetyChecklist";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";

const PatientEmergencyPage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    {
      id: "emergency-contacts-providers",
      label: "Emergency Contacts & Providers",
    },
    { id: "home-safety-checklist", label: "Home Safety Checklist" },
  ];

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission and redirect to RN patient dashboard
    console.log("Form submitted");
    alert("Patient Emergency submitted successfully!");
    
    // Redirect to RN patient dashboard
    setTimeout(() => {
      router.push("/RN/patient-dashboard?source=patient-emergency");
    }, 100);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <EmergencyContactsProviders />;
      case 1:
        return <HomeSafetyChecklist />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patient Dashboard", href: "/RN/patient-dashboard" },
          { label: "Patient Emergency", active: true },
        ]}
      />

      {/* Progress Steps */}
      <div className="w-full p-8 mx-auto bg-[#ffffff] mb-8">
        <ProgressStepper
          steps={progressSteps}
          currentStep={currentStep}
          allowClickNavigation={true}
          navigationStrategy="sequential"
          onStepClick={goToStep}
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

export default PatientEmergencyPage;
