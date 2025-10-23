"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Drawer({ open, onClose, children }: DrawerProps) {
  const drawerVariants = {
    hidden: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.25,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    visible: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.25,
        ease: [0.32, 0.72, 0, 1],
      },
    },
  };

  const overlayVariants = {
    hidden: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence mode="sync">
      {open && (
        <>
          {/* Backdrop/Overlay */}
          <motion.div
            key="overlay"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            transition={{ duration: 0.2 }}
            className="fixed top-[56px] left-[0px] right-0 bottom-0 bg-black/30"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={drawerVariants}
            className={cn(
              "fixed right-0 top-[56px] bottom-0",
              "w-full md:w-1/2",
              "bg-white z-50 shadow-lg",
              "border-l border-gray-100"
            )}
          >
            <div className="flex flex-col h-full p-4 lg:p-[30px_20px_30px_30px] gap-3">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-[#E2F7FF] rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-gray-dark-100" />
              </button>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
