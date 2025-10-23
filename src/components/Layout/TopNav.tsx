"use client";

import { Settings } from "lucide-react";
import { useState, useRef, useEffect } from "react";
// import { AccountDialog } from "@/components/Setting/AccountDialog";
import Image from "next/image";
import Link from "next/link";
// import { ProfileDrawer } from "../profile/ProfileDrawer";
// import { GettingStartedDialog } from "@/components/Setting/GettingStartedDialog";
import { cn } from "@/lib/utils";

// Create a global event bus for sidebar toggle events
export const sidebarStore = {
  isOpen: false,
  listeners: new Set<(isOpen: boolean) => void>(),
  toggle() {
    this.isOpen = !this.isOpen;
    this.notify();
  },
  setOpen(isOpen: boolean) {
    this.isOpen = isOpen;
    this.notify();
  },
  subscribe(listener: (isOpen: boolean) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  },
  notify() {
    this.listeners.forEach((listener) => listener(this.isOpen));
  },
};

export function TopNav() {
  const [activeMenu, setActiveMenu] = useState<
    "grid" | "settings" | "account" | null
  >(null);

  const [showProfileDrawer, setShowProfileDrawer] = useState(false);
  const [showFeedbackDialog, setShowFeedbackDialog] = useState(false);
  const [showAccountDialog, setShowAccountDialog] = useState(false);
  // const [showGettingStartedDialog, setShowGettingStartedDialog] =
  //   useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const accountRef = useRef<HTMLDivElement>(null);
  const accountDialogRef = useRef<HTMLDivElement>(null);
  const feedbackDialogRef = useRef<HTMLDivElement>(null);
  // const gettingStartedDialogRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menus
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        activeMenu === "settings" &&
        accountRef.current &&
        accountDialogRef.current &&
        !accountRef.current.contains(event.target as Node) &&
        !accountDialogRef.current.contains(event.target as Node)
      ) {
        setActiveMenu(null);
        setShowAccountDialog(false);
      }

      if (
        showFeedbackDialog &&
        feedbackDialogRef.current &&
        !feedbackDialogRef.current.contains(event.target as Node)
      ) {
        setShowFeedbackDialog(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeMenu, showFeedbackDialog]);

  // Subscribe to sidebar state changes
  useEffect(() => {
    const unsubscribe = sidebarStore.subscribe((isOpen) => {
      setIsSidebarOpen(isOpen);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const handleViewAccount = () => {
  //   setShowProfileDrawer(true);
  //   setShowAccountDialog(false);
  //   setActiveMenu(null);
  // };

  // const handleGettingStarted = () => {
  //   setShowGettingStartedDialog(true);
  //   setShowAccountDialog(false);
  //   setActiveMenu(null);
  // };

  // Toggle sidebar visibility using the global store
  const toggleSidebar = () => {
    sidebarStore.toggle();
  };

  return (
    <div className="relative bg-white shadow-sm">
      <header className="flex flex-row justify-between items-center px-4 py-2.5 h-14 bg-white w-full">
        {/* Logo and Menu Icon */}
        <div className="flex-none flex items-center gap-3">
          {/* Hamburger Menu Icon */}
          <button
            className="lg:hidden relative flex items-center justify-center p-2 rounded-[6px] transition-colors hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-darker focus-visible:ring-offset-2"
            onClick={toggleSidebar}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col justify-center items-center w-5 h-5">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-purple-primary rounded-full transition-all duration-300",
                  isSidebarOpen && "translate-y-[7px] rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-purple-primary rounded-full my-1 transition-all duration-300",
                  isSidebarOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-purple-primary rounded-full transition-all duration-300",
                  isSidebarOpen && "translate-y-[-5px] -rotate-45"
                )}
              />
            </div>
          </button>

          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <Image
              src="/CorsultLogo.svg"
              alt="Corsult Logo"
              width={104}
              height={36}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right Side Icons */}
        <div className="flex flex-row items-center gap-3 lg:gap-6">
          <div
            ref={accountRef}
            className={`flex items-center justify-center p-1.5 w-9 h-9 rounded-[6px] transition-colors cursor-pointer
              ${
                activeMenu === "settings"
                  ? "bg-purple-primary"
                  : "hover:bg-gray-100 active:bg-gray-200"
              }`}
            onClick={() => {
              setActiveMenu(activeMenu === "settings" ? null : "settings");
              setShowAccountDialog(!showAccountDialog);
            }}
          >
            <Settings
              className={`w-6 h-6 ${
                activeMenu === "settings" ? "text-white" : "text-purple-primary"
              }`}
              strokeWidth={1.5}
            />
          </div>
          <div
            onClick={() => setShowProfileDrawer(!showProfileDrawer)}
            className={`flex flex-col items-start justify-center p-1.5 rounded-[6px] cursor-pointer transition-all
              ${
                showProfileDrawer
                  ? "bg-purple-primary"
                  : "hover:bg-gray-100 active:bg-gray-200"
              }`}
          >
            <div
              className={`flex justify-center items-center w-[28px] h-[28px] rounded-full transition-all
              ${showProfileDrawer ? "bg-white" : "bg-purple-primary"}`}
            >
              <span
                className={`text-[11px] font-semibold transition-colors
                ${showProfileDrawer ? "text-purple-primary" : "text-white"}`}
              >
                NC
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* 
      <ProfileDrawer
        isOpen={showProfileDrawer}
        onClose={() => setShowProfileDrawer(false)}
      />

      <AccountDialog
        ref={accountDialogRef}
        isOpen={showAccountDialog}
        onClose={() => {
          setShowAccountDialog(false);
          setActiveMenu(null);
        }}
        onViewAccount={handleViewAccount}
        onGettingStarted={handleGettingStarted}
      /> */}

      {/* <GettingStartedDialog
        ref={gettingStartedDialogRef}
        isOpen={showGettingStartedDialog}
        onClose={() => setShowGettingStartedDialog(false)}
      /> */}
    </div>
  );
}
