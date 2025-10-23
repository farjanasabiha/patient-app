export interface StepProps {
    onNext?: () => void;
    onBack?: () => void;
    currentStep?: number;
    totalSteps?: number;
} 