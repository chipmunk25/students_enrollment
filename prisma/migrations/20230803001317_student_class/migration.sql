-- CreateTable
CREATE TABLE `studentclass` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `studentId` VARCHAR(191) NULL,
    `classId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `studentclass` ADD CONSTRAINT `studentclass_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`studentId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `studentclass` ADD CONSTRAINT `studentclass_classId_fkey` FOREIGN KEY (`classId`) REFERENCES `classmgt`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
