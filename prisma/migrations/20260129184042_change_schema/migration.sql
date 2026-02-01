/*
  Warnings:

  - You are about to drop the column `upazilla_id` on the `union_parishads` table. All the data in the column will be lost.
  - Added the required column `upazila_id` to the `union_parishads` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "union_parishads" DROP CONSTRAINT "union_parishads_upazilla_id_fkey";

-- AlterTable
ALTER TABLE "union_parishads" DROP COLUMN "upazilla_id",
ADD COLUMN     "upazila_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "union_parishads" ADD CONSTRAINT "union_parishads_upazila_id_fkey" FOREIGN KEY ("upazila_id") REFERENCES "upazilas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
