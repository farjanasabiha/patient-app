"use client";

import { useAuth } from "@/context/AuthContext";
import type { UserRole } from "@/data/demoUsers";

export function useRole(): UserRole | null {
  const { user } = useAuth();
  return user?.role ?? null;
}
