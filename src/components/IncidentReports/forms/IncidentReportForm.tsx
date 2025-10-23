"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrimaryButton } from "@/components/ui/primary-button";

interface IncidentReportFormProps {
  patientId: number;
  patientName: string;
}

export function IncidentReportForm({
  patientId,
  patientName,
}: IncidentReportFormProps) {
  const router = useRouter();
  const [reportTitle, setReportTitle] = useState("Enter Report Heading");
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [reportDetails, setReportDetails] = useState("");

  // Get current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = currentDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Handle form submission logic here
    console.log("Saving incident report:", {
      patientId,
      title: reportTitle,
      details: reportDetails,
      date: formattedDate,
      time: formattedTime,
    });

    // Navigate back to incident reports list
    router.push(`/incident-reports/${patientId}`);
  };

  return (
    <div className="bg-white rounded-md flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          {
            label: `${patientName}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          {
            label: "Incident Reports",
            href: `/incident-reports/${patientId}`,
          },
          {
            label: `${formattedDate}, ${formattedTime}`,
            active: true,
          },
        ]}
      />

      {/* New Incident Report Section */}
      <CollapsibleSection title="New Incident Report">
        <div className="flex flex-col gap-6">
          {/* Report Heading Section */}
          <div className="flex flex-col gap-0.5">
            {isEditingTitle ? (
              <Input
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                onBlur={() => setIsEditingTitle(false)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingTitle(false);
                  }
                }}
                autoFocus
                className="text-base font-semibold text-zinc-900 font-poppins border-none p-0 shadow-none focus:ring-0"
              />
            ) : (
              <div
                onClick={() => setIsEditingTitle(true)}
                className="text-base font-semibold text-zinc-900 font-poppins cursor-pointer hover:bg-gray-50 p-1 rounded transition-colors"
              >
                {reportTitle}
              </div>
            )}
            <div className="flex gap-6">
              <span className="text-sm font-normal text-neutral-400 font-poppins">
                {formattedDate}
              </span>
              <span className="text-sm font-normal text-neutral-400 font-poppins">
                {formattedTime}
              </span>
            </div>
          </div>
        </div>
      </CollapsibleSection>

      {/* Report Details Section */}
      <CollapsibleSection title="Report Details">
        <div className="flex flex-col gap-3">
          <Textarea
            placeholder="Enter report details here"
            value={reportDetails}
            onChange={(e) => setReportDetails(e.target.value)}
            className="min-h-[400px] flex-1"
          />
        </div>
      </CollapsibleSection>

      {/* Divider */}
      <div className="h-px bg-stone-300" />

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <PrimaryButton variant="outline" className="w-72" onClick={handleBack}>
          Back
        </PrimaryButton>
        <PrimaryButton variant="primary" className="w-72" onClick={handleSave}>
          Save
        </PrimaryButton>
      </div>
    </div>
  );
}
