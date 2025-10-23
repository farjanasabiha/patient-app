"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { DatePicker } from "@/components/ui/date-picker";
import { PrimaryButton } from "@/components/ui/primary-button";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { FormLabel } from "@/components/ui/label";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";

export function ActivePatientForm() {
  const [effectiveDate, setEffectiveDate] = useState<Date>();
  const [dateOfBirth, setDateOfBirth] = useState<Date>();

  return (
    <div className="flex flex-col gap-6">
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          { label: "Add New Patient", active: true },
        ]}
      />

      <div className="flex flex-col bg-white rounded-[6px] gap-6 p-[0.7px]">
        <CollapsibleSection title="Patient Demographics">
          {/* Form Grid */}
          <div className="grid grid-cols-3 gap-6">
            {/* Effective Date */}
            <div className="flex flex-col gap-0.5">
              <FormLabel>Effective Date</FormLabel>
              <DatePicker date={effectiveDate} setDate={setEffectiveDate} />
            </div>

            {/* MRN */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>MRN</FormLabel>
              <Input placeholder="XX-XX1234567" />
            </div>

            {/* Empty space for grid alignment */}
            <div />

            {/* Name Fields */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>First Name</FormLabel>
              <Input placeholder="First Name" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel>Middle Name</FormLabel>
              <Input placeholder="Middle Name" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel required>Last Name</FormLabel>
              <Input placeholder="Last Name" />
            </div>

            {/* Gender, DOB, SSN */}
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

            {/* Date of Birth */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Date of Birth</FormLabel>
              <DatePicker date={dateOfBirth} setDate={setDateOfBirth} />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel required>Social Security Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>

            {/* Insurance Information */}
            <div className="flex flex-col gap-0.5">
              <FormLabel>Insurance Name</FormLabel>
              <Input placeholder="Insurance Name" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel>Insurance ID Number</FormLabel>
              <Input placeholder="Insurance ID Number" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel>Medicaid ID Number</FormLabel>
              <Input placeholder="Medicaid ID Number" />
            </div>

            {/* Address Fields */}
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
              <FormLabel required>State</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select State" />
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
              <Input placeholder="ZIP Code" />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Language Spoken</FormLabel>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Language Spoken" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">English</SelectItem>
                  <SelectItem value="nj">Spanish</SelectItem>
                  <SelectItem value="pa">French</SelectItem>
                  <SelectItem value="ga">German</SelectItem>
                  <SelectItem value="al">Italian</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-0.5">
              <FormLabel required>Cell Phone Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel>Home Phone Number</FormLabel>
              <Input placeholder="123 456 7890" />
            </div>

            <div className="flex flex-col gap-0.5">
              <FormLabel required>Email Address</FormLabel>
              <Input placeholder="demoemail@gmail.com" type="email" />
            </div>
          </div>
        </CollapsibleSection>

        {/* Divider */}
        <div className="h-px bg-[#C7C7CC] mt-14" />

        {/* Save Button */}
        <div className="flex justify-end">
          <PrimaryButton variant="primary" className="w-[301px]">
            Save
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}
