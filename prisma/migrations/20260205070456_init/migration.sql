/*
  Warnings:

  - You are about to drop the column `media_type` on the `medias` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "medias" DROP COLUMN "media_type";

-- DropEnum
DROP TYPE "MediaType";
