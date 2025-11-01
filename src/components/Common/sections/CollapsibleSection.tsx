import React from "react";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { UpArrowIcon } from "@/components/ui/icons/UpArrowIcon";
import { DownArrowIcon } from "@/components/ui/icons/DownArrowIcon";

interface CollapsibleSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  headerClassName?: string;
}

export const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({
  title,
  children,
  defaultOpen = true,
  className,
  headerClassName,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className={cn(
        "flex flex-col gap-6 transition-all duration-300 ease-in-out",
        className
      )}
    >
      <CollapsibleTrigger
        className={cn(
          "flex flex-row items-center p-2 bg-[#faf7fc] rounded-[2px] border-l-[#7E22CE] border-l-[5px]",
          "transition-all duration-300 ease-in-out",
          "focus:outline-none focus:ring focus:ring-[#7E22CE]",
          headerClassName
        )}
      >
        <span className="flex-grow font-poppins font-semibold text-sm text-[#7E22CE] text-left">
          {title}
        </span>
        <div className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <UpArrowIcon className="w-6 h-6 text-[#7E22CE]" />
          ) : (
            <DownArrowIcon className="w-6 h-6 text-[#7E22CE]" />
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
        )}
      >
        <div className="transition-all duration-300 ease-in-out">
          {children}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
