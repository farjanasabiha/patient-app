"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { SignaturePad } from "@/components/ui/signature-pad";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export default function SignatureDate() {
  const [consentChecks, setConsentChecks] = useState({
    informedConsent: false,
    termsAgreement: false,
    documentationDiscussed: false,
    nonMedicalServices: false,
    serviceReview: false,
  });

  const [officeSignDate, setOfficeSignDate] = useState<Date>();
  const [patientSignDate, setPatientSignDate] = useState<Date>();
  const [officeSignature, setOfficeSignature] = useState<string | null>(null);
  const [patientSignature, setPatientSignature] = useState<string | null>(null);

  const handleConsentChange = (key: string, checked: boolean) => {
    setConsentChecks((prev) => ({ ...prev, [key]: checked }));
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="">
        <div className="">
          {/* Contract Text */}
          <div className="mb-6">
            <p className="text-[#1c1c1e] text-sm font-semibold leading-relaxed mb-4">
              This Patient Contract including the Rights and Responsibilities
              form has been reviewed with, and a copy given to, the named
              Patient/Patient&apos;s representative.
            </p>
            <p className="text-[#1c1c1e] text-sm leading-relaxed">
              In witness whereof, the undersigned, with the intent and authority
              to legally bind the respective party, have caused this Agreement
              to be duly executed and effective as of the Effective Date.
            </p>
          </div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Signature & Date Section */}
          <CollapsibleSection title="Signature & Date" className="mb-6">
            <div className="mt-6 space-y-3">
              {/* Office Representative Section */}
              <div className="">
                {/* Signature Field - Centered */}
                <div className="col-start-2 flex flex-col gap-0.5">
                  <SignaturePad
                    label="Office Representative Signature"
                    value={officeSignature}
                    onChange={setOfficeSignature}
                    height={96}
                    placeholder="Sign here"
                    clearButtonText="Clear"
                    clearButtonVariant="outline"
                    clearButtonSize="sm"
                    className=""
                  />
                </div>
              </div>

                <div className="col-start-2 flex flex-col gap-0.5">
                  <FormLabel>Sign Date</FormLabel>
                  <DatePicker
                    date={officeSignDate}
                    setDate={setOfficeSignDate}
                  />
                </div>

                <div className="col-start-2 flex flex-col gap-0.5">
                  <FormLabel>Title of Office Representative</FormLabel>
                  <Input placeholder="Title" />
                </div>
            </div>
          </CollapsibleSection>

          {/* Patient Signature & Date Section */}
          <CollapsibleSection title="Patient Signature & Date" className="mb-8">
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="informed-consent"
                  checked={consentChecks.informedConsent}
                  onCheckedChange={(checked) =>
                    handleConsentChange("informedConsent", checked as boolean)
                  }
                  className="mt-1"
                />
                <FormLabel
                  htmlFor="informed-consent"
                  className="text-[#1C1C1E] font-normal text-[14px] leading-[21px]"
                >
                  I have been given enough, relative information to be able to
                  give my informed consent to the terms and conditions of this
                  agreement.
                </FormLabel>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms-agreement"
                  checked={consentChecks.termsAgreement}
                  onCheckedChange={(checked) =>
                    handleConsentChange("termsAgreement", checked as boolean)
                  }
                  className="mt-1"
                />
                <FormLabel
                  htmlFor="terms-agreement"
                  className="text-[#1C1C1E] font-normal text-[14px] leading-[21px]"
                >
                  I have read, understand and are in agreement with the terms
                  and conditions of this Agreement.
                </FormLabel>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="documentation-discussed"
                  checked={consentChecks.documentationDiscussed}
                  onCheckedChange={(checked) =>
                    handleConsentChange(
                      "documentationDiscussed",
                      checked as boolean
                    )
                  }
                  className="mt-1"
                />
                <FormLabel
                  htmlFor="documentation-discussed"
                  className="text-[#1C1C1E] font-normal text-[14px] leading-[21px]"
                >
                  I acknowledge that the information and documentation as noted
                  above, has been discussed with me and I will be provided with
                  a copy.
                </FormLabel>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="non-medical-services"
                  checked={consentChecks.nonMedicalServices}
                  onCheckedChange={(checked) =>
                    handleConsentChange(
                      "nonMedicalServices",
                      checked as boolean
                    )
                  }
                  className="mt-1"
                />
                <FormLabel
                  htmlFor="non-medical-services"
                  className="text-[#1C1C1E] font-normal text-[14px] leading-[21px]"
                >
                  I consent to have the Non-Medical Home Services as requested
                  and recorded in this Service Plan.
                </FormLabel>
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="service-review"
                  checked={consentChecks.serviceReview}
                  onCheckedChange={(checked) =>
                    handleConsentChange("serviceReview", checked as boolean)
                  }
                  className="mt-1"
                />
                <FormLabel
                  htmlFor="service-review"
                  className="flex flex-col items-start p-0 gap-2 w-[921px] h-[54px] flex-none order-0 flex-grow-1"
                >
                  <div className="flex flex-row items-center p-0 gap-[10px] w-[921px] h-[31px] flex-none order-0 self-stretch flex-grow-0">
                    <span className="w-[653px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#1C1C1E] font-[feature-settings:'case' on] flex-none order-0 flex-grow-0">
                      I understand that my service requests/needs will be
                      reviewed by the Supervisor at least every
                    </span>
                    <div className="w-[40px] h-[32px]">
                      <div className="h-full box-border flex justify-center items-center border border-[#8E8E93] rounded-[3px]">
                        <Input
                          className="w-full h-full font-poppins font-normal text-[14px] leading-[21px] text-[#1C1C1E] text-center p-0 border-0"
                          defaultValue="4"
                        />
                      </div>
                    </div>
                    <span className="w-[161px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#1C1C1E] font-[feature-settings:'case' on] flex-none order-2 flex-grow-0">
                      months, or as required,
                    </span>
                  </div>
                  <span className="w-[921px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] text-[#1C1C1E] font-[feature-settings:'case' on] flex-none order-1 self-stretch flex-grow-0">
                    and that the service(s) may be changed according to the
                    patient needs as prescribed by the Patient&apos;s Physician.
                  </span>
                </FormLabel>
              </div>

              <div className="mt-6 space-y-6">
                {/* Patient Signature Field - Centered */}
                <div className="">
                  <div className="col-start-2 flex flex-col gap-0.5">
                    <SignaturePad
                      label="Patient/Patient's Representative Signature"
                      value={patientSignature}
                      onChange={setPatientSignature}
                      height={96}
                      placeholder="Sign here"
                      clearButtonText="Clear"
                      clearButtonVariant="outline"
                      clearButtonSize="sm"
                      className=""
                    />
                  </div>
                </div>

                {/* Patient Date Field - Centered */}
                <div className="">
                  <div className="col-start-2 flex flex-col gap-0.5">
                    <FormLabel>Patient Sign Date</FormLabel>
                    <DatePicker
                      date={patientSignDate}
                      setDate={setPatientSignDate}
                    />
                  </div>
                </div>
              </div>
            </div>
          </CollapsibleSection>
</div>
        </div>
      </div>
    </div>
  );
}
