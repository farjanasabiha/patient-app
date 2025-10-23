import { useState } from 'react';

export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    relationship: string;
    cellPhone: string;
    homePhone: string;
    email: string;
}

interface UseDynamicContactsProps {
    initialContacts?: Contact[];
    minContacts?: number;
}

export const useDynamicContacts = ({
    initialContacts = [],
    minContacts = 2,
}: UseDynamicContactsProps = {}) => {
    // Initialize with default contacts if none provided
    const defaultContacts: Contact[] = Array.from({ length: minContacts }, (_, index) => ({
        id: (index + 1).toString(),
        firstName: '',
        lastName: '',
        relationship: '',
        cellPhone: '',
        homePhone: '',
        email: '',
    }));

    const [contacts, setContacts] = useState<Contact[]>(
        initialContacts.length > 0 ? initialContacts : defaultContacts
    );

    const addContact = () => {
        const newContact: Contact = {
            id: (contacts.length + 1).toString(),
            firstName: '',
            lastName: '',
            relationship: '',
            cellPhone: '',
            homePhone: '',
            email: '',
        };
        setContacts([...contacts, newContact]);
    };

    const updateContact = (id: string, field: keyof Contact, value: string) => {
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