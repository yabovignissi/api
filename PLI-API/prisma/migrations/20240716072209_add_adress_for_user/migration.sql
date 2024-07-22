/*
  Warnings:

  - You are about to drop the column `gender` on the `user` table. All the data in the column will be lost.
  - Added the required column `adress` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` DROP COLUMN `gender`,
    ADD COLUMN `adress` VARCHAR(191) NOT NULL,
    ADD COLUMN `isVisible` BOOLEAN NOT NULL DEFAULT true;
