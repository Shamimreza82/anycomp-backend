/*
  Warnings:

  - You are about to drop the column `isDraft` on the `service_offerings` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "service_offerings" DROP COLUMN "isDraft",
ADD COLUMN     "is_draft" BOOLEAN NOT NULL DEFAULT true;
