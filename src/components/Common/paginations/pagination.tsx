import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface PaginationProps {
  // Basic pagination props
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;

  // Additional props for enhanced functionality
  totalItems?: number;
  rowsPerPage?: number;
  onRowsPerPageChange?: (rowsPerPage: number) => void;
  rowsPerPageOptions?: number[];
  maxPagesToShow?: number;
  showRowsPerPage?: boolean;
  showItemsInfo?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  totalItems = 0,
  rowsPerPage = 10,
  onRowsPerPageChange,
  rowsPerPageOptions = [5, 10, 15, 20, 25],
  maxPagesToShow = 8,
  showRowsPerPage = true,
  showItemsInfo = true,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleRowsPerPageChange = (value: string) => {
    if (onRowsPerPageChange) {
      onRowsPerPageChange(Number(value));
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
      pageNumbers.push(
        <div
          key={i}
          className={`flex flex-col justify-center items-center pb-[5px] w-3 h-auto ${
            currentPage === i ? "border-b-2 border-purple-primary" : ""
          }`}
          onClick={() => onPageChange(i)}
          role="button"
          tabIndex={0}
        >
          <span
            className={`font-poppins text-sm leading-tight ${
              currentPage === i ? "text-[#1C1C1E]" : "text-[#8E8E93]"
            } cursor-pointer`}
          >
            {i}
          </span>
        </div>
      );
    }
    return pageNumbers;
  };

  // Calculate item range for display
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * rowsPerPage + 1;
  const endItem = Math.min(currentPage * rowsPerPage, totalItems);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 py-2 px-3 mt-3">
      {/* Rows per page - Desktop */}
      {showRowsPerPage && onRowsPerPageChange && (
        <div className="hidden sm:flex items-center gap-2">
          <span className="font-poppins text-sm text-[#8E8E93] whitespace-nowrap">
            Rows per page
          </span>
          <Select
            value={rowsPerPage.toString()}
            onValueChange={handleRowsPerPageChange}
          >
            <SelectTrigger className="h-8 border border-[#C7C7CC] rounded-md font-poppins text-sm text-[#1C1C1E] focus:outline-none focus:border-purple-primary">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {rowsPerPageOptions.map((value) => (
                <SelectItem
                  key={value}
                  value={value.toString()}
                  className="font-poppins text-sm text-[#1C1C1E]"
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Page Numbers */}
      <div className="w-full sm:w-auto flex justify-center items-center">
        <div className="flex flex-row items-center gap-5 sm:gap-6">
          <button
            className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors cursor-pointer ${
              currentPage === 1
                ? "bg-[#8E8E93]"
                : "bg-purple-primary hover:bg-[#581890]"
            }`}
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div className="flex flex-row items-center gap-8 sm:gap-10">
            {renderPageNumbers()}
          </div>

          <button
            className={`flex items-center justify-center w-8 h-8 rounded-md transition-colors cursor-pointer ${
              currentPage === totalPages
                ? "bg-[#8E8E93]"
                : "bg-purple-primary hover:bg-[#581890]"
            }`}
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 justify-between sm:justify-end w-full sm:w-auto">
        {/* Rows per page - Mobile */}
        {showRowsPerPage && onRowsPerPageChange && (
          <div className="flex sm:hidden items-center gap-2">
            <span className="font-poppins text-xs text-[#8E8E93]">Rows:</span>
            <Select
              value={rowsPerPage.toString()}
              onValueChange={handleRowsPerPageChange}
            >
              <SelectTrigger className="w-14 h-8 border border-[#C7C7CC] rounded-md font-poppins text-xs text-[#1C1C1E] focus:outline-none focus:border-purple-primary pl-2 pr-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {rowsPerPageOptions.map((value) => (
                  <SelectItem
                    key={value}
                    value={value.toString()}
                    className="font-poppins text-xs text-[#1C1C1E]"
                  >
                    {value}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Items info */}
        {showItemsInfo && (
          <div className="font-poppins text-xs sm:text-sm text-[#8E8E93]">
            {`${startItem}-${endItem} of ${totalItems}`}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
