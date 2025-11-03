"use client";
import React from "react";
import ReportsAndDocumentsUpload from "@/components/ReportsAndDocumentsUpload/ReportsAndDocumentsUpload";
import { Breadcrumb } from "@/components/Common/breadcrumbs";
import { useParams } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";

const ReportsAndDocumentsUploadPage = () => {
  const params = useParams();
  const patientId = Array.isArray(params.id) ? params.id[0] : params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));

  return (
    <div>
      {/* Breadcrumb Navigation */}
      <div className="mb-6">
        <Breadcrumb
          items={[
            { label: "Patient Roster", href: "/" },
            {
              label: `${patient?.name || "Insert Patient Name"}'s Dashboard`,
              href: `/patient/${patientId}`,
            },
            { label: "Reports And Documents Upload", active: true },
          ]}
        />
      </div>

      {/* Main Content */}
      <ReportsAndDocumentsUpload />
    </div>
  );
};

export default ReportsAndDocumentsUploadPage;
