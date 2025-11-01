/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useCallback } from "react";
import { ChevronDown, MoreHorizontal } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Pagination from "../paginations/pagination";

// Utility functions for common styling
export const getLocationBgColor = (location: string): string => {
  switch (location) {
    case "Georgia":
      return "bg-[#e5f2cc]";
    case "New York":
      return "bg-[#dfdefa]";
    case "New Jersey":
      return "bg-[#ffecce]";
    case "Alabama":
      return "bg-[#D9F9F6]";
    case "Pennsylvania":
      return "bg-[#ffd8e8]";
    default:
      return "bg-gray-100";
  }
};

export const getLocationTextColor = (location: string): string => {
  switch (location) {
    case "Georgia":
      return "text-[#7ec000]";
    case "New York":
      return "text-[#5e5ce6]";
    case "New Jersey":
      return "text-[#ff9f0a]";
    case "Alabama":
      return "text-[#3fe0d0]";
    case "Pennsylvania":
      return "text-[#ff3d8c]";
    default:
      return "text-gray-700";
  }
};

export const getStatusStyle = (status: string): string => {
  switch (status) {
    case "Signed":
    case "Published":
    case "Active":
    case "Completed":
    case "Resolved":
    case "Closed":
      return "bg-[#D6F8DE] text-[#30DB5B]";
    case "Not Signed":
    case "Archived":
    case "Cancelled":
    case "Rejected":
      return "bg-[#FFE7E6] text-[#FF0D00]";
    case "Draft":
    case "Pending":
    case "In Progress":
    case "Open":
      return "bg-[#dfdefa] text-[#5e5ce6]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const getPriorityStyle = (priority: string): string => {
  switch (priority) {
    case "High":
      return "bg-[#FFE7E6] text-[#FF0D00]";
    case "Medium":
      return "bg-[#FFF4E6] text-[#FF9F0A]";
    case "Low":
      return "bg-[#E5F2CC] text-[#7EC000]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const getComplaintTypeStyle = (type: string): string => {
  switch (type) {
    case "Service Quality":
      return "bg-[#FFE7E6] text-[#FF0D00]";
    case "Staff Behavior":
      return "bg-[#FFF4E6] text-[#FF9F0A]";
    case "Billing Issue":
      return "bg-[#dfdefa] text-[#5e5ce6]";
    case "Equipment Issue":
      return "bg-[#D9F9F6] text-[#3fe0d0]";
    case "Communication":
      return "bg-[#ffd8e8] text-[#ff3d8c]";
    case "Scheduling":
      return "bg-[#E5F2CC] text-[#7EC000]";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export type EmergencyIcon = {
  type: "oxygen" | "fall-risk" | "wheelchair" | "ventilator";
  isActive: boolean;
  label?: string;
};

export type TableColumn<T> = {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  width: string;
  cellRenderer?: (item: T) => React.ReactNode;
};

export type ActionButton<T> = {
  icon: React.ReactNode;
  backgroundColor: string;
  hoverBackgroundColor: string;
  iconColor: string;
  onClick: (item: T) => void;
};

export type ExpandedRowContent<T> = {
  accessor: keyof T;
  label: string;
  width: string;
  span?: number;
  contentRenderer?: (item: T) => React.ReactNode;
};

type ReusableTableProps<T> = {
  data: T[];
  columns: TableColumn<T>[];
  keyField: keyof T;
  expandedContent?: ExpandedRowContent<T>[];
  emergencyIcons?: (item: T) => EmergencyIcon[];
  actionButtons?: ActionButton<T>[];
  renderRowActions?: (item: T) => React.ReactNode;
  isLoading?: boolean;
  emptyStateMessage?: string;
  initialRowsPerPage?: number;
  rowsPerPageOptions?: number[];
  gridTemplateColumns: string;
  className?: string;
};

// Emergency icon renderer component using actual SVG icons
const EmergencyIconRenderer: React.FC<{ icon: EmergencyIcon }> = ({ icon }) => {
  const getIconSvg = (type: EmergencyIcon["type"]) => {
    switch (type) {
      case "oxygen":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="2" fill="#70D7FF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.6147 15.4132C13.6385 15.4132 12.966 14.9635 12.559 14.3611C12.1759 13.7936 12.0547 13.1331 12.0547 12.6825V11.3172C12.0547 10.8667 12.1759 10.2062 12.559 9.63871C12.966 9.03625 13.6385 8.58655 14.6147 8.58655C15.5909 8.58655 16.2633 9.03625 16.6704 9.63871C17.0535 10.2062 17.1747 10.8667 17.1747 11.3172V12.6825C17.1747 13.1331 17.0535 13.7936 16.6704 14.3611C16.2633 14.9635 15.5909 15.4132 14.6147 15.4132ZM13.3347 12.6825C13.3347 12.9147 13.4055 13.2782 13.5984 13.564C13.7673 13.8149 14.0549 14.0479 14.6147 14.0479C15.1745 14.0479 15.462 13.8149 15.631 13.564C15.8239 13.2782 15.8947 12.9147 15.8947 12.6825V11.3172C15.8947 11.0851 15.8239 10.7216 15.631 10.4357C15.462 10.1848 15.1745 9.95188 14.6147 9.95188C14.0549 9.95188 13.7673 10.1848 13.5984 10.4357C13.4314 10.6999 13.3402 11.0048 13.3347 11.3172V12.6825Z"
              fill="#1C1C1E"
            />
            <path
              d="M19.095 13.4933C19.0973 13.4184 19.078 13.3444 19.0395 13.28H18.7238C18.7059 13.3088 18.6924 13.3402 18.6837 13.373C18.6625 13.4546 18.6254 13.5312 18.5745 13.5984C18.5236 13.6655 18.4599 13.722 18.3871 13.7645C18.3144 13.807 18.2339 13.8348 18.1504 13.8461C18.0669 13.8574 17.9819 13.8522 17.9005 13.8306C17.819 13.809 17.7426 13.7716 17.6756 13.7204C17.6087 13.6692 17.5525 13.6053 17.5103 13.5323C17.4681 13.4593 17.4407 13.3788 17.4297 13.2952C17.4188 13.2116 17.4244 13.1267 17.4464 13.0453C17.5761 12.5538 17.9908 12 18.6683 12H19.095C19.5183 12 19.8528 12.2304 20.0593 12.506C20.2658 12.7817 20.375 13.1324 20.375 13.4933C20.375 13.8739 20.253 14.2468 20.0209 14.5301L19.3356 15.4133H19.735C19.9047 15.4133 20.0675 15.4808 20.1875 15.6008C20.3076 15.7208 20.375 15.8836 20.375 16.0533C20.375 16.2231 20.3076 16.3859 20.1875 16.5059C20.0675 16.6259 19.9047 16.6933 19.735 16.6933H18.0283C17.9085 16.6934 17.7911 16.6599 17.6894 16.5966C17.5877 16.5332 17.5058 16.4426 17.4531 16.335C17.4004 16.2274 17.3789 16.1072 17.3911 15.988C17.4034 15.8688 17.4488 15.7554 17.5223 15.6608L19.0156 13.7374L19.031 13.7186C19.0764 13.6525 19.0988 13.5734 19.095 13.4933ZM8.64167 5.17334H7.78833V7.02507C8.78247 7.37836 9.495 8.32641 9.495 9.44001H4.375C4.375 8.32555 5.08753 7.3775 6.08167 7.02507V5.17334H5.22833V3.46667H8.64167V5.17334ZM9.495 19.6373V11.1467H4.375V19.6373C4.375 20.1323 4.77607 20.5333 5.271 20.5333H8.599C9.09393 20.5333 9.495 20.1323 9.495 19.6373Z"
              fill="#1C1C1E"
            />
          </svg>
        );
      case "fall-risk":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="2" fill="#FFD60A" />
            <path
              d="M12.2839 17.5684L9.37783 15.4069C9.2017 15.2788 9.04959 15.1145 8.9215 14.914C8.79341 14.7136 8.70534 14.5016 8.65731 14.2781L7.57654 9.49863L5.46302 11.3239L6.03943 14.0139C6.10348 14.2861 6.05961 14.5342 5.90782 14.7584C5.75603 14.9826 5.54372 15.1187 5.27088 15.1667C4.99805 15.2147 4.74987 15.1667 4.52635 15.0226C4.30283 14.8785 4.16673 14.6703 4.11806 14.3981L3.56566 11.7322C3.4856 11.396 3.50162 11.0639 3.6137 10.736C3.72578 10.4081 3.90991 10.1317 4.16609 9.90692L7.62457 6.83272C7.99283 6.51249 8.42899 6.38023 8.93303 6.43595C9.43707 6.49167 9.92158 6.61592 10.3865 6.8087C10.8989 7.03286 11.4315 7.19297 11.9842 7.28904C12.5369 7.38511 13.0931 7.39312 13.6529 7.31306C14.0372 7.24901 14.4054 7.13693 14.7577 6.97682C15.1099 6.8167 15.4462 6.62457 15.7664 6.4004C15.9906 6.24029 16.2349 6.1724 16.4994 6.19674C16.7639 6.22108 16.9839 6.337 17.1594 6.54451C17.3349 6.75202 17.4031 6.98835 17.364 7.2535C17.325 7.51865 17.1927 7.73064 16.9673 7.88947C16.599 8.14566 16.2227 8.37398 15.8385 8.57444C15.4542 8.77491 15.0459 8.93886 14.6136 9.06632C14.0852 9.21042 13.553 9.28663 13.0169 9.29496C12.4809 9.30329 11.9483 9.24308 11.4193 9.11435L12.0918 12.0925L14.8538 11.5641C15.1099 11.5161 15.3623 11.5199 15.6108 11.5756C15.8593 11.6314 16.0953 11.7396 16.3188 11.9003L19.8493 14.3981C20.0735 14.5583 20.2057 14.7706 20.2461 15.0351C20.2864 15.2996 20.2182 15.5436 20.0415 15.7671C19.8814 15.9753 19.677 16.0995 19.4286 16.1399C19.1801 16.1802 18.944 16.128 18.7205 15.9833L15.3581 13.6296L11.8996 14.3021L13.5328 15.5029C13.821 15.7271 14.0333 16.0073 14.1697 16.3435C14.3062 16.6798 14.342 17.032 14.2773 17.4003L13.6049 21.0989C13.5568 21.3711 13.4207 21.5834 13.1966 21.7359C12.9724 21.8883 12.7242 21.9402 12.452 21.8915C12.1798 21.8428 11.9717 21.7067 11.8276 21.4832C11.6835 21.2597 11.6354 21.0115 11.6835 20.7387L12.2839 17.5684ZM8.15295 5.75194C7.62457 5.75194 7.17241 5.56397 6.79646 5.18802C6.42051 4.81207 6.23221 4.35958 6.23157 3.83056C6.23093 3.30154 6.41923 2.84938 6.79646 2.47407C7.17369 2.09876 7.62585 1.91047 8.15295 1.90919C8.68005 1.90791 9.13253 2.0962 9.5104 2.47407C9.88827 2.85194 10.0762 3.30411 10.0743 3.83056C10.0724 4.35702 9.88443 4.8095 9.5104 5.18802C9.13637 5.56653 8.68389 5.7545 8.15295 5.75194Z"
              fill="#1C1C1E"
            />
          </svg>
        );
      case "wheelchair":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="2" fill="#002D9B" />
            <path
              d="M20.4411 16.5587L20.9412 17.5664C21.0793 17.8446 20.9657 18.1822 20.6875 18.3203L18.386 19.4764C17.8217 19.7565 17.1359 19.5184 16.8676 18.9472L14.6606 14.25H9.75C9.19014 14.25 8.71549 13.8383 8.63629 13.2841C7.44491 4.94442 7.51336 5.46248 7.5 5.25C7.5 3.97179 8.56587 2.94252 9.8573 3.00249C11.027 3.05681 11.9684 4.01869 11.9992 5.18925C12.0297 6.34705 11.1853 7.3135 10.0794 7.47578L10.2436 8.62503H14.8125C15.1232 8.62503 15.375 8.87686 15.375 9.18753V10.3125C15.375 10.6232 15.1232 10.875 14.8125 10.875H10.565L10.7257 12H15.375C15.5886 12 15.7978 12.0608 15.9781 12.1753C16.1584 12.2898 16.3024 12.4533 16.3932 12.6466L18.4152 16.95L19.6871 16.3049C19.9654 16.1668 20.3029 16.2804 20.4411 16.5587ZM13.9462 15.375H13.0846C12.8108 17.2806 11.1676 18.75 9.1875 18.75C7.01636 18.75 5.25 16.9836 5.25 14.8125C5.25 13.3533 6.04784 12.077 7.23014 11.3969C7.09964 10.484 6.98953 9.71428 6.89658 9.06484C4.61564 9.97725 3 12.2096 3 14.8125C3 18.2243 5.77569 21 9.1875 21C11.7142 21 13.8916 19.4775 14.8515 17.3018L13.9462 15.375Z"
              fill="white"
            />
          </svg>
        );
      case "ventilator":
        return (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="2" fill="#6EE68C" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9 13C9 12.347 9.4175 11.791 10 11.585V10H7.5V3H16.5V10H14V11.585C14.5825 11.791 15 12.347 15 13V13.06C15.16 13.073 15.3335 13.101 15.5055 13.1585C15.8158 13.2559 16.0846 13.454 16.2695 13.7215C16.4735 14.019 16.5715 14.3975 16.5715 14.8515C16.5715 15.0315 16.654 15.1735 16.8385 15.292C17.037 15.42 17.3345 15.5 17.6605 15.5C17.987 15.5 18.2845 15.42 18.483 15.292C18.6675 15.1735 18.75 15.0315 18.75 14.851V9.4275C18.3888 9.3198 18.072 9.09835 17.8467 8.79609C17.6215 8.49384 17.4999 8.12694 17.5 7.75V5.75C17.5 5.28587 17.6844 4.84075 18.0126 4.51256C18.3408 4.18437 18.7859 4 19.25 4C19.7141 4 20.1592 4.18437 20.4874 4.51256C20.8156 4.84075 21 5.28587 21 5.75V7.75C21.0001 8.12694 20.8785 8.49384 20.6533 8.79609C20.428 9.09835 20.1112 9.3198 19.75 9.4275V14.851C19.75 15.4365 19.435 15.869 19.0235 16.1335C18.6265 16.3885 18.1285 16.5 17.6605 16.5C17.1925 16.5 16.6955 16.389 16.298 16.1335C15.886 15.8685 15.5715 15.4365 15.5715 14.851C15.5715 14.5385 15.5045 14.3735 15.4445 14.286C15.3875 14.2025 15.307 14.146 15.1905 14.1075C15.1281 14.0871 15.0637 14.0728 14.9985 14.065C14.9817 14.4512 14.8166 14.816 14.5374 15.0834C14.2582 15.3507 13.8866 15.5 13.5 15.5H10.5C10.1022 15.5 9.72064 15.342 9.43934 15.0607C9.15804 14.7794 9 14.3978 9 14H8.75C8.271 14 7.8985 14.065 7.6525 14.2285C7.449 14.364 7.25 14.6235 7.25 15.25C7.25 15.7415 7.083 16.155 6.791 16.4475C6.65406 16.5836 6.49165 16.6915 6.31303 16.7648C6.13441 16.8382 5.94309 16.8756 5.75 16.875C5.3765 16.875 4.9965 16.735 4.709 16.4475C4.417 16.155 4.25 15.7415 4.25 15.25V11.4275C3.88877 11.3198 3.57197 11.0983 3.34674 10.7961C3.12152 10.4938 2.9999 10.1269 3 9.75V7.75C3 7.52019 3.04527 7.29262 3.13321 7.0803C3.22116 6.86798 3.35006 6.67507 3.51256 6.51256C3.67507 6.35006 3.86798 6.22116 4.0803 6.13321C4.29262 6.04526 4.52019 6 4.75 6C4.97981 6 5.20738 6.04526 5.4197 6.13321C5.63202 6.22116 5.82493 6.35006 5.98744 6.51256C6.14994 6.67507 6.27884 6.86798 6.36679 7.0803C6.45474 7.29262 6.5 7.52019 6.5 7.75V9.75C6.5001 10.1269 6.37848 10.4938 6.15326 10.7961C5.92803 11.0983 5.61123 11.3198 5.25 11.4275V15.25C5.25 15.5085 5.333 15.6575 5.416 15.74C5.46006 15.7834 5.51224 15.8176 5.56955 15.8408C5.62686 15.8639 5.68818 15.8756 5.75 15.875C5.81182 15.8756 5.87314 15.8639 5.93045 15.8408C5.98776 15.8176 6.03994 15.7834 6.084 15.74C6.167 15.6575 6.25 15.5085 6.25 15.25C6.25 14.3765 6.551 13.761 7.0975 13.3965C7.6015 13.0605 8.229 13 8.75 13H9ZM12.3415 4.6035L13.4675 6.622L14.228 5.7145H15.5V6.7145H14.695L13.3015 8.3775L12.1965 6.3965L11.605 7.143H8.2195V6.143H11.1215L12.3415 4.6035ZM13 14C13.1326 14 13.2598 13.9473 13.3536 13.8536C13.4473 13.7598 13.5 13.6326 13.5 13.5C13.5 13.3674 13.4473 13.2402 13.3536 13.1464C13.2598 13.0527 13.1326 13 13 13C12.8674 13 12.7402 13.0527 12.6464 13.1464C12.5527 13.2402 12.5 13.3674 12.5 13.5C12.5 13.6326 12.5527 13.7598 12.6464 13.8536C12.7402 13.9473 12.8674 14 13 14ZM11.5 13.5C11.5 13.6326 11.4473 13.7598 11.3536 13.8536C11.2598 13.9473 11.1326 14 11 14C10.8674 14 10.7402 13.9473 10.6464 13.8536C10.5527 13.7598 10.5 13.6326 10.5 13.5C10.5 13.3674 10.5527 13.2402 10.6464 13.1464C10.7402 13.0527 10.8674 13 11 13C11.1326 13 11.2598 13.0527 11.3536 13.1464C11.4473 13.2402 11.5 13.3674 11.5 13.5ZM11 11.5H13V10H11V11.5ZM4 10.1665V9.1665H5.5V10.1665H4Z"
              fill="#1C1C1E"
            />
            <path
              d="M13.5 16C13.675 16 13.8435 15.97 14 15.915V18H19V19H5V18H10V15.915C10.1565 15.97 10.325 16 10.5 16H11V18H13V16H13.5ZM7.25 21C7.44891 21 7.63968 20.921 7.78033 20.7804C7.92098 20.6397 8 20.449 8 20.25C8 20.0511 7.92098 19.8604 7.78033 19.7197C7.63968 19.5791 7.44891 19.5 7.25 19.5C7.05109 19.5 6.86032 19.5791 6.71967 19.7197C6.57902 19.8604 6.5 20.0511 6.5 20.25C6.5 20.449 6.57902 20.6397 6.71967 20.7804C6.86032 20.921 7.05109 21 7.25 21ZM16.75 21C16.9489 21 17.1397 20.921 17.2803 20.7804C17.421 20.6397 17.5 20.449 17.5 20.25C17.5 20.0511 17.421 19.8604 17.2803 19.7197C17.1397 19.5791 16.9489 19.5 16.75 19.5C16.5511 19.5 16.3603 19.5791 16.2197 19.7197C16.079 19.8604 16 20.0511 16 20.25C16 20.449 16.079 20.6397 16.2197 20.7804C16.3603 20.921 16.5511 21 16.75 21Z"
              fill="#1C1C1E"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`w-6 h-6 ${!icon.isActive ? "opacity-50" : ""}`}>
      {getIconSvg(icon.type)}
    </div>
  );
};

export function ReusableTable<T>({
  data,
  columns,
  keyField,
  expandedContent,
  emergencyIcons,
  actionButtons,
  renderRowActions,
  isLoading = false,
  emptyStateMessage = "No data found",
  initialRowsPerPage = 10,
  rowsPerPageOptions = [5, 10, 15, 20, 25, 30],
  gridTemplateColumns,
  className = "",
}: ReusableTableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [expandedRows, setExpandedRows] = useState<Array<string>>([]);

  // Toggle row expansion
  const toggleRow = (id: string) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  // Calculate total pages
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Get current page data
  const currentItems = React.useMemo(() => {
    const indexOfLastItem = currentPage * rowsPerPage;
    const indexOfFirstItem = indexOfLastItem - rowsPerPage;
    return data.slice(indexOfFirstItem, indexOfLastItem);
  }, [currentPage, data, rowsPerPage]);

  // Handle page changes
  const handlePageChange = useCallback((pageNumber: number) => {
    setCurrentPage(pageNumber);
  }, []);

  // Handle rows per page change
  const handleRowsPerPageChange = useCallback((newRowsPerPage: number) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1);
  }, []);

  // Render cell content
  const renderCellContent = (item: T, column: TableColumn<T>) => {
    if (column.cellRenderer) {
      return column.cellRenderer(item);
    }

    if (typeof column.accessor === "function") {
      return column.accessor(item);
    }

    return item[column.accessor] as React.ReactNode;
  };

  return (
    <div
      className={`flex flex-col h-full bg-white rounded-[10px] ${className}`}
    >
      <div className="flex-grow overflow-hidden">
        <div className="border border-[#c7c7cc] rounded-[10px] overflow-x-auto min-w-full h-full">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr
                className="grid h-[45px] border-b border-[#c7c7cc]"
                style={{ gridTemplateColumns }}
              >
                {/* Expand button column */}
                {expandedContent && <th className="px-[10px]"></th>}

                {/* Data columns */}
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-[15px] text-left font-semibold text-[14px] leading-[21px] text-[#1c1c1e] font-poppins flex items-center"
                  >
                    {column.header}
                  </th>
                ))}

                {/* Actions column */}
                {(actionButtons || renderRowActions) && (
                  <th className="px-[15px]"></th>
                )}
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td
                    colSpan={
                      columns.length +
                      (expandedContent ? 2 : 1) +
                      (actionButtons || renderRowActions ? 1 : 0)
                    }
                    className="px-[15px]"
                  >
                    <div className="flex justify-center items-center h-[405px]">
                      <div className="flex flex-col items-center gap-2">
                        <div className="w-6 h-6 border-2 border-[#0071A4] border-t-transparent rounded-full animate-spin" />
                        <span className="font-poppins text-sm text-[#8E8E93]">
                          Loading...
                        </span>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : currentItems.length === 0 ? (
                <tr>
                  <td
                    colSpan={
                      columns.length +
                      (expandedContent ? 2 : 1) +
                      (actionButtons || renderRowActions ? 1 : 0)
                    }
                    className="px-[15px]"
                  >
                    <div className="flex justify-center items-center h-[405px]">
                      <span className="font-poppins text-sm text-[#8E8E93]">
                        {emptyStateMessage}
                      </span>
                    </div>
                  </td>
                </tr>
              ) : (
                currentItems.map((item) => {
                  const rowKey = item[keyField] as unknown as React.Key;
                  return (
                    <React.Fragment key={rowKey}>
                      <tr
                        className={`grid h-[45px] ${
                          !expandedRows.includes(rowKey) ? "border-b" : ""
                        } border-[#c7c7cc]`}
                        style={{ gridTemplateColumns }}
                      >
                        {/* Expand button */}
                        {expandedContent && (
                          <td className="px-[10px] flex items-center">
                            <button
                              onClick={() => toggleRow(rowKey)}
                              className="p-1 rounded-full hover:bg-gray-100"
                            >
                              <ChevronDown
                                className={`w-6 h-6 text-[#8E8E93] transition-transform ${
                                  expandedRows.includes(rowKey)
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            </button>
                          </td>
                        )}

                        {/* Data cells */}
                        {columns.map((column, index) => (
                          <td
                            key={index}
                            className="px-[10px] font-poppins text-[14px] leading-[21px] text-[#8e8e93] truncate flex items-center"
                          >
                            {renderCellContent(item, column)}
                          </td>
                        ))}

                        {/* Actions cell */}
                        {(actionButtons || renderRowActions) && (
                          <td className="px-[15px] flex items-center justify-end">
                            {renderRowActions ? (
                              <div className="flex flex-row items-center gap-[10px]">
                                {renderRowActions(item)}
                              </div>
                            ) : actionButtons ? (
                              <Popover>
                                <PopoverTrigger asChild>
                                  <button className="flex items-center justify-center w-[36px] h-[36px] p-[6px] bg-[#F2F2F7] hover:bg-[#E5E5EA] transition-colors rounded-[18px]">
                                    <MoreHorizontal className="w-6 h-6 text-[#8E8E93]" />
                                  </button>
                                </PopoverTrigger>
                                <PopoverContent
                                  className="p-1 bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.15)] border border-[#C7C7CC] w-[50px]"
                                  sideOffset={-4}
                                >
                                  <div className="flex flex-col items-center gap-1">
                                    {actionButtons.map((button, idx) => (
                                      <button
                                        key={idx}
                                        onClick={() => button.onClick(item)}
                                        className={`group flex items-center justify-center w-8 h-8 p-1.5 rounded-2xl transition-colors ${button.backgroundColor} ${button.hoverBackgroundColor} ${button.iconColor}`}
                                      >
                                        {button.icon}
                                      </button>
                                    ))}
                                  </div>
                                </PopoverContent>
                              </Popover>
                            ) : null}
                          </td>
                        )}
                      </tr>

                      {/* Expanded row content */}
                      {expandedRows.includes(rowKey) && expandedContent && (
                        <tr
                          className="grid border-b border-[#c7c7cc]"
                          style={{ gridTemplateColumns }}
                        >
                          <td className="px-[10px]">
                            {/* Emergency Icons Section */}
                            {emergencyIcons && (
                              <div className="flex flex-col justify-center items-start gap-[5px] mb-1">
                                {emergencyIcons(item).map((icon, iconIdx) => (
                                  <EmergencyIconRenderer
                                    key={iconIdx}
                                    icon={icon}
                                  />
                                ))}
                              </div>
                            )}
                          </td>
                          {expandedContent.map((content, idx) => {
                            const colSpanStyle = content.span
                              ? { gridColumn: `span ${content.span}` }
                              : {};
                            return (
                              <td
                                key={idx}
                                className="px-[15px] py-4"
                                style={colSpanStyle}
                              >
                                <div className="flex flex-col gap-1">
                                  <span className="font-poppins text-sm font-semibold text-[#1C1C1E]">
                                    {content.label}
                                  </span>
                                  {content.contentRenderer ? (
                                    content.contentRenderer(item)
                                  ) : (
                                    <span className="font-poppins text-sm text-[#8E8E93]">
                                      {
                                        item[
                                          content.accessor
                                        ] as React.ReactNode
                                      }
                                    </span>
                                  )}
                                </div>
                              </td>
                            );
                          })}
                          {/* Empty cells to fill the grid */}
                          {(actionButtons || renderRowActions) && <td></td>}
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          totalItems={data.length}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleRowsPerPageChange}
          rowsPerPageOptions={rowsPerPageOptions}
        />
      </div>
    </div>
  );
}
