"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { DatePicker } from "@/components/ui/date-picker";
import { SignaturePad } from "@/components/ui/signature-pad";
import React from "react";

export default function PlanOfCareFinal() {
  const acknowledgementItems = [
    "Roles and Responsibilities",
    "Code of Ethics",
    "Costs & Billing",
    "Confidentiality of Client Information",
    "Contact Information",
    "Client Consent",
  ];

  // Add state for date fields
  const [patientSignDate, setPatientSignDate] = React.useState<
    Date | undefined
  >();
  const [rnSignDate, setRnSignDate] = React.useState<Date | undefined>();
  const [serviceStartDate, setServiceStartDate] = React.useState<
    Date | undefined
  >();
  const [serviceEndDate, setServiceEndDate] = React.useState<
    Date | undefined
  >();

  // Add state for signatures
  const [patientSignature, setPatientSignature] = React.useState<string | null>(
    null
  );
  const [rnSignature, setRnSignature] = React.useState<string | null>(null);

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 ">
      {/* Acknowledgement Section */}
      <CollapsibleSection title="Acknowledgement">
        <div className="px-3">
        <div className="space-y-4 ">
          <FormLabel className="text-xs font-semibold text-neutral-400">
            The following information has been provided and/or discussed with
            the Client
          </FormLabel>

          <div className="space-y-2">
            {acknowledgementItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Checkbox id={item.toLowerCase().replace(/\s+/g, "-")} />
                <FormLabel
                  htmlFor={item.toLowerCase().replace(/\s+/g, "-")}
                  className="text-sm text-black font-normal"
                >
                  {item}
                </FormLabel>
              </div>
            ))}

            {/* Other fields with input */}
            {[1, 2].map((index) => (
              <div
                key={`other-${index}`}
                className="w-72 flex items-start gap-2"
              >
                <Checkbox id={`other-${index}`} />
                <div className="flex-1 space-y-0.5">
                  <FormLabel
                    htmlFor={`other-${index}`}
                    className="text-sm text-black font-normal"
                  >
                    Other
                  </FormLabel>
                  <Input
                    placeholder="Enter Text"
                    className="h-8 bg-sky-50 border-neutral-400"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        </div>
      </CollapsibleSection>

      {/* Client Consent Section */}
      <CollapsibleSection title="Client Consent">
        <div className="px-3">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5">
            <span className="text-sm text-black">
              Client understands that their service requests/needs will be
              reviewed by the Supervisor at least every
            </span>
            <Input
              className="w-10 h-8 bg-sky-50 border-neutral-400 text-center"
              defaultValue="4"
            />
            <span className="text-sm text-black">months, or as required,</span>
          </div>
          <p className="text-sm text-black">
            and that the service(s) may be changed according to the
            patient&apos;s needs as prescribed by the Patient&apos;s Physician.
          </p>
        </div>
        </div>
      </CollapsibleSection>

      {/* Signature Section */}
      <CollapsibleSection title="Signature">
        <div className="px-3">
        <div className="space-y-6">
          {/* Signature Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Patient Signature */}
            <div className="">
              <SignaturePad
                label="Patient/Patient's Representative Signature"
                value={patientSignature}
                onChange={setPatientSignature}
                height={96}
                placeholder="Sign here"
                clearButtonText="Clear"
                clearButtonVariant="outline"
                clearButtonSize="sm"
                className=""
              />
              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  Patient Sign Date
                </FormLabel>
                <DatePicker
                  date={patientSignDate}
                  setDate={setPatientSignDate}
                />
              </div>
            </div>

            {/* RN Signature */}
            <div className="">
              <SignaturePad
                label="RN Signature"
                value={rnSignature}
                onChange={setRnSignature}
                height={96}
                placeholder="Sign here"
                clearButtonText="Clear"
                clearButtonVariant="outline"
                clearButtonSize="sm"
                className=""
              />
              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-neutral-400">
                  RN Sign Date
                </FormLabel>
                <DatePicker date={rnSignDate} setDate={setRnSignDate} />
              </div>
            </div>
          </div>

          {/* RN Information */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Name of Individual preparing Service Plan (RN)
              </FormLabel>
              <Input placeholder="RN Full Name" />
            </div>
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Title of RN
              </FormLabel>
              <Input placeholder="RN Title" />
            </div>
          </div>

          <hr className="border-stone-300" />

          {/* Authorization Information */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Authorization Number
              </FormLabel>
              <Input
                placeholder="XXXXXXXXXX"
                className="bg-sky-50 border-neutral-400"
              />
            </div>
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Service Start Date
              </FormLabel>
              <DatePicker
                date={serviceStartDate}
                setDate={setServiceStartDate}
              />
            </div>
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Service End Date
              </FormLabel>
              <DatePicker date={serviceEndDate} setDate={setServiceEndDate} />
            </div>
          </div>

          {/* Code and Modifier */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Code
              </FormLabel>
              <Input
                placeholder="Code"
                className="bg-sky-50 border-neutral-400"
              />
            </div>
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Modifier
              </FormLabel>
              <Input
                placeholder="Modifier"
                className="bg-sky-50 border-neutral-400"
              />
            </div>
          </div>

          {/* Service Information */}
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Day(s) of Service(s) in a Week
              </FormLabel>
              <Input
                defaultValue="5"
                className="bg-sky-50 border-neutral-400"
              />
            </div>
            <div className="space-y-0.5">
              <FormLabel className="text-xs font-semibold text-neutral-400">
                Authorized Number of Hours
              </FormLabel>
              <Input
                defaultValue="40"
                className="bg-sky-50 border-neutral-400"
              />
            </div>
          </div>

          {/* Weekly Schedule */}
          <div className="w-full bg-white rounded-[10px] border border-stone-300">
            <div className="grid grid-cols-7">
              {["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"].map((day) => (
                <div
                  key={day}
                  className="p-3.5 text-center border-b border-stone-300"
                >
                  <span className="text-sm font-semibold text-black">
                    {day} (hrs)
                  </span>
                </div>
              ))}
              {[8, 8, 8, 8, 8, "", ""].map((hours, index) => (
                <div key={index} className="p-3.5">
                  <Input
                    defaultValue={hours}
                    className="h-8 bg-sky-50 border-neutral-400 text-center"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* Add purple button to the right below the schedule */}

          <div className="self-stretch h-0 outline outline-offset-[-0.50px] outline-stone-300" />

          {/* Verbal Consent */}
          <div className="space-y-2">
            <FormLabel className="text-xs font-semibold text-neutral-400">
              Verbal consent received from client service end time
            </FormLabel>
            <RadioGroup defaultValue="no">
              <div className="flex items-center gap-2">
                <RadioGroupItem value="yes" id="consent-yes" />
                <FormLabel htmlFor="consent-yes" className="text-sm text-black">
                  Yes
                </FormLabel>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="no" id="consent-no" />
                <FormLabel htmlFor="consent-no" className="text-sm text-black">
                  No
                </FormLabel>
              </div>
            </RadioGroup>
          </div>
        </div>
        </div>
      </CollapsibleSection>
      </div>
    </div>
  );
}
