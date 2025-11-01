"use client";
import {
  FileText,
  Eye,
  FileEdit,
  Star,
  AlertCircle,
  ClipboardList,
  Briefcase,
  Camera,
} from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import activePatientData from "@/data/ActivePatientData";
import type { ActivePatient } from "@/data/ActivePatientData";
import { currentPatientProfile } from "@/data/CurrentPatientProfile";
import {
  documentGridData,
  previousDocumentGridData,
} from "@/data/documentGridData";
import { AssignRNDrawer } from "./AssignRNDrawer";
import { NoteDrawer } from "./NoteDrawer";
import { IconComponent } from "@/types/icons";
import { DocumentItem, DOCUMENT_CONFIG } from "@/types/documents";
import { useAuth } from "@/context/AuthContext";
import { filterDocumentsByRole } from "./documentFilterUtils";
import Notifications from "@/components/PatientDashboard/Notifications";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { CaregiverIcon, CopyFileIcon } from "@/components/ui/icons";
import PlusIcon from "@/components/ui/icons/PlusIcon";
import { ROUTES } from "@/lib/constants";

const IconWrapper = ({
  icon: Icon,
  className,
}: {
  icon: IconComponent;
  className: string;
}) => {
  const isLucideIcon =
    typeof Icon === "function" && Icon.toString().includes("lucide-react");

  if (isLucideIcon) {
    return <Icon className={className} size={28} />;
  }

  return <Icon className={`w-7 h-7 ${className}`} />;
};

