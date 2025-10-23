export interface EmergencyContact {
  id?: string;
  firstName: string;
  lastName: string;
  relationship: string;
  cellPhone: string;
  homePhone?: string;
  email?: string;
  isPrimary?: boolean;
}

export interface AuthorizedHours {
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export interface DaySchedule {
  startTime: string;
  endTime: string;
}

export interface ScheduleTime {
  monday?: DaySchedule;
  tuesday?: DaySchedule;
  wednesday?: DaySchedule;
  thursday?: DaySchedule;
  friday?: DaySchedule;
  saturday?: DaySchedule;
  sunday?: DaySchedule;
}

export interface PrimaryCarePhysician {
  firstName?: string;
  lastName?: string;
  npi?: string;
  phoneNumber?: string;
  faxNumber?: string;
  email?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface Pharmacy {
  name?: string;
  phoneNumber?: string;
  faxNumber?: string;
  email?: string;
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  state?: string;
  zipCode?: string;
}

export interface PreAssessmentFormData {
  // Patient Demographics
  patientFirstName: string;
  patientMiddleName?: string;
  patientLastName: string;
  gender: string;
  dateOfBirth: Date | string;
  ssn: string;
  languagesSpoken?: string;
  
  // Address Information
  streetAddress1?: string;
  streetAddress2?: string;
  city?: string;
  state: string;
  zipCode?: string;
  county?: string;
  
  // Contact Information
  cellPhone: string;
  homePhone?: string;
  email: string;
  
  // Location Coordinates
  latitude?: number;
  longitude?: number;
  
  // Insurance Information
  healthfirstId: string;
  medicaidId: string;
  
  // Vitals
  heightFeet: number;
  heightInches: number;
  weightLbs: number;
  
  // Medical History
  preExistingConditions?: string;
  needsHelpWith?: string;
  livesWith?: string;
  pets?: string;
  mobilityAids?: string;
  
  // Authorization Information
  authorizationNumber?: string;
  serviceStartDate?: Date | string;
  serviceEndDate?: Date | string;
  code?: string;
  modifier?: string;
  daysOfService?: string;
  totalAuthorizedHours?: string;
  
  // Authorized Hours
  authorizedHours?: AuthorizedHours;
  
  // Schedule Time
  scheduleTime?: ScheduleTime;
  
  // Emergency Contacts
  emergencyContacts: EmergencyContact[];
  
  // Primary Care Physician
  primaryCarePhysician?: PrimaryCarePhysician;
  
  // Pharmacy
  pharmacy?: Pharmacy;
  
  // Status
  status?: string;
}

export interface PreAssessmentResponse {
  success: boolean;
  data?: PreAssessmentFormData;
  error?: string;
  details?: string;
  message?: string;
}
