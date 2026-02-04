/*
  Warnings:

  - You are about to drop the column `specialists` on the `service_offerings` table. All the data in the column will be lost.
  - Added the required column `specialistId` to the `service_offerings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_offerings" DROP CONSTRAINT "service_offerings_specialists_fkey";

-- AlterTable
ALTER TABLE "service_offerings" DROP COLUMN "specialists",
ADD COLUMN     "specialistId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
