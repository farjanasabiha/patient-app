"use client";

import React, { useState } from "react";
import { FormLabel } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CollapsibleSection } from "@/components/Common/sections/CollapsibleSection";

// Styles constants
const STYLES = {
  formLabel: "text-xs font-semibold text-[#8E8E93] font-['Poppins']",
  optionLabel:
    "text-sm font-normal text-[#1C1C1E] font-['Poppins'] pointer-events-none",
  questionGrid: "grid grid-cols-3 gap-6",
};

// RadioQuestion component for reuse
type RadioQuestionProps = {
  id: string;
  label: string;
  value: string;
  onChange: (id: string, value: string) => void;
};

const RadioQuestion: React.FC<RadioQuestionProps> = ({
  id,
  label,
  value,
  onChange,
}) => (
  <div className="flex flex-col items-start gap-1">
    <FormLabel className={STYLES.formLabel}>{label}</FormLabel>
    <RadioGroup
      value={value || ""}
      onValueChange={(newValue) => onChange(id, newValue)}
      className="flex flex-col gap-2 w-full"
    >
      <div className="flex items-center gap-2">
        <RadioGroupItem value="yes" id={`${id}-yes`} />
        <FormLabel htmlFor={`${id}-yes`} className={STYLES.optionLabel}>
          Yes
        </FormLabel>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroupItem value="no" id={`${id}-no`} />
        <FormLabel htmlFor={`${id}-no`} className={STYLES.optionLabel}>
          No
        </FormLabel>
      </div>
    </RadioGroup>
  </div>
);

// Type for question category
type QuestionCategory = {
  title: string;
  questions: Array<{
    id: string;
    label: string;
  }>;
};

// Helper function to chunk questions into rows
const chunkArray = <T,>(array: T[], size: number): T[][] => {
  return array.reduce<T[][]>((result, item, index) => {
    const chunkIndex = Math.floor(index / size);

    if (!result[chunkIndex]) {
      result[chunkIndex] = [];
    }

    result[chunkIndex].push(item);
    return result;
  }, []);
};

