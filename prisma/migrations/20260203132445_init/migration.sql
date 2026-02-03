-- AlterEnum
ALTER TYPE "Role" ADD VALUE 'USER';

-- AlterTable
ALTER TABLE "specialists" ALTER COLUMN "is_verified" SET DEFAULT true;
