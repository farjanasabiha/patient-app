"use client";

import { useParams, useRouter } from "next/navigation";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import FollowUpFieldSupervision from "@/components/FollowUpFieldSupervision/FollowUpFieldSupervision";
import ClientSatisfaction from "@/components/FollowUpFieldSupervision/ClientSatisfaction";
import CaseManagement from "@/components/FollowUpFieldSupervision/CaseManagement";
import WorkerCompetency from "@/components/FollowUpFieldSupervision/WorkerCompetency";
import FollowUp from "@/components/FollowUpFieldSupervision/FollowUp";

// Progress steps data
const progressSteps = [
  { id: "follow-up-field-supervision", label: "Follow Up Field Supervision" },
  { id: "client-satisfaction", label: "Client Satisfaction" },
  { id: "case-management", label: "Case Management" },
  { id: "worker-competency", label: "Worker Competency" },
  { id: "follow-up", label: "Follow Up" },
];

const PlanOfCarePage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  const { currentStep, handleNext, handleBack, goToStep } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // Handle form submission and redirect to RN patient dashboard
    console.log("Form submitted");
    alert("Follow Up Field Supervision submitted successfully!");
    
    // Redirect to RN patient dashboard
    setTimeout(() => {
      router.push("/RN/patient-dashboard?source=follow-up-field-supervision");
    }, 100);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <FollowUpFieldSupervision />;
      case 1:
        return <ClientSatisfaction />;
      case 2:
        return <CaseManagement />;
      case 3:
        return <WorkerCompetency />;
      case 4:
        return <FollowUp />;
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb
        items={[
          { label: "Patient Dashboard", href: "/RN/patient-dashboard" },
          { label: "Follow Up Field Supervision", active: true },
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
