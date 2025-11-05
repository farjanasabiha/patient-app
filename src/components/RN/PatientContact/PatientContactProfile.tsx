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
import { useParams } from "next/navigation";
import activePatientData from "@/data/ActivePatientData";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DynamicContacts from "@/components/Common/Forms/DynamicContacts";
import LocationPicker from "../LocationPicker/LocationPicker";

export default function PatientContactProfile() {
  const params = useParams();
  const patientId = params.id;
  const patient = activePatientData.find((p) => p.id === Number(patientId));
    // Location Coordinates
    const [latitude, setLatitude] = useState<number>();
    const [longitude, setLongitude] = useState<number>();

  // State for date fields with proper date parsing
  const [startOfCare, setStartOfCare] = useState<Date | undefined>(() => {
    return patient?.startOfCare ? new Date(patient.startOfCare) : undefined;
  });

  const [dateOfBirth, setDateOfBirth] = useState<Date | undefined>(() => {
    return patient?.dob ? new Date(patient.dob) : undefined;
  });

  const [insuranceType, setInsuranceType] = useState<string>("");
  const [privatePayMethod, setPrivatePayMethod] = useState<string>("");

  // Authorization form state
  const [authorizationNumber, setAuthorizationNumber] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [code, setCode] = useState<string>("");
  const [modifier, setModifier] = useState<string>("");
  const [hoursByDay, setHoursByDay] = useState<string[]>(["8", "8", "8", "8", "8", "0", "0"]);

    const handleLocationChange = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  const setHoursForDay = (dayIndex: number, value: string) => {
    setHoursByDay((prev) => {
      const hours = [...prev];
      hours[dayIndex] = value;
      return hours;
    });
  };

  const totalAuthorizedHours = hoursByDay.reduce(
    (sum, v) => sum + (parseFloat(v || "0") || 0),
    0
  );
  const totalServiceDays = hoursByDay.filter(
    (v) => (parseFloat(v || "0") || 0) > 0
  ).length;

  return (
    <div className="mx-auto px-[1px]">
      {/* Form Sections */}
      <div className="space-y-6">
        {/* Patient Demographics */}
        <CollapsibleSection title="Patient Demographics">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
            {/* SOC and MRN spanning 2 columns */}
            <div className="md:col-span-2 flex flex-col sm:flex-row gap-3 sm:gap-6">
              <div className="flex-1 flex flex-col gap-0.5">
                <FormLabel required>Start of Care (SOC)</FormLabel>
                <DatePicker date={startOfCare} setDate={setStartOfCare} />
              </div>
              <div className="flex-1 flex flex-col gap-0.5">
                <FormLabel required>MRN</FormLabel>
                <Input placeholder="XX-XX1234567" defaultValue={patient?.mrn} />
              </div>
            </div>
                        <div className="flex flex-col gap-0.5">
              <FormLabel required>Language Spoken</FormLabel>
              <Select>
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
            {/* Rest of the fields in 3 columns */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>First Name</FormLabel>
              <Input
                placeholder="First Name"
                defaultValue={patient?.name.split(" ")[0]}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Middle Name</FormLabel>
              <Input placeholder="Middle Name" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Last Name</FormLabel>
              <Input
                placeholder="Last Name"
                defaultValue={patient?.name.split(" ").slice(-1)[0]}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Gender</FormLabel>
              <Select>
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
              <DatePicker date={dateOfBirth} setDate={setDateOfBirth} />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Social Security Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input placeholder="Street Address Line 1" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input placeholder="Street Address Line 2" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input placeholder="City" />
            </div>
                        <div className="flex flex-col gap-0.5">
              <FormLabel required>Cell Phone Number</FormLabel>
              <Input
                placeholder="123 456 7890"
                defaultValue={patient?.phoneNumber}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Home Phone Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Email Address</FormLabel>
              <Input
                placeholder="demoemail@gmail.com"
                type="email"
                defaultValue={patient?.email}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>State</FormLabel>
              <Select defaultValue={patient?.location?.toLowerCase()}>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="georgia">Georgia</SelectItem>
                  <SelectItem value="new york">New York</SelectItem>
                  <SelectItem value="new jersey">New Jersey</SelectItem>
                  <SelectItem value="pennsylvania">Pennsylvania</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input placeholder="ZIP Code" />
            </div>
          <LocationPicker
            latitude={latitude}
            longitude={longitude}
            onLocationChange={handleLocationChange}
          />

            <div className="md:col-span-3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Column 1: Insurance options (vertical) */}
                <div className="w-full md:w-72">
                  <RadioGroup
                    value={insuranceType}
                    onValueChange={setInsuranceType}
                    className="flex flex-col gap-2 mt-2"
                  >
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="medicaid" id="medicaid" />
                      <label
                        htmlFor="medicaid"
                        className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                      >
                        Medicaid
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="medicare" id="medicare" />
                      <label
                        htmlFor="medicare"
                        className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                      >
                        Medicare
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem
                        value="private-insurance"
                        id="private-insurance"
                      />
                      <label
                        htmlFor="private-insurance"
                        className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                      >
                        Private Insurance
                      </label>
                    </div>
                    <div className="flex items-center space-x-4">
                      <RadioGroupItem value="private-pay" id="private-pay" />
                      <label
                        htmlFor="private-pay"
                        className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                      >
                        Private Pay
                      </label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Column 2: Private Pay methods (only when selected) */}
                <div>
                  {insuranceType === "private-pay" && (
                    <div className="flex flex-col items-start">
                      <RadioGroup
                        value={privatePayMethod}
                        onValueChange={setPrivatePayMethod}
                        className="flex flex-col gap-2"
                      >
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem
                            value="account-number"
                            id="pp-account-number"
                          />
                          <label
                            htmlFor="pp-account-number"
                            className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                          >
                            Account Number
                          </label>
                        </div>
                        <div className="flex items-center space-x-4">
                          <RadioGroupItem
                            value="credit-card"
                            id="pp-credit-card"
                          />
                          <label
                            htmlFor="pp-credit-card"
                            className="text-sm font-normal text-zinc-900 font-poppins cursor-pointer"
                          >
                            Credit Card
                          </label>
                        </div>
                      </RadioGroup>
                    </div>
                  )}
                </div>

                {/* Column 3: empty to mirror mock spacing */}
                <div />
              </div>
            </div>

            {/* Private Pay - Account Number fields */}
            {insuranceType === "private-pay" &&
              privatePayMethod === "account-number" && (
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Bank Name</FormLabel>
                      <Input placeholder="Bank Name" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Routing Number</FormLabel>
                      <Input placeholder="Routing Number" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Account Number</FormLabel>
                      <Input placeholder="Account Number" />
                    </div>
                  </div>
                </div>
              )}

            {/* Private Pay - Credit Card fields */}
            {insuranceType === "private-pay" &&
              privatePayMethod === "credit-card" && (
                <div className="md:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Name on Card</FormLabel>
                      <Input placeholder="Name on Card" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Card Number</FormLabel>
                      <Input placeholder="Card Number" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Expiration Date</FormLabel>
                      <Input placeholder="MM/YY" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6 mt-3">
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>Security Code</FormLabel>
                      <Input placeholder="CVV" />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <FormLabel required>ZIP Code</FormLabel>
                      <Input placeholder="ZIP Code" />
                    </div>
                    <div></div>
                  </div>
                </div>
              )}

            {/* Conditional Medicaid Fields */}
            {insuranceType === "medicaid" && (
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
                  <div className="flex flex-col gap-0.5">
                    <FormLabel required>Medicaid ID Number</FormLabel>
                    <Input placeholder="Medicaid ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Insurance Name</FormLabel>
                    <Input placeholder="Insurance Name" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Insurance ID Number</FormLabel>
                    <Input placeholder="Insurance ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Group Number</FormLabel>
                    <Input placeholder="Group Number" />
                  </div>
                </div>
              </div>
            )}

            {/* Conditional Medicare Fields */}
            {insuranceType === "medicare" && (
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
                  <div className="flex flex-col gap-0.5">
                    <FormLabel required>Medicare ID Number</FormLabel>
                    <Input placeholder="Medicare ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Medicaid ID Number</FormLabel>
                    <Input placeholder="Medicaid ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Insurance Name</FormLabel>
                    <Input placeholder="Insurance Name" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Insurance ID Number</FormLabel>
                    <Input placeholder="Insurance ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Group Number</FormLabel>
                    <Input placeholder="Group Number" />
                  </div>
                </div>
              </div>
            )}

            {/* Conditional Private Insurance Fields */}
            {insuranceType === "private-insurance" && (
              <div className="md:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
                  <div className="flex flex-col gap-0.5">
                    <FormLabel required>Insurance Name</FormLabel>
                    <Input placeholder="Insurance Name" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel required>Insurance ID Number</FormLabel>
                    <Input placeholder="Insurance ID Number" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <FormLabel>Responsible Party</FormLabel>
                    <Input placeholder="Responsible Party" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </CollapsibleSection>

        {/* Emergency Contact - Now using the reusable component */}
        <DynamicContacts
          title="Emergency Contact"
          showCollapsibleSection={true}
          minContacts={2}
        />

        {/* Authorization */}
        <CollapsibleSection title="Authorization">
          <div className="p-3 bg-sky-100 rounded-md flex flex-col items-start gap-3 w-full">
            <div className="w-full p-3 bg-white rounded-md inline-flex justify-start items-start gap-6">
              <div className="w-full inline-flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Authorization Number</FormLabel>
                    <Input
                      placeholder="XXXXXXXXXX"
                      value={authorizationNumber}
                      onChange={(e) => setAuthorizationNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Service Start Date</FormLabel>
                    <DatePicker
                      date={startDate}
                      setDate={setStartDate}
                    />
                  </div>
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Service End Date</FormLabel>
                    <DatePicker
                      date={endDate}
                      setDate={setEndDate}
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Code</FormLabel>
                    <Input
                      placeholder="Code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Modifier</FormLabel>
                    <Input
                      placeholder="Modifier"
                      value={modifier}
                      onChange={(e) => setModifier(e.target.value)}
                    />
                  </div>
                  <div className="flex-1 hidden sm:block" />
                </div>

                {/* Weekly hours table */}
                <div className="w-full overflow-x-auto -mx-3 sm:mx-0">
                <div className="min-w-[640px] bg-white rounded-[10px] flex flex-col justify-start items-start">
                  <div className="w-full rounded-t-[10px] border border-[#C7C7CC] border-b-0 inline-flex items-center">
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
                  <div className="w-full rounded-b-[10px] border border-[#C7C7CC] border-t-0 inline-flex items-center">
                    {hoursByDay.map((value, idx) => (
                      <div key={idx} className="flex-1 px-2 sm:px-3.5 py-2 sm:py-3">
                        <Input
                          value={value}
                          onChange={(e) =>
                            setHoursForDay(idx, e.target.value)
                          }
                          className="text-center text-sm"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                </div>

                {/* Auto calculated summary */}
                <div className="w-full flex flex-col sm:flex-row justify-start items-start sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Day(s) of Service(s) in a Week</FormLabel>
                    <Input
                      value={`${totalServiceDays} (auto calculate)`}
                      readOnly
                    />
                  </div>
                  <div className="flex-1 w-full inline-flex flex-col justify-start items-start gap-0.5">
                    <FormLabel>Authorized Number of Hours</FormLabel>
                    <Input
                      value={`${totalAuthorizedHours} (auto calculate)`}
                      readOnly
                    />
                  </div>
                  <div className="flex-1 hidden sm:block" />
                </div>
              </div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Primary Care Physician Information */}
        <CollapsibleSection title="Primary Care Physician Information">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel>PCP First Name</FormLabel>
              <Input placeholder="First Name" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>PCP Last Name</FormLabel>
              <Input placeholder="Last Name" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>NPI</FormLabel>
              <Input placeholder="NPI" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Fax Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Email Address</FormLabel>
              <Input placeholder="emailaddress@gmail.com" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input placeholder="Street Address Line 1" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input placeholder="Street Address Line 2" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input placeholder="City" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>State</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input placeholder="ZIP Code" />
            </div>
          </div>
        </CollapsibleSection>

        {/* Pharmacy */}
        <CollapsibleSection title="Pharmacy">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 sm:gap-x-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel>Pharmacy Name</FormLabel>
              <Input placeholder="Pharmacy Name" />
            </div>
            <div className="md:col-span-2"></div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Phone Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Fax Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Email Address</FormLabel>
              <Input placeholder="emailaddress@gmail.com" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 1</FormLabel>
              <Input placeholder="Street Address Line 1" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Street Address Line 2</FormLabel>
              <Input placeholder="Street Address Line 2" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>City</FormLabel>
              <Input placeholder="City" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>State</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>ZIP Code</FormLabel>
              <Input placeholder="ZIP Code" />
            </div>
          </div>
        </CollapsibleSection>

        {/* Patient Access Password */}
        <CollapsibleSection title="Patient Access Password">
          <div className="flex flex-col gap-0.5 max-w-lg">
            <FormLabel>Patient Access Password</FormLabel>
            <Input type="password" placeholder="Password" />
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
}
