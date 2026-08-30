/*
  Warnings:

  - You are about to drop the column `content` on the `about` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `about` table. All the data in the column will be lost.
  - You are about to drop the `stack` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `information` to the `About` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `About` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `About` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `stack` DROP FOREIGN KEY `Stack_user_id_fkey`;

-- AlterTable
ALTER TABLE `about` DROP COLUMN `content`,
    DROP COLUMN `title`,
    ADD COLUMN `information` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `year` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `stack`;
