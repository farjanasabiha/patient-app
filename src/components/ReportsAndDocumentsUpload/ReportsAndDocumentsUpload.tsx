"use client";

import React from "react";
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
      cellRenderer: (ReportsAndDocuments) => (
        <div className="flex gap-2 sm:gap-3 md:gap-5">
          <button
            type="button"
            className="bg-[#e6ecfc] p-1.5 sm:p-2 rounded-full hover:bg-[#d0dcf7] transition-colors"
          >
            <Eye className="text-[#0040dd]" size={16} />
          </button>
          <button
            type="button"
            className="bg-[#e9f3ec] p-1.5 sm:p-2 rounded-full hover:bg-[#d4e8da] transition-colors"
          >
            <Pencil className="text-[#248a3d]" size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleAddPatient = () => {
    router.push("/patient/add");
  };



  return (
    <div className="flex flex-col h-full bg-white rounded-[10px] p-3 sm:p-4 md:p-6">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="font-poppins font-bold text-lg sm:text-xl md:text-2xl text-[#1C1C1E]">
          Reports And Documents Upload
        </h1>
      </div>

<div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3 sm:gap-5">
          {/* Add button */}
      <PrimaryButton
        variant="primary"
        icon={PlusIcon}
        className="w-full sm:w-auto mb-3 sm:mb-[12px]"
        onClick={handleAddPatient}
      >
        Add New Reports
      </PrimaryButton>
            {/* Upload button */}
      <PrimaryButton
        variant="primary"
        icon={FileUp}
        className="w-full sm:w-auto mb-3 sm:mb-[12px]"
        onClick={handleAddPatient}
      >
        Upload Document
      </PrimaryButton>
</div>


      {/* Table */}
      <div className="flex-grow flex-shrink-0 min-h-[calc(100vh-400px)] sm:min-h-[calc(100vh-350px)] overflow-x-auto">
        <ReusableTable<ReportsAndDocuments>
          columns={columns}     
          keyField="id"
          data={ReportsAndDocumentsData}
          emptyStateMessage="No patients found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25]}
          gridTemplateColumns="15% 15% 15% 45% 15%"
        />
      </div>
    </div>
  );
};

export default ReportsAndDocumentsUpload;
