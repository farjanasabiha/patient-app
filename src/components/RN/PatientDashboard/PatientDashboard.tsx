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
import { Suspense } from "react";
import activePatientData from "@/data/ActivePatientData";
import type { ActivePatient } from "@/data/ActivePatientData";
import { currentPatientProfile } from "@/data/CurrentPatientProfile";
import { documentGridDataRN } from "@/data/documentGridDataRN";
import { IconComponent } from "@/types/icons";
import { ROUTES_RN } from "@/lib/constants";
import { useAuth } from "@/context/AuthContext";
import { filterDocumentsByRoleRN } from "./documentFilterUtilsRN";
import Notifications from "@/components/PatientDashboard/Notifications";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";
import { DOCUMENT_CONFIG_RN, DocumentItem, DocumentType_RN } from "@/types/documentsRN";

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

  const currentDate = "2025-03-20";

  // Wait for user to hydrate to avoid role-based flicker/break
  if (user === undefined) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-[#e2f7ff] rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-32 bg-white rounded-lg animate-pulse" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const filteredCurrentDocuments = filterDocumentsByRoleRN(
    documentGridDataRN,
    user?.role,
    !!propPatientId
  );

  const handleDocumentClick = (document: DocumentItem) => {
    // Use the prop patientId if provided, otherwise use the one from URL params
    let patientIdForRoute = propPatientId || Number(params.id);
    
    // If patientId is NaN and we have a patient object with an ID, use that
    if (isNaN(patientIdForRoute) && patient?.id) {
      patientIdForRoute = patient.id;
    }
    
    // If still NaN, log error and return early
    if (isNaN(patientIdForRoute)) {
      console.error('Cannot navigate: Patient ID is not available');
      return;
    }

    switch (document.id) {
      case "pre-assessment":
        router.push(`${ROUTES_RN.PRE_ASSESSMENT}/${patientIdForRoute}`);
        break;
      case "patient-contract":
        router.push(`${ROUTES_RN.PATIENT_CONTRACT}/${patientIdForRoute}`);
        break;
      case "nursing-assessment":
        router.push(`${ROUTES_RN.NURSING_ASSESSMENT}/${patientIdForRoute}`);
        break;
      case "plan-of-care":
        router.push(`${ROUTES_RN.PLAN_OF_CARE}/${patientIdForRoute}`);
        break;
      case "patient-emergency":
        router.push(`${ROUTES_RN.PATIENT_EMERGENCY}/${patientIdForRoute}`);
        break;
      case "field-supervision":
        router.push(`${ROUTES_RN.FOLLOW_UP_FIELD_SUPERVISION}/${patientIdForRoute}`);
        break;
      case "home-health-quality-measure":
        router.push(`${ROUTES_RN.HOME_HEALTH_QUALITY_MEASURE}/${patientIdForRoute}`);
        break;
      case "fax-to-doctor":
        router.push(`${ROUTES_RN.FAX_TO_DOCTOR}/${patientIdForRoute}`);
        break;
      case "discharge-transfer":
        router.push(`${ROUTES_RN.DISCHARGE_TRANSFER}/${patientIdForRoute}`);
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
          id: parsedData.id || Date.now(), // Ensure ID exists for navigation
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
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-[#1c1c1e]">
          {propPatientId ? "My Dashboard" : "Patient Dashboard"}
        </h1>
      </div>

      {/* Patient Info and Attention Required Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Patient Info Card */}
        <div className=" p-3 bg-[#f8fbff] rounded-md flex flex-col justify-start items-start gap-2.5">
          <div className="w-full flex flex-col md:flex-row justify-start items-start gap-3">
            <div className="relative w-16 h-16">
              <div className="w-16 h-16 bg-zinc-300 rounded-full border-[1.38px] border-white" />
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-white rounded-full border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                <Camera className="w-3 h-3 text-gray-600" />
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center items-start gap-3">
              <div className="space-y-3">
                <div className="text-zinc-900 text-sm font-semibold">
                  {patient.name}
                </div>
                <div className="flex justify-start items-center gap-3">
                  <div className="px-2 py-1 bg-violet-200 rounded-2xl flex justify-center items-center gap-2.5">
                    <div className="text-indigo-500 text-[10px] font-semibold">
                      {patient.location}
                    </div>
                  </div>
                  <div className="px-2 py-1 bg-green-500 rounded-2xl flex justify-center items-center gap-2.5">
                    <div className="text-white text-[10px] font-semibold">
                      Active
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-start items-start gap-6">
                <div className="flex-1 flex flex-col justify-start items-start gap-0.5 space-y-4">
                  <div className="w-full flex justify-start items-start gap-0.5">
                    <div className="w-12 text-zinc-900 text-xs font-semibold">
                      DOB:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs font-normal">
                      {patient.dob}
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-0.5">
                    <div className="w-12 text-zinc-900 text-xs font-semibold">
                      Age:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs font-normal">
                      XX years
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-0.5">
                    <div className="w-12 text-zinc-900 text-xs font-semibold">
                      Phone:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs font-normal">
                      {patient.phoneNumber}
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-0.5">
                    <div className="w-12 text-zinc-900 text-xs font-semibold">
                      Email:
                    </div>
                    <div className="flex-1 text-zinc-900 text-xs font-normal">
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


      {/* Documents Grid */}
      <div className="bg-[#e2f7ff] rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredCurrentDocuments.map((item) => {
            const config = DOCUMENT_CONFIG_RN[item.type];

            return (
              <div
                key={item.id}
                onClick={() => handleDocumentClick(item)}
                className={`rounded-lg p-4 transition-colors text-left cursor-pointer ${
                  item.status === "complete"
                    ? "bg-white hover:bg-[#F2E9FA]"
                    : "bg-white hover:bg-[#FFCFCC]"
                }`}
              >
                {/* Top row with icon and status */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-9 h-9 flex items-center justify-center">
                    <IconWrapper
                      icon={config.icon}
                      className={config.iconColor}
                    />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs text-white capitalize ${
                      item.status === "complete"
                        ? "bg-[#30DB5B]"
                        : item.status === "incomplete"
                        ? "bg-[#FF0D00]"
                        : "bg-[#D1D1D6]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                {/* Bottom row with title and action buttons */}
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">{config.title}</h3>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("View document");
                      }}
                    >
                      <FileText className="text-[#3fe0d0]" size={18} />
                    </button>
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Preview document");
                      }}
                    >
                      <Eye className="text-[#0040dd]" size={18} />
                    </button>
                    <button
                      type="button"
                      className="bg-[#f2fbff] p-2 rounded-lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        console.log("Edit document");
                      }}
                    >
                      <FileEdit className="text-[#248a3d]" size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Loading fallback component
function PatientDashboardLoading() {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex items-center gap-2 text-sm mb-4">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
        <span className="text-gray-400">&gt;</span>
        <div className="h-4 w-40 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2 h-32 bg-gray-200 rounded-[6px] animate-pulse" />
        <div className="h-64 bg-gray-200 rounded-[6px] animate-pulse" />
      </div>

      <div className="flex items-center mb-0">
        <div className="ml-4 h-6 w-6 bg-gray-200 rounded animate-pulse" />
        <div className="flex items-center gap-4 ml-3">
          <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
        </div>
      </div>

      <div className="bg-[#e2f7ff] rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-32 bg-white rounded-lg animate-pulse" />
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