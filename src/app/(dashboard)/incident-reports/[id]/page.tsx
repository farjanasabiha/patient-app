"use client";

import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { IncidentReportsTable } from "@/components/IncidentReports/IncidentReportsTable";
import activePatientData from "@/data/ActivePatientData";
import { incidentReportsData } from "@/data/IncidentReportsData";

const IncidentReportsPage = () => {
  const params = useParams();
  const patientId = Number(params.id);
  const patient = activePatientData.find((p) => p.id === patientId);

  // Filter incident reports for this patient
  const patientIncidentReports = incidentReportsData.filter(
    (report) => report.patientId === patientId
  );

  if (!patient) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-poppins text-sm text-[#8E8E93]">
            Patient not found
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md flex flex-col justify-start items-start gap-6">
      {/* Breadcrumb Navigation */}
      <div className="flex flex-col justify-start items-start gap-3">
        <Breadcrumb
          items={[
            { label: "Patient Roster", href: "/" },
            {
              label: `${patient.name}'s Dashboard`,
              href: `/patient/${patientId}`,
            },
            { label: "Incident Reports", active: true },
          ]}
        />

        {/* Page Title */}
        <h1 className="text-zinc-900 text-2xl font-bold font-poppins">
          Incident Reports
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full">
        <IncidentReportsTable
          data={patientIncidentReports}
          patientId={patientId}
        />
      </div>
    </div>
  );
};

export default IncidentReportsPage;
