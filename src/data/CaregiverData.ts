interface CaregiverShift {
    id: number;
    mrn: string;
    name: string;
    dob: string;
    phoneNumber: string;
    email: string;
    location: string;
    highlight?: boolean;
    startOfCare: string;
    primaryDiagnosis: string;
    servicesProvided: string;
    shiftDate: string;
    shiftTime: string;
    caregiverName: string;
    caregiverId: string;
    shiftStatus: "Completed" | "In Progress" | "Scheduled" | "Cancelled";
    notes?: string;
}

const caregiverData: CaregiverShift[] = [
    {
        id: 1,
        mrn: "MRN123456",
        name: "Emma Johnson",
        dob: "01/01/1990",
        phoneNumber: "678-555-0143",
        email: "emma.johnson@example.com",
        location: "Georgia",
        startOfCare: "03/15/2023",
        primaryDiagnosis: "Hypertension",
        servicesProvided: "Home Health Aide, Skilled Nursing",
        shiftDate: "01/15/2024",
        shiftTime: "8:00 AM - 4:00 PM",
        caregiverName: "Sarah Wilson",
        caregiverId: "CG001",
        shiftStatus: "Completed",
        notes: "Patient was cooperative and followed medication schedule well."
    },
    {
        id: 2,
        mrn: "MRN789012",
        name: "Carlos Rodriguez",
        dob: "05/15/1985",
        phoneNumber: "718-555-0194",
        email: "carlos.rodriguez@example.com",
        location: "New York",
        startOfCare: "02/10/2023",
        primaryDiagnosis: "Diabetes Type 2",
        servicesProvided: "Physical Therapy, Skilled Nursing",
        shiftDate: "01/15/2024",
        shiftTime: "4:00 PM - 12:00 AM",
        caregiverName: "Michael Chen",
        caregiverId: "CG002",
        shiftStatus: "Completed",
        notes: "Blood sugar levels stable, completed physical therapy exercises."
    },
    {
        id: 3,
        mrn: "MRN456789",
        name: "Aisha Patel",
        dob: "11/22/1978",
        phoneNumber: "609-555-0128",
        email: "aisha.patel@example.com",
        location: "New Jersey",
        startOfCare: "04/05/2023",
        primaryDiagnosis: "COPD",
        servicesProvided: "Respiratory Therapy, Home Health Aide",
        shiftDate: "01/14/2024",
        shiftTime: "12:00 AM - 8:00 AM",
        caregiverName: "Jennifer Davis",
        caregiverId: "CG003",
        shiftStatus: "Completed",
        notes: "Night shift went smoothly, patient slept well with oxygen therapy."
    },
    {
        id: 4,
        mrn: "MRN890123",
        name: "Liam Smith",
        dob: "07/04/1992",
        phoneNumber: "215-555-0167",
        email: "liam.smith@example.com",
        location: "Pennsylvania",
        startOfCare: "01/20/2023",
        primaryDiagnosis: "Post-surgical Recovery",
        servicesProvided: "Physical Therapy, Occupational Therapy",
        shiftDate: "01/14/2024",
        shiftTime: "8:00 AM - 4:00 PM",
        caregiverName: "Robert Johnson",
        caregiverId: "CG004",
        shiftStatus: "Completed",
        notes: "Patient showed improvement in mobility, completed all therapy sessions."
    },
    {
        id: 5,
        mrn: "MRN345678",
        name: "Sofia Garcia",
        dob: "03/18/1988",
        phoneNumber: "678-555-0148",
        email: "sofia.garcia@example.com",
        location: "Georgia",
        startOfCare: "05/12/2023",
        primaryDiagnosis: "Stroke Recovery",
        servicesProvided: "Speech Therapy, Physical Therapy",
        shiftDate: "01/13/2024",
        shiftTime: "4:00 PM - 12:00 AM",
        caregiverName: "Lisa Anderson",
        caregiverId: "CG005",
        shiftStatus: "Completed",
        notes: "Speech therapy progress noted, patient more communicative today."
    },
    {
        id: 6,
        mrn: "MRN901234",
        name: "Noah Williams",
        dob: "09/30/1995",
        phoneNumber: "718-555-0172",
        email: "noah.williams@example.com",
        location: "New York",
        startOfCare: "03/30/2023",
        primaryDiagnosis: "Heart Failure",
        servicesProvided: "Cardiac Care, Skilled Nursing",
        shiftDate: "01/16/2024",
        shiftTime: "8:00 AM - 4:00 PM",
        caregiverName: "David Martinez",
        caregiverId: "CG006",
        shiftStatus: "Scheduled",
        notes: "Upcoming shift for cardiac monitoring and medication administration."
    },
    {
        id: 7,
        mrn: "MRN567890",
        name: "Priya Kumar",
        dob: "12/12/1980",
        phoneNumber: "609-555-0145",
        email: "priya.kumar@example.com",
        location: "New Jersey",
        startOfCare: "02/15/2023",
        primaryDiagnosis: "Multiple Sclerosis",
        servicesProvided: "Physical Therapy, Home Health Aide",
        shiftDate: "01/16/2024",
        shiftTime: "4:00 PM - 12:00 AM",
        caregiverName: "Amanda Thompson",
        caregiverId: "CG007",
        shiftStatus: "In Progress",
        notes: "Currently providing mobility assistance and medication support."
    },
    {
        id: 8,
        mrn: "MRN012345",
        name: "James Brown",
        dob: "04/25/1975",
        phoneNumber: "215-555-0190",
        email: "james.brown@example.com",
        location: "Pennsylvania",
        startOfCare: "04/10/2023",
        primaryDiagnosis: "Parkinson's Disease",
        servicesProvided: "Occupational Therapy, Speech Therapy",
        shiftDate: "01/15/2024",
        shiftTime: "12:00 AM - 8:00 AM",
        caregiverName: "Kevin Lee",
        caregiverId: "CG008",
        shiftStatus: "Completed",
        notes: "Night shift completed, patient had good sleep quality."
    },
    {
        id: 9,
        mrn: "MRN678901",
        name: "Maria Hernandez",
        dob: "08/14/1990",
        phoneNumber: "678-555-0184",
        email: "maria.hernandez@example.com",
        location: "Georgia",
        startOfCare: "01/05/2023",
        primaryDiagnosis: "Wound Care",
        servicesProvided: "Skilled Nursing, Wound Care",
        shiftDate: "01/17/2024",
        shiftTime: "8:00 AM - 4:00 PM",
        caregiverName: "Rachel Green",
        caregiverId: "CG009",
        shiftStatus: "Scheduled",
        notes: "Scheduled for wound dressing change and infection monitoring."
    },
    {
        id: 10,
        mrn: "MRN234567",
        name: "Ethan Davis",
        dob: "02/28/1987",
        phoneNumber: "718-555-0111",
        email: "ethan.davis@example.com",
        location: "New York",
        startOfCare: "05/01/2023",
        primaryDiagnosis: "Chronic Pain",
        servicesProvided: "Pain Management, Physical Therapy",
        shiftDate: "01/16/2024",
        shiftTime: "4:00 PM - 12:00 AM",
        caregiverName: "Thomas Wilson",
        caregiverId: "CG010",
        shiftStatus: "Cancelled",
        notes: "Shift cancelled due to patient hospitalization."
    },
    {
        id: 11,
        mrn: "MRN890123",
        name: "Olivia Wilson",
        dob: "06/19/1993",
        phoneNumber: "609-555-0187",
        email: "olivia.wilson@example.com",
        location: "New Jersey",
        startOfCare: "03/20/2023",
        primaryDiagnosis: "Traumatic Brain Injury",
        servicesProvided: "Cognitive Therapy, Speech Therapy",
        shiftDate: "01/17/2024",
        shiftTime: "8:00 AM - 4:00 PM",
        caregiverName: "Mark Rodriguez",
        caregiverId: "CG011",
        shiftStatus: "Scheduled",
        notes: "Upcoming cognitive assessment and speech therapy session."
    }
];

export type { CaregiverShift };
export default caregiverData; 