"use client";

import { useState, useEffect, useCallback } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import DynamicContacts, {
  Contact,
} from "@/components/Common/Forms/DynamicContacts";
import DynamicDiagnosis, {
  Diagnosis,
} from "@/components/Common/Forms/DynamicDiagnosis";

// Define section types that can be included in the form
export type ProfileFormSection =
  | "demographics"
  | "emergency"
  | "diagnosis"
  | "physician"
  | "pharmacy";

export interface ProfileFormData {
  // Demographics
  startOfCare?: Date;
  mrn?: string;
  firstName?: string;
  middleName?: string;
  lastName?: string;
  gender?: string;
  dateOfBirth?: Date;
  ssn?: string;
  insuranceName?: string;
  insuranceId?: string;
  medicaidId?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  language?: string;
  cellPhone?: string;
  homePhone?: string;
  email?: string;

  // Emergency Contacts (using dynamic contacts)
  emergencyContacts?: Contact[];

  // Diagnosis (using dynamic diagnoses)
  diagnoses?: Diagnosis[];
  serviceType?: string;
  serviceLevel?: string;

  // Physician
  pcpFirstName?: string;
  pcpLastName?: string;
  npi?: string;
  pcpPhone?: string;
  pcpFax?: string;
  pcpEmail?: string;
  pcpAddressLine1?: string;
  pcpAddressLine2?: string;
  pcpCity?: string;
  pcpState?: string;
  pcpZipCode?: string;

  // Pharmacy
  pharmacyName?: string;
  pharmacyPhone?: string;
  pharmacyFax?: string;
  pharmacyEmail?: string;
  pharmacyAddressLine1?: string;
  pharmacyAddressLine2?: string;
  pharmacyCity?: string;
  pharmacyState?: string;
  pharmacyZipCode?: string;
}

export interface ProfileFormProps {
  // Control which sections to show
  sections?: ProfileFormSection[];
  // Initial form data
  initialData?: Partial<ProfileFormData>;
  // Callback when form data changes
  onChange?: (data: ProfileFormData) => void;
  // Whether to use patient data from the URL
  usePatientFromUrl?: boolean;
}

