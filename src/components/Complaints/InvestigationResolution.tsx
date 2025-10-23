"use client";

import React, { useState } from "react";
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

const InvestigationResolution = () => {
  // Individual Receiving Complaint
  const [receiverName, setReceiverName] = useState<string>("");
  const [receiverPhone, setReceiverPhone] = useState<string>("");
  const [receiverAddressLine1, setReceiverAddressLine1] = useState<string>("");
  const [receiverAddressLine2, setReceiverAddressLine2] = useState<string>("");
  const [receiverCity, setReceiverCity] = useState<string>("");
  const [receiverState, setReceiverState] = useState<string>("");
  const [receiverZipCode, setReceiverZipCode] = useState<string>("");
  const [receiverSignature, setReceiverSignature] = useState<string>("");
  const [receiverSignDate, setReceiverSignDate] = useState<Date | undefined>();

  // Investigation Results
  const [investigationResults, setInvestigationResults] = useState<string>("");
  const [investigatorSignature, setInvestigatorSignature] =
    useState<string>("");
  const [investigatorSignDate, setInvestigatorSignDate] = useState<
    Date | undefined
  >();

  // Complaint Resolution
  const [resolutionDetails, setResolutionDetails] = useState<string>("");
  const [resolverSignature, setResolverSignature] = useState<string>("");
  const [resolverSignDate, setResolverSignDate] = useState<Date | undefined>();

  // Follow Up
  const [followUpDetails, setFollowUpDetails] = useState<string>("");
  const [evaluatorSignature, setEvaluatorSignature] = useState<string>("");
  const [evaluatorSignDate, setEvaluatorSignDate] = useState<
    Date | undefined
  >();

  // Corrective Action
  const [correctiveAction, setCorrectiveAction] = useState<string>("");
  const [correctiveActionSignature, setCorrectiveActionSignature] =
    useState<string>("");
  const [correctiveActionSignDate, setCorrectiveActionSignDate] = useState<
    Date | undefined
  >();

  // SignaturePad returns string | null. Map null to empty string to fit state shape.
  const handleReceiverSignatureChange = (signature: string | null) => {
    setReceiverSignature(signature || "");
  };
  const handleInvestigatorSignatureChange = (signature: string | null) => {
    setInvestigatorSignature(signature || "");
  };
  const handleResolverSignatureChange = (signature: string | null) => {
    setResolverSignature(signature || "");
  };
  const handleEvaluatorSignatureChange = (signature: string | null) => {
    setEvaluatorSignature(signature || "");
  };
  const handleCorrectiveActionSignatureChange = (signature: string | null) => {
    setCorrectiveActionSignature(signature || "");
  };

  return (
    <div className="w-full bg-white rounded-md flex flex-col space-y-6">
      {/* Individual Receiving Complaint Section */}
      <CollapsibleSection title="Individual Receiving Complaint">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Name</FormLabel>
            <Input
              placeholder="Name"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Cell Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={receiverPhone}
              onChange={(e) => setReceiverPhone(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            {/* Empty column for grid alignment */}
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={receiverAddressLine1}
              onChange={(e) => setReceiverAddressLine1(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={receiverAddressLine2}
              onChange={(e) => setReceiverAddressLine2(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              value={receiverCity}
              onChange={(e) => setReceiverCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>State</FormLabel>
            <Select value={receiverState} onValueChange={setReceiverState}>
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
              value={receiverZipCode}
              onChange={(e) => setReceiverZipCode(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-0.5">
            {/* Empty column for grid alignment */}
          </div>
        </div>

        {/* Signature Section */}
        <div className="w-full flex justify-center items-start gap-6 mt-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Signature of Individual Receiving Complaint"
                value={receiverSignature}
                onChange={handleReceiverSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Sign Date</FormLabel>
              <DatePicker
                date={receiverSignDate}
                setDate={setReceiverSignDate}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Investigation Results Section */}
      <CollapsibleSection title="Investigation Results">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Specify Results of Investigation</FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={investigationResults}
              onChange={(e) => setInvestigationResults(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
        </div>

        {/* Signature Section */}
        <div className="w-full flex justify-center items-start gap-6 mt-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Signature of Individual Conducting Investigation"
                value={investigatorSignature}
                onChange={handleInvestigatorSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Sign Date</FormLabel>
              <DatePicker
                date={investigatorSignDate}
                setDate={setInvestigatorSignDate}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Complaint Resolution Section */}
      <CollapsibleSection title="Complaint Resolution">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel required>Provide Resolution to Complaint</FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={resolutionDetails}
              onChange={(e) => setResolutionDetails(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
        </div>

        {/* Signature Section */}
        <div className="w-full flex justify-center items-start gap-6 mt-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Signature of Individual(s) Providing Resolution"
                value={resolverSignature}
                onChange={handleResolverSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Sign Date</FormLabel>
              <DatePicker
                date={resolverSignDate}
                setDate={setResolverSignDate}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Follow Up Section */}
      <CollapsibleSection title="Follow Up Evaluating Effectiveness of Resolution">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Follow-up to Evaluate Effectiveness of Resolution
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={followUpDetails}
              onChange={(e) => setFollowUpDetails(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
        </div>

        {/* Signature Section */}
        <div className="w-full flex justify-center items-start gap-6 mt-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Signature of Individual Evaluating Effectiveness of Resolution"
                value={evaluatorSignature}
                onChange={handleEvaluatorSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Sign Date</FormLabel>
              <DatePicker
                date={evaluatorSignDate}
                setDate={setEvaluatorSignDate}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Corrective Action Section */}
      <CollapsibleSection title="Corrective Action">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex flex-col gap-0.5">
            <FormLabel>
              Describe Corrective Action Taken if Resolution was not Effective
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              value={correctiveAction}
              onChange={(e) => setCorrectiveAction(e.target.value)}
              className="h-24 resize-none"
            />
          </div>
        </div>

        {/* Signature Section */}
        <div className="w-full flex justify-center items-start gap-6 mt-6">
          <div className="w-[33%] flex flex-col gap-3">
            <div className="flex flex-col items-end gap-3">
              <SignaturePad
                label="Signature of Individual Establishing Corrective Action(s)"
                value={correctiveActionSignature}
                onChange={handleCorrectiveActionSignatureChange}
                placeholder="Sign here"
                height={96}
                className="w-full"
                clearButtonText="Clear"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel>Sign Date</FormLabel>
              <DatePicker
                date={correctiveActionSignDate}
                setDate={setCorrectiveActionSignDate}
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default InvestigationResolution;
