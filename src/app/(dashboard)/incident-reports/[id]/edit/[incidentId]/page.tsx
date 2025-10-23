"use client";

import { useParams } from "next/navigation";
import { IncidentReportView } from "@/components/IncidentReports/forms/IncidentReportView";
import activePatientData from "@/data/ActivePatientData";
import { incidentReportsData } from "@/data/IncidentReportsData";

const EditIncidentReportPage = () => {
  const params = useParams();
  const patientId = Number(params.id);
  const incidentId = Number(params.incidentId);

  const patient = activePatientData.find((p) => p.id === patientId);
  const incident = incidentReportsData.find((inc) => inc.id === incidentId);

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

  if (!incident) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-poppins text-sm text-[#8E8E93]">
            Incident report not found
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md">
      <IncidentReportView
        incident={incident}
        patientId={patientId}
        patientName={patient.name}
        mode="edit"
      />
    </div>
  );
};

export default EditIncidentReportPage;
