"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { PlusIcon } from "lucide-react";
import activePatientData from "@/data/ActivePatientData";
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
import { PrimaryButton } from "@/components/ui/primary-button";
import {
  TableActionButtons,
  ActionButtonType,
} from "../Common/DataTable/TableActionButtons";
import { AssignRNDrawer } from "@/components/PatientDashboard/AssignRNDrawer";
import { NoteDrawer } from "@/components/PatientDashboard/NoteDrawer";
import type { ActivePatient } from "@/data/ActivePatientData";

// Using ActivePatient from data as the row type

const ActivePatientTable: React.FC = () => {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] =
    useState<FilterCategory>("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isAssignRNOpen, setIsAssignRNOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);

  // Define columns for the table
  const columns: TableColumn<ActivePatient>[] = [
    {
      header: "MRN Number",
      accessor: "mrn",
      width: "12%",
      cellRenderer: (patient) => (
        <span className="font-poppins text-[14px] leading-[21px] text-[#8e8e93]">
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
          onClick={() => router.push(`/patient/${patient.id}?source=roster`)}
          className={`font-poppins text-[14px] leading-[21px] ${
            patient.highlight ? "text-[#ff0d00]" : "text-[#0071a4]"
          } hover:underline cursor-pointer text-left`}
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
    {
      header: "Country",
      accessor: "country",
      width: "15%",
      cellRenderer: (patient) => (
        <button
          type="button"
          onClick={() => router.push(`/patient/${patient.id}?source=roster`)}
          className={`font-poppins text-[14px] leading-[21px] ${
            patient.highlight ? "text-[#ff0d00]" : "text-[#0071a4]"
          } hover:underline cursor-pointer text-left`}
        >
          {patient.country}
        </button>
      ),
    },
  ];

  // Define expanded content
  const expandedContent: ExpandedRowContent<ActivePatient>[] = [
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Start of Care",
      width: "12%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
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
          className="font-poppins text-sm text-[#8E8E93]"
          title={(patient.diagnosisNames || []).join(", ")}
        >
          {(patient.diagnosisCodes || []).join(", ")}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Services Provided",
      width: "25%",
      span: 2,
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
          {patient.servicesProvided}
        </span>
      ),
    },
    {
      accessor: "id", // Not used directly, just a placeholder
      label: "Payer Source",
      width: "20%",
      contentRenderer: (patient) => (
        <span className="font-poppins text-sm text-[#8E8E93]">
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
  ];

  // Function to generate emergency icons for a patient
  const getEmergencyIcons = (patient: ActivePatient): EmergencyIcon[] => {
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
    return activePatientData.filter((patient) => {
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

  const handleAddPatient = () => {
    router.push("/patient/add");
  };

  const handleActionClick = (patient: ActivePatient, action: string) => {
    switch (action) {
      case "edit":
        router.push(`/patient/${patient.id}`);
        break;
      case "care":
        // Open Assign RN drawer
        setIsAssignRNOpen(true);
        break;
      case "note":
        // Open Note drawer
        setIsNoteOpen(true);
        break;
      default:
        console.log(`Unknown action: ${action} for patient ID: ${patient.id}`);
    }
  };

  const actionButtonTypes: ActionButtonType[] = ["edit", "care", "note"];
  const actionButtons = TableActionButtons({
    actions: actionButtonTypes,
    onActionClick: handleActionClick,
  });

  return (
    <div className="flex flex-col h-full bg-white rounded-[10px]">
      {/* Header section with title and badge */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="font-poppins font-bold text-2xl text-[#1C1C1E]">
          Patient Roster
        </h1>
      </div>

      {/* Add button */}
      <PrimaryButton
        variant="primary"
        icon={PlusIcon}
        className="w-[162px] h-[32px] px-2 py-1 gap-1 mb-[12px]"
        onClick={handleAddPatient}
      >
        Add New Patient
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
        <ReusableTable<ActivePatient>
          data={filteredData}
          columns={columns}
          keyField="id"
          expandedContent={expandedContent}
          emergencyIcons={getEmergencyIcons}
          actionButtons={actionButtons}
          isLoading={isSearching}
          emptyStateMessage="No patients found"
          initialRowsPerPage={10}
          rowsPerPageOptions={[5, 10, 15, 20, 25, 30]}
          gridTemplateColumns="4% 12% 15% 8% 13% 20% 12% 7% 5%"
        />
      </div>

      {/* Drawers */}
      <AssignRNDrawer
        open={isAssignRNOpen}
        onClose={() => setIsAssignRNOpen(false)}
      />
      <NoteDrawer open={isNoteOpen} onClose={() => setIsNoteOpen(false)} />
    </div>
  );
};

export default ActivePatientTable;
