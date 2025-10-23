import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./fonts";
import { AuthProvider } from "@/context/AuthContext";
import { cookies } from "next/headers";
import { DemoUser } from "@/data/demoUsers";

export const metadata: Metadata = {
  title: "Patient App",
  description: "Patient App",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const encodedUser = cookieStore.get("demoUser")?.value;
  const is2fa = cookieStore.get("is2faComplete")?.value === "true";

  let initialUser: DemoUser | null = null;
  if (encodedUser) {
    try {
      initialUser = JSON.parse(decodeURIComponent(encodedUser));
    } catch {
      initialUser = null;
    }
  }

  return (
    <html lang="en" className={poppins.className}>
      <body className="min-h-screen bg-white antialiased">
        <AuthProvider initialUser={initialUser} initialIs2faComplete={is2fa}>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
