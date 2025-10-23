export type PatientNote = {
  id: string;
  // ISO 8601 UTC timestamp for when the note was created
  createdAtISO: string;
  heading: string;
  text: string;
};

export const demoNotes: PatientNote[] = [
  {
    id: "n1",
    createdAtISO: "2025-03-20T14:30:00Z",
    heading: "Follow-up required",
    text: "Patient reported mild dizziness after medication. Monitor vitals and hydration.",
  },
  {
    id: "n2",
    createdAtISO: "2025-03-19T10:15:00Z",
    heading: "Visit summary",
    text: "Completed nursing visit. Wound dressing changed. No signs of infection.",
  },
];
