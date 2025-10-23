"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import { useStepNavigation } from "@/hooks/useStepNavigation";
import { StepNavigation } from "@/components/Common/sections/StepNavigation";
import HomeHealthQualityMeasure, {
  FormData,
  DemographicData,
} from "@/components/HomeHealthQualityMeasure/HomeHealthQualityMeasure";
import { useAuth } from "@/context/AuthContext";

const defaultFormData: FormData = {
  bathing: 0,
  bedMobility: 0,
  walking: 0,
  breathing: 0,
  woundHealing: 0,
  teamDiscussion: 0,
  overallCare: 0,
  professionalCare: 0,
  communication: 0,
  recommendation: 0,
  diabetesCare: 0,
  medicationManagement: 0,
  timelyCare: 0,
  depressionCheck: 0,
  fallRisk: 0,
  fluShot: 0,
  pneumoniaShot: 0,
  medicationEducation: 0,
  hospitalAdmission: 0,
  emergencyRoom: 0,
};
const defaultDemographic: DemographicData = {
  todaysDate: undefined,
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  dob: undefined,
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  cellPhone: "",
  homePhone: "",
  email: "",
};

const HomeHealthQualityMeasurePage = () => {
  const params = useParams();
  const router = useRouter();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));
  const { user } = useAuth(); // Get the current user from AuthContext

  const progressSteps = [
    { id: "home-health-quality-measure", label: "Home Health Quality Measure" },
  ];

  const { currentStep, handleNext } = useStepNavigation({
    totalSteps: progressSteps.length,
  });

  // Custom back handler for navigating to previous page
  const handleBackClick = () => {
    if (patientId) {
      router.push(`/patient/${patientId}`);
    } else {
      router.back();
    }
  };

  // LIFTED STATE
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [demographic, setDemographic] =
    useState<DemographicData>(defaultDemographic);

  const handleSubmit = () => {
    // Combine all data into one object for best practice
    const allData = {
      demographic,
      qualityMeasure: formData,
    };
    console.log(allData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <HomeHealthQualityMeasure
            formData={formData}
            setFormData={setFormData}
            demographic={demographic}
            setDemographic={setDemographic}
          />
        );
      default:
        return null;
    }
  };

  // Create role-based breadcrumb items
  const breadcrumbItems =
    user?.role === "Patient"
      ? [
          { label: "My Dashboard", href: "/my-dashboard" },
          { label: "Home Health Quality Measure", active: true },
        ]
      : [
          { label: "Patient Roster", href: "/" },
          {
            label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          { label: "Home Health Quality Measure", active: true },
        ];

  return (
    <div className="mx-auto px-[1px]">
      <Breadcrumb items={breadcrumbItems} />
      <div>{renderStep()}</div>
      <StepNavigation
        currentStep={currentStep}
        totalSteps={progressSteps.length}
        onNext={handleNext}
        onBack={handleBackClick}
        isLastStep={currentStep === progressSteps.length - 1}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default HomeHealthQualityMeasurePage;
