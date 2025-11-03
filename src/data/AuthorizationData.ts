interface AuthorizationType {
  id: number;
  date: string;
  time: string;
  incidentDetails: string;
}

const AuthorizationData: AuthorizationType[] = [
  {
    id: 1,
    date: "MM/DD/YYYY",
    time: "XX:XX AM",
    incidentDetails: "Authorization for home health services - Approved",
  },
  {
    id: 2,
    date: "MM/DD/YYYY",
    time: "XX:XX AM",
    incidentDetails: "Authorization for physical therapy - Pending",
  },
];

export type { AuthorizationType };
export default AuthorizationData;
