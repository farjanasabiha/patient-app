import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  separator?: React.ReactNode;
}

export function Breadcrumb({
  items,
  className,
  separator = <ChevronRight className="w-6 h-6 text-[#8E8E93]" />,
}: BreadcrumbProps) {
  return (
    <nav
      className={cn(
        "flex flex-row items-center gap-2.5",
        className
      )}
    >
      {items.map((item, index) => (
        <React.Fragment key={item.label}>
          {index > 0 && separator}
          {item.href && !item.active ? (
            <Link
              href={item.href}
              className="font-poppins font-semibold text-sm text-[#0071A4] hover:text-[#005A83] transition-colors hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={cn(
                "font-poppins font-semibold text-sm",
                item.active ? "text-[#8E8E93]" : "text-[#0071A4]"
              )}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
