"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Checkbox } from "@/components/ui/checkbox";
import { PrimaryButton } from "../ui/primary-button";

const DOCUMENT_OPTIONS = [
  "Patient Contract",
  "Nursing Assessment",
  "Plan of Care",
  "Patient Emergency",
  "Initial Field Supervision",
  "Follow Up Field Supervision",
  "Fax to Doctor",
  "Home Health Quality Measure",
  "Discharge / Transfer",
];

const PATIENTS = [
  { label: "Patient 1", value: "patient1" },
  { label: "Patient 2", value: "patient2" },
  { label: "Patient 3", value: "patient3" },
];

const CreatePdf = () => {
  const [selectedPatient, setSelectedPatient] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedDocs, setSelectedDocs] = useState<Record<string, boolean>>(
    () => Object.fromEntries(DOCUMENT_OPTIONS.map((doc) => [doc, false]))
  );

  const handleDocChange = (doc: string, checked: boolean) => {
    setSelectedDocs((prev) => ({ ...prev, [doc]: checked }));
  };

  return (
    <div className="self-stretch bg-white rounded-md flex flex-col h-full min-h-screen sm:min-h-[70vh] md:min-h-[76vh] lg:min-h-[76vh] xl:min-h-[82vh]">
      <div className="flex justify-between items-start w-full">
        <div className="text-zinc-900 text-2xl font-bold font-poppins">
          Create PDF
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full mt-6 flex-grow">
        <div className="flex flex-col sm:flex-row gap-6 w-full">
          {/* Patient Select */}
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="text-neutral-400 text-xs font-semibold font-poppins">
              Patient
            </div>
            <Select value={selectedPatient} onValueChange={setSelectedPatient}>
              <SelectTrigger>
                <SelectValue placeholder="Select Patient" />
              </SelectTrigger>
              <SelectContent>
                {PATIENTS.map((p) => (
                  <SelectItem key={p.value} value={p.value}>
                    {p.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Date Picker */}
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="text-neutral-400 text-xs font-semibold font-poppins">
              Date
            </div>
            <DatePicker date={selectedDate} setDate={setSelectedDate} />
          </div>
          {/* Document Checkboxes */}
          <div className="flex-1 flex flex-col gap-0.5">
            <div className="text-neutral-400 text-xs font-semibold font-poppins">
              Select to include:
            </div>
            <div className="flex flex-col gap-2">
              {DOCUMENT_OPTIONS.map((doc) => (
                <label
                  key={doc}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Checkbox
                    checked={selectedDocs[doc]}
                    onCheckedChange={(checked) =>
                      handleDocChange(doc, !!checked)
                    }
                  />
                  <span className="text-zinc-900 text-sm font-normal font-poppins">
                    {doc}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <div className="w-full h-0 border-t border-stone-300 my-6" />
        <div className="w-full flex justify-end">
          <PrimaryButton
            type="button"
            className="w-72 px-2.5 py-[5px] bg-purple-700 rounded-md flex justify-center items-center gap-2.5"
          >
              Create & Download PDF
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default CreatePdf;
