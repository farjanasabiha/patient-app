import { useState } from 'react';

export interface Medication {
    id: string;
    medication: string;
    dose: string;
    frequency: string;
    route: string;
}

interface UseDynamicMedicationsProps {
    initialMedications?: Medication[];
    minMedications?: number;
}

export const useDynamicMedications = ({
    initialMedications = [],
    minMedications = 2,
}: UseDynamicMedicationsProps = {}) => {
    // Initialize with default medications if none provided
    const defaultMedications: Medication[] = Array.from({ length: minMedications }, (_, index) => ({
        id: (index + 1).toString(),
        medication: '',
        dose: '',
        frequency: '',
        route: '',
    }));

    const [medications, setMedications] = useState<Medication[]>(
        initialMedications.length > 0 ? initialMedications : defaultMedications
    );

    const addMedication = () => {
        const newMedication: Medication = {
            id: (medications.length + 1).toString(),
            medication: '',
            dose: '',
            frequency: '',
            route: '',
        };
        setMedications([...medications, newMedication]);
    };

    const updateMedication = (id: string, field: keyof Medication, value: string) => {
        setMedications(medications.map(medication =>
            medication.id === id ? { ...medication, [field]: value } : medication
        ));
    };

    const removeMedication = (id: string) => {
        if (medications.length > minMedications) {
            setMedications(medications.filter(medication => medication.id !== id));
        }
    };

    const canRemove = medications.length > minMedications;

    return {
        medications,
        addMedication,
        updateMedication,
        removeMedication,
        canRemove,
    };
};