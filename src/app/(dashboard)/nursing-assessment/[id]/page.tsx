"use client";

import { useParams } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import NursingAssessmentProfile from "@/components/NursingAssessment/NursingAssessmentProfile";
import MedicalInfo1 from "@/components/NursingAssessment/MedicalInfo1";
import MedicalInfo2 from "@/components/NursingAssessment/MedicalInfo2";
import LivingHabits from "@/components/NursingAssessment/LivingHabits";
import DailyLiving from "@/components/NursingAssessment/DailyLiving";
import InstrumentalActivities from "@/components/NursingAssessment/InstrumentalActivities";
import AttendantSocialProfile from "@/components/NursingAssessment/AttendantSocialProfile";
import FallRiskTALS from "@/components/NursingAssessment/FallRiskTALS";
import NursingFinal from "@/components/NursingAssessment/NursingFinal";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";

const NursingAssessmentPage = () => {
  const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  // Progress steps data
  const progressSteps = [
    { id: "profile", label: "Profile" },
    { id: "medical-info-1", label: "Medical Info 1" },
    { id: "medical-info-2", label: "Medical Info 2" },
    { id: "living-habits", label: "Living Habits" },
    { id: "daily-living", label: "Daily Living" },
    { id: "instrumental", label: "Instrumental Activities" },
    { id: "attendant", label: "Attendant & Social Profile" },
    { id: "fall-risk", label: "Fall Risk & TALS" },
    { id: "final", label: "Final" },
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
        return <NursingAssessmentProfile />;
      case 1:
        return <MedicalInfo1 />;
      case 2:
        return <MedicalInfo2 />;
      case 3:
        return <LivingHabits />;
      case 4:
        return <DailyLiving />;
      case 5:
        return <InstrumentalActivities />;
      case 6:
        return <AttendantSocialProfile />;
      case 7:
        return <FallRiskTALS />;
      case 8:
        return <NursingFinal />;
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
          { label: "Nursing Assessment", active: true },
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

export default NursingAssessmentPage;
