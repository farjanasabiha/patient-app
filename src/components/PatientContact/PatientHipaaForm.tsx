"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormLabel } from "@/components/ui/label";
import { DatePicker } from "@/components/ui/date-picker";
import { CalendarIcon } from "lucide-react";
import { CollapsibleSection } from "../Common/sections/CollapsibleSection";

export default function HIPAAAuthorizationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    socialSecurity: "",
    streetAddress1: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    providerName: "Axzons health system corp",
    providerStreet1: "70 E Sunrise Hwy",
    providerStreet2: "Ste 500",
    providerCity: "Valley Stream",
    providerState: "NY",
    providerZip: "11581",
    recipientFirstName: "",
    recipientMiddleName: "",
    recipientLastName: "",
    recipientStreet1: "",
    recipientStreet2: "",
    recipientCity: "",
    recipientState: "",
    recipientZip: "",
    otherInfo: "",
    initials: "",
    providerName2: "",
    attorneyName: "",
    signerName: "",
    authority: "",
    dateOfBirth: "",
    ssn: "",
    street1: "",
    street2: "",
    zip: "",
  });

  const [fromDate, setFromDate] = useState<Date>();
  const [toDate, setToDate] = useState<Date>();
  const [expirationDate, setExpirationDate] = useState<Date>();

  const [checkedItems, setCheckedItems] = useState({
    medicalRecords: true,
    entireMedical: true,
    other: true,
    alcoholDrug: false,
    mentalHealth: true,
    hivRelated: true,
    atRequest: false,
    otherReason: false,
  });

  return (
    <div className="mx-auto px-[1px]">
      {/* Form Content */}
      <CollapsibleSection title="HIPAA Authorization">
        <div className="space-y-6">
          {/* Form Title */}
          <div className="flex flex-col items-start p-0 gap-[2px] flex-none order-3 self-stretch flex-grow-0">
            <div className="flex items-center justify-center font-poppins font-semibold text-[14px] leading-[21px] text-[#1C1C1E] font-[feature-settings:'case' on] flex-none order-0 self-stretch flex-grow-0">
              AUTHORIZATION FOR RELEASE OF HEALTH INFORMATION PURSUANT TO HIPAA
            </div>
            <div className="flex items-center justify-center font-poppins font-normal text-[14px] leading-[21px] text-[#1C1C1E] font-[feature-settings:'case' on] flex-none order-1 self-stretch flex-grow-0">
              This form has been approved by the New York State Department of
              Health
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            {/* Personal Information Section */}
            <div className="flex flex-col items-start gap-3 w-full">
              {/* First Row - Name Fields */}
              <div className="flex flex-row items-center gap-6 w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    First Name
                  </FormLabel>
                  <Input
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="First Name"
                  />
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Middle Name
                  </FormLabel>
                  <Input
                    value={formData.middleName}
                    onChange={(e) =>
                      setFormData({ ...formData, middleName: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="Middle Name"
                  />
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Last Name
                  </FormLabel>
                  <Input
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              {/* Second Row - DOB and SSN */}
              <div className="flex flex-row items-center gap-6 w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Date of Birth
                  </FormLabel>
                  <div className="relative w-full">
                    <Input
                      type="text"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          dateOfBirth: e.target.value,
                        })
                      }
                      className="w-full px-2.5 py-[3.5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                      placeholder="MM/DD/YYYY"
                    />
                    <div className="absolute right-2.5 top-1/2 transform -translate-y-1/2">
                      <CalendarIcon className="w-6 h-6 text-[#8E8E93]" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Social Security Number
                  </FormLabel>
                  <Input
                    value={formData.ssn}
                    onChange={(e) =>
                      setFormData({ ...formData, ssn: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="123 456 7890"
                  />
                </div>

                <div className="flex-1 w-[301.67px]"></div>
              </div>

              {/* Third Row - Address Line 1, 2, and City */}
              <div className="flex flex-row items-center gap-6 w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Street Address Line 1
                  </FormLabel>
                  <Input
                    value={formData.street1}
                    onChange={(e) =>
                      setFormData({ ...formData, street1: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="Street Address Line 1"
                  />
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    Street Address Line 2
                  </FormLabel>
                  <Input
                    value={formData.street2}
                    onChange={(e) =>
                      setFormData({ ...formData, street2: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="Street Address Line 2"
                  />
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    City
                  </FormLabel>
                  <Input
                    value={formData.city}
                    onChange={(e) =>
                      setFormData({ ...formData, city: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="City"
                  />
                </div>
              </div>

              {/* Fourth Row - State and ZIP Code */}
              <div className="flex flex-row items-center gap-6 w-full">
                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    State
                  </FormLabel>
                  <Select
                    value={formData.state}
                    onValueChange={(value) =>
                      setFormData({ ...formData, state: value })
                    }
                  >
                    <SelectTrigger className="w-full px-2.5 py-[3.5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]">
                      <SelectValue placeholder="State" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ny">New York</SelectItem>
                      <SelectItem value="ca">California</SelectItem>
                      <SelectItem value="tx">Texas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins leading-[18px] w-full">
                    ZIP Code
                  </FormLabel>
                  <Input
                    value={formData.zip}
                    onChange={(e) =>
                      setFormData({ ...formData, zip: e.target.value })
                    }
                    className="w-full px-2.5 py-[5px] bg-[#F1FBFF] border-[#8E8E93] rounded-[3px] text-sm font-normal text-[#1C1C1E] font-poppins leading-[21px]"
                    placeholder="ZIP Code"
                  />
                </div>

                <div className="flex-1 w-[301.67px]"></div>
              </div>
            </div>
          </div>

          {/* Authorization Notice */}
          <div className="flex items-center w-full">
            <p className="text-sm font-semibold text-[#1c1c1e] font-poppins leading-[21px]">
              6.THIS AUTHORIZATION DOES NOT AUTHORIZE YOU TO DISCUSS MY HEALTH
              INFORMATION OR MEDICAL CARE WITH ANYONE OTHER THAN THE ATTORNEY OR
              GOVERNMENTAL AGENCY SPECIFIED IN ITEM 9 (b).
            </p>
          </div>

          {/* Healthcare Provider Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[#1c1c1e]">
              7. Name and address of health provider or entity to release
              information:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>Name</FormLabel>
                <Input
                  value={formData.providerName}
                  onChange={(e) =>
                    setFormData({ ...formData, providerName: e.target.value })
                  }
                />
              </div>
              <div className="hidden md:block"></div>
              <div className="hidden md:block"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>Street Address Line 1</FormLabel>
                <Input
                  value={formData.providerStreet1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      providerStreet1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Street Address Line 2</FormLabel>
                <Input
                  value={formData.providerStreet2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      providerStreet2: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>City</FormLabel>
                <Input
                  value={formData.providerCity}
                  onChange={(e) =>
                    setFormData({ ...formData, providerCity: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>State</FormLabel>
                <Select
                  value={formData.providerState}
                  onValueChange={(value) =>
                    setFormData({ ...formData, providerState: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="NY">New York</SelectItem>
                    <SelectItem value="CA">California</SelectItem>
                    <SelectItem value="TX">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>ZIP Code</FormLabel>
                <Input
                  value={formData.providerZip}
                  onChange={(e) =>
                    setFormData({ ...formData, providerZip: e.target.value })
                  }
                />
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Recipient Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#1c1c1e]">
              8. Name and address of person(s) or category of person to whom
              this information will be sent
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>First Name</FormLabel>
                <Input
                  placeholder="First Name"
                  value={formData.recipientFirstName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientFirstName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Middle Name</FormLabel>
                <Input
                  placeholder="Middle Name"
                  value={formData.recipientMiddleName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientMiddleName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Last Name</FormLabel>
                <Input
                  placeholder="Last Name"
                  value={formData.recipientLastName}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientLastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>Street Address Line 1</FormLabel>
                <Input
                  placeholder="Street Address Line 1"
                  value={formData.recipientStreet1}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientStreet1: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>Street Address Line 2</FormLabel>
                <Input
                  placeholder="Street Address Line 2"
                  value={formData.recipientStreet2}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      recipientStreet2: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>City</FormLabel>
                <Input
                  placeholder="City"
                  value={formData.recipientCity}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientCity: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
              <div className="flex flex-col gap-0.5">
                <FormLabel>State</FormLabel>
                <Select
                  value={formData.recipientState}
                  onValueChange={(value) =>
                    setFormData({ ...formData, recipientState: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ny">New York</SelectItem>
                    <SelectItem value="ca">California</SelectItem>
                    <SelectItem value="tx">Texas</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-0.5">
                <FormLabel>ZIP Code</FormLabel>
                <Input
                  placeholder="ZIP Code"
                  value={formData.recipientZip}
                  onChange={(e) =>
                    setFormData({ ...formData, recipientZip: e.target.value })
                  }
                />
              </div>
              <div className="hidden md:block"></div>
            </div>
          </div>

          {/* Information to be Released Section */}
          <div className="flex flex-col items-start gap-0.5">
            <h3 className="text-sm font-semibold text-[#1c1c1e] font-poppins flex items-center w-full">
              9 (a). Specific information to be released
            </h3>

            <div className="flex flex-col items-start gap-1 w-full">
              {/* First Row - Medical Records and Dates */}
              <div className="grid grid-cols-3 items-center gap-6 w-full">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="medicalRecords"
                    checked={checkedItems.medicalRecords}
                    onCheckedChange={(checked) =>
                      setCheckedItems({
                        ...checkedItems,
                        medicalRecords: checked as boolean,
                      })
                    }
                    className="w-6 h-6"
                  />
                  <FormLabel
                    htmlFor="medicalRecords"
                    className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center"
                  >
                    Medical Records
                  </FormLabel>
                </div>

                <div className="flex flex-col items-start gap-0.5">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins">
                    From date
                  </FormLabel>
                  <DatePicker
                    date={fromDate}
                    setDate={setFromDate}
                    className="w-full px-2.5 py-1 border-[#8E8E93] rounded-[3px]"
                  />
                </div>

                <div className="flex flex-col items-start gap-0.5">
                  <FormLabel className="text-xs font-semibold text-[#8E8E93] font-poppins">
                    To date
                  </FormLabel>
                  <DatePicker
                    date={toDate}
                    setDate={setToDate}
                    className="w-full px-2.5 py-1 border-[#8E8E93] rounded-[3px]"
                  />
                </div>
              </div>

              {/* Second Row - Entire Medical Record */}
              <div className="flex flex-row items-center gap-2 w-full mt-1">
                <Checkbox
                  id="entireMedical"
                  checked={checkedItems.entireMedical}
                  onCheckedChange={(checked) =>
                    setCheckedItems({
                      ...checkedItems,
                      entireMedical: checked as boolean,
                    })
                  }
                  className="w-6 h-6"
                />
                <FormLabel
                  htmlFor="entireMedical"
                  className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center flex-1"
                >
                  Entire Medical Record, including patient histories, office
                  notes (except psychotherapy notes), test result, radiology
                  studies, films, referrals, consults, billing records,
                  insurance records, and records sent to you by other health
                  care providers
                </FormLabel>
              </div>

              {/* Third Row - Other with Text Input */}
              <div className="grid grid-cols-3 items-center gap-6 w-full">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="other"
                    checked={checkedItems.other}
                    onCheckedChange={(checked) =>
                      setCheckedItems({
                        ...checkedItems,
                        other: checked as boolean,
                      })
                    }
                    className="w-6 h-6"
                  />
                  <FormLabel
                    htmlFor="other"
                    className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center"
                  >
                    Other
                  </FormLabel>
                </div>
                <div className="col-span-2">
                  <Textarea
                    placeholder="Enter Text"
                    value={formData.otherInfo}
                    onChange={(e) =>
                      setFormData({ ...formData, otherInfo: e.target.value })
                    }
                    className="w-full px-2.5 py-1 border-[#8E8E93] min-h-0 h-12 resize-none rounded-[3px]"
                  />
                </div>
              </div>

              {/* Fourth Row - Treatment Types */}
              <div className="grid grid-cols-3 items-center gap-6 w-full">
                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="alcoholDrug"
                    checked={checkedItems.alcoholDrug}
                    onCheckedChange={(checked) =>
                      setCheckedItems({
                        ...checkedItems,
                        alcoholDrug: checked as boolean,
                      })
                    }
                    className="w-6 h-6"
                  />
                  <FormLabel
                    htmlFor="alcoholDrug"
                    className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center"
                  >
                    Include Alcohol/Drug Treatment
                  </FormLabel>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="mentalHealth"
                    checked={checkedItems.mentalHealth}
                    onCheckedChange={(checked) =>
                      setCheckedItems({
                        ...checkedItems,
                        mentalHealth: checked as boolean,
                      })
                    }
                    className="w-6 h-6"
                  />
                  <FormLabel
                    htmlFor="mentalHealth"
                    className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center"
                  >
                    Include Mental Health Treatment
                  </FormLabel>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <Checkbox
                    id="hivRelated"
                    checked={checkedItems.hivRelated}
                    onCheckedChange={(checked) =>
                      setCheckedItems({
                        ...checkedItems,
                        hivRelated: checked as boolean,
                      })
                    }
                    className="w-6 h-6"
                  />
                  <FormLabel
                    htmlFor="hivRelated"
                    className="text-sm font-normal text-[#1c1c1e] font-poppins flex items-center"
                  >
                    Include HIV-Related Information
                  </FormLabel>
                </div>
              </div>
            </div>
          </div>

          {/* Authorization to Discuss Section */}
          <div className="flex flex-col items-start gap-0.5 w-[953px]">
            <h3 className="text-sm font-semibold text-[#1c1c1e] h-[21px] w-full font-poppins flex items-center">
              9 (b). Authorization to discuss health information
            </h3>

            {/* First Row */}
            <div className="flex flex-row items-center gap-6 w-full h-[54px]">
              <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                <FormLabel className="text-sm font-normal text-[#1c1c1e] h-[21px] w-full font-poppins">
                  By initializing here,
                </FormLabel>
                <Input
                  placeholder="Initials"
                  value={formData.initials}
                  onChange={(e) =>
                    setFormData({ ...formData, initials: e.target.value })
                  }
                  className="h-[31px] px-[10px] py-[5px] border-[#8E8E93]"
                />
              </div>

              <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
                <FormLabel className="text-sm font-normal text-[#1c1c1e] h-[21px] w-full font-poppins">
                  I authorize
                </FormLabel>
                <Input
                  placeholder="Name of individual health care provider"
                  value={formData.providerName2}
                  onChange={(e) =>
                    setFormData({ ...formData, providerName2: e.target.value })
                  }
                  className="h-[31px] px-[10px] py-[5px] border-[#8E8E93]"
                />
              </div>

              <div className="flex-1 w-[301.67px]"></div>
            </div>

            {/* Second Row */}
            <div className="flex flex-row items-start gap-6 w-full h-[54px]">
              <div className="flex flex-col items-start gap-0.5 w-[627.33px]">
                <FormLabel className="text-sm font-normal text-[#1c1c1e] h-[21px] w-full font-poppins flex items-center">
                  to discuss my health information with my attorney, or a
                  government agency, listed here:
                </FormLabel>
                <Input
                  placeholder="Attorney / Government Agency"
                  value={formData.attorneyName}
                  onChange={(e) =>
                    setFormData({ ...formData, attorneyName: e.target.value })
                  }
                  className="h-[31px] px-[10px] py-[5px] border-[#8E8E93]"
                />
              </div>
              <div className="w-[301.67px]"></div>
            </div>
          </div>

          {/* Reason for Release Section */}
          <div className="flex flex-row items-start gap-6 w-full">
            <div className="flex flex-col items-start gap-0.5 flex-1 w-[301.67px]">
              <h3 className="text-sm font-semibold text-[#1c1c1e] h-[21px] w-full font-poppins">
                10. Reason for release of information
              </h3>

              <div className="flex flex-row items-center gap-2 w-full h-6">
                <Checkbox
                  id="atRequest"
                  checked={checkedItems.atRequest}
                  onCheckedChange={(checked) =>
                    setCheckedItems({
                      ...checkedItems,
                      atRequest: checked as boolean,
                    })
                  }
                />
                <FormLabel
                  htmlFor="atRequest"
                  className="text-sm font-normal text-[#1c1c1e] flex-1"
                >
                  At request of individual
                </FormLabel>
              </div>

              <div className="flex flex-row items-start gap-2 w-full">
                <Checkbox
                  id="otherReason"
                  checked={checkedItems.otherReason}
                  onCheckedChange={(checked) =>
                    setCheckedItems({
                      ...checkedItems,
                      otherReason: checked as boolean,
                    })
                  }
                />
                <div className="flex flex-col gap-0.5 flex-1">
                  <FormLabel
                    htmlFor="otherReason"
                    className="text-sm font-normal text-[#1c1c1e]"
                  >
                    Other
                  </FormLabel>
                  <Input
                    placeholder="Enter Text"
                    className="h-[31px] px-[10px] py-[5px] border-[#8E8E93]"
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 w-[301.67px]"></div>
            <div className="flex-1 w-[301.67px]"></div>
          </div>

          {/* Final Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-6">
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-sm text-[#1c1c1e] font-semibold">
                11. Date or event on which this authorization will expire
              </FormLabel>
              <DatePicker
                date={expirationDate}
                setDate={setExpirationDate}
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-sm text-[#1c1c1e] font-semibold">
                12. If not the patient, name of person signing form
              </FormLabel>
              <Input
                placeholder="Name"
                value={formData.signerName}
                onChange={(e) =>
                  setFormData({ ...formData, signerName: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <FormLabel className="text-sm text-[#1c1c1e] font-semibold">
                13. Authority to sign on behalf of the patient
              </FormLabel>
              <Input
                placeholder="Authority"
                value={formData.authority}
                onChange={(e) =>
                  setFormData({ ...formData, authority: e.target.value })
                }
              />
            </div>
          </div>

          {/* Disclaimer Text */}

          <div className="md:col-span-3 ">
            <p className="text-sm text-[#1c1c1e]">
              All items on this form have been completed and my questions about
              this form have been answered. In addition, I have been provided a
              copy of the form
            </p>
          </div>
        </div>
      </CollapsibleSection>
    </div>
  );
}
