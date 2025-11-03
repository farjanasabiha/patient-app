import type React from "react";
import { DownloadIcon } from "@/components/ui/icons/DownloadIcon";
import { TableCell } from "../ui/TableCell";
import { TableText } from "../ui/TableText";
import { EyeIcon } from "../ui/icons/EyeIcon";

interface SentFax {
  patientName: string;
  faxNumber: string;
  doctorName: string;
  sentDate: string;
}

const dummyData: SentFax[] = [
  {
    patientName: "First & Last Name",
    faxNumber: "123 456 7890",
    doctorName: "First & Last Name",
    sentDate: "MM/DD/YYYY",
  },
  {
    patientName: "First & Last Name",
    faxNumber: "123 456 7890",
    doctorName: "First & Last Name",
    sentDate: "MM/DD/YYYY",
  },
  {
    patientName: "First & Last Name",
    faxNumber: "123 456 7890",
    doctorName: "First & Last Name",
    sentDate: "MM/DD/YYYY",
  },
];

const SentTable = () => {
  const ActionButton = ({ color }: { color: "blue" | "green" }) => (
    <div
      className={`p-1.5 rounded-2xl flex justify-start items-center gap-2.5 ${
        color === "blue" ? "bg-violet-100" : "bg-gray-200"
      }`}
    >
      {color === "blue" ? (
        <EyeIcon width={24} height={24} className="text-blue-700" />
      ) : (
        <DownloadIcon width={24} height={24} className="text-green-700" />
      )}
    </div>
  );

  return (
    <div className="self-stretch p-2 sm:p-3 bg-[#E2F7FF] rounded-md">
      <div className="flex-1 flex flex-col gap-3">
        <div className="bg-white rounded-[10px] overflow-x-auto">
        <div className="min-w-[700px] flex flex-col border border-stone-300 rounded-[10px]">
          {/* Table Header */}
          <div className="bg-white rounded-t-[10px] flex justify-between border-b border-stone-300">
            <div className="flex flex-1">
              <TableCell width="w-40">
                <TableText variant="semibold">Patient Name</TableText>
              </TableCell>
              <TableCell width="w-40">
                <TableText variant="semibold">Faxed to</TableText>
              </TableCell>
              <TableCell width="w-40">
                <TableText variant="semibold">Faxed to Doctor</TableText>
              </TableCell>
              <TableCell width="w-40">
                <TableText variant="semibold">Sent Date</TableText>
              </TableCell>
            </div>
            <div className="w-[100px] px-3.5 py-3 flex items-center justify-center">
              <TableText variant="semibold">Actions</TableText>
            </div>
          </div>

          {/* Table Rows */}
          {dummyData.map((fax, index) => (
            <div
              key={index}
              className={`bg-white flex justify-between items-center border-b border-stone-300 last:border-b-0 ${
                index === dummyData.length - 1 ? "rounded-b-[10px]" : ""
              }`}
            >
              <div className="flex flex-1">
                <TableCell width="w-40">
                  <div className="w-40 h-5 relative">
                    <TableText variant="patient">{fax.patientName}</TableText>
                  </div>
                </TableCell>
                <TableCell width="w-40">
                  <TableText>{fax.faxNumber}</TableText>
                </TableCell>
                <TableCell width="w-40">
                  <TableText>{fax.doctorName}</TableText>
                </TableCell>
                <TableCell width="w-40">
                  <TableText>{fax.sentDate}</TableText>
                </TableCell>
              </div>

              <div className="w-[100px] px-2 sm:px-3.5 py-1 flex gap-2 sm:gap-2.5 justify-center">
                <ActionButton color="blue" />
                <ActionButton color="green" />
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default SentTable;
