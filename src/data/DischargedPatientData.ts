interface DischargedPatient {
    id: number;
    mrn: string;
    name: string;
    dob: string;
    phoneNumber: string;
    email: string;
    location: string;
    highlight?: boolean;
    startOfCare: string;
    diagnosisCodes: string[]; // Array of diagnosis codes
    diagnosisNames: string[]; // Array of full diagnosis names
    servicesProvided: string;
    payerSource: string;
    status: "Signed" | "Not Signed";
    dischargeDate: string;
    // Emergency-related fields
    onOxygen?: boolean;
    fallRisk?: boolean;
    needsWheelchair?: boolean;
    onVentilator?: boolean;
}

const dischargedPatientData: DischargedPatient[] = [
    {
        id: 1,
        mrn: "MRN543210",
        name: "Sarah Johnson",
        dob: "03/15/1975",
        phoneNumber: "678-555-0123",
        email: "sarah.johnson@example.com",
        location: "Georgia",
        startOfCare: "01/10/2023",
        diagnosisCodes: ["I63.9", "Z51.89"],
        diagnosisNames: ["Cerebral infarction, unspecified", "Encounter for other specified aftercare"],
        servicesProvided: "Physical Therapy, Speech Therapy",
        payerSource: "Medicare",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 2,
        mrn: "MRN654321",
        name: "Michael Rodriguez",
        dob: "07/22/1982",
        phoneNumber: "718-555-0187",
        email: "michael.rodriguez@example.com",
        location: "New York",
        startOfCare: "02/15/2023",
        diagnosisCodes: ["Z48.3", "T81.4"],
        diagnosisNames: ["Aftercare following surgery for injury and trauma", "Infection following a procedure"],
        servicesProvided: "Physical Therapy, Wound Care",
        payerSource: "Blue Cross Blue Shield",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    },
    {
        id: 3,
        mrn: "MRN765432",
        name: "Jennifer Patel",
        dob: "11/10/1970",
        phoneNumber: "609-555-0145",
        email: "jennifer.patel@example.com",
        location: "New Jersey",
        startOfCare: "03/20/2023",
        diagnosisCodes: ["J44.1", "Z99.81"],
        diagnosisNames: ["Chronic obstructive pulmonary disease with (acute) exacerbation", "Dependence on supplemental oxygen"],
        servicesProvided: "Respiratory Therapy, Skilled Nursing",
        payerSource: "Aetna",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 4,
        mrn: "MRN876543",
        name: "Robert Smith",
        dob: "04/18/1968",
        phoneNumber: "215-555-0134",
        email: "robert.smith@example.com",
        location: "Pennsylvania",
        startOfCare: "01/05/2023",
        diagnosisCodes: ["E11.9", "Z79.4"],
        diagnosisNames: ["Type 2 diabetes mellitus without complications", "Long term (current) use of insulin"],
        servicesProvided: "Skilled Nursing, Nutritional Therapy",
        payerSource: "UnitedHealthcare",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    },
    {
        id: 5,
        mrn: "MRN987654",
        name: "Maria Garcia",
        dob: "09/25/1985",
        phoneNumber: "678-555-0176",
        email: "maria.garcia@example.com",
        location: "Georgia",
        startOfCare: "04/15/2023",
        diagnosisCodes: ["L97.2", "Z48.0"],
        diagnosisNames: ["Non-pressure chronic ulcer of calf", "Attention to dressings and sutures"],
        servicesProvided: "Wound Care, Skilled Nursing",
        payerSource: "Cigna",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 6,
        mrn: "MRN098765",
        name: "David Williams",
        dob: "02/12/1972",
        phoneNumber: "718-555-0198",
        email: "david.williams@example.com",
        location: "New York",
        startOfCare: "02/01/2023",
        diagnosisCodes: ["I25.10", "Z51.11"],
        diagnosisNames: ["Atherosclerotic heart disease of native coronary artery without angina pectoris", "Encounter for antineoplastic chemotherapy"],
        servicesProvided: "Cardiac Care, Physical Therapy",
        payerSource: "Medicare",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    },
    {
        id: 7,
        mrn: "MRN109876",
        name: "Anita Kumar",
        dob: "06/30/1980",
        phoneNumber: "609-555-0167",
        email: "anita.kumar@example.com",
        location: "New Jersey",
        startOfCare: "03/10/2023",
        diagnosisCodes: ["G35", "Z73.6"],
        diagnosisNames: ["Multiple sclerosis", "Limitation of activities due to disability"],
        servicesProvided: "Physical Therapy, Occupational Therapy",
        payerSource: "Humana",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 8,
        mrn: "MRN210987",
        name: "Thomas Brown",
        dob: "12/05/1965",
        phoneNumber: "215-555-0189",
        email: "thomas.brown@example.com",
        location: "Pennsylvania",
        startOfCare: "01/25/2023",
        diagnosisCodes: ["G20", "Z51.89"],
        diagnosisNames: ["Parkinson's disease", "Encounter for other specified aftercare"],
        servicesProvided: "Physical Therapy, Speech Therapy",
        payerSource: "Blue Cross Blue Shield",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    },
    {
        id: 9,
        mrn: "MRN321098",
        name: "Sofia Hernandez",
        dob: "08/17/1978",
        phoneNumber: "678-555-0154",
        email: "sofia.hernandez@example.com",
        location: "Georgia",
        startOfCare: "02/20/2023",
        diagnosisCodes: ["S72.001A", "Z96.641"],
        diagnosisNames: ["Fracture of unspecified part of neck of right femur, initial encounter for closed fracture", "Presence of right artificial hip joint"],
        servicesProvided: "Physical Therapy, Home Health Aide",
        payerSource: "Medicare",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 10,
        mrn: "MRN432109",
        name: "James Davis",
        dob: "01/23/1969",
        phoneNumber: "718-555-0132",
        email: "james.davis@example.com",
        location: "New York",
        startOfCare: "03/05/2023",
        diagnosisCodes: ["I50.9", "Z95.1"],
        diagnosisNames: ["Heart failure, unspecified", "Presence of aortocoronary bypass graft"],
        servicesProvided: "Cardiac Care, Skilled Nursing",
        payerSource: "Aetna",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    },
    {
        id: 11,
        mrn: "MRN543210",
        name: "Emily Wilson",
        dob: "10/08/1983",
        phoneNumber: "609-555-0143",
        email: "emily.wilson@example.com",
        location: "New Jersey",
        startOfCare: "04/01/2023",
        diagnosisCodes: ["S06.9X0A", "Z51.89"],
        diagnosisNames: ["Unspecified intracranial injury without loss of consciousness, initial encounter", "Encounter for other specified aftercare"],
        servicesProvided: "Cognitive Therapy, Speech Therapy",
        payerSource: "UnitedHealthcare",
        status: "Signed",
        dischargeDate: "02/15/2023",
        onOxygen: true,
        fallRisk: true,
        needsWheelchair: true,
        onVentilator: false
    },
    {
        id: 12,
        mrn: "MRN654321",
        name: "Hassan Khan",
        dob: "05/19/1974",
        phoneNumber: "215-555-0165",
        email: "hassan.khan@example.com",
        location: "Pennsylvania",
        startOfCare: "01/15/2023",
        diagnosisCodes: ["N18.9", "Z99.2"],
        diagnosisNames: ["Chronic kidney disease, unspecified", "Dependence on renal dialysis"],
        servicesProvided: "Dialysis Support, Skilled Nursing",
        payerSource: "Cigna",
        status: "Not Signed",
        dischargeDate: "02/15/2023",
        onOxygen: false,
        fallRisk: true,
        needsWheelchair: false,
        onVentilator: false
    }
];

export type { DischargedPatient };
export default dischargedPatientData; 