"use client";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { DemoUser } from "@/data/demoUsers";

interface AuthContextType {
  user: DemoUser | null | undefined; // undefined = loading, null = no user, object = authenticated user
  is2faComplete: boolean | undefined; // undefined = loading, boolean = state
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  complete2fa: (code: string) => Promise<{ success: boolean; error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function getCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
}

export const AuthProvider = ({
  children,
  initialUser,
  initialIs2faComplete,
}: {
  children: ReactNode;
  initialUser?: DemoUser | null;
  initialIs2faComplete?: boolean;
}) => {
  const [user, setUser] = useState<DemoUser | null | undefined>(
    typeof initialUser !== "undefined" ? initialUser : undefined
  ); // undefined = loading
  const [is2faComplete, setIs2faComplete] = useState<boolean | undefined>(
    typeof initialIs2faComplete !== "undefined"
      ? initialIs2faComplete
      : undefined
  ); // undefined = loading

  // If server did not provide initial values (e.g., on certain client navigations), hydrate from cookies on mount
  useEffect(() => {
    if (typeof user !== "undefined" && typeof is2faComplete !== "undefined") {
      return;
    }

    const cookieUser = getCookie("demoUser");
    const cookie2fa = getCookie("is2faComplete");

    if (cookieUser) {
      try {
        const decodedUser = decodeURIComponent(cookieUser);
        const parsedUser = JSON.parse(decodedUser);
        setUser(parsedUser);
      } catch {
        setUser(null);
      }
    } else {
      setUser(null);
    }

    setIs2faComplete(cookie2fa === "true");
  }, [is2faComplete, user]);

  const login = async (email: string, password: string) => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (data.success) {
      setUser(data.user);
      setIs2faComplete(false);
      return { success: true };
    } else {
      setUser(null);
      setIs2faComplete(false);
      return { success: false, error: data.error };
    }
  };

  const complete2fa = async (code: string) => {
    const res = await fetch("/api/2fa", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    const data = await res.json();
    if (data.success) {
      setIs2faComplete(true);
      return { success: true };
    } else {
      setIs2faComplete(false);
      return { success: false, error: data.error };
    }
  };

  const logout = async () => {
    await fetch("/api/logout", { method: "POST" });
    setUser(null);
    setIs2faComplete(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, is2faComplete, login, logout, complete2fa }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
