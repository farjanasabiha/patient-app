"use client";

import Sidebar from "@/components/Layout/Sidebar";
import { TopNav } from "@/components/Layout/TopNav";
import { usePathname } from "next/navigation";
import { SubNav } from "@/components/Layout/SubNav";
import activePatientData from "@/data/ActivePatientData";

// Helper to calculate age
function calculateAge(dob: string): number {
  const [month, day, year] = dob.split("/").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // List of document routes that should show SubNav
  const subNavRoutes = [
    "/nursing-assessment/",
    "/plan-of-care/",
    "/patient-emergency/",
    "/follow-up-field-supervision/",
    "/fax-to-doctor/",
    "/home-health-quality-measure/",
    "/discharge-transfer/",
    "/dfs/",
  ];

  // Check if current path matches any allowed route
  const showSubNav = subNavRoutes.some((route) => pathname.startsWith(route));

  // Extract patient ID from the path (assuming /route/[id])
  let patientId: string | undefined;
  for (const route of subNavRoutes) {
    if (pathname.startsWith(route)) {
      patientId = pathname.replace(route, "").split("/")[0];
      break;
    }
  }

  // Find patient data
  const patient = activePatientData.find((p) => String(p.id) === patientId);

  return (
    <div className="min-h-screen bg-purple-light">
      {/* Top Navigation Bar - Full Width */}
      <div className="w-full bg-white relative z-20">
        <TopNav />
        {showSubNav && patient && (
          <SubNav
            patientName={patient.name}
            dob={patient.dob}
            age={calculateAge(patient.dob)}
            phone={patient.phoneNumber}
            diagnosisCodes={patient.diagnosisCodes}
            hasEmergency={true}
            hasFallRisk={true}
            hasTAL={true}
          />
        )}
      </div>

      {/* Main Container with Padding */}
      <div className="p-3 lg:p-6">
        <div className="relative h-[calc(100vh-104px)] flex">
          {/* Sidebar Container - Always visible for menu controls */}
          <div className="relative lg:w-[183px] lg:h-full lg:rounded-[8px]">
            <Sidebar />
          </div>

          {/* Main Content Area */}
          <div className="flex-1 lg:ml-6 rounded-[8px] overflow-hidden">
            <div className="h-full bg-white rounded-[6px] px-3 lg:px-6 lg:py-6 py-2">
              <div className="h-full overflow-auto">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
