"use client";
import { Breadcrumb } from "@/components/Common/breadcrumbs";
import ReportsAndDocumentsUpload from "@/components/ReportsAndDocumentsUpload/ReportsAndDocumentsUpload";
import activePatientData from "@/data/ActivePatientData";
import { useParams } from "next/navigation";
const ReportsAndDocumentsUploadPage = () => {
      const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));
  return (
    <>
      <div className="mx-auto px-[1px]">
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
        <ReportsAndDocumentsUpload />
      </div>
    </>
  );
};

export default ReportsAndDocumentsUploadPage;
