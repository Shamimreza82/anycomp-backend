/*
  Warnings:

  - You are about to drop the column `upazilla_id` on the `municipalities` table. All the data in the column will be lost.
  - Added the required column `upazila_id` to the `municipalities` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "municipalities" DROP CONSTRAINT "municipalities_upazilla_id_fkey";

-- AlterTable
ALTER TABLE "municipalities" DROP COLUMN "upazilla_id",
ADD COLUMN     "upazila_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "municipalities" ADD CONSTRAINT "municipalities_upazila_id_fkey" FOREIGN KEY ("upazila_id") REFERENCES "upazilas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
