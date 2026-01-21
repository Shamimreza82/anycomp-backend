/*
  Warnings:

  - You are about to drop the column `jobCategoryId` on the `Job` table. All the data in the column will be lost.
  - Changed the type of `requirments` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "jobCategoryId",
DROP COLUMN "requirments",
ADD COLUMN     "requirments" JSONB NOT NULL;
