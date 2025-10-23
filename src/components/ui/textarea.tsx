import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-[3px] border border-[#8E8E93] bg-transparent px-3 py-2",
        "font-poppins text-base md:text-sm text-[#1C1C1E]",
        "placeholder:text-[#8E8E93]",
        "focus:outline-none focus:border-[#7E22CE] focus:ring-1 focus:ring-[#7E22CE]/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
