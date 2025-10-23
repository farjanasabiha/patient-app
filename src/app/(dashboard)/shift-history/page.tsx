import React from "react";
import ShiftHistoryTable from "@/components/ShiftHistory/ShiftHistoryTable";
import PatientActivityRecords from "@/components/ShiftHistory/PatientActivityRecords";
import { getServerRole } from "@/lib/auth";
import { currentPatientProfile } from "@/data/CurrentPatientProfile";

const ShiftHistoryPage = async () => {
  const role = await getServerRole();
  if (role === "Patient") {
    return (
      <div className="h-full">
        <PatientActivityRecords
          patientName={currentPatientProfile.name}
          patientDOB={currentPatientProfile.dob}
        />
      </div>
    );
  }

  return (
    <div className="h-full">
      <ShiftHistoryTable />
    </div>
  );
};

export default ShiftHistoryPage;
