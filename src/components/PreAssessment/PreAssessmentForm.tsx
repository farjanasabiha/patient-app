"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Plus, Trash2, Loader2, Download } from "lucide-react";
import { useDynamicContacts, Contact } from "@/hooks/useDynamicContacts";
import LocationPicker from "../LocationPicker/LocationPicker";
import type { PreAssessmentFormData, AuthorizedHours, ScheduleTime, PrimaryCarePhysician, Pharmacy } from "@/types/pre-assessment";
import { downloadPreAssessmentPDF } from "@/lib/pdfGenerator";
import { useRouter } from "next/navigation";

const PreAssessmentForm = () => {
    const router = useRouter();
  // Form submission states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<PreAssessmentFormData | null>(null);

  // Patient Demographics
  const [patientFirstName, setPatientFirstName] = useState("");
  const [patientMiddleName, setPatientMiddleName] = useState("");
  const [patientLastName, setPatientLastName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date>();
  const [ssn, setSsn] = useState("");
  const [languagesSpoken, setLanguagesSpoken] = useState("");

  // Address Information
  const [streetAddress1, setStreetAddress1] = useState("");
  const [streetAddress2, setStreetAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [county, setCounty] = useState("");

  // Contact Information
  const [cellPhone, setCellPhone] = useState("");
  const [homePhone, setHomePhone] = useState("");
  const [email, setEmail] = useState("");

  // Location Coordinates
  const [latitude, setLatitude] = useState<number>();
  const [longitude, setLongitude] = useState<number>();

  // Insurance Information
  const [healthfirstId, setHealthfirstId] = useState("");
  const [medicaidId, setMedicaidId] = useState("");
  const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

  // Vitals
  const [heightFeet, setHeightFeet] = useState<number>(0);
  const [heightInches, setHeightInches] = useState<number>(0);
  const [weightLbs, setWeightLbs] = useState<number>(0);

  // Medical History
  const [preExistingConditions, setPreExistingConditions] = useState("");
  const [needsHelpWith, setNeedsHelpWith] = useState("");
  const [livesWith, setLivesWith] = useState("");
  const [pets, setPets] = useState("");
  const [mobilityAids, setMobilityAids] = useState("");

  // Authorization Information
  const [authorizationNumber, setAuthorizationNumber] = useState("");
  const [serviceStartDate, setServiceStartDate] = useState<Date>();
  const [serviceEndDate, setServiceEndDate] = useState<Date>();
  const [code, setCode] = useState("");
  const [modifier, setModifier] = useState("");
  const [daysOfService, setDaysOfService] = useState("");
  const [totalAuthorizedHours, setTotalAuthorizedHours] = useState("");

  // Authorized Hours
  const [authorizedHours, setAuthorizedHours] = useState<AuthorizedHours>({
    monday: 8,
    tuesday: 8,
    wednesday: 8,
    thursday: 8,
    friday: 8,
    saturday: 0,
    sunday: 0,
  });

  // Schedule Time
  const [scheduleTime, setScheduleTime] = useState<ScheduleTime>({
    monday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    tuesday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    wednesday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    thursday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    friday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    saturday: { startTime: "09:00 AM", endTime: "05:00 PM" },
    sunday: { startTime: "09:00 AM", endTime: "05:00 PM" },
  });

  // Primary Care Physician
  const [primaryCarePhysician, setPrimaryCarePhysician] = useState<PrimaryCarePhysician>({});

  // Pharmacy
  const [pharmacy, setPharmacy] = useState<Pharmacy>({});

  // Emergency Contacts
  const {
    contacts: emergencyContacts,
    addContact: addEmergencyContact,
    updateContact: updateEmergencyContact,
    removeContact: removeEmergencyContact,
    canRemove,
  } = useDynamicContacts();

  // Form submission handlers
  const handleSubmit = async (status: 'draft' | 'submitted') => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      // Basic validation - only check for critical fields
      if (!patientFirstName || !patientLastName) {
        throw new Error('Patient first name and last name are required');
      }

      // Prepare form data
      const formData: PreAssessmentFormData = {
        patientFirstName,
        patientMiddleName,
        patientLastName,
        gender,
        dateOfBirth: dateOfBirth || new Date(),
        ssn: socialSecurityNumber,
        languagesSpoken,
        streetAddress1,
        streetAddress2,
        city,
        state,
        zipCode,
        county,
        cellPhone,
        homePhone,
        email,
        latitude,
        longitude,
        healthfirstId,
        medicaidId,
        heightFeet,
        heightInches,
        weightLbs,
        preExistingConditions,
        needsHelpWith,
        livesWith,
        pets,
        mobilityAids,
        authorizationNumber,
        serviceStartDate,
        serviceEndDate,
        code,
        modifier,
        daysOfService,
        totalAuthorizedHours,
        authorizedHours,
        scheduleTime,
        emergencyContacts: emergencyContacts.map(contact => ({
          firstName: contact.firstName,
          lastName: contact.lastName,
          relationship: contact.relationship,
          cellPhone: contact.cellPhone,
          homePhone: contact.homePhone,
          email: contact.email,
          isPrimary: contact.id === emergencyContacts[0]?.id,
        })),
        primaryCarePhysician,
        pharmacy,
        status,
      };

      console.log(ssn, setSsn);

      const response = await fetch('/api/pre-assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        console.error('API Error:', result);
        throw new Error(result.error || result.details || 'Failed to submit form');
      }

      setSubmitSuccess(true);
      setSubmittedData(formData);
      
      // Store patient data in sessionStorage for the dashboard to use
      const patientData = {
        id: Date.now(), // Generate a temporary ID
        mrn: `MRN-${Date.now()}`,
        name: `${patientFirstName} ${patientMiddleName ? patientMiddleName + ' ' : ''}${patientLastName}`.trim(),
        dob: dateOfBirth ? dateOfBirth.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : '',
        phoneNumber: cellPhone,
        email: email,
        location: state || city || 'Unknown',
        country: 'USA',
        startOfCare: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
        diagnosisCodes: [],
        diagnosisNames: [],
        servicesProvided: 'Home Health Services',
        payerSource: 'Insurance',
        status: 'Not Signed' as const,
        onOxygen: false,
        fallRisk: false,
        needsWheelchair: false,
        onVentilator: false,
        // Store additional pre-assessment data
        preAssessmentData: formData
      };
      
      sessionStorage.setItem('currentPatientData', JSON.stringify(patientData));
      
      alert(`Pre-assessment ${status === 'draft' ? 'saved as draft' : 'submitted'} successfully!`);
      
      // Redirect to patient dashboard only on success
      router.push("/patient-dashboard?source=pre-assessment");
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
      alert('Error: ' + (error instanceof Error ? error.message : 'An error occurred'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLocationChange = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const updateAuthorizedHours = (day: keyof AuthorizedHours, value: number) => {
    setAuthorizedHours(prev => ({ ...prev, [day]: value }));
  };

  const updateScheduleTime = (day: keyof ScheduleTime, field: 'startTime' | 'endTime', value: string) => {
    setScheduleTime(prev => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const updatePrimaryCarePhysician = <K extends keyof PrimaryCarePhysician>(
    field: K,
    value: PrimaryCarePhysician[K]
  ) => {
    setPrimaryCarePhysician(prev => ({ ...prev, [field]: value }));
  };

  const updatePharmacy = <K extends keyof Pharmacy>(field: K, value: Pharmacy[K]) => {
    setPharmacy(prev => ({ ...prev, [field]: value }));
  };

  const renderEmergencyContact = (contact: Contact, index: number) => {
    const isFirst = index === 0;
    return (
      <div key={contact.id} className="space-y-3">
        {/* Number and Border */}
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-sm font-semibold text-[#1C1C1E] font-poppins">
            {index + 1}.
          </span>
          <div className="flex-1 h-px bg-[#C7C7CC]" />
          {/* Remove Button - Only show for contacts beyond minimum */}
          {canRemove && index >= 2 && (
            <PrimaryButton
              variant="outline"
              size="sm"
              className="w-7 h-7 sm:w-8 sm:h-8 p-1 border-red-300 text-red-500 hover:bg-red-50"
              onClick={() => removeEmergencyContact(contact.id)}
            >
              <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
            </PrimaryButton>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required={isFirst}>
              Emergency Contact First Name
            </FormLabel>
            <Input
              placeholder="First Name"
              value={contact.firstName}
              onChange={(e) =>
                updateEmergencyContact(contact.id, "firstName", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required={isFirst}>
              Emergency Contact Last Name
            </FormLabel>
            <Input
              placeholder="Last Name"
              value={contact.lastName}
              onChange={(e) =>
                updateEmergencyContact(contact.id, "lastName", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required={isFirst}>
              Relationship to the Patient
            </FormLabel>
            <Input
              placeholder="Relationship"
              value={contact.relationship}
              onChange={(e) =>
                updateEmergencyContact(
                  contact.id,
                  "relationship",
                  e.target.value
                )
              }
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel required={isFirst}>Cell Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={contact.cellPhone}
              onChange={(e) =>
                updateEmergencyContact(contact.id, "cellPhone", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Home Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={contact.homePhone}
              onChange={(e) =>
                updateEmergencyContact(contact.id, "homePhone", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="demoemail@gmail.com"
              type="email"
              value={contact.email}
              onChange={(e) =>
                updateEmergencyContact(contact.id, "email", e.target.value)
              }
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Patient Demographics */}
      <CollapsibleSection
        title="Pre-Assessment - Patient Demographics"
        className="mt-4 sm:mt-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
          {/* Name Fields */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Patient First Name</FormLabel>
            <Input
              placeholder="First Name"
              value={patientFirstName}
              onChange={(e) => setPatientFirstName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Patient Middle Name</FormLabel>
            <Input
              placeholder="Middle Name"
              value={patientMiddleName}
              onChange={(e) => setPatientMiddleName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Patient Last Name</FormLabel>
            <Input
              placeholder="Last Name"
              value={patientLastName}
              onChange={(e) => setPatientLastName(e.target.value)}
            />
          </div>

          {/* Gender, DOB, SSN */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Gender</FormLabel>
            <Select value={gender} onValueChange={setGender}>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
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
            <DatePicker date={dateOfBirth} setDate={setDateOfBirth} />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Languages Spoken</FormLabel>
            <Select value={languagesSpoken} onValueChange={setLanguagesSpoken}>
              <SelectTrigger>
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="bangla">Bangla</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Cell Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={cellPhone}
              onChange={(e) => setCellPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Home Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={homePhone}
              onChange={(e) => setHomePhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Email Address</FormLabel>
            <Input
              placeholder="demoemail@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          
          {/* Address Fields */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={streetAddress1}
              onChange={(e) => setStreetAddress1(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={streetAddress2}
              onChange={(e) => setStreetAddress2(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* State, ZIP, County */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>State</FormLabel>
            <Select value={state} onValueChange={setState}>
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="nj">New Jersey</SelectItem>
                <SelectItem value="pa">Pennsylvania</SelectItem>
                <SelectItem value="ga">Georgia</SelectItem>
                <SelectItem value="al">Alabama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>County</FormLabel>
            <Input
              placeholder="County"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>ZIP Code</FormLabel>
            <Input
              placeholder="ZIP Code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>

          
          <LocationPicker
            latitude={latitude}
            longitude={longitude}
            onLocationChange={handleLocationChange}
          />

          {/* Insurance Information */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Healthfirst ID</FormLabel>
            <Input
              placeholder="Not provided"
              value={healthfirstId}
              onChange={(e) => setHealthfirstId(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Medicaid ID</FormLabel>
            <Input
              placeholder="Not provided"
              value={medicaidId}
              onChange={(e) => setMedicaidId(e.target.value)}
            />
          </div>
          <div></div>
        </div>
      </CollapsibleSection>

      {/* Vitals */}
      <CollapsibleSection title="Vitals">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
          {/* Height */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Height</FormLabel>
            <div className="flex gap-2 sm:gap-3">
              {/* Feet input */}
              <div className="relative flex-1">
                <Input
                  placeholder="5"
                  className="pr-8"
                  type="number"
                  value={heightFeet || ""}
                  onChange={(e) => setHeightFeet(parseInt(e.target.value) || 0)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
                  ft
                </span>
              </div>
              {/* Inches input */}
              <div className="relative flex-1">
                <Input
                  placeholder="4"
                  className="pr-8"
                  type="number"
                  value={heightInches || ""}
                  onChange={(e) => setHeightInches(parseInt(e.target.value) || 0)}
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm font-normal text-[#1C1C1E]">
                  in
                </span>
              </div>
            </div>
          </div>

          {/* Weight */}
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Weight</FormLabel>
            <div className="relative">
              <Input
                type="number"
                placeholder="100"
                value={weightLbs || ""}
                onChange={(e) => setWeightLbs(parseFloat(e.target.value) || 0)}
                className="pr-12"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                lbs
              </span>
            </div>
          </div>


          <div></div>
        </div>
      </CollapsibleSection>



      {/* Insurance Information */}
      <CollapsibleSection title="Insurance Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Healthfirst ID</FormLabel>
            <Input
              placeholder="Not Provided"
              value={healthfirstId}
              onChange={(e) => setHealthfirstId(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Medicaid ID</FormLabel>
            <Input
              placeholder="Not Provided"
              value={medicaidId}
              onChange={(e) => setMedicaidId(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Social Security Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={socialSecurityNumber}
              onChange={(e) => setSocialSecurityNumber(e.target.value)}
            />
          </div>
        </div>
      </CollapsibleSection>




      {/* Medical History */}
      <CollapsibleSection title="Medical History">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          {/* First Row */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Pre-existing conditions</FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="h-24 resize-none"
              value={preExistingConditions}
              onChange={(e) => setPreExistingConditions(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Needs help with</FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="h-24 resize-none"
              value={needsHelpWith}
              onChange={(e) => setNeedsHelpWith(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Lives with</FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="h-24 resize-none"
              value={livesWith}
              onChange={(e) => setLivesWith(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Uses cane/walker/wheelchair/hoyer lift for ambulating
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="h-24 resize-none"
              value={mobilityAids}
              onChange={(e) => setMobilityAids(e.target.value)}
            />
          </div>
                    <div className="flex flex-col gap-0.5">
            <FormLabel>Pets</FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="h-24 resize-none"
              value={pets}
              onChange={(e) => setPets(e.target.value)}
            />
          </div>
          <div></div>
          <div></div>
        </div>
      </CollapsibleSection>

      {/* Authorized Hours */}
      <CollapsibleSection title="Authorization">
        <div className="p-3 sm:p-4 bg-[#e2f7ff] rounded-lg">
          <div className="bg-white p-3 sm:p-4 space-y-3 sm:space-y-4 rounded-lg">
            {/* Authorization Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>Authorization Number</FormLabel>
                <Input
                  placeholder="xxxxxxxxx"
                  value={authorizationNumber}
                  onChange={(e) => setAuthorizationNumber(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Services Start Date</FormLabel>
                <DatePicker date={serviceStartDate} setDate={setServiceStartDate} />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Services End Date</FormLabel>
                <DatePicker date={serviceEndDate} setDate={setServiceEndDate} />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Code</FormLabel>
                <Input
                  placeholder="Code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Modifier</FormLabel>
                <Input
                  placeholder="Modifier"
                  value={modifier}
                  onChange={(e) => setModifier(e.target.value)}
                />
              </div>
              <div></div>
            </div>

            <div className="overflow-x-auto  sm:mx-0">
              <div className="bg-white rounded-[10px] border border-[#C7C7CC] min-w-[640px]">
                {/* Header Row */}
                <div className="flex border-b border-[#C7C7CC]">
                  {[
                    "MON (hrs)",
                    "TUE (hrs)",
                    "WED (hrs)",
                    "THU (hrs)",
                    "FRI (hrs)",
                    "SAT (hrs)",
                    "SUN (hrs)",
                  ].map((day) => (
                    <div
                      key={day}
                      className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-[#1C1C1E] font-poppins"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Input Row */}
                <div className="flex">
                  {(
                    [
                      "monday",
                      "tuesday",
                      "wednesday",
                      "thursday",
                      "friday",
                      "saturday",
                      "sunday",
                    ] as const
                  ).map((day) => (
                    <div key={day} className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3">
                      <Input
                        type="number"
                        value={authorizedHours[day]}
                        onChange={(e) =>
                          updateAuthorizedHours(day, parseInt(e.target.value) || 0)
                        }
                        className="text-center text-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[10px] p-3 sm:p-4">
              {/* Additional Authorization Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
                <div className="flex flex-col gap-0.5">
                  <FormLabel>Day(s) of Service(s) in a Week</FormLabel>
                  <Input
                    placeholder="5 (auto calculate)"
                    value={daysOfService}
                    onChange={(e) => setDaysOfService(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-0.5">
                  <FormLabel>Authorized Number of Hours</FormLabel>
                  <Input
                    placeholder="40 (auto calculate)"
                    value={totalAuthorizedHours}
                    onChange={(e) => setTotalAuthorizedHours(e.target.value)}
                  />
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Start and End Time */}
      <CollapsibleSection title="Preferred Start and End Time">
        <div className="overflow-x-auto  sm:mx-0">
          <div className="bg-white rounded-[10px] border border-[#C7C7CC] min-w-[768px]">
            {/* Header Row */}
            <div className="flex border-b border-[#C7C7CC]">
              <div className="w-20 sm:w-24 px-2 sm:px-3.5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#1C1C1E] font-poppins">
                Days
              </div>
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div
                  key={day}
                  className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3 text-center text-xs sm:text-sm font-semibold text-[#1C1C1E] font-poppins"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Start Time Row */}
            <div className="flex border-b border-[#C7C7CC]">
              <div className="w-20 sm:w-24 px-2 sm:px-3.5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#1C1C1E] font-poppins">
                Start Time
              </div>
              {(
                [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ] as const
              ).map((day) => (
                <div key={day} className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3">
                  <Input
                    value={scheduleTime[day]?.startTime || ""}
                    onChange={(e) =>
                      updateScheduleTime(day, "startTime", e.target.value)
                    }
                    className="text-center text-xs sm:text-sm"
                  />
                </div>
              ))}
            </div>

            {/* End Time Row */}
            <div className="flex">
              <div className="w-20 sm:w-24 px-2 sm:px-3.5 py-2 sm:py-3 text-xs sm:text-sm font-semibold text-[#1C1C1E] font-poppins">
                End Time
              </div>
              {(
                [
                  "monday",
                  "tuesday",
                  "wednesday",
                  "thursday",
                  "friday",
                  "saturday",
                  "sunday",
                ] as const
              ).map((day) => (
                <div key={day} className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3">
                  <Input
                    value={scheduleTime[day]?.endTime || ""}
                    onChange={(e) =>
                      updateScheduleTime(day, "endTime", e.target.value)
                    }
                    className="text-center text-xs sm:text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Emergency Contact */}
      <CollapsibleSection title="Emergency Contact">
        <div className="space-y-4 sm:space-y-6">
          {emergencyContacts.map((contact, index) =>
            renderEmergencyContact(contact, index)
          )}

          {/* Add Button */}
          <div className="flex justify-end">
            <PrimaryButton
              size="lg"
              className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] rounded-[20px] sm:rounded-[24px] p-[10px] sm:p-[12px]"
              onClick={addEmergencyContact}
            >
              <Plus className="w-5 h-5 sm:w-6 sm:h-6" />
            </PrimaryButton>
          </div>
        </div>
      </CollapsibleSection>

      {/* Primary Care Physician Information */}
      <CollapsibleSection title="Primary Care Physician Information">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel>PCP First Name</FormLabel>
            <Input
              placeholder="First Name"
              value={primaryCarePhysician.firstName || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("firstName", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>PCP Last Name</FormLabel>
            <Input
              placeholder="Last Name"
              value={primaryCarePhysician.lastName || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("lastName", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>NPI</FormLabel>
            <Input
              placeholder="NPI"
              value={primaryCarePhysician.npi || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("npi", e.target.value)
              }
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={primaryCarePhysician.phoneNumber || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("phoneNumber", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Fax Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={primaryCarePhysician.faxNumber || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("faxNumber", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="emailaddress@gmail.com"
              type="email"
              value={primaryCarePhysician.email || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("email", e.target.value)
              }
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={primaryCarePhysician.streetAddress1 || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("streetAddress1", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={primaryCarePhysician.streetAddress2 || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("streetAddress2", e.target.value)
              }
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              value={primaryCarePhysician.city || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("city", e.target.value)
              }
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>State</FormLabel>
            <Select
              value={primaryCarePhysician.state || ""}
              onValueChange={(value) =>
                updatePrimaryCarePhysician("state", value)
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="nj">New Jersey</SelectItem>
                <SelectItem value="pa">Pennsylvania</SelectItem>
                <SelectItem value="ga">Georgia</SelectItem>
                <SelectItem value="al">Alabama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>ZIP Code</FormLabel>
            <Input
              placeholder="ZIP Code"
              value={primaryCarePhysician.zipCode || ""}
              onChange={(e) =>
                updatePrimaryCarePhysician("zipCode", e.target.value)
              }
            />
          </div>
          <div></div>
        </div>
      </CollapsibleSection>

      {/* Pharmacy */}
      <CollapsibleSection title="Pharmacy">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel>Pharmacy Name</FormLabel>
            <Input
              placeholder="Pharmacy Name"
              value={pharmacy.name || ""}
              onChange={(e) => updatePharmacy("name", e.target.value)}
            />
          </div>
          <div></div>
          <div></div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={pharmacy.phoneNumber || ""}
              onChange={(e) => updatePharmacy("phoneNumber", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Fax Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={pharmacy.faxNumber || ""}
              onChange={(e) => updatePharmacy("faxNumber", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="emailaddress@gmail.com"
              type="email"
              value={pharmacy.email || ""}
              onChange={(e) => updatePharmacy("email", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={pharmacy.streetAddress1 || ""}
              onChange={(e) => updatePharmacy("streetAddress1", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={pharmacy.streetAddress2 || ""}
              onChange={(e) => updatePharmacy("streetAddress2", e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              value={pharmacy.city || ""}
              onChange={(e) => updatePharmacy("city", e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-0.5">
            <FormLabel>State</FormLabel>
            <Select
              value={pharmacy.state || ""}
              onValueChange={(value) => updatePharmacy("state", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ny">New York</SelectItem>
                <SelectItem value="nj">New Jersey</SelectItem>
                <SelectItem value="pa">Pennsylvania</SelectItem>
                <SelectItem value="ga">Georgia</SelectItem>
                <SelectItem value="al">Alabama</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>ZIP Code</FormLabel>
            <Input
              placeholder="ZIP Code"
              value={pharmacy.zipCode || ""}
              onChange={(e) => updatePharmacy("zipCode", e.target.value)}
            />
          </div>
          <div></div>
        </div>
      </CollapsibleSection>

      {/* Form Actions */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sm:gap-10">
        <PrimaryButton
          variant="outline"
          className="px-8 sm:px-14 py-2 w-full sm:w-auto"
          onClick={() => window.history.back()}
          disabled={isSubmitting}
        >
          Back
        </PrimaryButton>

        <PrimaryButton
          className="px-8 sm:px-14 py-2 w-full sm:w-auto"
          onClick={() => handleSubmit("submitted")}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit"
          )}
        </PrimaryButton>
      </div>

      {/* Success/Error Messages */}
      {submitError && (
        <div className="p-3 sm:p-4 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm sm:text-base">
          Error: {submitError}
        </div>
      )}
      {submitSuccess && submittedData && (
        <div className="p-3 sm:p-4 bg-green-50 border border-green-200 rounded-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-green-800 font-semibold text-sm sm:text-base">
                  Form submitted successfully!
                </p>
                <p className="text-green-700 text-xs sm:text-sm">
                  Your pre-assessment has been saved.
                </p>
              </div>
            </div>
            <PrimaryButton
              onClick={() => downloadPreAssessmentPDF(submittedData)}
              className="flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </PrimaryButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default PreAssessmentForm;
