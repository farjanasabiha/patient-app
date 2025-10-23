"use client";

import { useParams } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { CommunicationTable } from "@/components/Communication/CommunicationTable";
import activePatientData from "@/data/ActivePatientData";
import { communicationData } from "@/data/CommunicationData";

const CommunicationPage = () => {
  const params = useParams();
  const patientId = Number(params.id);
  const patient = activePatientData.find((p) => p.id === patientId);

  // Filter communications for this patient
  const patientCommunications = communicationData.filter(
    (comm) => comm.patientId === patientId
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
            { label: "Communication", active: true },
          ]}
        />

        {/* Page Title */}
        <h1 className="text-zinc-900 text-2xl font-bold font-poppins">
          Communication
        </h1>
      </div>

      {/* Content Section */}
      <div className="w-full">
        <CommunicationTable
          data={patientCommunications}
          patientId={patientId}
        />
      </div>
    </div>
  );
};

export default CommunicationPage;