// Separate component that uses useSearchParams
function PatientDashboardContent({
  patientId: propPatientId,
}: {
  patientId?: number;
}) {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { user } = useAuth(); // Get the current user from AuthContext
  const [activeTab, setActiveTab] = useState<"current" | "previous">("current");
  const [isAssignRNDrawerOpen, setIsAssignRNDrawerOpen] = useState(false);
  const [isNoteDrawerOpen, setIsNoteDrawerOpen] = useState(false);

  const currentDate = "2025-03-20";
  const previousDate = "2025-01-01";

  // Wait for user to hydrate to avoid role-based flicker/break
  if (user === undefined) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-[#e2f7ff] rounded-lg p-3 sm:p-4 md:p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-28 sm:h-32 bg-white rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const filteredCurrentDocuments = filterDocumentsByRole(
    documentGridData,
    user?.role,
    !!propPatientId
  );
  const filteredPreviousDocuments = filterDocumentsByRole(
    previousDocumentGridData,
    user?.role,
    !!propPatientId
  );

  const displayedDocuments =
    activeTab === "current"
      ? filteredCurrentDocuments
      : filteredPreviousDocuments;

  const handleDocumentClick = (document: DocumentItem) => {
    // Use the prop patientId if provided, otherwise use the one from URL params
    const actualPatientId = propPatientId || Number(params.id);

    switch (document.id) {
      case "pre-assessment":
        router.push(`${ROUTES.PRE_ASSESSMENT}/${actualPatientId}`);
        break;
      case "patient-contract":
        router.push(`${ROUTES.PATIENT_CONTRACT}/${actualPatientId}`);
        break;
      case "nursing-assessment":
        router.push(`${ROUTES.NURSING_ASSESSMENT}/${actualPatientId}`);
        break;
      case "plan-of-care":
        router.push(`${ROUTES.PLAN_OF_CARE}/${actualPatientId}`);
        break;
      case "patient-emergency":
        router.push(`${ROUTES.PATIENT_EMERGENCY}/${actualPatientId}`);
        break;
      case "field-supervision":
        router.push(`${ROUTES.FOLLOW_UP_FIELD_SUPERVISION}/${actualPatientId}`);
        break;
      case "home-health-quality-measure":
        router.push(`${ROUTES.HOME_HEALTH_QUALITY_MEASURE}/${actualPatientId}`);
        break;
      case "fax-to-doctor":
        router.push(`${ROUTES.FAX_TO_DOCTOR}/${actualPatientId}`);
        break;
      case "discharge-transfer":
        router.push(`${ROUTES.DISCHARGE_TRANSFER}/${actualPatientId}`);
        break;
      case "reports-and-documents-upload":
        router.push(`${ROUTES.REPORTS_AND_DOCUMENTS_UPLOAD}/${actualPatientId}`);
        break;
      case "authorization":
        router.push(`${ROUTES.AUTHORIZATION}/${actualPatientId}`);
        break;
      case "dfs":
        router.push(`${ROUTES.DFS}/${actualPatientId}`);
        break;
      default:
        console.log(`Route not implemented for document: ${document.id}`);
    }
  };

  const actualPatientId = propPatientId || Number(params.id);
  let patient = activePatientData.find((p) => p.id === actualPatientId);

  // Check if this is coming from pre-assessment form
  const sourceParam = propPatientId ? null : searchParams?.get("source");
  
  // Try to get patient data from sessionStorage if coming from pre-assessment or if no patient found
  if (!patient && (sourceParam === "pre-assessment" || isNaN(actualPatientId))) {
    try {
      const storedPatientData = sessionStorage.getItem('currentPatientData');
      if (storedPatientData) {
        const parsedData = JSON.parse(storedPatientData);
        // Ensure the patient data has all required fields with defaults
        patient = {
          ...parsedData,
          name: parsedData.name || 'Unknown Patient',
          dob: parsedData.dob || 'Unknown',
          phoneNumber: parsedData.phoneNumber || 'Not provided',
          email: parsedData.email || 'Not provided',
          location: parsedData.location || 'Unknown',
          country: parsedData.country || 'USA',
          startOfCare: parsedData.startOfCare || new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
          diagnosisCodes: parsedData.diagnosisCodes || [],
          diagnosisNames: parsedData.diagnosisNames || [],
          servicesProvided: parsedData.servicesProvided || 'Home Health Services',
          payerSource: parsedData.payerSource || 'Insurance',
          status: parsedData.status || 'Not Signed',
          onOxygen: parsedData.onOxygen || false,
          fallRisk: parsedData.fallRisk || false,
          needsWheelchair: parsedData.needsWheelchair || false,
          onVentilator: parsedData.onVentilator || false,
        } as ActivePatient;
      }
    } catch (error) {
      console.error('Error parsing stored patient data:', error);
    }
  }

  // Fallback: if not found in roster but this is the self dashboard (or matching current profile id),
  // synthesize a patient object from currentPatientProfile so the UI can render in demo mode.
  if (
    !patient &&
    (actualPatientId === currentPatientProfile.id ||
      propPatientId === currentPatientProfile.id)
  ) {
    patient = {
      id: currentPatientProfile.id,
      mrn: currentPatientProfile.mrn,
      name: currentPatientProfile.name,
      dob: currentPatientProfile.dob,
      phoneNumber: currentPatientProfile.phoneNumber,
      email: currentPatientProfile.email,
      location:
        currentPatientProfile.state || currentPatientProfile.city || "Georgia",
      startOfCare: currentPatientProfile.startOfCare || "",
      diagnosisCodes: currentPatientProfile.primaryDiagnosis
        ? [currentPatientProfile.primaryDiagnosis]
        : [],
      diagnosisNames: currentPatientProfile.primaryDiagnosis
        ? [currentPatientProfile.primaryDiagnosis]
        : [],
      servicesProvided: currentPatientProfile.servicesProvided || "",
      payerSource: currentPatientProfile.payerSource || "",
      status: currentPatientProfile.status || "Signed",
      onOxygen: currentPatientProfile.onOxygen,
      fallRisk: currentPatientProfile.fallRisk,
      needsWheelchair: currentPatientProfile.needsWheelchair,
      onVentilator: currentPatientProfile.onVentilator,
    } as ActivePatient;
  }

  // Determine source for breadcrumb via next/navigation hook
  // For prop-based patient dashboard, we don't show breadcrumbs
  const sourceLabel =
    sourceParam === "discharged" ? "Discharged Patients" : 
    sourceParam === "pre-assessment" ? "Pre-Assessment" : "Patient Roster";
  const sourceHref =
    sourceParam === "discharged" ? "/discharged-patients" : 
    sourceParam === "pre-assessment" ? "/pre-assessment" : "/";

  if (!patient) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="flex flex-col items-center gap-2">
          <span className="font-poppins text-sm text-[#8E8E93]">
            Patient not found
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      {!propPatientId && (
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: sourceLabel, href: sourceHref },
              { label: `${patient.name}\'s Dashboard`, active: true },
            ]}
          />
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1c1c1e]">
          {propPatientId ? "My Dashboard" : "Patient Dashboard"}
        </h1>
      </div>

      {/* Patient Info and Attention Required Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
        {/* Patient Info Card */}
        <div className="p-3 sm:p-4 bg-[#f8fbff] rounded-md flex flex-col justify-start items-start gap-2.5">
          <div className="w-full flex justify-start items-start gap-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-zinc-300 rounded-full border-[1.38px] border-white" />
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Camera className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-600" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-2 sm:gap-3 min-w-0">
              <div className="space-y-2 sm:space-y-3 w-full">
                <div className="text-zinc-900 text-sm sm:text-base font-semibold truncate">
                  {patient.name}
                </div>
                <div className="flex justify-start items-center gap-2 sm:gap-3 flex-wrap">
                  <div className="px-2 py-1 bg-violet-200 rounded-2xl flex justify-center items-center gap-2.5">
                    <div className="text-indigo-500 text-[10px] sm:text-xs font-semibold">
                      {patient.location}
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-500 rounded-2xl flex justify-center items-center gap-2.5">
                    <div className="text-white text-[10px] sm:text-xs font-semibold">
                      Active
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-start">
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 space-y-2 sm:space-y-4">
                  <div className="w-full flex justify-start items-start gap-1 sm:gap-2">
                    <div className="w-14 sm:w-16 text-zinc-900 text-xs sm:text-sm font-semibold flex-shrink-0">
                      DOB:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs sm:text-sm font-normal break-words">
                      {patient.dob}
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-1 sm:gap-2">
                    <div className="w-14 sm:w-16 text-zinc-900 text-xs sm:text-sm font-semibold flex-shrink-0">
                      Age:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs sm:text-sm font-normal">
                      XX years
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-1 sm:gap-2">
                    <div className="w-14 sm:w-16 text-zinc-900 text-xs sm:text-sm font-semibold flex-shrink-0">
                      Phone:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs sm:text-sm font-normal break-all">
                      {patient.phoneNumber}
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-1 sm:gap-2">
                    <div className="w-14 sm:w-16 text-zinc-900 text-xs sm:text-sm font-semibold flex-shrink-0">
                      Email:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs sm:text-sm font-normal break-all">
                      {patient.email}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <Notifications
          items={[
            {
              icon: FileText,
              text: "Patient Contract",
              status: patient.status,
            },
            {
              icon: ClipboardList,
              text: "Nursing Assessment",
              status: "Pending",
            },
            {
              icon: FileText,
              text: "Plan of Care",
              status: "completed",
            },
            {
              icon: AlertCircle,
              text: "Patient Emergency",
              status: "incomplete",
            },
            {
              icon: ClipboardList,
              text: "Initial Field Supervision",
              status: "Pending",
            },
            {
              icon: Briefcase,
              text: "Fax to Doctor",
              status: "Pending",
            },
            {
              icon: Star,
              text: "Home Health Quality Measure",
              status: "Pending",
            },
          ]}
        />
      </div>

      {/* Action Buttons - Only show for healthcare professionals, not patients */}
      {user?.role !== "Patient" && (
        <div className="py-4 sm:py-6">
          <div className="w-full flex justify-start items-center gap-2 sm:gap-3 flex-wrap">
            <div
              className="p-2 sm:px-3 sm:py-2 bg-teal-50 rounded-3xl border border-teal-400 inline-flex justify-start items-center gap-1 sm:gap-2 hover:bg-teal-200 transition-colors cursor-pointer group"
              onClick={() => setIsAssignRNDrawerOpen(true)}
            >
              <CaregiverIcon
                width={20}
                height={20}
                className="text-teal-400 group-hover:text-white sm:w-6 sm:h-6"
              />
              <div className="text-teal-400 text-xs sm:text-sm font-semibold group-hover:text-white">
                Assign RN
              </div>
            </div>
            <div
              className="p-2 sm:px-3 sm:py-2 bg-orange-50 rounded-3xl border border-amber-500 inline-flex justify-start items-center gap-1 sm:gap-2 hover:bg-amber-200 transition-colors cursor-pointer group"
              onClick={() => setIsNoteDrawerOpen(true)}
            >
              <CopyFileIcon

                width={18}
                height={18}
                className="text-amber-500 group-hover:text-white sm:w-5 sm:h-5"
              />
              <div className="text-amber-500 text-xs sm:text-sm font-semibold group-hover:text-white">
                Notes
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Date Section - Only show for healthcare professionals, not patients */}
      {user?.role !== "Patient" && (
        <div className="flex items-center mb-0 overflow-x-auto">
          <button className="ml-2 sm:ml-4 flex-shrink-0">
            <PlusIcon className="text-[#8E8E93] w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-3">
            <button
              onClick={() => setActiveTab("current")}
              className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-t-lg transition-colors cursor-pointer text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "current"
                  ? "bg-[#E2F7FF]"
                  : "bg-white text-[#8E8E93]"
              }`}
            >
              Current {currentDate}
            </button>
            <button
              onClick={() => setActiveTab("previous")}
              className={`relative px-2 sm:px-3 py-1.5 sm:py-2 rounded-t-lg transition-colors cursor-pointer text-xs sm:text-sm whitespace-nowrap ${
                activeTab === "previous"
                  ? "bg-[#E2F7FF]"
                  : "bg-white text-[#8E8E93]"
              }`}
            >
              {previousDate}
            </button>
          </div>
        </div>
      )}

      {/* Documents Grid */}
      <div className="bg-[#e2f7ff] rounded-lg p-3 sm:p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {displayedDocuments.map((item) => {
            const config = DOCUMENT_CONFIG[item.type];
            const isSimpleDocument = [
              "REPORTS_AND_DOCUMENTS_UPLOAD",
              "AUTHORIZATION",
              "DFS",
            ].includes(item.type);

            return (
              <div
                key={item.id}
                onClick={() => handleDocumentClick(item)}
                className={`rounded-lg p-3 sm:p-4 transition-colors text-left cursor-pointer ${
                  isSimpleDocument
                    ? "bg-white hover:bg-[#F8F9FA]"
                    : item.status === "complete"
                    ? "bg-white hover:bg-[#F2E9FA]"
                    : "bg-white hover:bg-[#FFCFCC]"
                }`}
              >
                {/* Top row with icon and status */}
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center flex-shrink-0">
                    <IconWrapper
                      icon={config.icon}
                      className={config.iconColor}
                    />
                  </div>
                  {!isSimpleDocument && (
                    <span
                      className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs text-white capitalize flex-shrink-0 ${
                        item.status === "complete"
                          ? "bg-[#30DB5B]"
                          : item.status === "incomplete"
                          ? "bg-[#FF0D00]"
                          : "bg-[#D1D1D6]"
                      }`}
                    >
                      {item.status}
                    </span>
                  )}
                </div>
                {/* Bottom row with title and action buttons */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0">
                  <h3 className="font-semibold text-sm sm:text-base flex-1 min-w-0 pr-2">{config.title}</h3>
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0">
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-1.5 sm:p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("View document");
                      }}
                    >
                      <FileText className="text-[#3fe0d0]" size={16} />
                    </button>
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-1.5 sm:p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Preview document");
                      }}
                    >
                      <Eye className="text-[#0040dd]" size={16} />
                    </button>
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-1.5 sm:p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Edit document");
                      }}
                    >
                      <FileEdit className="text-[#248a3d]" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AssignRN Drawer */}
      <AssignRNDrawer
        open={isAssignRNDrawerOpen}
        onClose={() => setIsAssignRNDrawerOpen(false)}
        patient={patient}
      />

      {/* Note Drawer */}
      <NoteDrawer
        open={isNoteDrawerOpen}
        onClose={() => setIsNoteDrawerOpen(false)}
        patient={patient}
      />
    </div>
  );
}

