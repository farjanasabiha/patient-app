interface ReportsAndDocuments {
  id: number;
  date: string;
  time: string;
  type: string;
  incidentDetails: string;
}

const ReportsAndDocumentsData: ReportsAndDocuments[] = [
  {
    id: 1,
    date: "MM/DD/YYYY",
    time: "XX:XX AM",
    type: "incident",
    incidentDetails: "Problem is Talking And confusion",
  },
  {
    id: 2,
    date: "MM/DD/YYYY",
    time: "XX:XX AM",
    type: "Document",
    incidentDetails: "Problem is Talking And confusion",
  },
  {
    id: 3,
    date: "MM/DD/YYYY",
    time: "XX:XX AM",
    type: "Communication",
    incidentDetails: "Patient Fell",
  },
];

export type { ReportsAndDocuments };
export default ReportsAndDocumentsData;
