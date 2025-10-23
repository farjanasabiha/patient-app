"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Eye, Plus } from "lucide-react";
import {
  ReusableTable,
  TableColumn,
} from "@/components/Common/DataTable/ReusableTable";
import { Communication } from "@/data/CommunicationData";
import { EditIcon } from "../ui/icons";

interface CommunicationTableProps {
  data: Communication[];
  patientId: number;
}

export function CommunicationTable({
  data,
  patientId,
}: CommunicationTableProps) {
  const router = useRouter();

  // Handle communication actions internally
  const handleViewCommunication = (communication: Communication) => {
    // Navigate to communication view page
    router.push(`/communication/${patientId}/view/${communication.id}`);
  };

  const handleEditCommunication = (communication: Communication) => {
    // Navigate to edit communication page
    router.push(`/communication/${patientId}/edit/${communication.id}`);
  };

  const handleAddNewCommunication = () => {
    // Navigate to add new communication page
    router.push(`/communication/${patientId}/add`);
  };

  // Define table columns for the Common/DataTable/ReusableTable
  const columns: TableColumn<Communication>[] = [
    {
      header: "Date",
      accessor: "date",
      width: "15%",
      cellRenderer: (communication) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
          {communication.date}
        </span>
      ),
    },
    {
      header: "Time",
      accessor: "time",
      width: "15%",
      cellRenderer: (communication) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
          {communication.time}
        </span>
      ),
    },
    {
      header: "Communication Details",
      accessor: "details",
      width: "55%",
      cellRenderer: (communication) => (
        <span
          className="font-poppins text-[14px] leading-[21px] text-[#8E8E93] truncate"
          title={communication.details}
        >
          {communication.details}
        </span>
      ),
    },
  ];

  // Render action buttons for each row - positioned at far right edge
  const renderRowActions = (communication: Communication) => (
    <>
      <button
        onClick={() => handleViewCommunication(communication)}
        className="group p-1.5 bg-[#ECFCFA] rounded-2xl flex justify-center items-center hover:bg-[#3FE0D0] transition-colors"
      >
        <Eye className="w-4 h-4 text-[#3FE0D0] group-hover:text-white" />
      </button>
      <button
        onClick={() => handleEditCommunication(communication)}
        className="group p-1.5 bg-[#F9EFFE] rounded-2xl flex justify-center items-center hover:bg-[#BF5AF2] transition-colors"
      >
        <EditIcon className="text-[#BF5AF2] group-hover:text-white" />
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Add New Communication Button */}
      <button
        onClick={handleAddNewCommunication}
        className="px-2 py-1 bg-purple-700 rounded-md flex justify-start items-center gap-1 hover:bg-purple-800 transition-colors w-fit"
      >
        <Plus className="w-6 h-6 text-white" />
        <span className="text-white text-sm font-semibold font-poppins">
          Add New Communication
        </span>
      </button>

      {/* Table */}
      <ReusableTable<Communication>
        data={data}
        columns={columns}
        keyField="id"
        renderRowActions={renderRowActions}
        emptyStateMessage="No communications found"
        initialRowsPerPage={10}
        rowsPerPageOptions={[5, 10, 15, 20]}
        gridTemplateColumns="15% 15% 55% 15%"
      />
    </div>
  );
}
