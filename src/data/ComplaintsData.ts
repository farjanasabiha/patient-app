interface Complaint {
    id: number;
    complaintId: string;
    patientName: string;
    mrn: string;
    dateSubmitted: string;
    complaintType: string;
    priority: "High" | "Medium" | "Low";
    status: "Open" | "In Progress" | "Resolved" | "Closed";
    location: string;
    assignedTo: string;
    description: string;
    resolution?: string;
    dateResolved?: string;
    phoneNumber: string;
    email: string;
    highlight?: boolean;
}

const complaintsData: Complaint[] = [
    {
        id: 1,
        complaintId: "CMP-2024-001",
        patientName: "Emma Johnson",
        mrn: "MRN123456",
        dateSubmitted: "01/15/2024",
        complaintType: "Service Quality",
        priority: "High",
        status: "Open",
        location: "Georgia",
        assignedTo: "Sarah Wilson",
        description: "Patient reported dissatisfaction with nursing care quality and response time.",
        phoneNumber: "678-555-0143",
        email: "emma.johnson@example.com",
        highlight: true
    },
    {
        id: 2,
        complaintId: "CMP-2024-002",
        patientName: "Carlos Rodriguez",
        mrn: "MRN789012",
        dateSubmitted: "01/18/2024",
        complaintType: "Billing Issue",
        priority: "Medium",
        status: "In Progress",
        location: "New York",
        assignedTo: "Michael Chen",
        description: "Billing discrepancy regarding insurance coverage for physical therapy sessions.",
        phoneNumber: "718-555-0194",
        email: "carlos.rodriguez@example.com"
    },
    {
        id: 3,
        complaintId: "CMP-2024-003",
        patientName: "Aisha Patel",
        mrn: "MRN456789",
        dateSubmitted: "01/20/2024",
        complaintType: "Staff Behavior",
        priority: "High",
        status: "Resolved",
        location: "New Jersey",
        assignedTo: "Jennifer Davis",
        description: "Complaint about unprofessional behavior from home health aide.",
        resolution: "Staff member received additional training and patient was assigned a new aide.",
        dateResolved: "01/25/2024",
        phoneNumber: "609-555-0128",
        email: "aisha.patel@example.com"
    },
    {
        id: 4,
        complaintId: "CMP-2024-004",
        patientName: "Liam Smith",
        mrn: "MRN890123",
        dateSubmitted: "01/22/2024",
        complaintType: "Scheduling",
        priority: "Low",
        status: "Closed",
        location: "Pennsylvania",
        assignedTo: "Robert Johnson",
        description: "Frequent changes in therapy appointment times causing inconvenience.",
        resolution: "Established fixed schedule with patient preferences considered.",
        dateResolved: "01/28/2024",
        phoneNumber: "215-555-0167",
        email: "liam.smith@example.com"
    },
    {
        id: 5,
        complaintId: "CMP-2024-005",
        patientName: "Sofia Garcia",
        mrn: "MRN345678",
        dateSubmitted: "01/25/2024",
        complaintType: "Equipment Issue",
        priority: "Medium",
        status: "In Progress",
        location: "Georgia",
        assignedTo: "Lisa Anderson",
        description: "Medical equipment malfunction affecting patient care.",
        phoneNumber: "678-555-0148",
        email: "sofia.garcia@example.com"
    },
    {
        id: 6,
        complaintId: "CMP-2024-006",
        patientName: "Noah Williams",
        mrn: "MRN901234",
        dateSubmitted: "01/28/2024",
        complaintType: "Communication",
        priority: "Medium",
        status: "Open",
        location: "New York",
        assignedTo: "David Martinez",
        description: "Poor communication regarding treatment plan changes.",
        phoneNumber: "718-555-0172",
        email: "noah.williams@example.com"
    },
    {
        id: 7,
        complaintId: "CMP-2024-007",
        patientName: "Priya Kumar",
        mrn: "MRN567890",
        dateSubmitted: "01/30/2024",
        complaintType: "Service Quality",
        priority: "High",
        status: "Open",
        location: "New Jersey",
        assignedTo: "Amanda Thompson",
        description: "Inadequate pain management during physical therapy sessions.",
        phoneNumber: "609-555-0145",
        email: "priya.kumar@example.com",
        highlight: true
    },
    {
        id: 8,
        complaintId: "CMP-2024-008",
        patientName: "James Brown",
        mrn: "MRN012345",
        dateSubmitted: "02/02/2024",
        complaintType: "Billing Issue",
        priority: "Low",
        status: "Resolved",
        location: "Pennsylvania",
        assignedTo: "Kevin Lee",
        description: "Confusion about co-payment amounts for home health services.",
        resolution: "Billing department provided detailed explanation and adjusted charges.",
        dateResolved: "02/05/2024",
        phoneNumber: "215-555-0190",
        email: "james.brown@example.com"
    },
    {
        id: 9,
        complaintId: "CMP-2024-009",
        patientName: "Maria Hernandez",
        mrn: "MRN678901",
        dateSubmitted: "02/05/2024",
        complaintType: "Staff Behavior",
        priority: "Medium",
        status: "In Progress",
        location: "Georgia",
        assignedTo: "Rachel Green",
        description: "Concerns about punctuality and professionalism of assigned nurse.",
        phoneNumber: "678-555-0184",
        email: "maria.hernandez@example.com"
    },
    {
        id: 10,
        complaintId: "CMP-2024-010",
        patientName: "Ethan Davis",
        mrn: "MRN234567",
        dateSubmitted: "02/08/2024",
        complaintType: "Scheduling",
        priority: "Medium",
        status: "Open",
        location: "New York",
        assignedTo: "Thomas Wilson",
        description: "Difficulty scheduling follow-up appointments with specialists.",
        phoneNumber: "718-555-0111",
        email: "ethan.davis@example.com"
    },
    {
        id: 11,
        complaintId: "CMP-2024-011",
        patientName: "Olivia Wilson",
        mrn: "MRN890123",
        dateSubmitted: "02/10/2024",
        complaintType: "Equipment Issue",
        priority: "High",
        status: "Open",
        location: "New Jersey",
        assignedTo: "Mark Rodriguez",
        description: "Wheelchair provided was not suitable for patient's specific needs.",
        phoneNumber: "609-555-0187",
        email: "olivia.wilson@example.com",
        highlight: true
    },
    {
        id: 12,
        complaintId: "CMP-2024-012",
        patientName: "Muhammad Khan",
        mrn: "MRN456789",
        dateSubmitted: "02/12/2024",
        complaintType: "Communication",
        priority: "Low",
        status: "Closed",
        location: "Pennsylvania",
        assignedTo: "Susan Taylor",
        description: "Language barrier issues with assigned care provider.",
        resolution: "Assigned bilingual care provider to better serve patient needs.",
        dateResolved: "02/15/2024",
        phoneNumber: "215-555-0132",
        email: "muhammad.khan@example.com"
    }
];

export type { Complaint };
export default complaintsData;