// Define all questions by category
const categories: QuestionCategory[] = [
  {
    title: "Neighborhood Hazards",
    questions: [
      { id: "sufficient_lighting", label: "Is there sufficient lighting?" },
      {
        id: "can_be_heard",
        label: "Can individuals be heard if they call for help?",
      },
      { id: "nearby_help", label: "Are there people nearby who can help?" },
      {
        id: "safety_improvements",
        label: "Are there improvements that can be made to enhance safety?",
      },
    ],
  },
  {
    title: "Entrance to Home",
    questions: [
      {
        id: "outside_lights",
        label:
          "Are there outside lights covering the sidewalks and/or other entrance ways?",
      },
      {
        id: "steps_sidewalks",
        label:
          "Are the steps and sidewalks in good repair and free from debris/material?",
      },
      {
        id: "railings_secured",
        label: "Are the railings on the steps secured?",
      },
      {
        id: "functional_peephole",
        label: "Is there a functional peephole in the front?",
      },
      {
        id: "deadbolt_lock",
        label:
          "Does the door have a deadbolt lock that does not require a key to open it from the inside (unless client has a tendency to wander)?",
      },
    ],
  },
    {
    title: "Kitchen",
    questions: [
      {
        id: "kitchen_slippery_floor",
        label: "Is the floor waxed or otherwise slippery?",
      },
      {
        id: "kitchen_flammable_items",
        label: "Are there any flammable items near the heat source?",
      },
      {
        id: "kitchen_on_buttons",
        label: 'Do the "ON" buttons work on all appliances?',
      },
      {
        id: "kitchen_items_eye_knee",
        label: "Are items used the most stored between eye and knee level?",
      },
      {
        id: "kitchen_uncluttered_workspace",
        label:
          "Is there an uncluttered work space near the cooking area (to avoid having to carry items)?",
      },
    ],
  },

  {
    title: "Medications",
    questions: [
      {
        id: "medications_marked",
        label: "Are all medications marked clearly?",
      },
      { id: "medications_named", label: "Are medications named?" },
      { id: "medications_dated", label: "Are medications dated?" },
      {
        id: "medications_instructions_how",
        label: "Are instructions given as to how medications are to be taken?",
      },
      {
        id: "medications_instructions_when",
        label: "Are instructions given as to when medications are to be taken?",
      },
    ],
  },
    {
    title: "Client/Resident's Potential for Violence",
    questions: [
      { id: "violence_history", label: "Is there a history of violence?" },
      {
        id: "violence_fantasies",
        label: "Violence fantasies or plans of violence?",
      },
      {
        id: "violence_support",
        label: "Level of support from significant other",
      },
      { id: "violence_eye_contact", label: "Staring and eye contact?" },
      { id: "violence_tone_volume", label: "Tone & volume of voice?" },
      { id: "violence_pacing", label: "Pacing?" },
      { id: "violence_anxiety", label: "Anxiety?" },
      { id: "violence_mumbling", label: "Mumbling?" },
    ],
  },
  {
    title: "Living Areas",
    questions: [
      {
        id: "living_doorways_wide",
        label:
          "Are doorways wide enough to carry loads through and get a wheelchair/walker through?",
      },
      {
        id: "living_light_switches",
        label:
          "Are the light switches accessible so that they can be turned on/off without walking cross a dark room?",
      },
      {
        id: "living_sofas_chairs",
        label:
          "Are sofas and chairs high & firm enough for easy sitting and rising?",
      },
      {
        id: "living_telephone_accessible",
        label:
          "Is there a telephone in the room that is easily accessible from the bed?",
      },
      {
        id: "living_emergency_numbers",
        label: "Is list of emergency telephone numbers by the telephone?",
      },
      {
        id: "living_telephone_cords",
        label: "Do telephone cords/electronic wires run across walking areas?",
      },
      {
        id: "living_castors_wheels",
        label: "Are there castors or wheels on furniture?",
      },
      {
        id: "living_furniture_armrests",
        label:
          "Does sitting furniture have armrests which are strong enough for getting in and out?",
      },
    ],
  },
  {
    title: "Bathroom",
    questions: [
      {
        id: "bathroom_glass_doors",
        label: "Are there glass doors on the bathtub/shower?",
      },
      {
        id: "bathroom_non_skid",
        label: "Is there a non-skid surface/mat in the bathtub/shower?",
      },
      {
        id: "bathroom_grab_bars",
        label:
          "Are there grab-bars on the bathtub/shower and adjacent to the toilet?",
      },
      {
        id: "bathroom_raised_toilet",
        label:
          "Is there a raised toilet seat (if client has trouble getting on/off toilet)?",
      },
      {
        id: "bathroom_water_temp",
        label: "Is the water temperature below scalding (e.g. below 120°)?",
      },
      {
        id: "bathroom_shower_bench",
        label:
          "Is there a shower bench/bath seat with a hand-held shower wand available?",
      },
      {
        id: "bathroom_night_light",
        label: "Does the bathroom have a night night?",
      },
    ],
  },
  {
    title: "Bedroom",
    questions: [
      { id: "bedroom_scatter_rugs", label: "Are there any scatter rugs?" },
      {
        id: "bedroom_bed_height",
        label: 'Is the bed lower than "back-of-the-knee" height?',
      },
      {
        id: "bedroom_chair_armrests",
        label:
          "Is there a chair with armrests and firm seat (to reduce falls while dressing)?",
      },
      {
        id: "bedroom_furniture_castors",
        label: "Does furniture have castors or roll?",
      },
      {
        id: "bedroom_telephone_accessible",
        label:
          "Is there a telephone in the room that is easily accessible from the bed?",
      },
      {
        id: "bedroom_emergency_numbers",
        label: "Is list of emergency telephone numbers by the telephone?",
      },
      {
        id: "bedroom_bedside_light",
        label: "Is there a flashlight, light switch, or lamp beside the bed?",
      },
      { id: "bedroom_night_light", label: "Is there a night light?" },
    ],
  },
  {
    title: "Lighting",
    questions: [
      {
        id: "lighting_stairways_hallways",
        label: "Is there adequate lighting in all stairways and hallways?",
      },
      {
        id: "lighting_switch_stairs",
        label: "Is there a light switch at both the top and bottom of stairs?",
      },
      {
        id: "lighting_switch_doorway",
        label: "Is there a light switch by the doorway of each room?",
      },
    ],
  },
  
  {
    title: "Medical Equipment/Supplies",
    questions: [
      {
        id: "sharp_container",
        label: "Are used needles placed in a sharp container?",
      },
      {
        id: "oxygen_tubing",
        label: "Is oxygen tubing kept off the walking path?",
      },
      {
        id: "equipment_stored",
        label: "Is medical equipment properly stored?",
      },
    ],
  },

    {
    title: "General",
    questions: [
      { id: "emergency_plan", label: "Is there an emergency plan in place?" },
      {
        id: "smoke_detectors",
        label: "Are working smoke detectors installed?",
      },
      {
        id: "fire_extinguisher",
        label:
          'Is there a "ready-to-use" fire extinguisher(s) on the premises?',
      },
      {
        id: "halls_stairways_clear",
        label: "Are inside halls and stairways free of clutter/debris?",
      },
      { id: "throw_rugs_removed", label: "Are throw rugs removed?" },
      {
        id: "sturdy_handrails",
        label:
          "Are there sturdy handrails or banisters by all steps and stairs?",
      },
      {
        id: "electrical_cords",
        label: "Are electrical cords unfrayed and placed to avoid tripping?",
      },
      {
        id: "outlets_overloaded",
        label:
          "Are electrical outlets/switches overloaded (e.g. warm to the touch)?",
      },
      { id: "rugs_secured", label: "Are rugs secured around the edges?" },
      {
        id: "hazardous_products",
        label: "Are hazardous products labeled and kept in a secure place?",
      },
      {
        id: "stool_needed",
        label: "Is there a need for a stool to reach high shelves/cupboards?",
      },
      {
        id: "smoking_safe",
        label:
          "Is smoking paraphernalia handled safely (e.g. cigarettes put out)?",
      },
      {
        id: "smoke_with_oxygen",
        label: "Does anybody smoke in the homes where oxygen is in use?",
      },
      {
        id: "animals_controlled",
        label: "Are all animals, on site, controlled?",
      },
      {
        id: "home_pests_free",
        label: "Is the home free from bugs, mice, and/or animal waste?",
      },
      {
        id: "materials_stored_safely",
        label: "Are materials stored safely and at a proper height?",
      },
      {
        id: "emergency_response_device",
        label: "Does the client wear an emergency response necklace/bracelet?",
      },
    ],
  },
];

const HomeSafetyChecklist = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleRadioChange = (questionId: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [questionId]: value,
    }));
  };

  return (
    <div className="mx-auto px-[1px]">
      <div className="space-y-6 grid grid-cols-2 gap-10">
        {categories.map((category) => (
          <CollapsibleSection key={category.title} title={category.title}>
            <div className="flex flex-col gap-6 px-3">
              {chunkArray(category.questions, 3).map((row, rowIndex) => (
                <div key={rowIndex} className={STYLES.questionGrid}>
                  {row.map((question) => (
                    <RadioQuestion
                      key={question.id}
                      id={question.id}
                      label={question.label}
                      value={formData[question.id] || ""}
                      onChange={handleRadioChange}
                    />
                  ))}
                </div>
              ))}
            </div>
          </CollapsibleSection>
        ))}
      </div>
    </div>
  );
};

export default HomeSafetyChecklist;
