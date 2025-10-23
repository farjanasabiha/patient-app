"use client";

import React, { useState } from "react";
import { Eye } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  ReusableTable,
  TableColumn,
  ExpandedRowContent,
  getLocationBgColor,
  getLocationTextColor,
} from "../Common/DataTable/ReusableTable";
import {
  FilterHeaderWithSearch,
  FilterCategory,
  LOCATION_CATEGORIES,
} from "../Common/headers";
import caregiverData from "@/data/CaregiverData";

// Define the ShiftHistory type based on your data
type ShiftHistory = {
  id: number;
  mrn: string;
  name: string;
  dob: string;
  phoneNumber: string;
  email: string;
  location: string;
  highlight?: boolean;
  // Expanded content fields
  startOfCare: string;
  primaryDiagnosis: string;
  servicesProvided: string;
  shiftDate: string;
  shiftTime: string;
  caregiverName: string;
  caregiverId: string;
  shiftStatus: "Completed" | "In Progress" | "Scheduled" | "Cancelled";
  notes?: string;
};

const ShiftHistoryTable: React.FC = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] =
    useState<FilterCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Define columns for the table
  const columns: TableColumn<ShiftHistory>[] = [
    {
      header: "MRN Number",
      accessor: "mrn",
      width: "12%",
      cellRenderer: (shift) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93]">
          {shift.mrn || "XXXXXXXXXX"}
        </span>
      ),
    },
    {
      header: "Patient Name",
      accessor: "name",
      width: "15%",
      cellRenderer: (shift) => (
        <span
          className={`font-poppins text-[14px] leading-[21px] ${
            shift.highlight ? "text-[#ff0d00]" : "text-[#0071a4]"
          }`}
        >
          {shift.name}
        </span>
      ),
    },
    {
      header: "DOB",
      accessor: "dob",
      width: "12%",
    },
    {
      header: "Phone Number",
      accessor: "phoneNumber",
      width: "13%",
    },
    {
      header: "Email Address",
      accessor: "email",
      width: "20%",
    },
    {
      header: "Location",
      accessor: "location",
      width: "12%",
      cellRenderer: (shift) => (
        <span
          className={`inline-flex justify-center items-center px-2 py-1 h-[23px] rounded-[15.5px] font-poppins font-semibold text-[10px] leading-[15px] ${getLocationBgColor(
            shift.location
          )} ${getLocationTextColor(shift.location)}`}
        >
          {shift.location}
        </span>
      ),
    },
  ];

  // Define expanded content
  const expandedContent: ExpandedRowContent<ShiftHistory>[] = [
    {
      accessor: "id",
      label: "Start of Care",
      width: "12%",
      contentRenderer: (shift) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
          {shift.startOfCare}
        </span>
      ),
    },
    {
      accessor: "id",
      label: "Primary Diagnosis",
      width: "15%",
      contentRenderer: (shift) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
          {shift.primaryDiagnosis}
        </span>
      ),
    },
    {
      accessor: "id",
      label: "Services Provided",
      width: "25%",
      span: 2,
      contentRenderer: (shift) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
          {shift.servicesProvided}
        </span>
      ),
    },
  ];

  // Filter and search data
  const filteredData = React.useMemo(() => {
    return caregiverData.filter((shift) => {
      const matchesLocation =
        selectedLocation === "All" || shift.location === selectedLocation;
      const matchesSearch =
        searchTerm === "" ||
        shift.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        shift.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesLocation && matchesSearch;
    });
  }, [selectedLocation, searchTerm]);

  // Handle location changes
  const handleLocationChange = (location: FilterCategory) => {
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

  const handleViewShift = (shift: ShiftHistory) => {
    console.log(`View shift for patient ID: ${shift.id}`);
    // Navigate to shift history details page
    router.push(`/shift-history/${shift.id}`);
  };

  // Create action buttons with only eye icon
  const actionButtons = [
    {
      icon: <Eye className="w-4 h-4 text-[#5E5CE6]" />,
      backgroundColor: "bg-[#EFEFFD]",
      hoverBackgroundColor: "hover:bg-indigo-100",
      iconColor: "text-[#5E5CE6]",
      onClick: handleViewShift,
    },
  ];

  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Shift History
        </h1>
      </div>

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
      <div className="">
        <ReusableTable<ShiftHistory>
          data={filteredData}
          columns={columns}
          keyField="id"
          expandedContent={expandedContent}
          actionButtons={actionButtons}
          isLoading={isSearching}
          emptyStateMessage="No shift history found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          gridTemplateColumns="4% 12% 15% 12% 13% 20% 12% 12%"
        />
      </div>
    </div>
  );
};

export default ShiftHistoryTable;
