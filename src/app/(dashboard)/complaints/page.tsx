import ComplaintsTable from "@/components/Complaints/ComplaintsTable";
import PatientComplaintFormPage from "@/components/Complaints/PatientComplaintFormPage";
import { getServerRole } from "@/lib/auth";
import React from "react";

const Complaints = async () => {
  const role = await getServerRole();
  if (role === "Patient") {
    return (
      <div>
        <PatientComplaintFormPage />
      </div>
    );
  }

  return (
    <div>
      <ComplaintsTable />
    </div>
  );
};

export default Complaints;
