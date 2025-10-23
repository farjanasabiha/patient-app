"use client";

import {
  ArrowLeftRightIcon,
  X,
  Users,
  MessageCircle,
  History,
  FileText,
} from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import React from "react";
import { UserVoiceIcon } from "../ui/icons/UserVoiceIcon";
import { SignOutIcon } from "../ui/icons/SignOutIcon";
import { sidebarStore } from "./TopNav";
import { useAuth } from "@/context/AuthContext";
import { DashboardIcon } from "../ui/icons";

interface IconProps {
  className?: string;
}

type NavigationItem = {
  name: string;
  href: string;
  icon?: React.ComponentType<IconProps>;
  customIcon?: React.ComponentType<IconProps>;
};

// Separate component that uses useSearchParams
function SidebarContent() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { logout, user } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    sidebarStore.setOpen(false);
  }, [pathname]);
  console.log(user);

  // Subscribe to sidebarStore changes
  useEffect(() => {
    const unsubscribe = sidebarStore.subscribe((isOpen: boolean) => {
      setIsMobileMenuOpen(isOpen);
    });

    // ✅ Ensure the cleanup always returns void
    return () => {
      if (typeof unsubscribe === "function") {
        unsubscribe();
      }
    };
  }, []);


  const closeSidebar = () => sidebarStore.setOpen(false);

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  // ✅ Show all items, no role filtering
  const navigationItems: NavigationItem[] = [
    { icon: DashboardIcon, name: "My Dashboard", href: "/my-dashboard" },
    { icon: Users, name: "Patient Roster", href: "/" },
    {
      icon: ArrowLeftRightIcon,
      name: "Discharged Patients",
      href: "/discharged-patients",
    },
    { icon: FileText, name: "Create PDF", href: "/create-pdf" },
    { icon: UserVoiceIcon, name: "Complaints", href: "/complaints" },
    { icon: History, name: "Activity Records", href: "/shift-history" },
    { icon: MessageCircle, name: "Messages", href: "/messages" },
  ];

  const isActive = (href: string) => {
    const source = searchParams?.get("source");

    if (href === "/") {
      return (
        pathname === "/" ||
        (pathname.startsWith("/patient") && source !== "discharged")
      );
    }
    if (href === "/discharged-patients") {
      return (
        pathname.startsWith("/discharged-patients") ||
        (pathname.startsWith("/patient") && source === "discharged")
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 z-40"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Content */}
      <aside
        className={`
          lg:static fixed inset-y-0 left-0 z-40 lg:z-0
          transition-transform duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
          flex flex-col h-full bg-purple-medium rounded-md
          mt-[56px] lg:mt-0
          w-[220px] lg:w-auto
        `}
      >
        {/* Mobile Header */}
        <div className="lg:hidden flex items-center justify-between p-4">
          <span className="text-white font-semibold">Menu</span>
          <button
            onClick={closeSidebar}
            className="p-1 rounded-md hover:bg-purple-primary text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Navigation */}
        <div className="flex-1 p-[11px_10px] flex flex-col gap-3">
          <nav className="flex flex-col gap-2 w-full whitespace-nowrap">
            {navigationItems.map((item) => {
              const active = isActive(item.href);
              const iconClassName = `w-6 h-6 transition-colors ${
                active
                  ? "text-white stroke-[2]"
                  : "text-white stroke-[1.5] group-hover:text-purple-primary"
              }`;

              return (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className={`group flex flex-row items-center p-1 px-2 gap-1 w-full h-8 rounded transition-colors
                      ${
                        active ? "bg-purple-primary" : "hover:bg-purple-hover"
                      }`}
                    onClick={() => {
                      if (window.innerWidth < 1024) closeSidebar();
                    }}
                  >
                    {item.icon && <item.icon className={iconClassName} />}
                    <span
                      className={`font-poppins font-semibold text-xs leading-[18px] flex-grow transition-colors
                        ${
                          active
                            ? "text-white"
                            : "text-white group-hover:text-purple-primary"
                        }`}
                    >
                      {item.name}
                    </span>
                  </Link>

                  {item.name === "Messages" && (
                    <div className="w-full h-px bg-[#E5E5EA] my-1" />
                  )}
                </React.Fragment>
              );
            })}
          </nav>

          {/* Sign Out Button */}
          <button
            onClick={handleLogout}
            className="group flex items-center gap-1 px-2 py-1 w-full h-8 rounded transition-colors hover:bg-purple-primary cursor-pointer"
          >
            <SignOutIcon className="w-6 h-6 text-white group-hover:text-white" />
            <span className="font-poppins font-semibold text-[12px] leading-[18px] text-white group-hover:text-white">
              Sign Out
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

function SidebarLoading() {
  return (
    <aside className="lg:static fixed inset-y-0 left-0 z-40 lg:z-0 flex flex-col h-full bg-purple-medium rounded-md mt-[56px] lg:mt-0 w-[220px] lg:w-auto">
      <div className="flex-1 p-[11px_10px] flex flex-col gap-3">
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-8 bg-purple-hover rounded animate-pulse" />
        ))}
      </div>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <Suspense fallback={<SidebarLoading />}>
      <SidebarContent />
    </Suspense>
  );
}