import { DocumentItem } from "@/types/documents";
import { UserRole } from "@/data/demoUsers";
import { DocumentType } from "@/types/documents";

/**
 * Filter documents based on user role and view context
 * @param documents - Array of documents to filter
 * @param role - User role (Patient, Caregiver, RN, SuperAdmin)
 * @param isPatientView - Whether this is a patient viewing their own dashboard
 * @returns Filtered array of documents based on role-based access rules
 */
export const filterDocumentsByRole = (
  documents: DocumentItem[],
  role: UserRole | undefined,
  isPatientView: boolean
): DocumentItem[] => {
  // If it's a patient viewing their own dashboard, show only specific documents
  if (isPatientView) {
    return documents.filter(doc =>
      doc.type === DocumentType.HOME_HEALTH_QUALITY_MEASURE
    );
  }

  // If no user role is available, show all documents (default behavior)
  if (!role) {
    return documents;
  }

  // Filter documents based on user role
  switch (role) {
    case "Patient":
      // Patients should only see Patient Admission Packet and Home Health Quality Measure
      return documents.filter(doc =>
        doc.type === DocumentType.HOME_HEALTH_QUALITY_MEASURE
      );

    case "Caregiver":
      // Caregivers should see Plan of Care, Follow Up Field Supervision, and Home Health Quality Measure
      return documents.filter(doc =>
        doc.type === DocumentType.PLAN_OF_CARE ||
        doc.type === DocumentType.FOLLOW_UP_FIELD_SUPERVISION ||
        doc.type === DocumentType.HOME_HEALTH_QUALITY_MEASURE
      );

    case "RN":
      // RNs should see all documents except Incident Reports, DFS, Communication, and Patient Admission Packet
      return documents.filter(doc =>
        doc.type !== DocumentType.DFS
      );

    case "SuperAdmin":
      // SuperAdmins see all documents except Patient Admission Packet (patient-only)
      return documents.filter(doc =>
        doc.type !== DocumentType.REPORTS_AND_DOCUMENTS_UPLOAD
      );

    default:
      // For any other role, show all documents except Patient Admission Packet
      return documents.filter(doc =>
        doc.type !== DocumentType.REPORTS_AND_DOCUMENTS_UPLOAD
      );
  }
};