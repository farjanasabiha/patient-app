import React from "react";
import { EditIcon } from "@/components/ui/icons/EditIcon";
import { CaregiverIcon } from "@/components/ui/icons/CaregiverIcon";
import { CopyFileIcon } from "@/components/ui/icons/CopyFileIcon";
import { ActionButton } from "./ReusableTable";

export type ActionButtonType = "edit" | "care" | "copy" | "note";

interface TableActionButtonsProps<T> {
  actions: ActionButtonType[];
  onActionClick: (item: T, action: string) => void;
}

export const getActionButtonConfig = <T extends object>(
  type: ActionButtonType,
  onClick: (item: T, action: string) => void
): ActionButton<T> => {
  const configs: Record<ActionButtonType, Omit<ActionButton<T>, "onClick">> = {
    edit: {
      icon: (
        <EditIcon
          width={16}
          height={16}
          className="text-[#BF5AF2] group-hover:text-white"
        />
      ),
      backgroundColor: "bg-[#F9EFFE]",
      hoverBackgroundColor: "hover:bg-[#BF5AF2]",
      iconColor: "text-[#BF5AF2]",
    },
    care: {
      icon: (
        <CaregiverIcon
          width={16}
          height={16}
          className="text-[#3FE0D0] group-hover:text-white"
        />
      ),
      backgroundColor: "bg-[#ECFCFA]",
      hoverBackgroundColor: "hover:bg-[#3FE0D0]",
      iconColor: "text-[#3FE0D0]",
    },
    copy: {
      icon: (
        <CopyFileIcon
          width={16}
          height={16}
          className="text-[#FF9F0A] group-hover:text-white"
        />
      ),
      backgroundColor: "bg-[#FFECCE]",
      hoverBackgroundColor: "hover:bg-[#FF9F0A]",
      iconColor: "text-[#FF9F0A]",
    },
    note: {
      icon: (
        <CopyFileIcon
          width={16}
          height={16}
          className="text-[#FF9F0A] group-hover:text-white"
        />
      ),
      backgroundColor: "bg-[#FFECCE]",
      hoverBackgroundColor: "hover:bg-[#FF9F0A]",
      iconColor: "text-[#FF9F0A]",
    },
  };

  return {
    ...configs[type],
    onClick: (currentItem: T) => onClick(currentItem, type),
  };
};

export const TableActionButtons = <T extends object>({
  actions,
  onActionClick,
}: TableActionButtonsProps<T>): ActionButton<T>[] => {
  return actions.map((action) =>
    getActionButtonConfig<T>(action, onActionClick)
  );
};
