import { CaregiverIcon } from "@/components/ui/icons/CaregiverIcon";
import { EmergencyIcon } from "@/components/ui/icons/EmergencyIcon";
import { FaxIcon } from "@/components/ui/icons/FaxIcon";
import { StarIcon } from "@/components/ui/icons/StarIcon";
import { SupervisionIcon } from "@/components/ui/icons/SupervisionIcon";
import { FileText } from "lucide-react";
import { IconComponent } from "./icons";
import { CareIcon } from "@/components/ui/icons/CareIcon";
import { FileCheckIcon } from "@/components/ui/icons";
import { DischargedIcon } from "@/components/ui/icons/DischargedIcon";


export enum DocumentType_RN {
    PATIENT_CONTRACT = "PATIENT_CONTRACT",
    PRE_ASSESSMENT = "PRE_ASSESSMENT",
    NURSING_ASSESSMENT = "NURSING_ASSESSMENT",
    PLAN_OF_CARE = "PLAN_OF_CARE",
    PATIENT_EMERGENCY = "PATIENT_EMERGENCY",
    FOLLOW_UP_FIELD_SUPERVISION = "FOLLOW_UP_FIELD_SUPERVISION",
    FAX_TO_DOCTOR = "FAX_TO_DOCTOR",
    HOME_HEALTH_QUALITY_MEASURE = "HOME_HEALTH_QUALITY_MEASURE",
    DISCHARGE_TRANSFER = "DISCHARGE_TRANSFER",
}

export enum DocumentStatus {
    PENDING = "pending",
    INCOMPLETE = "incomplete",
    COMPLETE = "complete"
}

export interface DocumentConfig {
    title: string;
    icon: IconComponent;
    iconColor: string;
}


export const DOCUMENT_CONFIG_RN: Record<DocumentType_RN, DocumentConfig> = {
    [DocumentType_RN.PATIENT_CONTRACT]: {
        title: "Patient Contract",
        icon: FileText,
        iconColor: "text-[#FF9F0A]"
    },
    [DocumentType_RN.NURSING_ASSESSMENT]: {
        title: "Nursing Assessment",
        icon: CaregiverIcon,
        iconColor: "text-[#FF3D8C]"
    },
    [DocumentType_RN.PRE_ASSESSMENT]: {
        title: "Pre-Assessment",
        icon: FileCheckIcon,
        iconColor: "text-[#FFD60A]"
    },
    [DocumentType_RN.PLAN_OF_CARE]: {
        title: "Plan of Care",
        icon: CareIcon,
        iconColor: "text-[#bf5af2]"
    },
    [DocumentType_RN.PATIENT_EMERGENCY]: {
        title: "Patient Emergency",
        icon: EmergencyIcon,
        iconColor: "text-[#ff0d00]"
    },
    [DocumentType_RN.FOLLOW_UP_FIELD_SUPERVISION]: {
        title: "Follow Up Field Supervision",
        icon: SupervisionIcon,
        iconColor: "text-[#7E22CE]"
    },
    [DocumentType_RN.FAX_TO_DOCTOR]: {
        title: "Fax to Doctor",
        icon: FaxIcon,
        iconColor: "text-[#0071a4]"
    },
    [DocumentType_RN.HOME_HEALTH_QUALITY_MEASURE]: {
        title: "Home Health Quality Measure",
        icon: StarIcon,
        iconColor: "text-[#3fe0d0]"
    },
    [DocumentType_RN.DISCHARGE_TRANSFER]: {
        title: "Discharge / Transfer",
        icon: DischargedIcon,
        iconColor: "text-[#3FE0D0]"
    },
};

export interface DocumentItem {
    id: string;
    type: DocumentType_RN;
    status: DocumentStatus;
    date: string;
}

// Re-export to force TypeScript refresh
export { DocumentType_RN as DocumentTypeRefresh };