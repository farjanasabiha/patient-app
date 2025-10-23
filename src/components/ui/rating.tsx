"use client";

import { StarIcon } from "@/components/ui/icons";

interface RatingProps {
  value: number;
  onChange: (value: number) => void;
  max?: number;
}

export const Rating = ({ value = 0, onChange, max = 5 }: RatingProps) => {
  return (
    <div className="inline-flex items-center gap-2">
      {Array.from({ length: max }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => onChange(index + 1)}
          className={`w-6 h-6 flex items-center justify-center ${
            index < value ? "text-yellow-400" : "text-neutral-400"
          }`}
        >
          <StarIcon className="w-5 h-5" />
        </button>
      ))}
    </div>
  );
};
