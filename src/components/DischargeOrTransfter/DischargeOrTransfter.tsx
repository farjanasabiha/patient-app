import React from "react";

import ProfileForm, {
  ProfileFormData,
} from "@/components/Common/Forms/ProfileForm";

const DischargeOrTransfter = () => {
  // Handle form data changes
  const handleFormChange = (data: ProfileFormData) => {
    // Process form data if needed
    console.log("Discharge/Transfer form data updated:", data);
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
};

export default DischargeOrTransfter;
