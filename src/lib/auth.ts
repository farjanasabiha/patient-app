import { cookies } from "next/headers";
import type { DemoUser, UserRole } from "@/data/demoUsers";

export async function getServerUser(): Promise<DemoUser | null> {
  try {
    const cookieStore = await cookies();
    const encodedUser = cookieStore.get("demoUser")?.value;
    if (!encodedUser) return null;
    const parsed: DemoUser = JSON.parse(decodeURIComponent(encodedUser));
    return parsed ?? null;
  } catch {
    return null;
  }
}

export async function getServerRole(): Promise<UserRole | null> {
  const user = await getServerUser();
  return user?.role ?? null;
}

export function hasAnyRole(user: DemoUser | null | undefined, roles: UserRole[]): boolean {
  if (!user) return false;
  return roles.includes(user.role);
}
