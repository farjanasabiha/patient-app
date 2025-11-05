import { DocumentItem, DocumentType_RN } from "@/types/documentsRN";
import { UserRole } from "@/data/demoUsers";

/**
 * Filter documents based on user role and view context for RN
 * @param documents - Array of RN documents to filter
 * @param role - User role (Patient, Caregiver, RN, SuperAdmin)
 * @param isPatientView - Whether this is a patient viewing their own dashboard
 * @returns Filtered array of documents based on role-based access rules
 */
export const filterDocumentsByRoleRN = (
  documents: DocumentItem[],
  role: UserRole | undefined,
  isPatientView: boolean
): DocumentItem[] => {
  // If it's a patient viewing their own dashboard, show only specific documents
  if (isPatientView) {
    return documents.filter(doc =>
      doc.type === DocumentType_RN.HOME_HEALTH_QUALITY_MEASURE
    );
  }

  // If no user role is available, show all documents (default behavior)
  if (!role) {
    return documents;
  }

  // Filter documents based on user role
  switch (role) {
    case "Patient":
      // Patients should only see Home Health Quality Measure
      return documents.filter(doc =>
        doc.type === DocumentType_RN.HOME_HEALTH_QUALITY_MEASURE
      );

    case "Caregiver":
      // Caregivers should see Plan of Care, Follow Up Field Supervision, and Home Health Quality Measure
      return documents.filter(doc =>
        doc.type === DocumentType_RN.PLAN_OF_CARE ||
        doc.type === DocumentType_RN.FOLLOW_UP_FIELD_SUPERVISION ||
        doc.type === DocumentType_RN.HOME_HEALTH_QUALITY_MEASURE
      );

    case "RN":
      // RNs should see all RN documents (Reports and Documents Upload, Authorization, and DFS are already excluded from DocumentType_RN)
      return documents;

    case "SuperAdmin":
      // SuperAdmins see all RN documents
      return documents;

    default:
      // For any other role, show all RN documents
      return documents;
  }
};
