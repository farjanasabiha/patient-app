"use client";

import { FC } from "react";
import { FormLabel } from "@/components/ui/label";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { Rating } from "@/components/ui/rating";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";

export interface FormData {
  // Managing Daily Activities
  bathing: number;
  bedMobility: number;
  walking: number;

  // Managing Pain & Treatment
  breathing: number;
  woundHealing: number;

  // Patient Satisfaction
  teamDiscussion: number;
  overallCare: number;
  professionalCare: number;
  communication: number;
  recommendation: number;

  // Preventing Harm
  diabetesCare: number;
  medicationManagement: number;
  timelyCare: number;
  depressionCheck: number;
  fallRisk: number;

  // Preventive Care
  fluShot: number;
  pneumoniaShot: number;
  medicationEducation: number;

  // Hospital Care
  hospitalAdmission: number;
  emergencyRoom: number;
}

export interface DemographicData {
  todaysDate: Date | undefined;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  dob: Date | undefined;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  cellPhone: string;
  homePhone: string;
  email: string;
}

interface Props {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  demographic: DemographicData;
  setDemographic: React.Dispatch<React.SetStateAction<DemographicData>>;
}

const HomeHealthQualityMeasure: FC<Props> = ({
  formData,
  setFormData,
  demographic,
  setDemographic,
}) => {
  const handleRatingChange = (field: keyof FormData, value: number) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // Helper component for rating questions
  const RatingQuestion = ({
    field,
    label,
  }: {
    field: keyof FormData;
    label: string;
  }) => (
    <div className="flex-1 flex flex-col gap-0.5">
      <FormLabel className="text-xs font-semibold text-neutral-400">
        {label}
      </FormLabel>
      <Rating
        value={formData[field]}
        onChange={(value) => handleRatingChange(field, value)}
      />
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Demographic Profile Section */}
      <CollapsibleSection title="Demographic Profile" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
          {/* Today's Date */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Today&apos;s Date</FormLabel>
            <DatePicker
              date={demographic.todaysDate}
              setDate={(date) =>
                setDemographic((d) => ({ ...d, todaysDate: date }))
              }
              className="w-full"
            />
          </div>
          <div></div>
          <div></div>

          {/* Name fields */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>First Name</FormLabel>
            <Input
              placeholder="First Name"
              value={demographic.firstName}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, firstName: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Middle Name</FormLabel>
            <Input
              placeholder="Middle Name"
              value={demographic.middleName}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, middleName: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Last Name</FormLabel>
            <Input
              placeholder="Last Name"
              value={demographic.lastName}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, lastName: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>

          {/* Gender, DOB */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Gender</FormLabel>
            <Select
              value={demographic.gender}
              onValueChange={(v) =>
                setDemographic((d) => ({ ...d, gender: v }))
              }
            >
              <SelectTrigger className="w-full bg-sky-50">
                <SelectValue placeholder="Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Date of Birth</FormLabel>
            <DatePicker
              date={demographic.dob}
              setDate={(date) => setDemographic((d) => ({ ...d, dob: date }))}
              className="w-full bg-sky-50"
            />
          </div>
          <div></div>

          {/* Address fields */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 1</FormLabel>
            <Input
              placeholder="Street Address Line 1"
              value={demographic.address1}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, address1: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Street Address Line 2</FormLabel>
            <Input
              placeholder="Street Address Line 2"
              value={demographic.address2}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, address2: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>City</FormLabel>
            <Input
              placeholder="City"
              value={demographic.city}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, city: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>

          {/* State, ZIP */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>State</FormLabel>
            <Select
              value={demographic.state}
              onValueChange={(v) => setDemographic((d) => ({ ...d, state: v }))}
            >
              <SelectTrigger className="w-full bg-sky-50">
                <SelectValue placeholder="State" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="NY">NY</SelectItem>
                <SelectItem value="NJ">NJ</SelectItem>
                <SelectItem value="CA">CA</SelectItem>
                <SelectItem value="TX">TX</SelectItem>
                <SelectItem value="FL">FL</SelectItem>
                {/* Add more states as needed */}
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>ZIP Code</FormLabel>
            <Input
              placeholder="ZIP Code"
              value={demographic.zip}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, zip: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div></div>

          {/* Phone and Email */}
          <div className="flex flex-col gap-0.5">
            <FormLabel>Cell Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={demographic.cellPhone}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, cellPhone: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Home Phone Number</FormLabel>
            <Input
              placeholder="123 456 7890"
              value={demographic.homePhone}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, homePhone: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <FormLabel>Email Address</FormLabel>
            <Input
              placeholder="demoemail@gmail.com"
              value={demographic.email}
              onChange={(e) =>
                setDemographic((d) => ({ ...d, email: e.target.value }))
              }
              className="bg-sky-50"
            />
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Managing Daily Activities">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RatingQuestion
            field="bathing"
            label="Did the patient get better at bathing?"
          />
          <RatingQuestion
            field="bedMobility"
            label="Did the patient get better at getting in and out of bed?"
          />
          <RatingQuestion
            field="walking"
            label="Did the patient get better at walking or moving around?"
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Managing Pain & Treatment Symptoms">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RatingQuestion
            field="breathing"
            label="Did the patient's breathing improve?"
          />
          <RatingQuestion
            field="woundHealing"
            label="Did the patient's wounds improve or heal after an operation?"
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Patient Satisfaction">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RatingQuestion
              field="teamDiscussion"
              label="Did the home health team discuss medicines, pain, and home safety with patients?"
            />
            <RatingQuestion
              field="overallCare"
              label="How does the patient rate the overall care from the health agency?"
            />
            <RatingQuestion
              field="professionalCare"
              label="How often the home health team gave care in a professional way?"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RatingQuestion
              field="communication"
              label="How well did the home health team communicate with patients?"
            />
            <RatingQuestion
              field="recommendation"
              label="Would the patient recommend the home health agency to friends and family?"
            />
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Preventing Harm">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RatingQuestion
              field="diabetesCare"
              label="For patients with diabetes, did the home health team get doctor's orders, gave foot care, and taught patient about foot care?"
            />
            <RatingQuestion
              field="medicationManagement"
              label="Did the patient get better at taking their drugs correctly by mouth?"
            />
            <RatingQuestion
              field="timelyCare"
              label="Did the home health team begin the patient's care in a timely manner?"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RatingQuestion
              field="depressionCheck"
              label="Did the home health team check patient for depression?"
            />
            <RatingQuestion
              field="fallRisk"
              label="Did the home health team check patient's risk of falling?"
            />
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Preventive Care">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RatingQuestion
            field="fluShot"
            label="Did the home health team make sure that the patient has received a flu shot for the current flu season?"
          />
          <RatingQuestion
            field="pneumoniaShot"
            label="Did the home health team make sure that the patient has received a pneumococcal vaccine (pneumonia shot)?"
          />
          <RatingQuestion
            field="medicationEducation"
            label="Did the home health team teach patient (or their family caregivers) about their drugs?"
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Preventing Unplanned Hospital Care">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <RatingQuestion
            field="hospitalAdmission"
            label="Did you have to admit the patient to the hospital?"
          />
          <RatingQuestion
            field="emergencyRoom"
            label="Did the patient receiving home health care need any urgent, unplanned care in the hospital emergency room - without being admitted to the hospital?"
          />
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default HomeHealthQualityMeasure;