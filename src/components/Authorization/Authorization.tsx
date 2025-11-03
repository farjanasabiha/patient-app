"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { PlusIcon, FileUp, Eye, Pencil } from "lucide-react";
import {
  ReusableTable,
  TableColumn,
} from "../Common/DataTable/ReusableTable";
import { PrimaryButton } from "@/components/ui/primary-button";
import AuthorizationData, { AuthorizationType } from "@/data/AuthorizationData";

const Authorization: React.FC = () => {
  const router = useRouter();

  // Define columns for the table
  const columns: TableColumn<AuthorizationType>[] = [
    {
      header: "Date",
      accessor: "date",
      width: "15%",
    },
    {
      header: "Time",
      accessor: "time",
      width: "15%",
    },
    {
      header: "Document Name",
      accessor: "incidentDetails",
      width: "45%",
    },
    {
      header: "Actions",
      accessor: () => "",
      width: "15%",
      cellRenderer: (authorization) => (
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

  const handleAddAuthorization = () => {
    router.push("/authorization/add");
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Authorization
        </h1>
      </div>

      <div className="flex items-center justify-start gap-5">

        {/* Upload button */}
        <PrimaryButton
          variant="primary"
          icon={FileUp}
          className="mb-[12px]"
          onClick={handleAddAuthorization}
        >
          Upload
        </PrimaryButton>
      </div>

      {/* Table */}
      <div className="flex-grow flex-shrink-0 min-h-[calc(100vh-350px)]">
        <ReusableTable<AuthorizationType>
          columns={columns}
          keyField="id"
          data={AuthorizationData}
          emptyStateMessage="No authorization records found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 20, 25]}
          gridTemplateColumns="15% 15% 60% 15%"
        />
      </div>
    </div>
  );
};

export default Authorization;
