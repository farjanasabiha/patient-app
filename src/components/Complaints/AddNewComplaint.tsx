"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { Textarea } from "@/components/ui/textarea";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SignaturePad from "@/components/ui/signature-pad";

type AddNewComplaintInitial = {
  complainantName?: string;
  complainantPhone?: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  complaintDescription?: string;
  complaintLocation?: string;
  resolutionRequest?: string;
};

const AddNewComplaint = ({
  initialData,
}: {
  initialData?: AddNewComplaintInitial;
}) => {
  const [complainantName, setComplainantName] = useState<string>(
    initialData?.complainantName || ""
  );
  const [complainantPhone, setComplainantPhone] = useState<string>("");
  const [addressLine1, setAddressLine1] = useState<string>("");
  const [addressLine2, setAddressLine2] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [complaintDescription, setComplaintDescription] = useState<string>(
    initialData?.complaintDescription || ""
  );
  const [complaintLocation, setComplaintLocation] = useState<string>(
    initialData?.complaintLocation || ""
  );
  const [resolutionRequest, setResolutionRequest] = useState<string>(
    initialData?.resolutionRequest || ""
  );
  const [patientSignature, setPatientSignature] = useState<string>("");
  const [patientSignDate, setPatientSignDate] = useState<Date | undefined>();

  const handleSignatureChange = (signature: string | null) => {
    setPatientSignature(signature || "");
  };

  useEffect(() => {
    if (!initialData) return;
    if (initialData.complainantPhone)
      setComplainantPhone(initialData.complainantPhone);
    if (initialData.addressLine1) setAddressLine1(initialData.addressLine1);
    if (initialData.addressLine2) setAddressLine2(initialData.addressLine2);
    if (initialData.city) setCity(initialData.city);
    if (initialData.state) setState(initialData.state);
    if (initialData.zipCode) setZipCode(initialData.zipCode);
  }, [initialData]);

  return (
    <div className="w-full bg-white rounded-md flex flex-col space-y-6">
      {/* Complainant Section */}
      <CollapsibleSection title="Complainant">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Complainant Name</FormLabel>
            <Input
              placeholder="Complainant Name"
              value={complainantName}
              onChange={(e) => setComplainantName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Complainant Cell Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={complainantPhone}
              onChange={(e) => setComplainantPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            {/* Empty column for grid alignment */}
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
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
          <div className="flex flex-col gap-0.5">
            <FormLabel>State</FormLabel>
            <Select value={state} onValueChange={setState}>
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
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            {/* Empty column for grid alignment */}
          </div>
        </div>
      </CollapsibleSection>

      {/* Complaint Section */}
      <CollapsibleSection title="Complaint">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>
              Provide a Description of Complaint/Grievance
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={complaintDescription}
              onChange={(e) => setComplaintDescription(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Specify the location of Complaint/Grievance (if applicable)
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={complaintLocation}
              onChange={(e) => setComplaintLocation(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Specify what you think should be done to resolve the
              Complaint/Grievance.
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={resolutionRequest}
              onChange={(e) => setResolutionRequest(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
        </div>
      </CollapsibleSection>

      {/* Signature & Date Section */}
      <CollapsibleSection title="Signature & Date">
        <div className="w-full flex justify-center items-start gap-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Patient/Patient's Representative Signature"
                value={patientSignature}
                onChange={handleSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Patient Sign Date</FormLabel>
              <DatePicker date={patientSignDate} setDate={setPatientSignDate} />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default AddNewComplaint;
