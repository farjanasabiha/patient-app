import { CaregiverIcon } from "@/components/ui/icons/CaregiverIcon";
import { EmergencyIcon } from "@/components/ui/icons/EmergencyIcon";
import { FaxIcon } from "@/components/ui/icons/FaxIcon";
import { StarIcon } from "@/components/ui/icons/StarIcon";
import { SupervisionIcon } from "@/components/ui/icons/SupervisionIcon";
import { FileText, Clock } from "lucide-react";
import { IconComponent } from "./icons";
import { CareIcon } from "@/components/ui/icons/CareIcon";
import { FileCheckIcon } from "@/components/ui/icons";
import { DischargedIcon } from "@/components/ui/icons/DischargedIcon";


export enum DocumentType {
    PATIENT_CONTRACT = "PATIENT_CONTRACT",
    PRE_ASSESSMENT = "PRE_ASSESSMENT",
    NURSING_ASSESSMENT = "NURSING_ASSESSMENT",
    PLAN_OF_CARE = "PLAN_OF_CARE",
    PATIENT_EMERGENCY = "PATIENT_EMERGENCY",
    FOLLOW_UP_FIELD_SUPERVISION = "FOLLOW_UP_FIELD_SUPERVISION",
    FAX_TO_DOCTOR = "FAX_TO_DOCTOR",
    HOME_HEALTH_QUALITY_MEASURE = "HOME_HEALTH_QUALITY_MEASURE",
    DISCHARGE_TRANSFER = "DISCHARGE_TRANSFER",
    REPORTS_AND_DOCUMENTS_UPLOAD = "REPORTS_AND_DOCUMENTS_UPLOAD",
    AUTHORIZATION = "AUTHORIZATION",
    DFS = "DFS",
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

export const DOCUMENT_CONFIG: Record<DocumentType, DocumentConfig> = {
    [DocumentType.PATIENT_CONTRACT]: {
        title: "Patient Contract",
        icon: FileText,
        iconColor: "text-[#FF9F0A]"
    },
    [DocumentType.NURSING_ASSESSMENT]: {
        title: "Nursing Assessment",
        icon: CaregiverIcon,
        iconColor: "text-[#FF3D8C]"
    },
    [DocumentType.PRE_ASSESSMENT]: {
        title: "Pre-Assessment",
        icon: FileCheckIcon,
        iconColor: "text-[#FFD60A]"
    },
    [DocumentType.PLAN_OF_CARE]: {
        title: "Plan of Care",
        icon: CareIcon,
        iconColor: "text-[#bf5af2]"
    },
    [DocumentType.PATIENT_EMERGENCY]: {
        title: "Patient Emergency",
        icon: EmergencyIcon,
        iconColor: "text-[#ff0d00]"
    },
    [DocumentType.FOLLOW_UP_FIELD_SUPERVISION]: {
        title: "Follow Up Field Supervision",
        icon: SupervisionIcon,
        iconColor: "text-[#7E22CE]"
    },
    [DocumentType.FAX_TO_DOCTOR]: {
        title: "Fax to Doctor",
        icon: FaxIcon,
        iconColor: "text-[#0071a4]"
    },
    [DocumentType.HOME_HEALTH_QUALITY_MEASURE]: {
        title: "Home Health Quality Measure",
        icon: StarIcon,
        iconColor: "text-[#3fe0d0]"
    },
    [DocumentType.DISCHARGE_TRANSFER]: {
        title: "Discharge / Transfer",
        icon: DischargedIcon,
        iconColor: "text-[#3FE0D0]"
    },
    [DocumentType.REPORTS_AND_DOCUMENTS_UPLOAD]: {
        title: "Reports and Documents Upload",
        icon: FileText,
        iconColor: "text-[#248A3D]"
    },
    [DocumentType.AUTHORIZATION]: {
        title: "Authorization",
        icon: FileCheckIcon,
        iconColor: "text-[#0071a4]"
    },
    [DocumentType.DFS]: {
        title: "DFS",
        icon: Clock,
        iconColor: "text-[#7EC000]"
    }
};

export interface DocumentItem {
    id: string;
    type: DocumentType;
    status: DocumentStatus;
    date: string;
}

// Re-export to force TypeScript refresh
export { DocumentType as DocumentTypeRefresh };