"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Communication } from "@/data/CommunicationData";

interface CommunicationViewProps {
  communication: Communication;
  patientId: number;
  patientName: string;
  mode: "view" | "edit";
}

export function CommunicationView({
  communication,
  patientId,
  patientName,
  mode = "view",
}: CommunicationViewProps) {
  const router = useRouter();
  const [communicationTitle, setCommunicationTitle] = useState(
    communication.details.length > 50
      ? communication.details.substring(0, 50).trim() + "..."
      : communication.details
  );
  const [communicationDetails, setCommunicationDetails] = useState(
    communication.details
  );
  const [isEditingTitle, setIsEditingTitle] = useState(false);

  const handleBack = () => {
    router.back();
  };

  const handleSave = () => {
    // Handle form submission logic here
    console.log("Saving communication:", {
      communicationId: communication.id,
      patientId,
      title: communicationTitle,
      details: communicationDetails,
    });

    // Navigate back to communications list
    router.push(`/communication/${patientId}`);
  };

  return (
    <div className=" bg-white rounded-md flex flex-col gap-6">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          {
            label: `${patientName}'s Dashboard`,
            href: `/patient/${patientId}`,
          },
          {
            label: "Communication",
            href: `/communication/${patientId}`,
          },
          {
            label: `${communication.date}, ${communication.time}`,
            active: true,
          },
        ]}
      />

      {/* View/Edit Communication Section */}
      <CollapsibleSection
        title={mode === "edit" ? "Edit Communication" : "View Communication"}
      >
        <div className="flex flex-col gap-0.5">
          {mode === "edit" ? (
            isEditingTitle ? (
              <Input
                value={communicationTitle}
                onChange={(e) => setCommunicationTitle(e.target.value)}
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
                {communicationTitle}
              </div>
            )
          ) : (
            <div className="text-base font-semibold text-zinc-900 font-poppins">
              {communication.details.length > 50
                ? communication.details.substring(0, 50).trim() + "..."
                : communication.details}
            </div>
          )}
          <div className="flex gap-6">
            <span className="text-sm font-normal text-neutral-400 font-poppins">
              {communication.date}
            </span>
            <span className="text-sm font-normal text-neutral-400 font-poppins">
              {communication.time}
            </span>
          </div>
        </div>
      </CollapsibleSection>

      {/* Communication Details Section */}
      <CollapsibleSection title="Communication Details">
        {mode === "edit" ? (
          <div className="flex flex-col gap-3">
            <Textarea
              placeholder="Enter communication details here"
              value={communicationDetails}
              onChange={(e) => setCommunicationDetails(e.target.value)}
              className="min-h-[400px] flex-1"
            />
          </div>
        ) : (
          <div className="px-2.5 py-[5px] bg-sky-50 rounded-[3px] border border-neutral-400 flex justify-start items-start gap-2.5 min-h-[400px]">
            <div className="flex-1 text-zinc-900 text-sm font-normal font-poppins whitespace-pre-line">
              {communication.details}
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
