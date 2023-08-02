-- CreateTable
CREATE TABLE `students` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `dateOfBirth` DATE NOT NULL,
    `gender` VARCHAR(191) NULL,
    `photograph` VARCHAR(255) NULL,
    `residency` ENUM('on-campus', 'off-campus') NULL,
    `status` ENUM('Regular', 'Foreign', 'Fee Paying', 'Distance') NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `classmgt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `className` VARCHAR(255) NOT NULL,
    `maxClassSize` INTEGER NOT NULL DEFAULT 0,
    `classRepresentative` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `coursemgt` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `courseName` VARCHAR(255) NOT NULL,
    `startDate` DATE NOT NULL,
    `duration` INTEGER NOT NULL DEFAULT 0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `registeredstudents` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` INTEGER NOT NULL,
    `courseId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fullname` VARCHAR(255) NOT NULL,
    `telephone` VARCHAR(40) NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `administrator` BOOLEAN NOT NULL DEFAULT false,
    `confirmed` BOOLEAN NOT NULL DEFAULT false,
    `confirmationCode` VARCHAR(255) NULL,
    `del_flg` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_telephone_key`(`telephone`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `classmgt` ADD CONSTRAINT `classmgt_classRepresentative_fkey` FOREIGN KEY (`classRepresentative`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registeredstudents` ADD CONSTRAINT `registeredstudents_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registeredstudents` ADD CONSTRAINT `registeredstudents_courseId_fkey` FOREIGN KEY (`courseId`) REFERENCES `coursemgt`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
