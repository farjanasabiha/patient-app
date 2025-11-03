"use client";

import React from "react";
import { Plus, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormLabel } from "@/components/ui/label";
import { PrimaryButton } from "@/components/ui/primary-button";
import { useDynamicContacts, Contact } from "@/hooks/useDynamicContacts";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

export interface DynamicContactsProps {
  title?: string;
  initialContacts?: Contact[];
  minContacts?: number;
  onContactsChange?: (contacts: Contact[]) => void;
  showCollapsibleSection?: boolean;
  className?: string;
}

export interface ContactFieldConfig {
  key: keyof Contact;
  label: string;
  placeholder: string;
  required?: boolean;
  type?: "text" | "email" | "tel";
}

const defaultFieldConfig: ContactFieldConfig[] = [
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
];

export default function DynamicContacts({
  title = "Emergency Contact",
  initialContacts = [],
  minContacts = 2,
  onContactsChange,
  showCollapsibleSection = false,
  className = "",
  fieldConfig = defaultFieldConfig,
}: DynamicContactsProps & { fieldConfig?: ContactFieldConfig[] }) {
  const { contacts, addContact, updateContact, removeContact, canRemove } =
    useDynamicContacts({
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
      {contacts.map((contact: Contact, index: number) => (
        <div key={contact.id} className="space-y-3 px-3">
          {/* Contact Header with Number and Delete Button */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-[#1C1C1E] font-poppins">
              {index + 1}.
            </span>
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
          <div className="grid grid-cols-1 md:grid-cols-2  gap-y-3 gap-x-4 sm:gap-x-6">
            {fieldConfig.map((field) => (
              <div key={field.key} className="flex flex-col gap-0.5">
                <FormLabel required={field.required && index === 0}>
                  {field.label}
                </FormLabel>
                <Input
                  type={field.type || "text"}
                  placeholder={field.placeholder}
                  value={contact[field.key]}
                  onChange={(e) =>
                    updateContact(contact.id, field.key, e.target.value)
                  }
                />
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
export { useDynamicContacts, type Contact };
