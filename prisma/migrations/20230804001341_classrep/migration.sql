-- DropForeignKey
ALTER TABLE `classmgt` DROP FOREIGN KEY `classmgt_classRepresentative_fkey`;

-- AlterTable
ALTER TABLE `classmgt` MODIFY `classRepresentative` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `classmgt` ADD CONSTRAINT `classmgt_classRepresentative_fkey` FOREIGN KEY (`classRepresentative`) REFERENCES `students`(`studentId`) ON DELETE SET NULL ON UPDATE CASCADE;
