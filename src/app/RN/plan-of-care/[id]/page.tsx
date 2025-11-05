"use client";

import { useParams, useRouter } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import PlanOfCareProfile from "@/components/PlanOfCare/PlanOfCareProfile";
import PersonalCare from "@/components/PlanOfCare/PersonalCare";
import NutritionAndActivities from "@/components/PlanOfCare/NutritionAndActivities";
import HomeMakingTask from "@/components/PlanOfCare/HomeMakingTask";
import Medication from "@/components/PlanOfCare/Medication";
import FallRiskTals from "@/components/PlanOfCare/FallRiskTals";
import PlanOfCareFinal from "@/components/PlanOfCare/PlanOfCareFinal";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";

const PlanOfCarePage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    { id: "profile", label: "Profile" },
    { id: "personal-care", label: "Personal Care" },
    { id: "nutrition-and-activities", label: "Nutrition & Activities" },
    { id: "homemaking-tasks", label: "Homemaking Tasks" },
    { id: "medications", label: "Medications" },
    { id: "fall-risk-tals", label: "Fall Risk & TALS" },
    { id: "final", label: "Final" },
  ];

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission and redirect to RN patient dashboard
    console.log("Form submitted");
    alert("Plan of Care submitted successfully!");
    
    // Redirect to RN patient dashboard
    setTimeout(() => {
      router.push("/RN/patient-dashboard?source=plan-of-care");
    }, 100);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <PlanOfCareProfile />;
      case 1:
        return <PersonalCare />;
      case 2:
        return <NutritionAndActivities />;
      case 3:
        return <HomeMakingTask />;
      case 4:
        return <Medication />;
      case 5:
        return <FallRiskTals />;
      case 6:
        return <PlanOfCareFinal />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patient Dashboard", href: "/RN/patient-dashboard" },
          { label: "Plan of Care", active: true },
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
