/*
  Warnings:

  - You are about to drop the column `employment_period_end_date` on the `candidate_experiences` table. All the data in the column will be lost.
  - You are about to drop the column `employment_period_start_date` on the `candidate_experiences` table. All the data in the column will be lost.
  - Added the required column `start_date` to the `candidate_experiences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "candidate_experiences" DROP COLUMN "employment_period_end_date",
DROP COLUMN "employment_period_start_date",
ADD COLUMN     "end_date" TIMESTAMP(3),
ADD COLUMN     "start_date" TIMESTAMP(3) NOT NULL;
