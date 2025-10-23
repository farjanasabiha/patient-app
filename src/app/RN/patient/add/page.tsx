import PreAssessmentForm from "@/components/PreAssessment/PreAssessmentForm";
import { Breadcrumb } from "@/components/Common/breadcrumbs/Breadcrumb";

export default function AddPatientPage() {
  return (
    <div className="space-y-4">
      <Breadcrumb
        items={[
          { label: "Patient Roster", href: "/" },
          { label: "Pre-Assessment", active: true },
        ]}
      />
      <PreAssessmentForm />
    </div>
  );
}
