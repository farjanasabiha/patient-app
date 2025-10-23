import { useState } from 'react';

interface UseStepNavigationProps {
    totalSteps: number;
    initialStep?: number;
}

interface UseStepNavigationReturn {
    currentStep: number;
    handleNext: () => void;
    handleBack: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    goToStep: (step: number) => void;
}

export const useStepNavigation = ({
    totalSteps,
    initialStep = 0,
}: UseStepNavigationProps): UseStepNavigationReturn => {
    const [currentStep, setCurrentStep] = useState(initialStep);

    const handleNext = () => {
        if (currentStep < totalSteps - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const goToStep = (step: number) => {
        if (step >= 0 && step < totalSteps) {
            setCurrentStep(step);
        }
    };

    return {
        currentStep,
        handleNext,
        handleBack,
        isFirstStep: currentStep === 0,
        isLastStep: currentStep === totalSteps - 1,
        goToStep,
    };
}; 