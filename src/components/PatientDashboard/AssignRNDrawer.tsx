"use client";

import { Drawer } from "@/components/ui/drawer";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { PrimaryButton } from "@/components/ui/primary-button";
import type { ActivePatient } from "@/data/ActivePatientData";

interface AssignRNDrawerProps {
  open: boolean;
  onClose: () => void;
  patient?: ActivePatient;
}

export function AssignRNDrawer({
  open,
  onClose,
  patient,
}: AssignRNDrawerProps) {
  const [activeTab, setActiveTab] = useState<"current" | "previous">("current");
  const [selectedRN, setSelectedRN] = useState("");
  const [assignDate, setAssignDate] = useState<Date | undefined>(undefined);

  // Get current date and previous year date
  const currentDate = new Date();
  const previousDate = new Date();
  previousDate.setFullYear(currentDate.getFullYear() - 1);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const rnOptions = [
    "Sarah Johnson, RN",
    "Michael Chen, RN",
    "Emily Davis, RN",
    "James Wilson, RN",
  ];

  const getInitials = (fullName: string) => {
    if (!fullName) return "--";
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] || "";
    const last = parts.length > 1 ? parts[parts.length - 1]?.[0] || "" : "";
    return (first + last).toUpperCase();
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="w-full h-[calc(100vh-100px)] bg-white flex flex-col justify-start items-start gap-6">
        {/* Header Section */}
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <div className="w-full flex justify-start items-center gap-6">
            <div className="flex-1 justify-center text-zinc-900 text-2xl font-bold">
              Assign RN
            </div>
          </div>
          <div className="w-full h-0 border-t border-stone-300" />

          {/* Patient Info Section */}
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="flex justify-start items-start gap-3">
              <div className="px-4 py-4 bg-purple-200 rounded-[35.50px] flex justify-center items-center gap-3">
                <div className="justify-center text-purple-700 text-2xl font-semibold">
                  {getInitials(patient?.name || "")}
                </div>
              </div>
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div className="justify-center text-zinc-900 text-base font-semibold">
                  {patient?.name || "--"}
                </div>
                <div className="justify-center text-neutral-400 text-sm font-normal">
                  {patient?.phoneNumber || "--"}
                </div>
                <div className="justify-center text-neutral-400 text-sm font-normal">
                  {patient?.email || "--"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assignment Form Section */}
        <div className="w-full flex-1 flex flex-col justify-start items-start">
          <div className="w-full flex justify-start items-center gap-1">
            <button
              onClick={() => setActiveTab("current")}
              className={`px-2 py-1 rounded-tl-md rounded-tr-md flex justify-center items-center gap-2.5 transition-colors ${
                activeTab === "current" ? "bg-sky-100" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`justify-center text-sm font-semibold ${
                  activeTab === "current"
                    ? "text-zinc-900 underline"
                    : "text-neutral-400"
                }`}
              >
                Current {formatDate(currentDate)}
              </div>
            </button>
            <button
              onClick={() => setActiveTab("previous")}
              className={`px-2 py-1 rounded-tl-md rounded-tr-md flex justify-center items-center gap-2.5 transition-colors ${
                activeTab === "previous" ? "bg-sky-100" : "hover:bg-gray-50"
              }`}
            >
              <div
                className={`justify-center text-sm font-semibold ${
                  activeTab === "previous"
                    ? "text-zinc-900 underline"
                    : "text-neutral-400"
                }`}
              >
                {formatDate(previousDate)}
              </div>
            </button>
          </div>
          <div className="w-full p-3 bg-sky-100 rounded-tr-md rounded-bl-md rounded-br-md flex flex-col justify-start items-start gap-3">
            {activeTab === "current" ? (
              // Current Tab - Interactive Form with UI Components
              <div className="w-full p-3 bg-white rounded-md flex justify-start items-start gap-6">
                <div className="flex-1 flex flex-col justify-center items-start gap-6">
                  <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div className="w-full flex justify-start items-start gap-6">
                      <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                        <label className="w-full justify-start text-neutral-400 text-xs font-semibold">
                          Assign RN
                        </label>
                        <Select
                          value={selectedRN}
                          onValueChange={setSelectedRN}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {rnOptions.map((rn, index) => (
                              <SelectItem key={index} value={rn}>
                                {rn}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                        <label className="w-full justify-start text-neutral-400 text-xs font-semibold">
                          Assign for
                        </label>
                        <DatePicker
                          date={assignDate}
                          setDate={setAssignDate}
                          placeholder="MM/DD/YYYY"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // Previous Tab - Same form but with previous values
              <div className="w-full p-3 bg-white rounded-md flex justify-start items-start gap-6">
                <div className="flex-1 flex flex-col justify-center items-start gap-6">
                  <div className="w-full flex flex-col justify-start items-start gap-3">
                    <div className="w-full flex justify-start items-start gap-6">
                      <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                        <label className="w-full justify-start text-neutral-400 text-xs font-semibold">
                          Assign RN
                        </label>
                        <Select
                          value="Sarah Johnson, RN"
                          onValueChange={() => {}}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            {rnOptions.map((rn, index) => (
                              <SelectItem key={index} value={rn}>
                                {rn}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                        <label className="w-full justify-start text-neutral-400 text-xs font-semibold">
                          Assign for
                        </label>
                        <DatePicker
                          date={new Date("2024-01-15")}
                          setDate={() => {}}
                          placeholder="MM/DD/YYYY"
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer pinned to bottom */}
        <div className="w-full mt-auto">
          {/* Bottom Divider */}
          <div className="w-full h-0 border-t border-stone-300" />

          {/* Action Buttons */}
          <div className="w-full flex justify-end items-end gap-6 pt-4">
            <PrimaryButton
              variant="outline"
              onClick={onClose}
              className="px-5 py-[5px]"
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton variant="primary" className="px-5 py-[5px]">
              Save
            </PrimaryButton>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
