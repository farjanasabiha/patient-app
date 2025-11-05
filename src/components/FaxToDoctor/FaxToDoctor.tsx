"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { SignaturePad } from "@/components/ui/signature-pad";
import DynamicDiagnosis, {
  Diagnosis,
} from "@/components/Common/Forms/DynamicDiagnosis";
import DynamicMedications, {
  Medication,
} from "@/components/Common/Forms/DynamicMedications";
import { PrimaryButton } from "../ui/primary-button";

interface FaxToDoctorProps {
  patientId?: string | number;
}

const FaxToDoctor: React.FC<FaxToDoctorProps> = ({ patientId }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    toDoctor: "",
    toFax: "",
    toPhone: "",
    from: "Axzons Home Health Care",
    fromFax: "",
    fromPhone: "",
    subject: "Home Health Plan of Care and Certification",
    date: undefined as Date | undefined,
    planOfCareFor: "",
    patientDOB: undefined as Date | undefined,
    patientAddress1: "",
    patientAddress2: "",
    patientCity: "",
    patientState: "",
    patientZip: "",
    patientHIClaimNo: "",
    startOfCareDate: undefined as Date | undefined,
    medicalRecordNo: "",
    certificationFrom: undefined as Date | undefined,
    certificationTo: undefined as Date | undefined,
    providerNo: "",
    patientName: "",
    patientSex: "",
    providerName: "Axzons Health System Corp",
    providerPhone: "866-429-9667",
    providerWebsite: "www.axzonshomecare.com",
    providerAddress1: "70 E Sunrise Highway",
    providerAddress2: "Ste 500",
    providerCity: "Valley Stream",
    providerState: "New York",
    providerZip: "11581",
    serviceType: "",
    serviceLevel: "2",
    historyOfPresentIllness: "",
    dmeSupplies: "MLTC for Diapers and PPE, Agency for PPE",
    safetyMeasures: "",
    nutritionalRequirements: "",
    allergies: "",
    allergiesText: "",
    functionalLimitations: [] as string[],
    functionalLimitationsOther: "",
    activitiesPermitted: [] as string[],
    activitiesPermittedOther: "",
    mentalStatus: [] as string[],
    mentalStatusOther: "",
    prognosis: "Fair",
    ordersDiscipline1:
      "The RN to assess the patient and supervise the aide at least every six months. Additional assessments must be conducted as needed (PRN) in response to observable changes in the patient's condition, post-hospitalization, or following rehabilitation. The RN to document findings, update the care plan accordingly, and ensure compliance with state regulations.",
    ordersDiscipline2:
      "PCA: To assist patient with ADLs/IADLs for 2-3 days per week, 6-8 hrs per visit.",
    goalsRehabilitation:
      "Assist with ADLs, Fall precaution and prevention, Maintain adequate nutrition and hydration, keep patient encouraged and motivated. watch for any unusual signs and symptoms, and if noted, report to the supervising RN.",
    rnSignature: null as string | null,
    rnSignDate: undefined as Date | undefined,
    hhaReceivedDate: undefined as Date | undefined,
  });

  // State for dynamic components - handlers for future use
  // const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  // const [medications, setMedications] = useState<Medication[]>([]);

  const handleInputChange = (
    field: string,
    value: string | Date | undefined | null
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (
    field: string,
    value: string,
    checked: boolean
  ) => {
    setFormData((prev) => {
      const currentArray = prev[field as keyof typeof prev] as string[];
      if (checked) {
        return { ...prev, [field]: [...currentArray, value] };
      } else {
        return {
          ...prev,
          [field]: currentArray.filter((item) => item !== value),
        };
      }
    });
  };

  // Handlers for dynamic components - simplified for now
  const handleDiagnosesChange = (newDiagnoses: Diagnosis[]) => {
    // setDiagnoses(newDiagnoses); // Uncomment when needed for form processing
    console.log("Diagnoses updated:", newDiagnoses);
  };

  const handleMedicationsChange = (newMedications: Medication[]) => {
    // setMedications(newMedications); // Uncomment when needed for form processing
    console.log("Medications updated:", newMedications);
  };

  // Reusable components for cleaner code
  const FormLabel = ({ children }: { children: React.ReactNode }) => (
    <div className="text-neutral-400 text-xs font-semibold font-poppins">
      {children}
    </div>
  );

  const FormField = ({
    label,
    children,
    className = "flex-1",
  }: {
    label: string;
    children: React.ReactNode;
    className?: string;
  }) => (
    <div className={`${className} flex flex-col gap-2`}>
      <FormLabel>{label}</FormLabel>
      {children}
    </div>
  );

  const FormRow = ({ children }: { children: React.ReactNode }) => (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">{children}</div>
  );

  const Separator = () => <div className="h-0 border-t border-stone-300" />;

  const CheckboxField = ({
    field,
    value,
    label,
  }: {
    field: string;
    value: string;
    label: string;
  }) => {
    const fieldValue = formData[field as keyof typeof formData] as string[];

    return (
      <div className="flex-1 flex items-start gap-2">
        <Checkbox
          checked={fieldValue?.includes(value) || false}
          onCheckedChange={(checked) =>
            handleCheckboxChange(field, value, checked as boolean)
          }
        />
        <div className="text-zinc-900 text-sm font-normal font-poppins">
          {label}
        </div>
      </div>
    );
  };

  const handleBackClick = () => {
    // For RN users, go back to RN patient dashboard
    router.push("/RN/patient-dashboard");
  };

  const handlePreview = () => {
    // Handle form submission
    console.log("Fax to Doctor form submitted");
    alert("Fax to Doctor submitted successfully!");
    
    // Redirect to RN patient dashboard
    setTimeout(() => {
      router.push("/RN/patient-dashboard?source=fax-to-doctor");
    }, 100);
  };
  return (
    <div className="w-full p-2 sm:p-3 bg-sky-100 rounded-tr-md rounded-bl-md rounded-br-md">
      <div className="w-full p-2 sm:p-3 bg-white rounded-md">
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Header Section */}
            <FormRow>
              <FormField label="To">
                <Input
                  value={formData.toDoctor}
                  onChange={(e) =>
                    handleInputChange("toDoctor", e.target.value)
                  }
                  placeholder="Dr. Name"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="To Fax">
                <Input
                  value={formData.toFax}
                  onChange={(e) => handleInputChange("toFax", e.target.value)}
                  placeholder="To Fax Number"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Phone Number">
                <Input
                  value={formData.toPhone}
                  onChange={(e) => handleInputChange("toPhone", e.target.value)}
                  placeholder="123 456 7890"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="From">
                <Input
                  value={formData.from}
                  onChange={(e) => handleInputChange("from", e.target.value)}
                  placeholder="Axzons Home Health Care"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="From Fax">
                <Input
                  value={formData.fromFax}
                  onChange={(e) => handleInputChange("fromFax", e.target.value)}
                  placeholder="From Fax Number"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Phone Number">
                <Input
                  value={formData.fromPhone}
                  onChange={(e) =>
                    handleInputChange("fromPhone", e.target.value)
                  }
                  placeholder="123 456 7890"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="Subject">
                <Input
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  placeholder="Home Health Plan of Care and Certification"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Date" className="w-full md:w-72">
                <DatePicker
                  date={formData.date}
                  setDate={(date) => handleInputChange("date", date)}
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="To">
                <Input
                  value={formData.toDoctor}
                  onChange={(e) =>
                    handleInputChange("toDoctor", e.target.value)
                  }
                  placeholder="Dr. Name"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Plan of Care for">
                <Input
                  value={formData.planOfCareFor}
                  onChange={(e) =>
                    handleInputChange("planOfCareFor", e.target.value)
                  }
                  placeholder="Patient Name"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient DOB">
                <DatePicker
                  date={formData.patientDOB}
                  setDate={(date) => handleInputChange("patientDOB", date)}
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Patient Street Address Line 1">
                <Input
                  value={formData.patientAddress1}
                  onChange={(e) =>
                    handleInputChange("patientAddress1", e.target.value)
                  }
                  placeholder="Street Address Line 1"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient Street Address Line 2">
                <Input
                  value={formData.patientAddress2}
                  onChange={(e) =>
                    handleInputChange("patientAddress2", e.target.value)
                  }
                  placeholder="Street Address Line 2"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient City">
                <Input
                  value={formData.patientCity}
                  onChange={(e) =>
                    handleInputChange("patientCity", e.target.value)
                  }
                  placeholder="Enter City"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Patient State">
                <Select
                  value={formData.patientState}
                  onValueChange={(value) =>
                    handleInputChange("patientState", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Patient ZIP Code">
                <Input
                  value={formData.patientZip}
                  onChange={(e) =>
                    handleInputChange("patientZip", e.target.value)
                  }
                  placeholder="Enter ZIP Code"
                  className="bg-sky-50"
                />
              </FormField>
              <div className="flex-1 h-12 hidden md:block" />
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="Patient's HI Claim No.">
                <Input
                  value={formData.patientHIClaimNo}
                  onChange={(e) =>
                    handleInputChange("patientHIClaimNo", e.target.value)
                  }
                  placeholder="Enter Text"
                />
              </FormField>
              <FormField label="Start of Care Date">
                <DatePicker
                  date={formData.startOfCareDate}
                  setDate={(date) => handleInputChange("startOfCareDate", date)}
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Medical Record No.">
                <Input
                  value={formData.medicalRecordNo}
                  onChange={(e) =>
                    handleInputChange("medicalRecordNo", e.target.value)
                  }
                  placeholder="Enter Text"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Certification Period: From">
                <DatePicker
                  date={formData.certificationFrom}
                  setDate={(date) =>
                    handleInputChange("certificationFrom", date)
                  }
                />
              </FormField>
              <FormField label="Certification Period: To">
                <DatePicker
                  date={formData.certificationTo}
                  setDate={(date) => handleInputChange("certificationTo", date)}
                />
              </FormField>
              <FormField label="Provider No.">
                <Input
                  value={formData.providerNo}
                  onChange={(e) =>
                    handleInputChange("providerNo", e.target.value)
                  }
                  placeholder="Enter Text"
                />
              </FormField>
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="Patient Name">
                <Input
                  value={formData.patientName}
                  onChange={(e) =>
                    handleInputChange("patientName", e.target.value)
                  }
                  placeholder="Patient Name"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient DOB">
                <DatePicker
                  date={formData.patientDOB}
                  setDate={(date) => handleInputChange("patientDOB", date)}
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Sex">
                <Select
                  value={formData.patientSex}
                  onValueChange={(value) =>
                    handleInputChange("patientSex", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Patient Sex" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Patient Street Address Line 1">
                <Input
                  value={formData.patientAddress1}
                  onChange={(e) =>
                    handleInputChange("patientAddress1", e.target.value)
                  }
                  placeholder="Street Address Line 1"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient Street Address Line 2">
                <Input
                  value={formData.patientAddress2}
                  onChange={(e) =>
                    handleInputChange("patientAddress2", e.target.value)
                  }
                  placeholder="Street Address Line 2"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Patient City">
                <Input
                  value={formData.patientCity}
                  onChange={(e) =>
                    handleInputChange("patientCity", e.target.value)
                  }
                  placeholder="City"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Patient State">
                <Select
                  value={formData.patientState}
                  onValueChange={(value) =>
                    handleInputChange("patientState", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="NJ">New Jersey</SelectItem>
                    <SelectItem value="CT">Connecticut</SelectItem>
                    <SelectItem value="PA">Pennsylvania</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Patient ZIP Code">
                <Input
                  value={formData.patientZip}
                  onChange={(e) =>
                    handleInputChange("patientZip", e.target.value)
                  }
                  placeholder="ZIP Code"
                  className="bg-sky-50"
                />
              </FormField>
              <div className="flex-1 h-12 hidden md:block" />
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="Provider Name">
                <Input
                  value={formData.providerName}
                  onChange={(e) =>
                    handleInputChange("providerName", e.target.value)
                  }
                  placeholder="Axzons Health System Corp"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Provider Phone Number">
                <Input
                  value={formData.providerPhone}
                  onChange={(e) =>
                    handleInputChange("providerPhone", e.target.value)
                  }
                  placeholder="866-429-9667"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Provider Website">
                <Input
                  value={formData.providerWebsite}
                  onChange={(e) =>
                    handleInputChange("providerWebsite", e.target.value)
                  }
                  placeholder="www.axzonshomecare.com"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Provider Street Address Line 1">
                <Input
                  value={formData.providerAddress1}
                  onChange={(e) =>
                    handleInputChange("providerAddress1", e.target.value)
                  }
                  placeholder="70 E Sunrise Highway"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Provider Street Address Line 2">
                <Input
                  value={formData.providerAddress2}
                  onChange={(e) =>
                    handleInputChange("providerAddress2", e.target.value)
                  }
                  placeholder="Ste 500"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Provider City">
                <Input
                  value={formData.providerCity}
                  onChange={(e) =>
                    handleInputChange("providerCity", e.target.value)
                  }
                  placeholder="Valley Stream"
                  className="bg-sky-50"
                />
              </FormField>
            </FormRow>

            <FormRow>
              <FormField label="Provider State">
                <Select
                  value={formData.providerState}
                  onValueChange={(value) =>
                    handleInputChange("providerState", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="New York" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="nj">New Jersey</SelectItem>
                    <SelectItem value="pa">Pennsylvania</SelectItem>
                    <SelectItem value="ga">Georgia</SelectItem>
                    <SelectItem value="al">Alabama</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <FormField label="Provider ZIP Code">
                <Input
                  value={formData.providerZip}
                  onChange={(e) =>
                    handleInputChange("providerZip", e.target.value)
                  }
                  placeholder="11581"
                  className="bg-sky-50"
                />
              </FormField>
              <div className="flex-1 h-12 hidden md:block" />
            </FormRow>

            <Separator />

            {/* Diagnosis Section */}
            <DynamicDiagnosis
              title="Diagnosis"
              minDiagnoses={2}
              onDiagnosesChange={handleDiagnosesChange}
              showCollapsibleSection={false}
            />

            <FormRow>
              <FormField label="Type of Service needed">
                <Input
                  value={formData.serviceType}
                  onChange={(e) =>
                    handleInputChange("serviceType", e.target.value)
                  }
                  placeholder="Service Type"
                  className="bg-sky-50"
                />
              </FormField>
              <FormField label="Level of Service needed">
                <Select
                  value={formData.serviceLevel}
                  onValueChange={(value) =>
                    handleInputChange("serviceLevel", value)
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="2" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5</SelectItem>
                  </SelectContent>
                </Select>
              </FormField>
              <div className="flex-1 h-12 hidden md:block" />
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="History of Present Illness">
                <Textarea
                  value={formData.historyOfPresentIllness}
                  onChange={(e) =>
                    handleInputChange("historyOfPresentIllness", e.target.value)
                  }
                  placeholder="Enter Text"
                  className="bg-sky-50 h-24"
                />
              </FormField>
            </FormRow>

            <Separator />

            {/* Medications Section */}
            <DynamicMedications
              title="Medications"
              minMedications={2}
              onMedicationsChange={handleMedicationsChange}
              showCollapsibleSection={false}
              showFrequencyGuide={false}
              showQuantityGuide={false}
            />

            <Separator />

            <FormRow>
              <FormField label="DME and Supplies">
                <Input
                  value={formData.dmeSupplies}
                  onChange={(e) =>
                    handleInputChange("dmeSupplies", e.target.value)
                  }
                  placeholder="Enter DME and supplies"
                />
              </FormField>
            </FormRow>

            <Separator />

            <FormRow>
              <FormField label="Safety Measures">
                <Input
                  value={formData.safetyMeasures}
                  onChange={(e) =>
                    handleInputChange("safetyMeasures", e.target.value)
                  }
                  placeholder="Enter safety measures"
                />
              </FormField>
            </FormRow>

            <Separator />

            <div className="flex flex-col md:flex-row gap-3 md:gap-4">
              <div className="flex-1 flex flex-col md:flex-row gap-4 md:gap-6">
                <FormField label="Nutritional Requirements">
                  <Input
                    value={formData.nutritionalRequirements}
                    onChange={(e) =>
                      handleInputChange(
                        "nutritionalRequirements",
                        e.target.value
                      )
                    }
                    placeholder="Enter nutritional requirements"
                    className="bg-sky-50"
                  />
                </FormField>
              </div>
              <FormField label="Allergies">
                <RadioGroup
                  value={formData.allergies}
                  onValueChange={(value) =>
                    handleInputChange("allergies", value)
                  }
                  className="gap-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="allergies-yes" />
                    <label
                      htmlFor="allergies-yes"
                      className="text-sm font-normal font-poppins"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="allergies-no" />
                    <label
                      htmlFor="allergies-no"
                      className="text-sm font-normal font-poppins"
                    >
                      No
                    </label>
                  </div>
                </RadioGroup>
              </FormField>
              <FormField label="Allergies Details">
                <Input
                  value={formData.allergiesText}
                  onChange={(e) =>
                    handleInputChange("allergiesText", e.target.value)
                  }
                  placeholder="Enter allergy details"
                  className="bg-sky-50"
                />
              </FormField>
            </div>

            <Separator />

            {/* Functional Limitations */}
            <div className="flex flex-col gap-2">
              <FormLabel>Functional Limitations</FormLabel>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="functionalLimitations"
                  value="amputation"
                  label="Amputation"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="paralysis"
                  label="Paralysis"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="legallyBlind"
                  label="Legally Blind"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="functionalLimitations"
                  value="bowelBladder"
                  label="Bowel / Bladder (Incontinance)"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="endurance"
                  label="Endurance"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="dyspnea"
                  label="Dyspnea with minimal exertion"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="functionalLimitations"
                  value="contracture"
                  label="Contracture"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="ambulation"
                  label="Ambulation"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="other"
                  label="Other (Specify)"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="functionalLimitations"
                  value="hearing"
                  label="Hearing"
                />
                <CheckboxField
                  field="functionalLimitations"
                  value="speech"
                  label="Speech"
                />
                <div className="flex-1 min-w-[200px]">
                  <Input
                    value={formData.functionalLimitationsOther}
                    onChange={(e) =>
                      handleInputChange(
                        "functionalLimitationsOther",
                        e.target.value
                      )
                    }
                    placeholder="Enter Text"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Activities Permitted */}
            <div className="flex flex-col gap-2">
              <FormLabel>Activities Permitted</FormLabel>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="activitiesPermitted"
                  value="completeBedrest"
                  label="Complete Bedrest"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="partialWeightBearing"
                  label="Partial Weight Bearing"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="wheelchair"
                  label="Wheelchair"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="activitiesPermitted"
                  value="bedrestBRP"
                  label="Bedrest BRP"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="independentAtHome"
                  label="Independent at home"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="walker"
                  label="Walker"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="activitiesPermitted"
                  value="upAsTolerated"
                  label="Up as tolerated"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="crutches"
                  label="Crutches"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="noRestrictions"
                  label="No restrictions"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="activitiesPermitted"
                  value="transferBedChair"
                  label="Transfer Bed/Chair"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="cane"
                  label="Cane"
                />
                <CheckboxField
                  field="activitiesPermitted"
                  value="activitiesOther"
                  label="Other (Specify)"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="activitiesPermitted"
                  value="exercisesPrescribed"
                  label="Exercises Prescribed"
                />
                <div className="flex-1 min-w-[200px]">
                  <Input
                    value={formData.activitiesPermittedOther}
                    onChange={(e) =>
                      handleInputChange(
                        "activitiesPermittedOther",
                        e.target.value
                      )
                    }
                    placeholder="Enter Text"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Mental Status */}
            <div className="flex flex-col gap-2">
              <FormLabel>Mental Status</FormLabel>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="mentalStatus"
                  value="oriented"
                  label="Oriented"
                />
                <CheckboxField
                  field="mentalStatus"
                  value="depressed"
                  label="Depressed"
                />
                <CheckboxField
                  field="mentalStatus"
                  value="agitated"
                  label="Agitated"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="mentalStatus"
                  value="comatose"
                  label="Comatose"
                />
                <CheckboxField
                  field="mentalStatus"
                  value="disoriented"
                  label="Disoriented"
                />
                <CheckboxField
                  field="mentalStatus"
                  value="mentalOther"
                  label="Other (Specify)"
                />
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6">
                <CheckboxField
                  field="mentalStatus"
                  value="forgetful"
                  label="Forgetful"
                />
                <CheckboxField
                  field="mentalStatus"
                  value="lethargic"
                  label="Lethargic"
                />
                <div className="flex-1 min-w-[200px]">
                  <Input
                    value={formData.mentalStatusOther}
                    onChange={(e) =>
                      handleInputChange("mentalStatusOther", e.target.value)
                    }
                    placeholder="Enter Text"
                  />
                </div>
              </div>
            </div>

            <Separator />

            {/* Prognosis */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
              <FormField label="Prognosis" className="w-full md:flex-1">
                <RadioGroup
                  value={formData.prognosis}
                  onValueChange={(value) =>
                    handleInputChange("prognosis", value)
                  }
                  className="flex flex-col gap-0.5"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="poor" id="prognosis-poor" />
                    <label
                      htmlFor="prognosis-poor"
                      className="text-sm font-normal font-poppins"
                    >
                      Poor
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="guarded" id="prognosis-guarded" />
                    <label
                      htmlFor="prognosis-guarded"
                      className="text-sm font-normal font-poppins"
                    >
                      Guarded
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="fair" id="prognosis-fair" />
                    <label
                      htmlFor="prognosis-fair"
                      className="text-sm font-normal font-poppins"
                    >
                      Fair
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="good" id="prognosis-good" />
                    <label
                      htmlFor="prognosis-good"
                      className="text-sm font-normal font-poppins"
                    >
                      Good
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="excellent"
                      id="prognosis-excellent"
                    />
                    <label
                      htmlFor="prognosis-excellent"
                      className="text-sm font-normal font-poppins"
                    >
                      Excellent
                    </label>
                  </div>
                </RadioGroup>
              </FormField>
              <div className="flex-1 h-24 hidden md:block" />
              <div className="flex-1 h-24 hidden md:block" />
            </div>

            <Separator />

            <FormRow>
              <FormField label="Orders of Discipline 1">
                <Textarea
                  value={formData.ordersDiscipline1}
                  onChange={(e) =>
                    handleInputChange("ordersDiscipline1", e.target.value)
                  }
                  className="bg-sky-50 min-h-[100px]"
                />
              </FormField>
              <FormField label="Orders of Discipline 2">
                <Textarea
                  value={formData.ordersDiscipline2}
                  onChange={(e) =>
                    handleInputChange("ordersDiscipline2", e.target.value)
                  }
                  className="bg-sky-50 min-h-[100px]"
                />
              </FormField>
              <FormField label="Goals/Rehabilitation">
                <Textarea
                  value={formData.goalsRehabilitation}
                  onChange={(e) =>
                    handleInputChange("goalsRehabilitation", e.target.value)
                  }
                  className="bg-sky-50 min-h-[100px]"
                />
              </FormField>
            </FormRow>

            <Separator />

            <div className="flex justify-center gap-4 sm:gap-6">
              <div className="w-full sm:w-[80%] md:w-[50%] lg:w-[32%] flex flex-col gap-3">
                <div className="flex flex-col justify-end gap-3">
                  <SignaturePad
                    label="RN Signature"
                    value={formData.rnSignature}
                    onChange={(signature) =>
                      handleInputChange("rnSignature", signature)
                    }
                    height={96}
                    className="w-full"
                    placeholder="Sign here"
                    clearButtonText="Clear"
                    clearButtonVariant="outline"
                    clearButtonSize="sm"
                  />
                </div>
                <FormField label="RN Sign Date" className="h-12">
                  <DatePicker
                    date={formData.rnSignDate}
                    setDate={(date) => handleInputChange("rnSignDate", date)}
                  />
                </FormField>
              </div>
            </div>
          </div>

          <Separator />

          <FormRow>
            <FormField label="Date HHA Received Signed POT">
              <DatePicker
                date={formData.hhaReceivedDate}
                setDate={(date) => handleInputChange("hhaReceivedDate", date)}
                className="bg-sky-50"
              />
            </FormField>
            <div className="flex-1 h-12" />
            <div className="flex-1 h-12" />
          </FormRow>

          <Separator />


                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-10">
                  <PrimaryButton
                    variant="outline"
                    className="w-full sm:w-auto px-8 sm:px-14 py-2"
                    onClick={handleBackClick}
                  >
                    Back
                  </PrimaryButton>
          
                  <PrimaryButton
                    className="w-full sm:w-auto px-8 sm:px-14 py-2"
                    onClick={handlePreview}
                  >
                    Submit
                  </PrimaryButton>
                </div>
        </div>
      </div>
    </div>
  );
};

export default FaxToDoctor;
