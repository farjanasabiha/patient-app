import React, { useState } from "react";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const SummaryofCare = () => {
  const [effectiveDate, setEffectiveDate] = useState<Date | undefined>();
  const [dischargeReason, setDischargeReason] = useState<string>("");
  const [transferredTo, setTransferredTo] = useState<string>("");
  const [other, setOther] = useState<string>("");
  const [summaryOfCare, setSummaryOfCare] = useState<string>("");
  const [summaryOfProgress, setSummaryOfProgress] = useState<string>("");
  const [patientStatus, setPatientStatus] = useState<string>("");
  const [familyAbility, setFamilyAbility] = useState<string>(""); 

  return (
    <div className="w-full bg-white rounded-md flex flex-col space-y-4 sm:space-y-6">
      <CollapsibleSection title="Summary of Care">
        <div className="w-full flex flex-col space-y-3 sm:space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="flex flex-col gap-2">
              <FormLabel>Effective Date</FormLabel>
              <DatePicker date={effectiveDate} setDate={setEffectiveDate} />
            </div>
            <div className="md:col-span-2"></div>
          </div>
          <div className="w-full text-center text-zinc-900 text-xs sm:text-sm font-normal font-poppins px-2">
            Please be advised that, effective [insert date], the patient will be
            discharged from the services provided by Axzons Health System Corp.
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-4 sm:gap-6">
            <div className="w-full lg:w-72 flex flex-col gap-2">
              <FormLabel>Discharge Reason</FormLabel>
              <RadioGroup
                value={dischargeReason}
                onValueChange={setDischargeReason}
                className="space-y-2 sm:space-y-3"
              >
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="hospital" id="hospital" />
                  <label
                    htmlFor="hospital"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Hospital
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="physician" id="physician" />
                  <label
                    htmlFor="physician"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Physician
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem
                    value="self_family_friends"
                    id="self_family_friends"
                  />
                  <label
                    htmlFor="self_family_friends"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Self/Family/Friends
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="nursing_home" id="nursing_home" />
                  <label
                    htmlFor="nursing_home"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Nursing Home
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="chha" id="chha" />
                  <label
                    htmlFor="chha"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    CHHA (Certified Home Health Agency)
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="lthhcp" id="lthhcp" />
                  <label
                    htmlFor="lthhcp"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    LTHHCP (Long Term Home)
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="lhcsa" id="lhcsa" />
                  <label
                    htmlFor="lhcsa"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    LHCSA (Another Agency)
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="hospice" id="hospice" />
                  <label
                    htmlFor="hospice"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Hospice
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem
                    value="adult_care_facility"
                    id="adult_care_facility"
                  />
                  <label
                    htmlFor="adult_care_facility"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Adult Care Facility
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem
                    value="local_social_service"
                    id="local_social_service"
                  />
                  <label
                    htmlFor="local_social_service"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Local Social Service District
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="mltc_mcos" id="mltc_mcos" />
                  <label
                    htmlFor="mltc_mcos"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    MLTC/MCOs
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem
                    value="local_health_department"
                    id="local_health_department"
                  />
                  <label
                    htmlFor="local_health_department"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Local Health Department
                  </label>
                </div>
                <div className="w-full flex items-center gap-2">
                  <RadioGroupItem value="death" id="death" />
                  <label
                    htmlFor="death"
                    className="flex-1 text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                  >
                    Death
                  </label>
                </div>
                <div className="w-full flex items-start gap-2">
                  <RadioGroupItem value="transferred_to" id="transferred_to" />
                  <div className="flex-1 flex flex-col gap-0.5">
                    <label
                      htmlFor="transferred_to"
                      className="w-full text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                    >
                      Transferred to
                    </label>
                    {dischargeReason === "transferred_to" && (
                      <Input
                        value={transferredTo}
                        onChange={(e) => setTransferredTo(e.target.value)}
                        placeholder="Enter Text"
                      />
                    )}
                  </div>
                </div>
                <div className="w-full flex items-start gap-2">
                  <RadioGroupItem value="other" id="other" />
                  <div className="flex-1 flex flex-col gap-0.5">
                    <label
                      htmlFor="other"
                      className="w-full text-zinc-900 text-sm font-normal font-poppins cursor-pointer"
                    >
                      Other
                    </label>
                    {dischargeReason === "other" && (
                      <Input
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                        placeholder="Enter Text"
                      />
                    )}
                  </div>
                </div>
              </RadioGroup>
            </div>
            <div className="flex-1 flex flex-col gap-3 sm:gap-4">
              <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <FormLabel>Summary of care provided</FormLabel>
                  <Textarea
                    value={summaryOfCare}
                    onChange={(e) => setSummaryOfCare(e.target.value)}
                    placeholder="Enter Text"
                    className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[250px] resize-none"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <FormLabel>Summary of Patient Progress</FormLabel>
                  <Textarea
                    value={summaryOfProgress}
                    onChange={(e) => setSummaryOfProgress(e.target.value)}
                    placeholder="Enter Text"
                    className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[250px] resize-none"
                  />
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row gap-4 sm:gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <FormLabel>
                    Patient status and the description of any remaining needs
                    for patient care and supportive services upon discharge
                  </FormLabel>
                  <Textarea
                    value={patientStatus}
                    onChange={(e) => setPatientStatus(e.target.value)}
                    placeholder="Enter Text"
                    className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[250px] resize-none"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <FormLabel>
                    Patient or family&apos;s ability to self-manage in relation
                    to any remaining problems, and recommendations and referral
                    for any followup care If applicable:
                  </FormLabel>
                  <Textarea
                    value={familyAbility}
                    onChange={(e) => setFamilyAbility(e.target.value)}
                    placeholder="Enter Text"
                    className="w-full min-h-[150px] md:min-h-[200px] lg:min-h-[250px] resize-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default SummaryofCare;
