import { SupervisionIcon, FaxIcon, EmergencyIcon, CaregiverIcon, CareIcon } from "@/components/ui/icons";
import { Star, FileText } from "lucide-react";
import { IconComponent } from "@/types/icons";

// Notification status types
export type NotificationStatus =
    | "Pending"
    | "Signed"
    | "Complete"
    | "In Progress"
    | "Overdue"
    | "Cancelled"
    | "Review Required"
    | "Incomplete";

// Status color mapping
export const STATUS_COLORS: Record<NotificationStatus, string> = {
    "Pending": "#AEAEB2",
    "Signed": "#30DB5B",
    "Complete": "#30DB5B",
    "In Progress": "#007AFF",
    "Overdue": "#FF0D00",
    "Cancelled": "#8E8E93",
    "Review Required": "#FF9F0A",
    "Incomplete": "#FF0D00"
};

// Notification item interface
export interface NotificationItem {
    id: string;
    icon: IconComponent;
    text: string;
    status: NotificationStatus;
    priority: "high" | "medium" | "low";
    category: "assessment" | "documentation" | "supervision" | "quality" | "emergency";
    patientId?: number;
    createdAt: string;
    dueDate?: string;
}

// Base notifications template - can be customized per patient
export const BASE_NOTIFICATIONS: Omit<NotificationItem, "id" | "patientId" | "createdAt">[] = [
    {
        icon: FileText,
        text: "Patient Contract",
        status: "Pending",
        priority: "high",
        category: "documentation",
        dueDate: "2025-01-15"
    },
    {
        icon: CaregiverIcon,
        text: "Nursing Assessment",
        status: "Pending",
        priority: "high",
        category: "assessment",
        dueDate: "2025-01-20"
    },
    {
        icon: CareIcon,
        text: "Plan of Care",
        status: "Pending",
        priority: "medium",
        category: "documentation",
        dueDate: "2025-01-25"
    },
    {
        icon: EmergencyIcon,
        text: "Patient Emergency",
        status: "Pending",
        priority: "high",
        category: "emergency",
        dueDate: "2025-01-18"
    },
    {
        icon: SupervisionIcon,
        text: "Follow Up Field Supervision",
        status: "Incomplete",
        priority: "medium",
        category: "supervision",
        dueDate: "2025-01-30"
    },
    {
        icon: FaxIcon,
        text: "Fax to Doctor",
        status: "Pending",
        priority: "low",
        category: "documentation",
        dueDate: "2025-02-05"
    },
    {
        icon: Star,
        text: "Home Health Quality Measure",
        status: "Pending",
        priority: "medium",
        category: "quality",
        dueDate: "2025-02-10"
    }
];

// Patient-specific notification overrides
export const PATIENT_NOTIFICATION_OVERRIDES: Record<number, Partial<Record<string, Partial<NotificationItem>>>> = {
    1: {
        "Patient Contract": { status: "Signed" },
        "Nursing Assessment": { status: "Complete" },
        "Plan of Care": { status: "Pending" },
        "Follow Up Field Supervision": { status: "Incomplete" }
    },
    2: {
        "Patient Contract": { status: "Overdue" },
        "Follow Up Field Supervision": { status: "Incomplete" },
        "Fax to Doctor": { status: "In Progress" }
    },
    3: {
        "Patient Contract": { status: "Signed" },
        "Patient Emergency": { status: "Complete" },
        "Home Health Quality Measure": { status: "In Progress" },
        "Follow Up Field Supervision": { status: "Incomplete" }
    }
};

// Utility function to generate notifications for a specific patient
export const getPatientNotifications = (patientId: number): NotificationItem[] => {
    const currentDate = new Date().toISOString();
    const overrides = PATIENT_NOTIFICATION_OVERRIDES[patientId] || {};

    return BASE_NOTIFICATIONS.map((notification, index) => {
        const override = overrides[notification.text] || {};

        return {
            id: `notification-${patientId}-${index}`,
            patientId,
            createdAt: currentDate,
            ...notification,
            ...override
        };
    });
};

// Utility function to filter notifications by priority or category
export const filterNotifications = (
    notifications: NotificationItem[],
    filters: {
        priority?: "high" | "medium" | "low";
        category?: string;
        status?: NotificationStatus;
        showTopPriority?: boolean;
    }
): NotificationItem[] => {
    let filtered = [...notifications];

    if (filters.priority) {
        filtered = filtered.filter(n => n.priority === filters.priority);
    }

    if (filters.category) {
        filtered = filtered.filter(n => n.category === filters.category);
    }

    if (filters.status) {
        filtered = filtered.filter(n => n.status === filters.status);
    }

    if (filters.showTopPriority) {
        // Show only high priority and overdue items
        filtered = filtered.filter(n =>
            n.priority === "high" ||
            n.status === "Overdue" ||
            n.status === "Review Required"
        );
    }

    return filtered;
};

// Utility function to get status color
export const getStatusColor = (status: NotificationStatus): string => {
    return STATUS_COLORS[status] || "#AEAEB2";
};