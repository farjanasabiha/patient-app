"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon, FileUp, Eye, Pencil } from "lucide-react";
import {
  ReusableTable,
  TableColumn,
} from "../Common/DataTable/ReusableTable";
import { PrimaryButton } from "@/components/ui/primary-button";
import ReportsAndDocumentsData, { ReportsAndDocuments } from "@/data/ReportsAndDocumentsData";

// Using ActivePatient from data as the row type

const ReportsAndDocumentsUpload: React.FC = () => {
  const router = useRouter();

  // Define columns for the table
  const columns: TableColumn<ReportsAndDocuments>[] = [
    {
      header: "Date",
      accessor: "date",
      width: "20%",
    },
    {
      header: "Time",
      accessor: "time",
      width: "20%",
    },
    {
      header: "Type",
      accessor: "type",
      width: "20%",
    },
    {
      header: "Incident Details",
      accessor: "incidentDetails",
      width: "20%",
    },
    {
      header: "Actions",
      accessor: () => "",
      width: "20%",
      cellRenderer: (row: ReportsAndDocuments) => (
        <div className="flex gap-5">
          <button
            type="button"
            className="bg-[#e6ecfc] p-2 rounded-full"
          >
            <Eye className="text-[#0040dd]" size={20} />
          </button>
          <button
            type="button"
            className="bg-[#e9f3ec] p-2 rounded-full"
          >
            <Pencil className="text-[#248a3d]" size={20} />
          </button>
        </div>
      ),
    },
  ];

  const handleAddPatient = () => {
    router.push("/patient/add");
  };



  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Reports And Documents Upload
        </h1>
      </div>

<div className="flex items-center justify-start gap-5">
          {/* Add button */}
      <PrimaryButton
        variant="primary"
        icon={PlusIcon}
        className="w-[162px] h-[32px] px-2 py-1 gap-1 mb-[12px]"
        onClick={handleAddPatient}
      >
        Add New Reports
      </PrimaryButton>
            {/* Add button */}
      <PrimaryButton
        variant="primary"
        icon={FileUp}
        className="w-[162px] h-[32px] px-2 py-1 gap-1 mb-[12px]"
        onClick={handleAddPatient}
      >
        Upload Document
      </PrimaryButton>
</div>


      {/* Table */}
      <div className="flex-grow flex-shrink-0 min-h-[calc(100vh-350px)]">
        <ReusableTable<ReportsAndDocuments>
          columns={columns}     
          keyField="id"
          data={ReportsAndDocumentsData}
          emptyStateMessage="No patients found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          gridTemplateColumns="8% 10% 10% 20% 13%"
        />
      </div>
    </div>
  );
};

export default ReportsAndDocumentsUpload;
