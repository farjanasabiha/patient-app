"use client";

import React from "react";
import { IconComponent } from "@/types/icons";

export type NotificationItem = {
  icon: IconComponent;
  text: string;
  status: string; // e.g., "Signed", "Pending", "Overdue"
};

function getStatusColor(status: string): string {
  const s = status.toLowerCase();
  if (["signed", "complete", "completed", "done"].includes(s)) return "#30DB5B"; // green
  if (["overdue", "missing", "rejected", "failed", "incomplete"].includes(s)) return "#FF0D00"; // red
  return "#AEAEB2"; // grey (Pending or default)
}

export const Notifications: React.FC<{ title?: string; items: NotificationItem[] }> = ({
  title = "Notifications",
  items,
}) => {
  return (
    <div className="flex flex-col items-start p-3 gap-2.5 bg-[#FFE7E6] rounded-[6px] min-w-0">
      <h3 className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
        {title}
      </h3>
      <ul className=" w-full grid grid-cols-2 gap-x-10 gap-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-row items-center justify-between p-0 gap-2 w-full h-[24px]"
          >
            <div className="flex flex-row items-center gap-2">
              <item.icon className="text-[#8E8E93] w-6 h-6 flex-shrink-0" />
              <span className="font-poppins text-[12px] leading-[18px] text-[#1C1C1E] whitespace-nowrap overflow-hidden text-ellipsis">
                {item.text}
              </span>
            </div>
            <span
              className="flex justify-center items-center px-2 py-1 h-[23px] rounded-[15.5px] text-[10px] leading-[15px] font-semibold text-white whitespace-nowrap flex-shrink-0"
              style={{ backgroundColor: getStatusColor(item.status) }}
            >
              {item.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
