"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrimaryButton } from "@/components/ui/primary-button";
import { IncidentReport } from "@/data/IncidentReportsData";

interface IncidentReportViewProps {
  incident: IncidentReport;
  patientId: number;
  patientName: string;
  mode: "view" | "edit";
}

export function IncidentReportView({
  incident,
  patientId,
  patientName,
  mode = "view",
}: IncidentReportViewProps) {
  const router = useRouter();
  const [reportTitle, setReportTitle] = useState(
    incident.details.length > 50
      ? incident.details.substring(0, 50).trim() + "..."
      : incident.details
  );
  const [reportDetails, setReportDetails] = useState(incident.details);
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Handle form submission logic here
    console.log("Saving incident report:", {
      incidentId: incident.id,
      patientId,
      title: reportTitle,
      details: reportDetails,
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
            label: `${incident.date}, ${incident.time}`,
            active: true,
          },
        ]}
      />

      {/* View/Edit Incident Report Section */}
      <CollapsibleSection
        title={
          mode === "edit" ? "Edit Incident Report" : "View Incident Report"
        }
      >
        <div className="flex flex-col gap-0.5">
          {mode === "edit" ? (
            isEditingTitle ? (
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
            )
          ) : (
            <div className="text-base font-semibold text-zinc-900 font-poppins">
              {incident.details.length > 50
                ? incident.details.substring(0, 50).trim() + "..."
                : incident.details}
            </div>
          )}
          <div className="flex gap-6">
            <span className="text-sm font-normal text-neutral-400 font-poppins">
              {incident.date}
            </span>
            <span className="text-sm font-normal text-neutral-400 font-poppins">
              {incident.time}
            </span>
          </div>
        </div>
      </CollapsibleSection>

      {/* Report Details Section */}
      <CollapsibleSection title="Report Details">
        {mode === "edit" ? (
          <div className="flex flex-col gap-3">
            <Textarea
              placeholder="Enter report details here"
              value={reportDetails}
              onChange={(e) => setReportDetails(e.target.value)}
              className="min-h-[400px] flex-1"
            />
          </div>
        ) : (
          <div className="px-2.5 py-[5px] bg-sky-50 rounded-[3px] border border-neutral-400 flex justify-start items-start gap-2.5 min-h-[400px]">
            <div className="flex-1 text-zinc-900 text-sm font-normal font-poppins whitespace-pre-line">
              {incident.details}
            </div>
          </div>
        )}
      </CollapsibleSection>

      {/* Divider */}
      <div className="h-px bg-stone-300" />

      {/* Action Buttons */}
      <div className="flex justify-between items-center">
        <PrimaryButton variant="outline" className="w-72" onClick={handleBack}>
          Back
        </PrimaryButton>
        {mode === "edit" && (
          <PrimaryButton
            variant="primary"
            className="w-72"
            onClick={handleSave}
          >
            Save
          </PrimaryButton>
        )}
      </div>
    </div>
  );
}
