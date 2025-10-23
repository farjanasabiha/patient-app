export interface CurrentPatientProfile {
  id: number;
  mrn: string;
  name: string;
  dob: string; 
  phoneNumber: string;
  email: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;

  startOfCare?: string; 
  primaryDiagnosis?: string;
  servicesProvided?: string;
  payerSource?: string;
  status?: "Signed" | "Not Signed";

  onOxygen?: boolean;
  fallRisk?: boolean;
  needsWheelchair?: boolean;
  onVentilator?: boolean;

  lastVisitDate?: string; 
  lastCaregiverName?: string;
}

// NOTE:
// In production, this would come from the authenticated user session/profile API.
// For now, we provide a single mock representing the currently logged-in patient.
export const currentPatientProfile: CurrentPatientProfile = {
  id: 101,
  mrn: "MRN-PAT-000101",
  name: "Noah Tou",
  dob: "02/14/1985",
  phoneNumber: "555-123-4567",
  email: "noatou@gmail.com",
  addressLine1: "123 Main St",
  addressLine2: "Apt 4B",
  city: "Atlanta",
  state: "Georgia",
  zipCode: "30301",
  startOfCare: "06/10/2024",
  primaryDiagnosis: "Hypertension",
  servicesProvided: "Skilled Nursing, Physical Therapy",
  payerSource: "Medicare",
  status: "Signed",
  onOxygen: false,
  fallRisk: true,
  needsWheelchair: false,
  onVentilator: false,
  lastVisitDate: "09/15/2025",
  lastCaregiverName: "Noah Tou",
};
