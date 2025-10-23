import { useState } from 'react';

export interface EmergencyContact {
    id: string;
    firstName: string;
    lastName: string;
    relationship: string;
    cellPhone: string;
    homePhone: string;
    email: string;
    streetAddressLine1: string;
    streetAddressLine2: string;
    city: string;
    state: string;
    zipCode: string;
}

interface UseDynamicEmergencyContactsProps {
    initialContacts?: EmergencyContact[];
    minContacts?: number;
}

export const useDynamicEmergencyContacts = ({
    initialContacts = [],
    minContacts = 2,
}: UseDynamicEmergencyContactsProps = {}) => {
    // Initialize with default contacts if none provided
    const defaultContacts: EmergencyContact[] = Array.from({ length: minContacts }, (_, index) => ({
        id: (index + 1).toString(),
        firstName: '',
        lastName: '',
        relationship: '',
        cellPhone: '',
        homePhone: '',
        email: '',
        streetAddressLine1: '',
        streetAddressLine2: '',
        city: '',
        state: '',
        zipCode: '',
    }));

    const [contacts, setContacts] = useState<EmergencyContact[]>(
        initialContacts.length > 0 ? initialContacts : defaultContacts
    );

    const addContact = () => {
        const newContact: EmergencyContact = {
            id: (contacts.length + 1).toString(),
            firstName: '',
            lastName: '',
            relationship: '',
            cellPhone: '',
            homePhone: '',
            email: '',
            streetAddressLine1: '',
            streetAddressLine2: '',
            city: '',
            state: '',
            zipCode: '',
        };
        setContacts([...contacts, newContact]);
    };

    const updateContact = (id: string, field: keyof EmergencyContact, value: string) => {
        setContacts(currentContacts =>
            currentContacts.map(contact =>
                contact.id === id ? { ...contact, [field]: value } : contact
            )
        );
    };

    const removeContact = (id: string) => {
        if (contacts.length > minContacts) {
            setContacts(currentContacts => currentContacts.filter(contact => contact.id !== id));
        }
    };

    return {
        contacts,
        addContact,
        updateContact,
        removeContact,
        canRemove: contacts.length > minContacts,
    };
};