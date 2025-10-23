"use client";

import { Textarea } from "@/components/ui/textarea";
import { FormLabel } from "@/components/ui/label";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

const HomecareWorkerGuidance = () => {
  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6">
        {/* Homecare Worker Guidance Section */}
        <CollapsibleSection title="Homecare Worker Guidance">
          <div className="space-y-4">
            <div className="text-center text-zinc-900 text-sm font-semibold">
              Homecare Worker has been guided and explained to follow the below:
            </div>
            <div className="space-y-2 text-zinc-900 text-sm">
              <ol className="list-decimal pl-6 space-y-2">
                <li>
                  Care for patient in a comfortable & non-discriminatory way.
                </li>
                <li>
                  Follow the plan of care as written to care for the Patient.
                </li>
                <li>
                  Follow the normal daily routine, as much as possible, within
                  the provision of personal care such as getting up, meal times
                  & bathing arrangements.
                </li>
                <li>Homecare Worker has to show up for work on time.</li>
                <li>Homecare Worker has to stay for the specified time.</li>
                <li>Homecare Worker has to be:</li>
              </ol>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4 mx-6">
                <div className="space-y-1">
                  <p className="text-zinc-900 text-sm">Friendly</p>
                  <p className="text-zinc-900 text-sm">Considerate</p>
                  <p className="text-zinc-900 text-sm">Polite</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-900 text-sm">Respectful</p>
                  <p className="text-zinc-900 text-sm">Honest</p>
                  <p className="text-zinc-900 text-sm">Believable</p>
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-900 text-sm">Prompt</p>
                  <p className="text-zinc-900 text-sm">Dependable</p>
                  <p className="text-zinc-900 text-sm">Efficient</p>
                </div>
              </div>

              <ol className="list-decimal pl-6 space-y-2" start={7}>
                <li>
                  friendly considerate polite respectful honest believable
                  prompt dependable efficient.
                </li>
                <li>
                  If Homecare Worker(s) shops and/or handle money for patient,
                  he/she should always return the change and receipt(s).
                </li>
                <li>
                  Homecare Worker(s) have patient sign his/her Employee Time
                  Sheet after each visit.
                </li>
                <li>
                  Always ask for suggestions for ways we can improve our
                  service.
                </li>
              </ol>
            </div>
          </div>
        </CollapsibleSection>

        {/* Case Management Section */}
        <CollapsibleSection title="Case Management">
          <div className="space-y-4">
            <div className="text-center text-zinc-900 text-sm font-semibold">
              Homecare Worker has been explained to follow the below
              activities/duties:
            </div>
            <div className="space-y-2 text-zinc-900 text-sm">
              <p>
                Required activities/duties have to be performed according to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Level/type of care, as identified in Care Plan</li>
                <li>Amount/time per visit, as identified in Care Plan</li>
                <li>
                  Frequency of service delivery, as stipulated in Care Plan
                </li>
                <li>
                  Duration/Period for provision of service, as stated in Care
                  Plan
                </li>
              </ul>
            </div>
          </div>
        </CollapsibleSection>

        {/* Homecare Worker's duties Section */}
        <CollapsibleSection title="Homecare Worker's duties in this Assignment">
          <div className="space-y-4">
            <div className="text-center text-zinc-900 text-sm font-semibold">
              Homecare Worker has been explained to follow the below
              activities/duties:
            </div>
            <div className="space-y-4 text-zinc-900 text-sm">
              <ol className="list-decimal pl-6">
                <li className="mb-4">
                  Worker&apos;s activities/duties:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Follow Care Plan as written.</li>
                    <li>
                      Follow procedural instructions carefully, correctly and
                      consistently.
                    </li>
                    <li>Complete assigned duties/activities competently.</li>
                    <li>
                      Use appropriate and safe techniques in the provision of
                      care.
                    </li>
                    <li>
                      Document written notations, according to case management
                      requirements.
                    </li>
                    <li>
                      Record client functioning information accurately,
                      thoroughly and consistently.
                    </li>
                    <li>
                      Deliver relevant and timely reports to Supervisor and
                      co-workers.
                    </li>
                    <li>Apply and maintain confidentiality measures.</li>
                    <li>
                      Stay alert, and report concerns, which impact the
                      client&apos;s health and safety.
                    </li>
                    <li>Apply tack, and good judgment.</li>
                    <li>Be receptive to, and be able to handle, changes.</li>
                    <li>Work well as a member of the Client Care Team.</li>
                    <li>
                      Relay concerns about own skills and/or knowledge deficits
                      to Supervisor.
                    </li>
                  </ul>
                </li>
                <li>
                  Worker&apos;s understanding & adherence to relevant policies,
                  procedures & practices:
                  <ul className="list-disc pl-6 mt-2 space-y-2">
                    <li>Use Universal Precautions appropriately.</li>
                    <li>Apply proper Infection Control Techniques.</li>
                    <li>Use appropriate Body Mechanics.</li>
                    <li>Follow personal safety measures.</li>
                    <li>Follow home environment safety measures.</li>
                    <li>Dress according to Dress Code.</li>
                    <li>Wear Agency&apos;s Identification Badge.</li>
                    <li>Follow Standards of Conduct & Work Ethics</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </CollapsibleSection>

        {/* Additional Comments Section */}
        <CollapsibleSection title="Additional Comments">
          <div className="space-y-2">
            <FormLabel className="text-xs font-semibold text-[#8E8E93]">
              Additional Comments
            </FormLabel>
            <Textarea
              placeholder="Enter Text"
              className="min-h-[96px] bg-white"
            />
          </div>
        </CollapsibleSection>
      </div>
    </div>
  );
};

export default HomecareWorkerGuidance;
