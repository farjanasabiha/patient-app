"use client";

import ProfileForm, {
  ProfileFormData,
} from "@/components/Common/Forms/ProfileForm";

export default function PlanOfCareProfile() {
  const handleFormChange = (data: ProfileFormData) => {
    // Process form data if needed
    console.log("Plan of Care form data updated:", data);
  };

  return (
    <div className="mx-auto px-[1px]">
      {/* Include all sections for Plan of Care */}
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
