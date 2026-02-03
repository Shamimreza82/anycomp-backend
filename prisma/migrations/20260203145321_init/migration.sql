/*
  Warnings:

  - You are about to drop the column `specialists` on the `medias` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[specialistId]` on the table `platform_fees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serviceOfferingId` to the `medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialistId` to the `medias` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specialistId` to the `platform_fees` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "medias" DROP CONSTRAINT "medias_specialists_fkey";

-- AlterTable
ALTER TABLE "medias" DROP COLUMN "specialists",
ADD COLUMN     "serviceOfferingId" TEXT NOT NULL,
ADD COLUMN     "specialistId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "platform_fees" ADD COLUMN     "specialistId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "platform_fees_specialistId_key" ON "platform_fees"("specialistId");

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_serviceOfferingId_fkey" FOREIGN KEY ("serviceOfferingId") REFERENCES "service_offerings"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platform_fees" ADD CONSTRAINT "platform_fees_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
