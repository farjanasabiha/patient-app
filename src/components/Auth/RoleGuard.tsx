"use client";

import React from "react";
import type { UserRole } from "@/data/demoUsers";
import { useRole } from "@/hooks/useRole";

type RoleGuardProps = {
  allow: UserRole[];
  fallback?: React.ReactNode;
  children: React.ReactNode;
};

export const RoleGuard: React.FC<RoleGuardProps> = ({ allow, fallback = null, children }) => {
  const role = useRole();

  // While loading user from cookies on first mount, role can be null temporarily.
  // You could return a spinner here if desired.
  if (!role) return <>{fallback}</>;

  return allow.includes(role) ? <>{children}</> : <>{fallback}</>;
};
