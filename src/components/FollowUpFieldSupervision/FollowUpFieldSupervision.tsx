"use client";

import { FC } from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "@/components/ui/select";

const FollowUpFieldSupervision: FC = () => {
  // Add state management for form data
  const [formData, setFormData] = useState({
    state: "",
    dateOfEvaluation: undefined as Date | undefined,
    dateOfBirth: undefined as Date | undefined,
    // Add other form fields as needed
  });

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-3 gap-10">
        {/* Initial Field Supervision Section */}
        <CollapsibleSection title="Follow Up Field Supervision">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-3 px-3">
            <div className="flex flex-col gap-0.5 md:justify-self-start">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Date of Evaluation
              </FormLabel>
              <DatePicker
                date={formData.dateOfEvaluation}
                setDate={(date) =>
                  setFormData({ ...formData, dateOfEvaluation: date })
                }
                placeholder="MM/DD/YYYY"
              />
            </div>

            <div className="flex flex-col gap-0.5 md:justify-self-end">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Method of Contact
              </FormLabel>
              <RadioGroup>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="home-visit" id="home-visit" />
                  <FormLabel
                    htmlFor="home-visit"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Home Visit
                  </FormLabel>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="telephone" id="telephone" />
                  <FormLabel
                    htmlFor="telephone"
                    className="text-sm font-normal text-[#1C1C1E]"
                  >
                    Telephone
                  </FormLabel>
                </div>
              </RadioGroup>
            </div>

          </div>
        </CollapsibleSection>

        {/* Homecare Worker Information Section */}
        <CollapsibleSection title="Homecare Worker Information">
          <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-between gap-3 px-3">
            <div className="flex flex-col gap-0.5 md:justify-self-start">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Homecare Worker Name
              </FormLabel>
              <Input placeholder="Homecare Worker Full Name" />
            </div>

            <div className="flex flex-col gap-0.5 md:justify-self-end">
              <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                Homecare Worker Phone Number
              </FormLabel>
              <Input placeholder="123 456 7890" />
            </div>

          </div>
        </CollapsibleSection>

        {/* Patient Information Section */}
        <CollapsibleSection title="Patient Information">
          <div className="space-y-3 px-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  MRN
                </FormLabel>
                <Input placeholder="XX-XX1234567" className="bg-sky-50" />
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Date of Birth
                </FormLabel>
                <DatePicker
                  date={formData.dateOfBirth}
                  setDate={(date) =>
                    setFormData({ ...formData, dateOfBirth: date })
                  }
                  placeholder="MM/DD/YYYY"
                  className="bg-sky-50"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  First Name
                </FormLabel>
                <Input placeholder="First Name" className="bg-sky-50" />
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Last Name
                </FormLabel>
                <Input placeholder="Last Name" className="bg-sky-50" />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Street Address Line 1
                </FormLabel>
                <Input
                  placeholder="Street Address Line 1"
                  className="bg-sky-50"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Street Address Line 2
                </FormLabel>
                <Input
                  placeholder="Street Address Line 2"
                  className="bg-sky-50"
                />
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  City
                </FormLabel>
                <Input placeholder="City" className="bg-sky-50" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  State
                </FormLabel>
                <Select
                  value={formData.state}
                  onValueChange={(value) =>
                    setFormData({ ...formData, state: value })
                  }
                >
                  <SelectTrigger className="bg-sky-50">
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ga">Georgia</SelectItem>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="nj">New Jersey</SelectItem>
                    <SelectItem value="pa">Pennsylvania</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  ZIP Code
                </FormLabel>
                <Input placeholder="ZIP Code" className="bg-sky-50" />
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Cell Phone Number
                </FormLabel>
                <Input placeholder="123 456 7890" className="bg-sky-50" />
              </div>

              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Email Address
                </FormLabel>
                <Input
                  placeholder="demoemail@gmail.com"
                  className="bg-sky-50"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default FollowUpFieldSupervision;
