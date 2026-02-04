/*
  Warnings:

  - You are about to drop the column `service_offerings_master_list_id` on the `service_offerings` table. All the data in the column will be lost.
  - Added the required column `masterListId` to the `service_offerings` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_offerings" DROP CONSTRAINT "service_offerings_service_offerings_master_list_id_fkey";

-- AlterTable
ALTER TABLE "service_offerings" DROP COLUMN "service_offerings_master_list_id",
ADD COLUMN     "masterListId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_masterListId_fkey" FOREIGN KEY ("masterListId") REFERENCES "service_offerings_master_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
