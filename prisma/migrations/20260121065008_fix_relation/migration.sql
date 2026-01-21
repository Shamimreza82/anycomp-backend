/*
  Warnings:

  - You are about to drop the column `jobId` on the `JobCategory` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "JobCategory" DROP CONSTRAINT "JobCategory_jobId_fkey";

-- DropIndex
DROP INDEX "JobCategory_jobId_key";

-- AlterTable
ALTER TABLE "JobCategory" DROP COLUMN "jobId";
