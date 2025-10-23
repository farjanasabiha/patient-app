"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dischargedPatientData from "@/data/DischargedPatientData";
import {
  ReusableTable,
  TableColumn,
  ExpandedRowContent,
  EmergencyIcon,
  getLocationBgColor,
  getLocationTextColor,
  getStatusStyle,
} from "../Common/DataTable/ReusableTable";
import {
  FilterHeaderWithSearch,
  FilterCategory,
  LOCATION_CATEGORIES,
} from "../Common/headers";
import {
  TableActionButtons,
  ActionButtonType,
} from "../Common/DataTable/TableActionButtons";
import type { DischargedPatient } from "@/data/DischargedPatientData";

const DischargedPatientTable: React.FC = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] =
    useState<FilterCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  // Define columns for the table
  const columns: TableColumn<DischargedPatient>[] = [
    {
      header: "MRN Number",
      accessor: "mrn",
      width: "12%",
      cellRenderer: (patient) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93] truncate">
          {patient.mrn || "XXXXXXXXXX"}
        </span>
      ),
    },
    {
      header: "Patient Name",
      accessor: "name",
      width: "15%",
      cellRenderer: (patient) => (
        <button
          type="button"
          onClick={() =>
            router.push(`/patient/${patient.id}?source=discharged`)
          }
          className={`font-poppins text-[14px] leading-[21px] ${
            patient.highlight ? "text-[#ff0d00]" : "text-[#0071a4]"
          } hover:underline cursor-pointer text-left truncate`}
        >
          {patient.name}
        </button>
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
      cellRenderer: (patient) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93] truncate">
          {patient.phoneNumber}
        </span>
      ),
    },
    {
      header: "Email Address",
      accessor: "email",
      width: "20%",
      cellRenderer: (patient) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93] truncate">
          {patient.email}
        </span>
      ),
    },
    {
      header: "Location",
      accessor: "location",
      width: "12%",
      cellRenderer: (patient) => (
        <span
          className={`inline-flex justify-center items-center px-2 py-1 h-[23px] rounded-[15.5px] font-poppins font-semibold text-[10px] leading-[15px] ${getLocationBgColor(
            patient.location
          )} ${getLocationTextColor(patient.location)}`}
        >
          {patient.location}
        </span>
      ),
    },
  ];

  // Define expanded content
  const expandedContent: ExpandedRowContent<DischargedPatient>[] = [
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Start of Care",
      width: "12%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93] break-words">
          {patient.startOfCare}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Diagnosis",
      width: "15%",
      contentRenderer: (patient) => (
        <span
          className="font-poppins text-sm text-[#8E8E93] break-words"
          title={patient.diagnosisNames.join(", ")}
        >
          {patient.diagnosisCodes.join(", ")}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Services Provided",
      width: "25%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93] break-words">
          {patient.servicesProvided}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Payer Source",
      width: "20%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93] break-words">
          {patient.payerSource}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Status",
      width: "12%",
      contentRenderer: (patient) => (
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 rounded-[15.5px] text-xs font-semibold ${getStatusStyle(
              patient.status
            )}`}
          >
            {patient.status}
          </span>
        </div>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Date of Discharge",
      width: "12%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93] break-words">
          {patient.dischargeDate}
        </span>
      ),
    },
  ];

  // Function to generate emergency icons for a patient
  const getEmergencyIcons = (patient: DischargedPatient): EmergencyIcon[] => {
    const icons: EmergencyIcon[] = [];

    if (patient.onOxygen) {
      icons.push({ type: "oxygen", isActive: true, label: "On Oxygen" });
    }
    if (patient.fallRisk) {
      icons.push({ type: "fall-risk", isActive: true, label: "Fall Risk" });
    }
    if (patient.needsWheelchair) {
      icons.push({ type: "wheelchair", isActive: true, label: "Wheelchair" });
    }
    if (patient.onVentilator) {
      icons.push({
        type: "ventilator",
        isActive: true,
        label: "On Ventilator",
      });
    }

    return icons;
  };

  // Filter and search data
  const filteredData = React.useMemo(() => {
    return dischargedPatientData.filter((patient) => {
      const matchesLocation =
        selectedLocation === "All" || patient.location === selectedLocation;
      const matchesSearch =
        searchTerm === "" ||
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phoneNumber.toLowerCase().includes(searchTerm.toLowerCase());
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

  const handleActionClick = (patient: DischargedPatient, action: string) => {
    switch (action) {
      case "edit":
        router.push(`/patient/${patient.id}?source=discharged`);
        break;
      case "copy":
        console.log(`Copy clicked on discharged patient ID: ${patient.id}`);
        break;
      default:
        console.log(
          `Action clicked: ${action} on discharged patient ID: ${patient.id}`
        );
    }
  };

  // Define which action buttons to show
  const actionButtonTypes: ActionButtonType[] = ["edit", "copy"];
  const actionButtons = TableActionButtons({
    actions: actionButtonTypes,
    onActionClick: handleActionClick,
  });

  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Discharged Patients
        </h1>
      </div>

      {/* Filter header */}
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
        <ReusableTable<DischargedPatient>
          data={filteredData}
          columns={columns}
          keyField="id"
          expandedContent={expandedContent}
          emergencyIcons={getEmergencyIcons}
          actionButtons={actionButtons}
          isLoading={isSearching}
          emptyStateMessage="No discharged patients found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          gridTemplateColumns="4% 1fr 1.5fr 1fr 1.2fr 2fr 1fr 1fr"
        />
      </div>
    </div>
  );
};

export default DischargedPatientTable;
