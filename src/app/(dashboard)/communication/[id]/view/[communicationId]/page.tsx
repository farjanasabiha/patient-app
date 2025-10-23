"use client";

import { useParams } from "next/navigation";
import { CommunicationView } from "@/components/Communication/forms/CommunicationView";
import activePatientData from "@/data/ActivePatientData";
import { communicationData } from "@/data/CommunicationData";

const ViewCommunicationPage = () => {
  const params = useParams();
  const patientId = Number(params.id);
  const communicationId = Number(params.communicationId);

  const patient = activePatientData.find((p) => p.id === patientId);
  const communication = communicationData.find(
    (comm) => comm.id === communicationId
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

  if (!communication) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-poppins text-sm text-[#8E8E93]">
            Communication not found
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-md">
      <CommunicationView
        communication={communication}
        patientId={patientId}
        patientName={patient.name}
        mode="view"
      />
    </div>
  );
};

export default ViewCommunicationPage;
