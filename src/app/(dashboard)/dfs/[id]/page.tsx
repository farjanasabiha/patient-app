"use client";

import { useParams, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ViewShiftHistory from "@/components/ShiftHistory/ViewShiftHistory";
import activePatientData, { type ActivePatient } from "@/data/ActivePatientData";

const DFSPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();
  const patientId = Number(params.id);
  const [patientData, setPatientData] = useState<ActivePatient | null>(null);

  useEffect(() => {
    // First try to find patient in active data
    let patient = activePatientData.find((p) => p.id === patientId);
    
    // If not found and we have a valid ID or source parameter, check sessionStorage
    if (!patient && (!isNaN(patientId) || searchParams.get('source') === 'pre-assessment')) {
      const sessionPatient = sessionStorage.getItem('patientData');
      if (sessionPatient) {
        try {
          patient = JSON.parse(sessionPatient);
        } catch (error) {
          console.error('Error parsing session patient data:', error);
        }
      }
    }
    
    // If still no patient, create default patient data
    if (!patient) {
      patient = {
        id: patientId || 1,
        name: "Patient",
        dob: "01/01/1980",
        mrn: `MRN${String(patientId || 1).padStart(6, '0')}`,
        phoneNumber: "000-000-0000",
        email: "patient@example.com",
        location: "Unknown",
        country: "USA",
        startOfCare: new Date().toLocaleDateString('en-US'),
        diagnosisCodes: [],
        diagnosisNames: [],
        servicesProvided: "General Care",
        payerSource: "Unknown",
        status: "Not Signed" as const,
        onOxygen: false,
        fallRisk: false,
        needsWheelchair: false,
        onVentilator: false
      };
    }
    
    setPatientData(patient);
  }, [patientId, searchParams]);

  // Always render the component once we have patient data
  if (!patientData) {
    return null; // Brief loading state
  }

  return (
    <div className="bg-white rounded-md">
      <ViewShiftHistory
        caregiverName={`${patientData.name}`}
        patientDOB={patientData.dob || "01/01/1980"}
        showFilters={true}
        breadcrumbItems={[
          { label: "Patient Roster", href: "/" },
          {
            label: `${patientData.name}'s Dashboard`,
            href: `/patient/${patientData.id}`,
          },
          { label: "DFS", active: true },
        ]}
      />
    </div>
  );
};

export default DFSPage;
