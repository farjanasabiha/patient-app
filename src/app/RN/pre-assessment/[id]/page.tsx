"use client";

import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import activePatientData from "@/data/ActivePatientData";
import PreAssessmentForm from "@/components/RN/PreAssessment/PreAssessmentForm";

const PreAssessmentPage = () => {
  const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  return (
    <div className="mx-auto">
      <Breadcrumb
        items={[
          { label: "Patient Dashboard", href: "/RN/patient-dashboard" },
          { label: "Pre-Assessment", active: true },
        ]}
      />
      <PreAssessmentForm />
    </div>
  );
};

export default PreAssessmentPage;
