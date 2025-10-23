import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import PatientDashboard from "@/components/PatientDashboard/PatientDashboard";
import { currentPatientProfile } from "@/data/CurrentPatientProfile";
import { DemoUser } from "@/data/demoUsers";

// Server-side function to check authentication
async function getAuthData() {
  const cookieStore = await cookies();
  const demoUserCookie = cookieStore.get("demoUser");
  const is2faCompleteCookie = cookieStore.get("is2faComplete");

  // Check if user is authenticated
  if (
    !demoUserCookie ||
    !is2faCompleteCookie ||
    is2faCompleteCookie.value !== "true"
  ) {
    return { authenticated: false, user: null };
  }

  try {
    // Parse the user data
    const user: DemoUser = JSON.parse(decodeURIComponent(demoUserCookie.value));

    // Check if user is a patient
    if (user.role !== "Patient") {
      return { authenticated: true, user: null }; // Redirect to main dashboard
    }

    return { authenticated: true, user };
  } catch (e) {
    console.error("Failed to parse user cookie:", e);
    return { authenticated: false, user: null };
  }
}

export default async function MyDashboardPage() {
  const { authenticated, user } = await getAuthData();

  // If not authenticated, redirect to login
  if (!authenticated) {
    redirect("/login");
  }

  // If user is not a patient, redirect to main dashboard
  if (!user) {
    redirect("/");
  }

  // Render the patient dashboard with the patient ID
  return (
    <div className="w-full">
      <PatientDashboard patientId={currentPatientProfile.id} />
    </div>
  );
}
