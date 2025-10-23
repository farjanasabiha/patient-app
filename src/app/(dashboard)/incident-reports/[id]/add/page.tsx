"use client";

import { useParams } from "next/navigation";
import { IncidentReportForm } from "@/components/IncidentReports/forms/IncidentReportForm";
import activePatientData from "@/data/ActivePatientData";

const AddIncidentReportPage = () => {
  const params = useParams();
  const patientId = Number(params.id);
  const patient = activePatientData.find((p) => p.id === patientId);

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
    <div className="bg-white rounded-md">
      <IncidentReportForm patientId={patientId} patientName={patient.name} />
    </div>
  );
};

export default AddIncidentReportPage;
