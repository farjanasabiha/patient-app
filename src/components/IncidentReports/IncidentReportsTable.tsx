"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Eye, Plus } from "lucide-react";
import {
  ReusableTable,
  TableColumn,
} from "@/components/Common/DataTable/ReusableTable";
import { IncidentReport } from "@/data/IncidentReportsData";
import { EditIcon } from "../ui/icons";

interface IncidentReportsTableProps {
  data: IncidentReport[];
  patientId: number;
}

export function IncidentReportsTable({
  data,
  patientId,
}: IncidentReportsTableProps) {
  const router = useRouter();

  // Handle incident actions internally
  const handleViewIncident = (incident: IncidentReport) => {
    // Navigate to incident view page
    router.push(`/incident-reports/${patientId}/view/${incident.id}`);
  };

  const handleEditIncident = (incident: IncidentReport) => {
    // Navigate to edit incident page
    router.push(`/incident-reports/${patientId}/edit/${incident.id}`);
  };

  const handleAddNewReport = () => {
    // Navigate to add new incident report page
    router.push(`/incident-reports/${patientId}/add`);
  };

  // Define table columns for the Common/DataTable/ReusableTable
  const columns: TableColumn<IncidentReport>[] = [
    {
      header: "Date",
      accessor: "date",
      width: "15%",
      cellRenderer: (incident) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
          {incident.date}
        </span>
      ),
    },
    {
      header: "Time",
      accessor: "time",
      width: "15%",
      cellRenderer: (incident) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8E8E93]">
          {incident.time}
        </span>
      ),
    },
    {
      header: "Incident Details",
      accessor: "details",
      width: "55%",
      cellRenderer: (incident) => (
        <span
          className="font-poppins text-[14px] leading-[21px] text-[#8E8E93] truncate"
          title={incident.details}
        >
          {incident.details}
        </span>
      ),
    },
  ];

  // Render action buttons for each row - positioned at far right edge
  const renderRowActions = (incident: IncidentReport) => (
    <>
      <button
        onClick={() => handleViewIncident(incident)}
        className="group p-1.5 bg-[#ECFCFA] rounded-2xl flex justify-center items-center hover:bg-[#3FE0D0] transition-colors"
      >
        <Eye className="w-4 h-4 text-[#3FE0D0] group-hover:text-white" />
      </button>
      <button
        onClick={() => handleEditIncident(incident)}
        className="group p-1.5 bg-[#F9EFFE] rounded-2xl flex justify-center items-center hover:bg-[#BF5AF2] transition-colors"
      >
        <EditIcon className="text-[#BF5AF2] group-hover:text-white" />
      </button>
    </>
  );

  return (
    <div className="flex flex-col gap-3">
      {/* Add New Report Button */}
      <button
        onClick={handleAddNewReport}
        className="px-2 py-1 bg-purple-700 rounded-md flex justify-start items-center gap-1 hover:bg-purple-800 transition-colors w-fit"
      >
        <Plus className="w-6 h-6 text-white" />
        <span className="text-white text-sm font-semibold font-poppins">
          Add New Report
        </span>
      </button>

      {/* Table */}
      <ReusableTable<IncidentReport>
        data={data}
        columns={columns}
        keyField="id"
        renderRowActions={renderRowActions}
        emptyStateMessage="No incident reports found"
        initialRowsPerPage={10}
        rowsPerPageOptions={[5, 10, 15, 20]}
        gridTemplateColumns="15% 15% 55% 15%"
      />
    </div>
  );
}
