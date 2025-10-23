"use client";

import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";

export type FilterCategory = string;

// Common category sets for reuse across the application
export const LOCATION_CATEGORIES: FilterCategory[] = [
  "All",
  "New York",
  "New Jersey",
  "Georgia",
  "Pennsylvania",
  "Alabama",
];

interface FilterHeaderWithSearchProps {
  categories: FilterCategory[];
  initialCategory?: FilterCategory;
  onCategoryChange: (category: FilterCategory) => void;
  onSearch: (searchTerm: string) => void;
  onSearchLoadingChange?: (isLoading: boolean) => void;
  searchPlaceholder?: string;
  debounceDelay?: number;
  className?: string;
}

const FilterHeaderWithSearch: React.FC<FilterHeaderWithSearchProps> = ({
  categories,
  initialCategory = categories[0],
  onCategoryChange,
  onSearch,
  onSearchLoadingChange,
  searchPlaceholder = "Search...",
  debounceDelay = 300,
  className = "",
}) => {
  const [activeCategory, setActiveCategory] =
    useState<FilterCategory>(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");

  // Use debounced search term
  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

  // Effect for handling debounced search
  useEffect(() => {
    // Set loading to true when search term changes
    if (onSearchLoadingChange && searchTerm !== debouncedSearchTerm) {
      onSearchLoadingChange(true);
    }

    // When debounced value is ready, perform search and set loading to false
    onSearch(debouncedSearchTerm);
    if (onSearchLoadingChange) {
      onSearchLoadingChange(false);
    }
  }, [debouncedSearchTerm, onSearch, onSearchLoadingChange, searchTerm]);

  const handleCategoryClick = (category: FilterCategory) => {
    setActiveCategory(category);
    onCategoryChange(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearchLoadingChange && value !== debouncedSearchTerm) {
      onSearchLoadingChange(true);
    }
  };

  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 w-full ${className}`}
    >
      <div className="w-full sm:w-auto">
        <div className="flex flex-nowrap overflow-x-auto hide-scrollbar sm:overflow-visible border border-[#C7C7CC] rounded-md p-[0.5px]">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`
                flex-shrink-0 flex items-center justify-center px-3 sm:px-4 py-[7.5px] h-[35px] 
                min-w-[80px] border-r last:border-r-0 border-[#C7C7CC]
                ${index === 0 ? "rounded-l-[3px]" : ""}
                ${index === categories.length - 1 ? "rounded-r-[3px]" : ""}
                ${
                  category === activeCategory
                    ? "bg-[#E2F7FF] text-[#0071A4]"
                    : "bg-white text-[#8E8E93]"
                }
                font-poppins text-[12px] sm:text-[14px] leading-[21px] transition-colors
                hover:bg-[#F5FBFF] whitespace-nowrap
              `}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-row items-center px-3 py-[6px] gap-[10px] w-full sm:w-[264px] h-[36px] bg-white border border-[#C7C7CC] rounded-[4px] overflow-hidden focus-within:border-[#0071A4] focus-within:ring-1 focus-within:ring-[#0071A4] hover:bg-[#E2F7FF] transition-all">
        <Search className="w-6 h-6 text-[#8E8E93]" />
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={searchPlaceholder}
          className="flex-1 font-poppins text-[14px] leading-[21px] text-[#8E8E93] outline-none placeholder:text-[#8E8E93]"
        />
      </div>
    </div>
  );
};

export default FilterHeaderWithSearch;
