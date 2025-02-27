-- CreateTable
CREATE TABLE `Applicant` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NULL,
    `date` DATETIME(3) NULL,
    `address` VARCHAR(191) NULL,
    `apartmentUnit` VARCHAR(191) NULL,
    `city` VARCHAR(191) NULL,
    `state` VARCHAR(191) NULL,
    `zipCode` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `dateOfBirth` DATETIME(3) NULL,
    `socialSecurity` VARCHAR(191) NULL,
    `salaryDesired` DOUBLE NULL,
    `startDate` DATETIME(3) NULL,
    `positionApplied` VARCHAR(191) NULL,
    `equipmentExperience` VARCHAR(191) NULL,
    `authorizedToWork` BOOLEAN NULL,
    `legalProofProvided` BOOLEAN NULL,
    `previousEmployee` BOOLEAN NULL,
    `previousEmploymentDate` DATETIME(3) NULL,
    `convictedFelony` BOOLEAN NULL,
    `onParoleOrProbation` BOOLEAN NULL,
    `paroleOfficerName` VARCHAR(191) NULL,
    `paroleOfficerPhone` VARCHAR(191) NULL,
    `transportation` BOOLEAN NULL,
    `validDriverLicense` BOOLEAN NULL,
    `driverLicenseNumber` VARCHAR(191) NULL,
    `driverLicenseState` VARCHAR(191) NULL,
    `driverLicenseExpDate` DATETIME(3) NULL,
    `accidentsLast3Years` BOOLEAN NULL,
    `accidentCount` INTEGER NULL,
    `violationsLast3Years` BOOLEAN NULL,
    `violationCount` INTEGER NULL,
    `trailerProficiency` VARCHAR(191) NULL,
    `drugTestConsent` BOOLEAN NULL,
    `hoursDesired` VARCHAR(191) NULL,
    `daysUnavailable` BOOLEAN NULL,
    `ListdaysUnavailable` VARCHAR(191) NULL,
    `willingToWorkOvertime` BOOLEAN NULL,
    `emergencyContactName` VARCHAR(191) NULL,
    `emergencyContactPhone` VARCHAR(191) NULL,
    `emergencyContactRelation` VARCHAR(191) NULL,
    `isOver18` BOOLEAN NULL,
    `gender` VARCHAR(191) NULL,
    `maritalStatus` VARCHAR(191) NULL,
    `ethnicity` VARCHAR(191) NULL,
    `previousEmployment` BOOLEAN NULL,
    `previousCompany` VARCHAR(191) NULL,
    `previousCompanyPhone` VARCHAR(191) NULL,
    `previousCompanyAddress` VARCHAR(191) NULL,
    `previousSupervisor` VARCHAR(191) NULL,
    `previousJobTitle` VARCHAR(191) NULL,
    `startingSalary` DOUBLE NULL,
    `endingSalary` DOUBLE NULL,
    `previousResponsibilities` VARCHAR(191) NULL,
    `previousEmploymentFrom` DATETIME(3) NULL,
    `previousEmploymentTo` DATETIME(3) NULL,
    `reasonForLeaving` VARCHAR(191) NULL,
    `canContactSupervisor` BOOLEAN NULL,
    `militaryService` BOOLEAN NULL,
    `militaryBranch` VARCHAR(191) NULL,
    `militaryFrom` DATETIME(3) NULL,
    `militaryTo` DATETIME(3) NULL,
    `identificationType` VARCHAR(191) NULL,
    `identificationImage` VARCHAR(191) NULL,
    `applicationStatus` INTEGER NULL,
    `publicId` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `positionApplied` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullName` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
