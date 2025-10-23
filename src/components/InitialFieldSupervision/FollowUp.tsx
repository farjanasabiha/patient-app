"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DatePicker } from "@/components/ui/date-picker";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

const FollowUp = () => {
  const [formData, setFormData] = useState({
    clientFollowUp: "",
    clientFollowUpDate: undefined as Date | undefined,
    workerFollowUp: "",
    workerFollowUpDate: undefined as Date | undefined,
    routineFollowUpDate: undefined as Date | undefined,
    contactMethod: "",
    rnSignDate: undefined as Date | undefined,
    homecareWorkerSignDate: undefined as Date | undefined,
  });

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6">
        {/* Follow Up Section */}
        <CollapsibleSection title="Follow Up">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Client Requirements Follow-up */}
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Follow-up to assess client requirements needed. If
                  &quot;Yes&quot;, note date:
                </FormLabel>
                <RadioGroup
                  value={formData.clientFollowUp}
                  onValueChange={(value) =>
                    setFormData({ ...formData, clientFollowUp: value })
                  }
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <RadioGroupItem value="yes" id="client-followup-yes" />
                      <div className="flex flex-col gap-0.5 flex-1">
                        <FormLabel
                          htmlFor="client-followup-yes"
                          className="text-sm font-normal text-[#1C1C1E]"
                        >
                          Yes
                        </FormLabel>
                        <DatePicker
                          date={formData.clientFollowUpDate}
                          setDate={(date) =>
                            setFormData({
                              ...formData,
                              clientFollowUpDate: date,
                            })
                          }
                          placeholder="MM/DD/YYYY"
                          className={
                            formData.clientFollowUp !== "yes"
                              ? "pointer-events-none opacity-50"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="client-followup-no" />
                      <FormLabel
                        htmlFor="client-followup-no"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        No
                      </FormLabel>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              {/* Worker Competency Follow-up */}
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Follow-up to assess Worker&apos;s competency. If
                  &quot;Yes&quot;, note date:
                </FormLabel>
                <RadioGroup
                  value={formData.workerFollowUp}
                  onValueChange={(value) =>
                    setFormData({ ...formData, workerFollowUp: value })
                  }
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-start gap-2">
                      <RadioGroupItem value="yes" id="worker-followup-yes" />
                      <div className="flex flex-col gap-0.5 flex-1">
                        <FormLabel
                          htmlFor="worker-followup-yes"
                          className="text-sm font-normal text-[#1C1C1E]"
                        >
                          Yes
                        </FormLabel>
                        <DatePicker
                          date={formData.workerFollowUpDate}
                          setDate={(date) =>
                            setFormData({
                              ...formData,
                              workerFollowUpDate: date,
                            })
                          }
                          placeholder="MM/DD/YYYY"
                          className={
                            formData.workerFollowUp !== "yes"
                              ? "pointer-events-none opacity-50"
                              : undefined
                          }
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="no" id="worker-followup-no" />
                      <FormLabel
                        htmlFor="worker-followup-no"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        No
                      </FormLabel>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Routine Follow-up */}
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Routine follow up to be conducted
                </FormLabel>
                <DatePicker
                  date={formData.routineFollowUpDate}
                  setDate={(date) =>
                    setFormData({ ...formData, routineFollowUpDate: date })
                  }
                  placeholder="MM/DD/YYYY"
                />
              </div>

              {/* Method of Contact */}
              <div className="flex flex-col gap-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Method of Contact
                </FormLabel>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) =>
                    setFormData({ ...formData, contactMethod: value })
                  }
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="home-visit"
                        id="contact-home-visit"
                      />
                      <FormLabel
                        htmlFor="contact-home-visit"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        Home Visit
                      </FormLabel>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem
                        value="telephone"
                        id="contact-telephone"
                      />
                      <FormLabel
                        htmlFor="contact-telephone"
                        className="text-sm font-normal text-[#1C1C1E]"
                      >
                        Telephone
                      </FormLabel>
                    </div>
                  </div>
                </RadioGroup>
              </div>

              <div></div>
            </div>
          </div>
        </CollapsibleSection>

        {/* Sign & Date Section */}
        <CollapsibleSection title="Sign & Date">
          <div className="flex justify-center gap-6">
            {/* RN Signature */}
            <div className="flex flex-col gap-3 w-[30%]">
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                    RN Signature
                  </FormLabel>
                  <div className="h-24 border border-[#8E8E93] rounded-[3px]"></div>
                </div>
                <button className="px-5 py-1.5 bg-[#C7C7CC] text-white rounded-md font-semibold">
                  Clear
                </button>
              </div>

              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  RN Sign Date
                </FormLabel>
                <DatePicker
                  date={formData.rnSignDate}
                  setDate={(date) =>
                    setFormData({ ...formData, rnSignDate: date })
                  }
                  placeholder="MM/DD/YYYY"
                />
              </div>

              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Name of RN
                </FormLabel>
                <Input placeholder="RN Name" />
              </div>

              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Position
                </FormLabel>
                <Input placeholder="RN Position" />
              </div>
            </div>

            {/* Homecare Worker Signature */}
            <div className="flex flex-col gap-3 w-[30%]">
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                    Signature of Homecare Worker
                  </FormLabel>
                  <div className="h-24 border border-[#8E8E93] rounded-[3px]"></div>
                </div>
                <button className="px-5 py-1.5 bg-[#C7C7CC] text-white rounded-md font-semibold">
                  Clear
                </button>
              </div>

              <div className="space-y-0.5">
                <FormLabel className="text-xs font-semibold text-[#8E8E93]">
                  Homecare Worker Sign Date
                </FormLabel>
                <DatePicker
                  date={formData.homecareWorkerSignDate}
                  setDate={(date) =>
                    setFormData({ ...formData, homecareWorkerSignDate: date })
                  }
                  placeholder="MM/DD/YYYY"
                />
              </div>
            </div>
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default FollowUp;
