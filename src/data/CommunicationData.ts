export interface Communication {
    id: number;
    date: string;
    time: string;
    details: string;
    patientId: number;
    communicatedBy: string;
    type: "Phone Call" | "Email" | "In-Person" | "Video Call" | "Text Message";
    priority: "Low" | "Medium" | "High" | "Urgent";
    status: "Pending" | "In Progress" | "Completed" | "Follow-up Required";
    createdAt: string;
    updatedAt: string;
}

export const communicationData: Communication[] = [
    {
        id: 1,
        date: "03/15/2024",
        time: "2:30 PM",
        details: "A scheduled phone call was made to the patient’s daughter to review the updated medication schedule and confirm the upcoming cardiology appointment. The family member requested clarification about evening dosage timing and transport arrangements. All concerns were addressed, and an appointment reminder was sent via email. The family expressed appreciation for the proactive communication.",
        patientId: 1,
        communicatedBy: "Sarah Johnson, RN",
        type: "Phone Call",
        priority: "Medium",
        status: "Completed",
        createdAt: "2024-03-15T14:30:00Z",
        updatedAt: "2024-03-15T14:30:00Z",
    },
    {
        id: 2,
        date: "03/14/2024",
        time: "8:45 AM",
        details: "An email exchange was initiated with the attending physician to discuss proposed modifications in the patient’s care plan following recent mobility challenges. Recommendations included increased physical therapy sessions and adjustment of pain medication. Awaiting physician’s formal approval and orders before implementing changes. Follow-up reminder set for the next clinical review meeting.",
        patientId: 1,
        communicatedBy: "Michael Brown, CNA",
        type: "Email",
        priority: "High",
        status: "Follow-up Required",
        createdAt: "2024-03-14T08:45:00Z",
        updatedAt: "2024-03-16T10:15:00Z",
    },
    {
        id: 3,
        date: "03/13/2024",
        time: "11:15 AM",
        details: "An in-person family meeting was conducted with the patient’s spouse and adult children to review the patient’s progress, rehabilitation outcomes, and potential discharge planning. Social worker provided resources for home care services and explained insurance coverage. Family asked questions regarding safety precautions at home, which were addressed by the care team. Consensus was reached to reassess discharge readiness in two weeks.",
        patientId: 1,
        communicatedBy: "Emma Wilson, Social Worker",
        type: "In-Person",
        priority: "High",
        status: "Completed",
        createdAt: "2024-03-13T11:15:00Z",
        updatedAt: "2024-03-13T12:00:00Z",
    },
    {
        id: 4,
        date: "03/12/2024",
        time: "4:20 PM",
        details: "A follow-up phone call was made to check on the patient’s response after starting a new antihypertensive medication. The patient reported mild dizziness on the first day, but symptoms subsided by the following morning. No serious adverse reactions were noted. The patient was advised to continue monitoring blood pressure at home, keep a symptom log, and report any recurring dizziness. Pharmacist documented the update in the medical record.",
        patientId: 2,
        communicatedBy: "David Garcia, PharmD",
        type: "Phone Call",
        priority: "Medium",
        status: "Completed",
        createdAt: "2024-03-12T16:20:00Z",
        updatedAt: "2024-03-12T16:35:00Z",
    },
    {
        id: 5,
        date: "03/11/2024",
        time: "9:00 AM",
        details: "A video consultation was conducted with a cardiology specialist to obtain treatment recommendations for the patient’s ongoing arrhythmia. The session included review of recent ECG results, lab work, and patient-reported symptoms. The specialist advised a potential medication adjustment and further diagnostic testing before finalizing treatment. A follow-up video call was scheduled for the following week to confirm the next steps.",
        patientId: 2,
        communicatedBy: "Lisa Chen, MD",
        type: "Video Call",
        priority: "High",
        status: "In Progress",
        createdAt: "2024-03-11T09:00:00Z",
        updatedAt: "2024-03-11T09:45:00Z",
    },
];