export default function ProfileForm({
  sections = [
    "demographics",
    "emergency",
    "diagnosis",
    "physician",
    "pharmacy",
  ],
  initialData = {},
  onChange,
  usePatientFromUrl = true,
}: ProfileFormProps) {
  const params = useParams();
  const patientId = usePatientFromUrl ? params?.id : undefined;
  const patient = patientId
    ? activePatientData.find((p) => p.id === Number(patientId))
    : undefined;

  // Initialize form data state
  const [formData, setFormData] = useState<ProfileFormData>({
    ...initialData,
  });

  // Initialize date fields with proper date parsing
  const [startOfCare, setStartOfCare] = useState<Date | undefined>(() => {
    if (initialData.startOfCare) return initialData.startOfCare;
    return patient?.startOfCare ? new Date(patient.startOfCare) : undefined;
  });

  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(() => {
    if (initialData.dateOfBirth) return initialData.dateOfBirth;
    return patient?.dob ? new Date(patient.dob) : undefined;
  });

  // Handle date changes directly
  const handleStartOfCareChange = useCallback((date: Date | undefined) => {
    setStartOfCare(date);
    setFormData((prev) => ({ ...prev, startOfCare: date }));
  }, []);

  const handleDateOfBirthChange = useCallback((date: Date | undefined) => {
    setDateOfBirth(date);
    setFormData((prev) => ({ ...prev, dateOfBirth: date }));
  }, []);

  // Handle form field changes
  const handleFormChange = useCallback((field: string, value: unknown) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  // Handle emergency contacts change
  const handleEmergencyContactsChange = useCallback((contacts: Contact[]) => {
    setFormData((prev) => ({ ...prev, emergencyContacts: contacts }));
  }, []);

  // Handle diagnoses change
  const handleDiagnosesChange = useCallback((diagnoses: Diagnosis[]) => {
    setFormData((prev) => ({ ...prev, diagnoses: diagnoses }));
  }, []);

  // Notify parent of changes
  useEffect(() => {
    if (onChange) {
      onChange(formData);
    }
  }, [formData, onChange]);

  return (
    <div className="space-y-4 sm:space-y-6 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
      {/* Patient Demographics */}
      {sections.includes("demographics") && (
        <CollapsibleSection title="Patient Demographics">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-6 px-3">
            {/* SOC and MRN spanning 2 columns */}
              <div className="flex-1 flex flex-col gap-0.5">
                <FormLabel required>Start of Care (SOC)</FormLabel>
                <DatePicker
                  date={startOfCare}
                  setDate={handleStartOfCareChange}
                />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <FormLabel required>MRN</FormLabel>
                <Input
                  placeholder="XX-XX1234567"
                  defaultValue={patient?.mrn || formData.mrn}
                  onChange={(e) => handleFormChange("mrn", e.target.value)}
                />
              </div>

            {/* Rest of the fields in 3 columns */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>First Name</FormLabel>
              <Input
                placeholder="First Name"
                defaultValue={
                  patient?.name?.split(" ")[0] || formData.firstName
                }
                onChange={(e) => handleFormChange("firstName", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Middle Name</FormLabel>
              <Input
                placeholder="Middle Name"
                defaultValue={formData.middleName}
                onChange={(e) => handleFormChange("middleName", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                defaultValue={
                  patient?.name?.split(" ").slice(-1)[0] || formData.lastName
                }
                onChange={(e) => handleFormChange("lastName", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Gender</FormLabel>
              <Select
                defaultValue={formData.gender}
                onValueChange={(value) => handleFormChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Date of Birth</FormLabel>
              <DatePicker
                date={dateOfBirth}
                setDate={handleDateOfBirthChange}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Social Security Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.ssn}
                onChange={(e) => handleFormChange("ssn", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input
                placeholder="Street Address Line 1"
                defaultValue={formData.addressLine1}
                onChange={(e) =>
                  handleFormChange("addressLine1", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input
                placeholder="Street Address Line 2"
                defaultValue={formData.addressLine2}
                onChange={(e) =>
                  handleFormChange("addressLine2", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input
                placeholder="City"
                defaultValue={formData.city}
                onChange={(e) => handleFormChange("city", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>State</FormLabel>
              <Select
                defaultValue={
                  patient?.location?.toLowerCase() || formData.state
                }
                onValueChange={(value) => handleFormChange("state", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="georgia">Georgia</SelectItem>
                  <SelectItem value="new york">New York</SelectItem>
                  <SelectItem value="new jersey">New Jersey</SelectItem>
                  <SelectItem value="pennsylvania">Pennsylvania</SelectItem>
                  <SelectItem value="alabama">Alabama</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input
                placeholder="ZIP Code"
                defaultValue={formData.zipCode}
                onChange={(e) => handleFormChange("zipCode", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Language Spoken</FormLabel>
              <Select
                defaultValue={formData.language}
                onValueChange={(value) => handleFormChange("language", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Language Spoken" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="es">Spanish</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                  <SelectItem value="de">German</SelectItem>
                  <SelectItem value="it">Italian</SelectItem>
                  <SelectItem value="ar">Arabic</SelectItem>
                  <SelectItem value="hi">Hindi</SelectItem>
                  <SelectItem value="bn">Bengali</SelectItem>
                  <SelectItem value="ru">Russian</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Cell Phone Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={patient?.phoneNumber || formData.cellPhone}
                onChange={(e) => handleFormChange("cellPhone", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Home Phone Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.homePhone}
                onChange={(e) => handleFormChange("homePhone", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Email Address</FormLabel>
              <Input
                placeholder="demoemail@gmail.com"
                type="email"
                defaultValue={patient?.email || formData.email}
                onChange={(e) => handleFormChange("email", e.target.value)}
              />
            </div>
          </div>
        </CollapsibleSection>
      )}

      {/* Emergency Contact */}
      {sections.includes("emergency") && (
        <DynamicContacts
          title="Emergency Contact"
          minContacts={2}
          initialContacts={formData.emergencyContacts || []}
          onContactsChange={handleEmergencyContactsChange}
          showCollapsibleSection={true}
        />
      )}

      {/* Diagnosis */}
      {sections.includes("diagnosis") && (
        <CollapsibleSection title="Diagnosis">
          <DynamicDiagnosis
            title="Diagnosis"
            minDiagnoses={2}
            initialDiagnoses={formData.diagnoses || []}
            onDiagnosesChange={handleDiagnosesChange}
            showCollapsibleSection={false}
          />

          {/* Service Information Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-6 mt-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel>Type of Service needed</FormLabel>
              <Input
                placeholder="Service Type"
                defaultValue={formData.serviceType || patient?.servicesProvided}
                onChange={(e) =>
                  handleFormChange("serviceType", e.target.value)
                }
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel>Level of Service needed</FormLabel>
              <div className="relative">
                <Select
                  defaultValue={formData.serviceLevel}
                  onValueChange={(value) =>
                    handleFormChange("serviceLevel", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex flex-col gap-0.5">
              {/* Empty column for grid alignment */}
            </div>
          </div>
        </CollapsibleSection>
      )}

      {/* Primary Care Physician Information */}
      {sections.includes("physician") && (
        <CollapsibleSection title="Primary Care Physician Information">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-6 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel>PCP First Name</FormLabel>
              <Input
                placeholder="First Name"
                defaultValue={formData.pcpFirstName}
                onChange={(e) =>
                  handleFormChange("pcpFirstName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>PCP Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                defaultValue={formData.pcpLastName}
                onChange={(e) =>
                  handleFormChange("pcpLastName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>NPI</FormLabel>
              <Input
                placeholder="NPI"
                defaultValue={formData.npi}
                onChange={(e) => handleFormChange("npi", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.pcpPhone}
                onChange={(e) => handleFormChange("pcpPhone", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Fax Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.pcpFax}
                onChange={(e) => handleFormChange("pcpFax", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Email Address</FormLabel>
              <Input
                placeholder="emailaddress@gmail.com"
                defaultValue={formData.pcpEmail}
                onChange={(e) => handleFormChange("pcpEmail", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input
                placeholder="Street Address Line 1"
                defaultValue={formData.pcpAddressLine1}
                onChange={(e) =>
                  handleFormChange("pcpAddressLine1", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input
                placeholder="Street Address Line 2"
                defaultValue={formData.pcpAddressLine2}
                onChange={(e) =>
                  handleFormChange("pcpAddressLine2", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input
                placeholder="City"
                defaultValue={formData.pcpCity}
                onChange={(e) => handleFormChange("pcpCity", e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>State</FormLabel>
              <Select
                defaultValue={formData.pcpState}
                onValueChange={(value) => handleFormChange("pcpState", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ga">Georgia</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="nj">New Jersey</SelectItem>
                  <SelectItem value="pa">Pennsylvania</SelectItem>
                  <SelectItem value="al">Alabama</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input
                placeholder="ZIP Code"
                defaultValue={formData.pcpZipCode}
                onChange={(e) => handleFormChange("pcpZipCode", e.target.value)}
              />
            </div>
          </div>
        </CollapsibleSection>
      )}

      {/* Pharmacy */}
      {sections.includes("pharmacy") && (
        <CollapsibleSection title="Pharmacy">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-6 px-3">
            <div className="flex flex-col gap-0.5">
              <FormLabel>Pharmacy Name</FormLabel>
              <Input
                placeholder="Pharmacy Name"
                defaultValue={formData.pharmacyName}
                onChange={(e) =>
                  handleFormChange("pharmacyName", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Phone Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.pharmacyPhone}
                onChange={(e) =>
                  handleFormChange("pharmacyPhone", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Fax Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={formData.pharmacyFax}
                onChange={(e) =>
                  handleFormChange("pharmacyFax", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Email Address</FormLabel>
              <Input
                placeholder="emailaddress@gmail.com"
                defaultValue={formData.pharmacyEmail}
                onChange={(e) =>
                  handleFormChange("pharmacyEmail", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input
                placeholder="Street Address Line 1"
                defaultValue={formData.pharmacyAddressLine1}
                onChange={(e) =>
                  handleFormChange("pharmacyAddressLine1", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input
                placeholder="Street Address Line 2"
                defaultValue={formData.pharmacyAddressLine2}
                onChange={(e) =>
                  handleFormChange("pharmacyAddressLine2", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input
                placeholder="City"
                defaultValue={formData.pharmacyCity}
                onChange={(e) =>
                  handleFormChange("pharmacyCity", e.target.value)
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>State</FormLabel>
              <Select
                defaultValue={formData.pharmacyState}
                onValueChange={(value) =>
                  handleFormChange("pharmacyState", value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ga">Georgia</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="nj">New Jersey</SelectItem>
                  <SelectItem value="pa">Pennsylvania</SelectItem>
                  <SelectItem value="al">Alabama</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input
                placeholder="ZIP Code"
                defaultValue={formData.pharmacyZipCode}
                onChange={(e) =>
                  handleFormChange("pharmacyZipCode", e.target.value)
                }
              />
            </div>
          </div>
        </CollapsibleSection>
      )}
    </div>
  );
}
