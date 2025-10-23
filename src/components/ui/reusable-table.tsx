"use client";

import React from "react";

interface Column<T> {
  header: string;
  width: string;
  cell: (row: T) => React.ReactNode;
}

interface ReusableTableProps<T> {
  data: T[];
  columns: Column<T>[];
  isLoading?: boolean;
  emptyState?: React.ReactNode;
  renderRowActions?: (row: T) => React.ReactNode;
}

export function ReusableTable<T>({
  data,
  columns,
  isLoading = false,
  emptyState,
  renderRowActions,
}: ReusableTableProps<T>) {
  return (
    <div className="flex flex-col h-full bg-white rounded-[10px] border border-[#C7C7CC] overflow-hidden">
      {/* Mobile scroll indicator */}
      <div className="flex sm:hidden items-center justify-center py-2 px-4 text-xs text-[#8E8E93] bg-[#F8F8F8] border-b border-[#C7C7CC]">
        <svg
          className="w-4 h-4 mr-1 text-[#8E8E93]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
        <span>Scroll horizontally to see more</span>
      </div>

      <div className="flex-1 overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Table Header */}
          <div className="border-b border-[#C7C7CC]">
            <div className="flex flex-row items-center justify-between h-[45px]">
              <div className="flex flex-row items-center">
                {columns.map((column) => (
                  <div
                    key={column.header}
                    className={`flex flex-row items-center px-[15px] ${column.width}`}
                  >
                    <span className="font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E]">
                      {column.header}
                    </span>
                  </div>
                ))}
              </div>
              {renderRowActions && (
                <div className="px-[15px] flex-shrink-0">
                  {/* Actions column header - empty */}
                </div>
              )}
            </div>
          </div>

          {/* Table Body */}
          <div className="w-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-[405px]">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 border-2 border-[#0071A4] border-t-transparent rounded-full animate-spin" />
                  <span className="font-poppins text-sm text-[#8E8E93]">
                    Loading...
                  </span>
                </div>
              </div>
            ) : data.length === 0 ? (
              <div className="flex justify-center items-center h-[405px]">
                {emptyState || (
                  <span className="font-poppins text-sm text-[#8E8E93]">
                    No data available
                  </span>
                )}
              </div>
            ) : (
              <div className="w-full">
                {data.map((row, index) => (
                  <div
                    key={index}
                    className="w-full border-b border-[#C7C7CC] bg-white"
                  >
                    <div className="flex flex-row items-center justify-between h-[45px] w-full">
                      <div className="flex flex-row items-center">
                        {columns.map((column) => (
                          <div
                            key={column.header}
                            className={`flex flex-row items-center px-[15px] ${column.width}`}
                          >
                            {column.cell(row)}
                          </div>
                        ))}
                      </div>
                      {renderRowActions && (
                        <div className="flex flex-row items-center gap-[10px] px-[15px] py-[4.5px]">
                          {renderRowActions(row)}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                {/* Space filler for when we have few rows */}
                {data.length < 8 && (
                  <div
                    className="h-[calc(205px-45px*min(8,max(1,_var(--data-length,0)))))]"
                    style={
                      { "--data-length": data.length } as React.CSSProperties
                    }
                  ></div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
