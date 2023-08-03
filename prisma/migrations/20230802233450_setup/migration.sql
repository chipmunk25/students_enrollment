/*
  Warnings:

  - The primary key for the `students` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `students` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[studentId]` on the table `students` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `studentId` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `classmgt` DROP FOREIGN KEY `classmgt_classRepresentative_fkey`;

-- DropForeignKey
ALTER TABLE `registeredstudents` DROP FOREIGN KEY `registeredstudents_studentId_fkey`;

-- AlterTable
ALTER TABLE `classmgt` MODIFY `classRepresentative` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `registeredstudents` MODIFY `studentId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `students` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `studentId` VARCHAR(255) NOT NULL,
    ADD PRIMARY KEY (`studentId`);

-- CreateIndex
CREATE UNIQUE INDEX `students_studentId_key` ON `students`(`studentId`);

-- AddForeignKey
ALTER TABLE `classmgt` ADD CONSTRAINT `classmgt_classRepresentative_fkey` FOREIGN KEY (`classRepresentative`) REFERENCES `students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `registeredstudents` ADD CONSTRAINT `registeredstudents_studentId_fkey` FOREIGN KEY (`studentId`) REFERENCES `students`(`studentId`) ON DELETE RESTRICT ON UPDATE CASCADE;
