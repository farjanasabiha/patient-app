import { useState } from 'react';

export interface Diagnosis {
    id: string;
    code: string;
    description: string;
}

interface UseDynamicDiagnosesProps {
    initialDiagnoses?: Diagnosis[];
    minDiagnoses?: number;
}

export const useDynamicDiagnoses = ({
    initialDiagnoses = [],
    minDiagnoses = 2,
}: UseDynamicDiagnosesProps = {}) => {
    // Initialize with default diagnoses if none provided
    const defaultDiagnoses: Diagnosis[] = Array.from({ length: minDiagnoses }, (_, index) => ({
        id: (index + 1).toString(),
        code: '',
        description: '',
    }));

    const [diagnoses, setDiagnoses] = useState<Diagnosis[]>(
        initialDiagnoses.length > 0 ? initialDiagnoses : defaultDiagnoses
    );

    const addDiagnosis = () => {
        const newDiagnosis: Diagnosis = {
            id: (diagnoses.length + 1).toString(),
            code: '',
            description: '',
        };
        setDiagnoses([...diagnoses, newDiagnosis]);
    };

    const updateDiagnosis = (id: string, field: keyof Diagnosis, value: string) => {
        setDiagnoses(diagnoses.map(diagnosis =>
            diagnosis.id === id ? { ...diagnosis, [field]: value } : diagnosis
        ));
    };

    const removeDiagnosis = (id: string) => {
        if (diagnoses.length > minDiagnoses) {
            setDiagnoses(diagnoses.filter(diagnosis => diagnosis.id !== id));
        }
    };

    const canRemove = diagnoses.length > minDiagnoses;

    return {
        diagnoses,
        addDiagnosis,
        updateDiagnosis,
        removeDiagnosis,
        canRemove,
    };
};