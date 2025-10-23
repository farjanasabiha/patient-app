"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import complaintsData from "@/data/ComplaintsData";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { ProgressStepper } from "@/components/Common/ProgressStepper";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import AddNewComplaint from "@/components/Complaints/AddNewComplaint";
import InvestigationResolution from "@/components/Complaints/InvestigationResolution";

const EditComplaintPage: React.FC = () => {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = Number(params?.id);
  const complaint = complaintsData.find((c) => c.id === id);

  const progressSteps = [
    { id: "complainant-complaint", label: "Complainant & Complaint" },
    { id: "investigation-resolution", label: "Investigation & Resolution" },
  ];

  const { currentStep, handleNext, handleBack } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  const handleSubmit = () => {
    // TODO: integrate with backend to save edits
    console.log("Edited complaint submitted", { id });
    router.push("/complaints");
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <AddNewComplaint
            initialData={{
              complainantName: complaint?.patientName,
              complainantPhone: complaint?.phoneNumber,
              complaintDescription: complaint?.description,
              complaintLocation: complaint?.location,
              // email is not a direct field in AddNewComplaint state; leaving as-is
            }}
          />
        );
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
          { label: complaint ? `Edit Complaint` : "Edit Complaint", active: true },
        ]}
      />

      <div className="w-full p-[35px] mx-auto bg-[#ffffff] mb-8">
        <ProgressStepper steps={progressSteps} currentStep={currentStep} />
      </div>

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

export default EditComplaintPage;
