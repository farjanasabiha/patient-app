import React, { useState } from "react";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { Input } from "@/components/ui/input";
import { SignaturePad } from "@/components/ui/signature-pad";

const SignAndDate = () => {
  const [rnSignature, setRnSignature] = useState<string | null>(null);
  const [rnSignDate, setRnSignDate] = useState<Date | undefined>();
  const [position, setPosition] = useState<string>("RN Position");

  return (
    <div className="w-full bg-white rounded-md flex flex-col space-y-4 sm:space-y-6 p-3 sm:p-6">
      <CollapsibleSection title="Sign & Date">
        <div className="w-full flex-1 flex justify-center items-start gap-4 sm:gap-6">
          <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[33%] flex flex-col gap-3">
            <div className="w-full flex flex-col items-end gap-2 sm:gap-3">
              <SignaturePad
                label="RN Signature"
                value={rnSignature}
                onChange={setRnSignature}
                height={96}
                className="w-full"
                placeholder="Sign here"
                clearButtonText="Clear"
                clearButtonVariant="outline"
                clearButtonSize="sm"
              />
            </div>
            <div className="w-full flex flex-col gap-2">
              <FormLabel>RN Sign Date</FormLabel>
              <DatePicker date={rnSignDate} setDate={setRnSignDate} />
            </div>
            <div className="w-full flex flex-col gap-2">
              <FormLabel>Position</FormLabel>
              <Input
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                placeholder="RN Position"
              />
            </div>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
};

export default SignAndDate;
