import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateAplicationDto {
  @IsOptional() @IsString() fullName?: string;
  @IsOptional() @IsDateString() date?: string;
  @IsOptional() @IsString() address?: string;
  @IsOptional() @IsString() city?: string;
  @IsOptional() @IsString() apartmentUnit?: string;
  @IsOptional() @IsString() state?: string;
  @IsOptional() @IsString() zipCode?: string;
  @IsOptional() @IsString() phone?: string;
  @IsOptional() @IsEmail() email?: string;
  @IsOptional() @IsDateString() dateOfBirth?: string;
  @IsOptional() @IsString() socialSecurity?: string;
  @IsOptional() @IsNumber() salaryDesired?: number;
  @IsOptional() @IsDateString() startDate?: string;
  @IsOptional() @IsString() positionApplied?: string;
  @IsOptional() @IsString() equipmentExperience?: string;

  // Legalities
  @IsOptional() @IsBoolean() authorizedToWork?: boolean;
  @IsOptional() @IsBoolean() legalProofProvided?: boolean;
  @IsOptional() @IsBoolean() previousEmployee?: boolean;
  @IsOptional() @IsDateString() previousEmploymentDate?: string;
  @IsOptional() @IsBoolean() convictedFelony?: boolean;
  @IsOptional() @IsBoolean() onParoleOrProbation?: boolean;
  @IsOptional() @IsString() paroleOfficerName?: string;
  @IsOptional() @IsString() paroleOfficerPhone?: string;
  @IsOptional() @IsBoolean() transportation?: boolean;
  @IsOptional() @IsBoolean() validDriverLicense?: boolean;
  @IsOptional() @IsString() driverLicenseNumber?: string;
  @IsOptional() @IsString() driverLicenseState?: string;
  @IsOptional() @IsDateString() driverLicenseExpDate?: string;
  @IsOptional() @IsBoolean() accidentsLast3Years?: boolean;
  @IsOptional() @IsNumber() accidentCount?: number;
  @IsOptional() @IsBoolean() violationsLast3Years?: boolean;
  @IsOptional() @IsNumber() violationCount?: number;
  @IsOptional() @IsString() trailerProficiency?: string;
  @IsOptional() @IsBoolean() drugTestConsent?: boolean;

  // Employment Preferences
  @IsOptional() @IsString() hoursDesired?: string;
  @IsOptional() @IsString() daysUnavailable?: string;
  @IsOptional() @IsBoolean() willingToWorkOvertime?: boolean;
  @IsOptional() @IsString() ListdaysUnavailable?: string;

  // Emergency Contact
  @IsOptional() @IsString() emergencyContactName?: string;
  @IsOptional() @IsString() emergencyContactPhone?: string;
  @IsOptional() @IsString() emergencyContactRelation?: string;
  @IsOptional() @IsBoolean() isOver18?: boolean;
  @IsOptional() @IsString() gender?: string;
  @IsOptional() @IsString() maritalStatus?: string;
  @IsOptional() @IsString() ethnicity?: string;

  // Previous Employment
  @IsOptional() @IsString() previousCompany?: string;
  @IsOptional() @IsString() previousCompanyPhone?: string;
  @IsOptional() @IsString() previousCompanyAddress?: string;
  @IsOptional() @IsString() previousSupervisor?: string;
  @IsOptional() @IsString() previousJobTitle?: string;
  @IsOptional() @IsNumber() startingSalary?: number;
  @IsOptional() @IsNumber() endingSalary?: number;
  @IsOptional() @IsString() previousResponsibilities?: string;
  @IsOptional() @IsDateString() previousEmploymentFrom?: string;
  @IsOptional() @IsDateString() previousEmploymentTo?: string;
  @IsOptional() @IsString() reasonForLeaving?: string;
  @IsOptional() @IsBoolean() canContactSupervisor?: boolean;

  // Military Service
  @IsOptional() @IsString() militaryBranch?: string;
  @IsOptional() @IsDateString() militaryFrom?: string;
  @IsOptional() @IsDateString() militaryTo?: string;

  // Identification
  @IsOptional() @IsString() identificationType?: string;
  @IsOptional() @IsString() identificationImage?: string;
  @IsOptional() @IsNumber() applicationStatus?: number;
  @IsOptional() @IsString() publicId?: string;
}
