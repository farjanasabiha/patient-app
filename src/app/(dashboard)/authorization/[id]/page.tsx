"use client";
import React from "react";
import Authorization from "@/components/Authorization/Authorization";
import { Breadcrumb } from "@/components/Common/breadcrumbs";
import { useParams } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";

const AuthorizationPage = () => {
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
            { label: "Authorization", active: true },
          ]}
        />
      </div>

      {/* Main Content */}
      <Authorization />
    </div>
  );
};

export default AuthorizationPage;
