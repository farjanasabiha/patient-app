import { PrimaryButton } from "@/components/ui/primary-button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext?: () => void;
  onBack?: () => void;
  isLastStep?: boolean;
  onSubmit?: () => void;
  hideBackOnFirst?: boolean;
  submitButtonText?: string;
  onStepChange?: (stepIndex: number) => void;
  formData?: any; // Form data to be submitted
  enablePatientDashboardRedirect?: boolean; // Enable redirect to patient dashboard
}

export const StepNavigation = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  isLastStep = false,
  onSubmit,
  hideBackOnFirst = false,
  submitButtonText = "Submit",
  formData,
  enablePatientDashboardRedirect = false,
}: StepNavigationProps) => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const isFirstStep = currentStep === 0;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    console.log(submitError, submitSuccess);

    try {
      // Call the original onSubmit if provided
      if (onSubmit) {
        await onSubmit();
      }

      // If patient dashboard redirect is enabled and formData is provided
      if (enablePatientDashboardRedirect && formData) {
        // Create patient data object similar to PreAssessmentForm
        const patientData = {
          id: Date.now(), // Generate a temporary ID
          mrn: `MRN-${Date.now()}`,
          name: formData.patientFirstName && formData.patientLastName 
            ? `${formData.patientFirstName} ${formData.patientMiddleName ? formData.patientMiddleName + ' ' : ''}${formData.patientLastName}`.trim()
            : 'Unknown Patient',
          dob: formData.dateOfBirth ? formData.dateOfBirth.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }) : '',
          phoneNumber: formData.cellPhone || 'Not provided',
          email: formData.email || 'Not provided',
          location: formData.state || formData.city || 'Unknown',
          country: 'USA',
          startOfCare: new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }),
          diagnosisCodes: [],
          diagnosisNames: [],
          servicesProvided: 'Home Health Services',
          payerSource: 'Insurance',
          status: 'Not Signed' as const,
          onOxygen: false,
          fallRisk: false,
          needsWheelchair: false,
          onVentilator: false,
          // Store additional form data
          formData: formData
        };
        
        sessionStorage.setItem('currentPatientData', JSON.stringify(patientData));
      }

      setSubmitSuccess(true);
      alert('Form submitted successfully!');
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error instanceof Error ? error.message : 'An error occurred');
      alert('Error: ' + (error instanceof Error ? error.message : 'An error occurred'));
    } finally {
      setIsSubmitting(false);
      // Redirect to patient dashboard with a special flag to indicate new patient
      router.push("/patient-dashboard?source=pre-assessment");
    }
  };

  return (
    <>
      <div className="h-px bg-[#C7C7CC] mt-6" />
      <div className="flex justify-between mt-6 gap-4">
        <div className="flex justify-between gap-4">
          {(!isFirstStep || !hideBackOnFirst) && (
            <PrimaryButton
              variant="outline"
              className="px-14 py-2"
              onClick={onBack}
              disabled={isSubmitting}
            >
              Back
            </PrimaryButton>
          )}
        </div>
        <div className="flex justify-center items-center">
          <div className="text-sm text-[#8e8e93]">
            {currentStep + 1}/{totalSteps}
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <PrimaryButton
            className="px-14 py-2"
            onClick={() => {
              if (isLastStep) {
                handleSubmit();
              } else {
                onNext?.();
              }
            }}
            disabled={isSubmitting}
          >
            {isLastStep ? (
              isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                submitButtonText
              )
            ) : (
              "Next"
            )}
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};
