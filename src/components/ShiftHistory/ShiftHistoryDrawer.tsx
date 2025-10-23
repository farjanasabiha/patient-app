"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Drawer } from "@/components/ui/drawer";
import { useState } from "react";
import { GoogleMap } from "./GoogleMap";

interface ShiftHistoryDrawerProps {
  open: boolean;
  onClose: () => void;
}

export function ShiftHistoryDrawer({ open, onClose }: ShiftHistoryDrawerProps) {
  // Using useState but only need the state values, not the setters
  const [clockInGeocode] = useState<string>("40.712776, -74.005974");
  const [clockOutGeocode] = useState<string>("40.712776, -74.005974");
  const [acceptedGeocode] = useState<string>("40.712776, -74.005974");

  return (
    <Drawer open={open} onClose={onClose}>
      <div className="flex flex-col gap-3 w-full bg-white overflow-y-auto">
        {/* Header with Title and Close Button */}
        <div className="flex flex-row items-center gap-6 w-full">
          <h2 className="flex-1 font-poppins font-bold text-[24px] leading-9 text-[#1C1C1E]">
            Location
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-[#C7C7CC]"></div>

        {/* Content Area */}
        <div className="flex flex-col gap-6 w-full">
          {/* Map Section */}
          <div className="w-full h-[451.42px] relative overflow-hidden">
            <GoogleMap
              geocode={acceptedGeocode}
              height="451.42px"
              disabled={true}
            />

            {/* Legend */}
            <div className="absolute right-4 bottom-4 bg-white p-2 flex flex-col gap-2 w-[166.25px] z-10">
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[rgba(126,192,0,0.2)] border-2 border-[#7EC000]"></div>
                <span className="text-[12px] font-semibold font-poppins text-[#222222]">
                  Clock In
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[rgba(255,0,0,0.2)] border-2 border-[#FF0000]"></div>
                <span className="text-[12px] font-semibold font-poppins text-[#222222]">
                  Clock Out
                </span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-5 h-5 rounded-full bg-[rgba(126,34,206,0.2)] border-2 border-[#7E22CE]"></div>
                <span className="text-[12px] font-semibold font-poppins text-[#222222]">
                  Accepted Location
                </span>
              </div>
            </div>
          </div>

          {/* Form Fields */}
          <div className="flex flex-col gap-4 w-full">
            {/* Row 1 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="aide-name"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Caregiver Name
                </Label>
                <Input
                  id="aide-name"
                  defaultValue="Caregiver Name"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="date"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock Out Date
                </Label>
                <Input
                  id="date"
                  defaultValue="11/25/2024"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="clock-in-date"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock In Date
                </Label>
                <Input
                  id="clock-in-date"
                  defaultValue="11/25/2024"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="clock-out-date"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock Out Date
                </Label>
                <Input
                  id="clock-out-date"
                  defaultValue="11/25/2024"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="clock-in-time"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock In Time
                </Label>
                <Input
                  id="clock-in-time"
                  defaultValue="09:00"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="clock-out-time"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock Out Time
                </Label>
                <Input
                  id="clock-out-time"
                  defaultValue="17:00"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>

            {/* Row 4 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="clock-in-location"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock In Location
                </Label>
                <Input
                  id="clock-in-location"
                  defaultValue={clockInGeocode}
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="clock-out-location"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Clock Out Location
                </Label>
                <Input
                  id="clock-out-location"
                  defaultValue={clockOutGeocode}
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#E5E5EA] my-1"></div>

            {/* Row 5 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="city"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  City
                </Label>
                <Input
                  id="city"
                  defaultValue="City"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="state"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  State
                </Label>
                <Input
                  id="state"
                  defaultValue="State"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>

            {/* Row 6 */}
            <div className="flex gap-6 w-full">
              <div className="flex-1">
                <Label
                  htmlFor="zip"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  ZIP Code
                </Label>
                <Input
                  id="zip"
                  defaultValue="ZIP Code"
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
              <div className="flex-1">
                <Label
                  htmlFor="accepted-location"
                  className="text-[12px] font-semibold font-poppins text-[#8E8E93] block mb-[2px]"
                >
                  Accepted Clock In/Out Location
                </Label>
                <Input
                  id="accepted-location"
                  defaultValue={acceptedGeocode}
                  className="h-[31px] border-[#8E8E93] rounded-[3px] px-[10px] py-[5px] text-[14px] font-poppins text-[#1C1C1E]"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
}
