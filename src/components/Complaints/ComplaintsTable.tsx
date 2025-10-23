"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import complaintsData from "@/data/ComplaintsData";
import { Plus, Trash2 } from "lucide-react";
import {
  ReusableTable,
  TableColumn,
  getLocationBgColor,
  getLocationTextColor,
} from "../Common/DataTable/ReusableTable";
import FilterHeaderWithSearch, { LOCATION_CATEGORIES } from "../Common/headers/FilterHeaderWithSearch";
import { PrimaryButton } from "@/components/ui/primary-button";
import { DownloadIcon } from "@/components/ui/icons/DownloadIcon";
import { EditIcon } from "@/components/ui/icons/EditIcon";

// Define the Complaint type based on your data
type Complaint = {
  id: number;
  complaintId: string;
  patientName: string;
  mrn: string;
  dateSubmitted: string;
  complaintType: string;
  priority: "High" | "Medium" | "Low";
  status: "Open" | "In Progress" | "Resolved" | "Closed";
  location: string;
  assignedTo: string;
  description: string;
  resolution?: string;
  dateResolved?: string;
  phoneNumber: string;
  email: string;
  highlight?: boolean;
};

const ComplaintsTable: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const router = useRouter();

  const handleActionClick = (complaint: Complaint, action: string) => {
    switch (action) {
      case "download":
        console.log(`Download clicked for complaint ID: ${complaint.id}`);
        break;
      case "edit":
        router.push(`/complaints/edit/${complaint.id}`);
        break;
      case "delete":
        console.log(`Delete clicked for complaint ID: ${complaint.id}`);
        break;
      default:
        console.log(`Unknown action: ${action} for complaint ID: ${complaint.id}`);
    }
  };

  // Define columns for the table
  const columns: TableColumn<Complaint>[] = [
    {
      header: "Complainant Name",
      accessor: "patientName",
      width: "20%",
      cellRenderer: (complaint) => (
        <button
          type="button"
          onClick={() => router.push(`/complaints/edit/${complaint.id}`)}
          className={`font-poppins text-[14px] leading-[21px] ${
            complaint.highlight ? "text-[#ff0d00]" : "text-[#0071a4]"
          } hover:underline cursor-pointer bg-transparent p-0`}
        >
          {complaint.patientName}
        </button>
      ),
    },
    {
      header: "Phone Number",
      accessor: "phoneNumber",
      width: "15%",
      cellRenderer: (complaint) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93]">
          {complaint.phoneNumber}
        </span>
      ),
    },
    {
      header: "Email Address",
      accessor: "email",
      width: "25%",
      cellRenderer: (complaint) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93]">
          {complaint.email}
        </span>
      ),
    },
    {
      header: "Location",
      accessor: "location",
      width: "15%",
      cellRenderer: (complaint) => (
        <span
          className={`inline-flex justify-center items-center px-2 py-1 h-[23px] rounded-[15.5px] font-poppins font-semibold text-[10px] leading-[15px] ${getLocationBgColor(
            complaint.location
          )} ${getLocationTextColor(complaint.location)}`}
        >
          {complaint.location}
        </span>
      ),
    },
    {
      header: "Actions",
      accessor: "id",
      width: "15%",
      cellRenderer: (complaint) => (
        <div className="flex justify-start items-center gap-2.5">
          <button 
            className="p-1.5 bg-[#E9F3EC] rounded-2xl flex justify-start items-center gap-2.5 hover:bg-[#92C59E] transition-colors cursor-pointer"
            onClick={() => handleActionClick(complaint, "download")}
          >
            <DownloadIcon width={24} height={24} className="text-[#248A3D] hover:text-white" />
          </button>
          <button 
            className="p-1.5 bg-[#F9EFFE] rounded-2xl flex justify-start items-center gap-2.5 hover:bg-[#DFADF9] transition-colors cursor-pointer"
            onClick={() => handleActionClick(complaint, "edit")}
          >
            <EditIcon width={20} height={20} className="text-[#BF5AF2] hover:text-white" />     
          </button>
          <button 
            className="p-1.5 bg-[#FFE7E6] rounded-2xl flex justify-start items-center gap-2.5 hover:bg-[#FF8680] transition-colors cursor-pointer"
            onClick={() => handleActionClick(complaint, "delete")}
          >
            <Trash2 width={20} height={20} className="text-[#FF0D00] hover:text-white" />
          </button>
        </div>
      ),
    },
  ];

  // Filter and search data
  const filteredData = React.useMemo(() => {
    return complaintsData.filter((complaint) => {
      const matchesLocation =
        selectedLocation === "All" || complaint.location === selectedLocation;
      const matchesSearch =
        searchTerm === "" ||
        complaint.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        complaint.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLocation && matchesSearch;
    });
  }, [selectedLocation, searchTerm]);

  // Handle location changes
  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  // Handle search
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Handle search loading state
  const handleSearchLoading = (isLoading: boolean) => {
    setIsSearching(isLoading);
  };

  const handleAddComplaint = () => {
    // Navigate to the add complaint form page
    router.push("/complaints/add-complaint");
  };

  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Complaints
        </h1>
      </div>

      {/* Add button */}
      <PrimaryButton
        variant="primary"
        icon={Plus}
        className="w-[180px] h-[32px] px-2 py-1 gap-1 mb-[12px]"
        onClick={handleAddComplaint}
      >
        Add New Complaint
      </PrimaryButton>

      {/* Filter header section */}
      <div className="mb-4">
        <FilterHeaderWithSearch
          categories={LOCATION_CATEGORIES}
          initialCategory="All"
          onCategoryChange={handleLocationChange}
          onSearch={handleSearch}
          onSearchLoadingChange={handleSearchLoading}
          searchPlaceholder="Search by name or phone"
        />
      </div>

      {/* Table */}
      <div className="flex-grow flex-shrink-0 min-h-[calc(100vh-350px)]">
        <ReusableTable<Complaint>
          data={filteredData}
          columns={columns}
          keyField="id"
          isLoading={isSearching}
          emptyStateMessage="No complaints found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          gridTemplateColumns="20% 15% 25% 15% 15%"
        />
      </div>
    </div>
  );
};

export default ComplaintsTable;