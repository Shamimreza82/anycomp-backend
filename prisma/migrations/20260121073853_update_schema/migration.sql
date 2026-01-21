/*
  Warnings:

  - Changed the type of `responsibilities` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `features` on the `Job` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Job" DROP COLUMN "responsibilities",
ADD COLUMN     "responsibilities" JSONB NOT NULL,
DROP COLUMN "features",
ADD COLUMN     "features" JSONB NOT NULL;
