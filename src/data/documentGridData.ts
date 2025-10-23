import { DocumentItem, DocumentType, DocumentStatus } from "@/types/documents";

// Current date documents
export const documentGridData: DocumentItem[] = [
    {
        id: "pre-assessment",
        type: DocumentType.PRE_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "patient-contract",
        type: DocumentType.PATIENT_CONTRACT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },

    {
        id: "nursing-assessment",
        type: DocumentType.NURSING_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "plan-of-care",
        type: DocumentType.PLAN_OF_CARE,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "patient-emergency",
        type: DocumentType.PATIENT_EMERGENCY,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "field-supervision",
        type: DocumentType.FOLLOW_UP_FIELD_SUPERVISION,
        status: DocumentStatus.INCOMPLETE,
        date: "2025-03-20",
    },
    {
        id: "fax-to-doctor",
        type: DocumentType.FAX_TO_DOCTOR,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
    {
        id: "home-health-quality-measure",
        type: DocumentType.HOME_HEALTH_QUALITY_MEASURE,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
    {
        id: "discharge-transfer",
        type: DocumentType.DISCHARGE_TRANSFER,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
    {
        id: "reports-and-documents-upload",
        type: DocumentType.REPORTS_AND_DOCUMENTS_UPLOAD,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "authorization",
        type: DocumentType.AUTHORIZATION,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "dfs",
        type: DocumentType.DFS,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
];

// Previous date documents
export const previousDocumentGridData: DocumentItem[] = [
    {
        id: "pre-assessment-prev",
        type: DocumentType.PRE_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "patient-contract-prev",
        type: DocumentType.PATIENT_CONTRACT,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "nursing-assessment-prev",
        type: DocumentType.NURSING_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "plan-of-care-prev",
        type: DocumentType.PLAN_OF_CARE,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "patient-emergency-prev",
        type: DocumentType.PATIENT_EMERGENCY,
        status: DocumentStatus.INCOMPLETE,
        date: "2025-01-01",
    },
    {
        id: "field-supervision-prev",
        type: DocumentType.FOLLOW_UP_FIELD_SUPERVISION,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "fax-to-doctor-prev",
        type: DocumentType.FAX_TO_DOCTOR,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "home-health-quality-measure-prev",
        type: DocumentType.HOME_HEALTH_QUALITY_MEASURE,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "discharge-transfer-prev",
        type: DocumentType.DISCHARGE_TRANSFER,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "reports-and-documents-upload-prev",
        type: DocumentType.REPORTS_AND_DOCUMENTS_UPLOAD,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "authorization-prev",
        type: DocumentType.AUTHORIZATION,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
    {
        id: "dfs-prev",
        type: DocumentType.DFS,
        status: DocumentStatus.COMPLETE,
        date: "2025-01-01",
    },
];