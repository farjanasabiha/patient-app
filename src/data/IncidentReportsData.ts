export interface IncidentReport {
    id: number;
    date: string;
    time: string;
    details: string;
    patientId: number;
    reportedBy: string;
    severity: "Low" | "Medium" | "High";
    status: "Open" | "Under Investigation" | "Resolved" | "Closed";
    createdAt: string;
    updatedAt: string;
}

export const incidentReportsData: IncidentReport[] = [
    {
        id: 1,
        date: "03/15/2024",
        time: "2:30 PM",
        details: "During routine afternoon medication administration, the patient exhibited sudden difficulty speaking clearly and appeared confused when asked simple orientation questions. The nurse noticed hesitation in swallowing and mild disorientation. Medication was withheld, and the attending physician was notified immediately. The patient was closely monitored for neurological symptoms, and a rapid assessment was initiated to rule out possible stroke or adverse drug reaction.",
        patientId: 1,
        reportedBy: "Sarah Johnson, RN",
        severity: "Medium",
        status: "Under Investigation",
        createdAt: "2024-03-15T14:30:00Z",
        updatedAt: "2024-03-15T14:30:00Z",
    },
    {
        id: 2,
        date: "03/14/2024",
        time: "8:45 AM",
        details: "The patient attempted to get out of bed without calling for assistance and lost balance, resulting in a fall to the floor. Staff immediately responded upon hearing the noise. No head injury was observed, but the patient complained of left hip pain. A physical assessment was conducted, vital signs were stable, and an X-ray was ordered to rule out fracture. The fall risk protocol was reinforced, bed alarms were activated, and the patient was reminded to request assistance before ambulating.",
        patientId: 1,
        reportedBy: "Michael Brown, CNA",
        severity: "High",
        status: "Resolved",
        createdAt: "2024-03-14T08:45:00Z",
        updatedAt: "2024-03-16T10:15:00Z",
    },
    {
        id: 3,
        date: "03/13/2024",
        time: "11:15 AM",
        details: "A medication error occurred when the patient was administered a higher dose of blood pressure medication than prescribed. The error was identified immediately during the double-check process. The incorrect dose was documented, the patient was assessed, and no adverse reaction was observed. The prescribing physician was informed, corrective measures were taken, and the nursing team reviewed medication administration protocols to prevent future occurrences.",
        patientId: 1,
        reportedBy: "Jennifer Wilson, RN",
        severity: "High",
        status: "Closed",
        createdAt: "2024-03-13T11:15:00Z",
        updatedAt: "2024-03-18T09:30:00Z",
    },
    {
        id: 4,
        date: "03/10/2024",
        time: "4:20 PM",
        details: "During a supervised physical therapy session, the patient reported sudden chest discomfort while performing mild cardiovascular exercises. The session was stopped immediately, and the patient was seated for observation. Vital signs were taken, showing mild elevation in heart rate but no irregularities. The incident was escalated to the attending physician, and an ECG was scheduled. The patient was advised to rest and avoid exertion until further evaluation.",
        patientId: 1,
        reportedBy: "David Martinez, PT",
        severity: "Medium",
        status: "Resolved",
        createdAt: "2024-03-10T16:20:00Z",
        updatedAt: "2024-03-12T14:45:00Z",
    },
    {
        id: 5,
        date: "03/08/2024",
        time: "6:30 PM",
        details: "A malfunction was reported in the blood pressure monitor during routine evening rounds. The device displayed inconsistent readings that were significantly higher than the patient's baseline. The patient was reassessed using a backup manual sphygmomanometer, which confirmed normal readings. The faulty equipment was immediately removed from use, tagged for maintenance, and a report was filed with the biomedical engineering department for inspection and repair.",
        patientId: 1,
        reportedBy: "Lisa Anderson, RN",
        severity: "Low",
        status: "Closed",
        createdAt: "2024-03-08T18:30:00Z",
        updatedAt: "2024-03-09T08:00:00Z",
    },
];
