import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAplicationDto {
  @IsString() fullName: string;
  @IsDateString() date: string;
  @IsString() address: string;
  @IsString() city: string;
  @IsString() apartmentUnit: string;
  @IsString() state: string;
  @IsString() zipCode: string;
  @IsString() phone: string;
  @IsEmail() email: string;
  @IsDateString() dateOfBirth: string;
  @IsString() socialSecurity: string;
  @IsNumber() salaryDesired: number;
  @IsDateString() startDate: string;
  @IsString() positionApplied: string;
  @IsString() equipmentExperience: string;

  // Legalities
  @IsBoolean() authorizedToWork: boolean;
  @IsBoolean() legalProofProvided: boolean;
  @IsBoolean() previousEmployee: boolean;
  @IsOptional() @IsDateString() previousEmploymentDate?: string;
  @IsBoolean() convictedFelony: boolean;
  @IsBoolean() onParoleOrProbation: boolean;
  @IsOptional() @IsString() paroleOfficerName?: string;
  @IsOptional() @IsString() paroleOfficerPhone?: string;
  @IsBoolean() transportation: boolean;
  @IsBoolean() validDriverLicense: boolean;
  @IsOptional() @IsString() driverLicenseNumber?: string;
  @IsOptional() @IsString() driverLicenseState?: string;
  @IsOptional() @IsDateString() driverLicenseExpDate?: string;
  @IsBoolean() accidentsLast3Years: boolean;
  @IsNumber() accidentCount: number;
  @IsBoolean() violationsLast3Years: boolean;
  @IsNumber() violationCount: number;
  @IsBoolean() trailerProficiency: string;
  @IsBoolean() drugTestConsent: boolean;

  // Employment Preferences
  @IsString() hoursDesired: string;
  @IsOptional() @IsString() daysUnavailable?: string;
  @IsBoolean() willingToWorkOvertime: boolean;

  // Emergency Contact
  @IsString() emergencyContactName: string;
  @IsString() emergencyContactPhone: string;
  @IsString() emergencyContactRelation: string;
  @IsBoolean() isOver18: boolean;
  @IsString() gender: string;
  @IsString() maritalStatus: string;
  @IsString() ethnicity: string;

  // Previous Employment
  @IsString() previousCompany: string;
  @IsString() previousCompanyPhone: string;
  @IsString() previousCompanyAddress: string;
  @IsString() previousSupervisor: string;
  @IsString() previousJobTitle: string;
  @IsNumber() startingSalary: number;
  @IsNumber() endingSalary: number;
  @IsString() previousResponsibilities: string;
  @IsDateString() previousEmploymentFrom: string;
  @IsDateString() previousEmploymentTo: string;
  @IsString() reasonForLeaving: string;
  @IsBoolean() canContactSupervisor: boolean;

  // Military Service
  @IsOptional() @IsString() militaryBranch?: string;
  @IsOptional() @IsDateString() militaryFrom?: string;
  @IsOptional() @IsDateString() militaryTo?: string;

  // Identification
  @IsString() identificationType: string;
  @IsString() identificationImage: string;
  @IsNumber() applicationStatus: number;
}
