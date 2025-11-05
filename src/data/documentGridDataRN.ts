import { DocumentItem, DocumentType_RN, DocumentStatus } from "@/types/documentsRN";

// Current date documents for RN
export const documentGridDataRN: DocumentItem[] = [
    {
        id: "pre-assessment",
        type: DocumentType_RN.PRE_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "patient-contract",
        type: DocumentType_RN.PATIENT_CONTRACT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "nursing-assessment",
        type: DocumentType_RN.NURSING_ASSESSMENT,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "plan-of-care",
        type: DocumentType_RN.PLAN_OF_CARE,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "patient-emergency",
        type: DocumentType_RN.PATIENT_EMERGENCY,
        status: DocumentStatus.COMPLETE,
        date: "2025-03-20",
    },
    {
        id: "field-supervision",
        type: DocumentType_RN.FOLLOW_UP_FIELD_SUPERVISION,
        status: DocumentStatus.INCOMPLETE,
        date: "2025-03-20",
    },
    {
        id: "fax-to-doctor",
        type: DocumentType_RN.FAX_TO_DOCTOR,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
    {
        id: "home-health-quality-measure",
        type: DocumentType_RN.HOME_HEALTH_QUALITY_MEASURE,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
    {
        id: "discharge-transfer",
        type: DocumentType_RN.DISCHARGE_TRANSFER,
        status: DocumentStatus.PENDING,
        date: "2025-03-20",
    },
];
