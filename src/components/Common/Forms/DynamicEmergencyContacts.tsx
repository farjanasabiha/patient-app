"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  useDynamicEmergencyContacts,
  EmergencyContact,
} from "@/hooks/useDynamicEmergencyContacts";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export interface DynamicEmergencyContactsProps {
  title?: string;
  initialContacts?: EmergencyContact[];
  minContacts?: number;
  onContactsChange?: (contacts: EmergencyContact[]) => void;
  showCollapsibleSection?: boolean;
  className?: string;
}

export interface EmergencyContactFieldConfig {
  key: keyof EmergencyContact;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel" | "select";
  selectOptions?: { value: string; label: string }[];
}

const defaultFieldConfig: EmergencyContactFieldConfig[] = [
  {
    key: "firstName",
    label: "Emergency Contact First Name",
    placeholder: "First Name",
    required: true,
  },
  {
    key: "lastName",
    label: "Emergency Contact Last Name",
    placeholder: "Last Name",
    required: true,
  },
  {
    key: "relationship",
    label: "Relationship to the Patient",
    placeholder: "Relationship",
    required: true,
  },
  {
    key: "cellPhone",
    label: "Cell Phone Number",
    placeholder: "123 456 7890",
    required: true,
    type: "tel",
  },
  {
    key: "homePhone",
    label: "Home Phone Number",
    placeholder: "123 456 7890",
    type: "tel",
  },
  {
    key: "email",
    label: "Email Address",
    placeholder: "demoemail@gmail.com",
    type: "email",
  },
  {
    key: "streetAddressLine1",
    label: "Street Address Line 1",
    placeholder: "Street Address Line 1",
  },
  {
    key: "streetAddressLine2",
    label: "Street Address Line 2",
    placeholder: "Street Address Line 2",
  },
  {
    key: "city",
    label: "City",
    placeholder: "City",
  },
  {
    key: "state",
    label: "State",
    placeholder: "State",
    type: "select",
    selectOptions: [
      { value: "CA", label: "California" },
      { value: "NY", label: "New York" },
      { value: "TX", label: "Texas" },
    ],
  },
  {
    key: "zipCode",
    label: "ZIP Code",
    placeholder: "ZIP Code",
  },
];

export default function DynamicEmergencyContacts({
  title = "Emergency Contact Information",
  initialContacts = [],
  minContacts = 2,
  onContactsChange,
  showCollapsibleSection = true,
  className = "",
  fieldConfig = defaultFieldConfig,
}: DynamicEmergencyContactsProps & {
  fieldConfig?: EmergencyContactFieldConfig[];
}) {
  const { contacts, addContact, updateContact, removeContact, canRemove } =
    useDynamicEmergencyContacts({
      initialContacts,
      minContacts,
    });

  // Notify parent component of changes
  React.useEffect(() => {
    if (onContactsChange) {
      onContactsChange(contacts);
    }
  }, [contacts, onContactsChange]); // Removed onContactsChange from dependencies to prevent infinite loops

  const ContactForm = () => (
    <div className={`space-y-6 ${className}`}>
      {contacts.map((contact: EmergencyContact, index: number) => (
        <div key={contact.id} className="space-y-3">
          {/* Contact Header with Number and Delete Button */}
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium">{index + 1}.</span>
            <div className="flex-1 h-px bg-[#C7C7CC]" />
            {canRemove && index >= minContacts && (
              <PrimaryButton
                variant="outline"
                size="sm"
                className="w-8 h-8 p-1 border-red-300 text-red-500 hover:bg-red-50"
                onClick={() => removeContact(contact.id)}
              >
                <Trash2 className="w-4 h-4" />
              </PrimaryButton>
            )}
          </div>

          {/* Contact Fields Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
            {fieldConfig.map((field) => (
              <div
                key={field.key}
                className="flex flex-col items-start gap-0.5"
              >
                <FormLabel className="text-xs font-semibold text-[#8E8E93] font-['Poppins']">
                  {field.label}
                </FormLabel>
                {field.type === "select" ? (
                  <Select
                    value={contact[field.key]}
                    onValueChange={(value) =>
                      updateContact(contact.id, field.key, value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder={field.placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                      {field.selectOptions?.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type={field.type || "text"}
                    placeholder={field.placeholder}
                    value={contact[field.key]}
                    onChange={(e) =>
                      updateContact(contact.id, field.key, e.target.value)
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Add Contact Button */}
      <div className="flex justify-end">
        <PrimaryButton
          size="lg"
          className="w-[48px] h-[48px] rounded-[24px] p-[12px]"
          onClick={addContact}
        >
          <Plus className="w-6 h-6" />
        </PrimaryButton>
      </div>
    </div>
  );

  if (showCollapsibleSection) {
    return (
      <CollapsibleSection title={title}>
        <ContactForm />
      </CollapsibleSection>
    );
  }

  return <ContactForm />;
}

// Export the hook and types for external use
export { useDynamicEmergencyContacts, type EmergencyContact };
