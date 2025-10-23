"use client";

import ProfileForm, {
  ProfileFormData,
} from "@/components/Common/Forms/ProfileForm";

export default function NursingAssessmentProfile() {
  // Handle form data changes
  const handleFormChange = (data: ProfileFormData) => {
    // Process form data if needed
    console.log("Nursing Assessment form data updated:", data);
  };

  return (
    <div className="mx-auto px-[1px]">
      {/* Use the reusable ProfileForm component */}
      <ProfileForm
        sections={[
          "demographics",
          "emergency",
          "diagnosis",
          "physician",
          "pharmacy",
        ]}
        onChange={handleFormChange}
        usePatientFromUrl={true}
      />
    </div>
  );
}
