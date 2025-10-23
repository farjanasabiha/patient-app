// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
import ActivePatientTable from "@/components/ActivePatient/ActivePatientTable";
// import { DemoUser } from "@/data/demoUsers";

// Server-side function to check authentication
// async function getAuthData() {
//   const cookieStore = await cookies();
//   const demoUserCookie = cookieStore.get("demoUser");
//   const is2faCompleteCookie = cookieStore.get("is2faComplete");

//   // Check if user is authenticated
//   if (!demoUserCookie || !is2faCompleteCookie || is2faCompleteCookie.value !== "true") {
//     return { authenticated: false, user: null };
//   }

//   try {
//     // Parse the user data
//     const user: DemoUser = JSON.parse(decodeURIComponent(demoUserCookie.value));
//     return { authenticated: true, user };
//   } catch (e) {
//     console.error("Failed to parse user cookie:", e);
//     return { authenticated: false, user: null };
//   }
// }

export default async function DashboardPage() {
  // const { authenticated, user } = await getAuthData();

  // // If not authenticated, redirect to login
  // if (!authenticated) {
  //   redirect("/login");
  // }

  // // If user is a patient, redirect to their personal dashboard
  // if (user?.role === "Patient") {
  //   redirect("/my-dashboard");
  // }

  // For all other roles, show the patient roster table
  return (
    <div className="flex flex-col gap-4">
      <ActivePatientTable />
    </div>
  );
}