// Loading fallback component
function PatientDashboardLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center gap-2 text-xs sm:text-sm mb-3 sm:mb-4">
        <div className="h-3 sm:h-4 w-24 sm:w-32 bg-gray-200 rounded animate-pulse" />
        <span className="text-gray-400">&gt;</span>
        <div className="h-3 sm:h-4 w-32 sm:w-40 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <div className="h-6 sm:h-8 w-36 sm:w-48 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <div className="lg:col-span-2 h-32 sm:h-40 bg-gray-200 rounded-[6px] animate-pulse" />
        <div className="h-48 sm:h-64 bg-gray-200 rounded-[6px] animate-pulse" />
      </div>

      <div className="flex items-center mb-0">
        <div className="ml-2 sm:ml-4 h-5 w-5 sm:h-6 sm:w-6 bg-gray-200 rounded animate-pulse" />
        <div className="flex items-center gap-2 sm:gap-4 ml-2 sm:ml-3">
          <div className="h-6 sm:h-8 w-20 sm:w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-6 sm:h-8 w-16 sm:w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="bg-[#e2f7ff] rounded-lg p-3 sm:p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-28 sm:h-32 bg-white rounded-lg animate-pulse" />
          ))}
        </div>
      </div>
    </div>
  );
}

// Main component with Suspense boundary
const PatientDashboard = ({ patientId }: { patientId?: number }) => {
  return (
    <Suspense fallback={<PatientDashboardLoading />}>
      <PatientDashboardContent patientId={patientId} />
    </Suspense>
  );
};
export default PatientDashboard;