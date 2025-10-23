"use client";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import SignaturePad from "@/components/ui/signature-pad";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";

const PatientAdmissionPacket = () => {
  const [ack, setAck] = useState({
    c1: false,
    c2: false,
    c3: false,
    c4: false,
    c5: false,
  });
  const [months, setMonths] = useState<string>("4");
  const [signDate, setSignDate] = useState<Date | undefined>(undefined);
  const [signature, setSignature] = useState<string | null>(null);

  const toggle = (key: keyof typeof ack) =>
    setAck((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className="w-full h-full flex flex-col">
      {/* PDF Viewer Section - Full Width */}
      <div className="flex-1 bg-gray-50 mt-6">
        <div className="h-full w-full">
          <iframe
            src="/Patient_Admission_Packet_Version1.9.pdf#toolbar=1&navpanes=1&scrollbar=1&view=FitH"
            width="100%"
            height="100%"
            className="border-0"
            title="Patient Admission Packet PDF"
            style={{ minHeight: "calc(100vh - 200px)" }}
          />
        </div>
      </div>

      {/* Acknowledgements, Signature and Date - Below PDF */}
      <div className="w-full bg-white border-t border-gray-200 py-6">
        <div className="w-full flex flex-col gap-4">
          {/* Checkboxes */}
          <div className="flex flex-col gap-3">
            <label className="flex items-start gap-3">
              <Checkbox checked={ack.c1} onCheckedChange={() => toggle("c1")} />
              <span className="text-sm text-[#1C1C1E] font-poppins">
                I have been given enough, relative information to be able to
                give my informed consent to the terms and conditions of this
                agreement.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <Checkbox checked={ack.c2} onCheckedChange={() => toggle("c2")} />
              <span className="text-sm text-[#1C1C1E] font-poppins">
                I have read, understand and are in agreement with the terms and
                conditions of this Agreement.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <Checkbox checked={ack.c3} onCheckedChange={() => toggle("c3")} />
              <span className="text-sm text-[#1C1C1E] font-poppins">
                I acknowledge that the information and documentation as noted
                above, has been discussed with me and I will be provided with a
                copy.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <Checkbox checked={ack.c4} onCheckedChange={() => toggle("c4")} />
              <span className="text-sm text-[#1C1C1E] font-poppins">
                I consent to have the Non-Medical Home Services as requested and
                recorded in this Service Plan.
              </span>
            </label>
            <label className="flex items-start gap-3">
              <Checkbox checked={ack.c5} onCheckedChange={() => toggle("c5")} />
              <span className="text-sm text-[#1C1C1E] font-poppins">
                I understand that my service requests/needs will be reviewed by
                the Supervisor at least every{" "}
                <Input
                  type="number"
                  value={months}
                  onChange={(e) => setMonths(e.target.value)}
                  className="w-12 h-6 px-1 text-center border border-[#8E8E93] inline-block mx-1"
                  min="1"
                />{" "}
                months, or as required, and that the service(s) may be changed
                according to the patient needs as prescribed by the Patient’s
                Physician.
              </span>
            </label>
          </div>

          {/* Signature and Date - Stacked Vertically */}
          <div className="flex justify-center gap-6">
            <div className="flex flex-col gap-3 w-1/3">
              <SignaturePad
                label="Patient/Patient’s Representative Signature"
                value={signature}
                onChange={setSignature}
                placeholder="Sign here"
                height={128}
                clearButtonText="Clear"
              />
              <div>
                <label className="text-xs font-semibold text-[#8E8E93] mb-0.5 block">
                  Patient Sign Date
                </label>
                <DatePicker
                  placeholder="MM/DD/YYYY"
                  className="h-[31px] border-[#8E8E93]"
                  date={signDate}
                  setDate={setSignDate}
                  format="MM/dd/yyyy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientAdmissionPacket;
