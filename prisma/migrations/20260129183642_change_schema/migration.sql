/*
  Warnings:

  - You are about to drop the column `bnName` on the `municipalities` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `municipalities` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `municipalities` table. All the data in the column will be lost.
  - You are about to drop the column `bnName` on the `police_stations` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `police_stations` table. All the data in the column will be lost.
  - You are about to drop the column `geoCode` on the `police_stations` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `police_stations` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `post_offices` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `post_offices` table. All the data in the column will be lost.
  - You are about to drop the column `bnName` on the `union_parishads` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `union_parishads` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `union_parishads` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `municipalities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `police_stations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `post_offices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `union_parishads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "municipalities" DROP COLUMN "bnName",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "bn_name" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "police_stations" DROP COLUMN "bnName",
DROP COLUMN "createdAt",
DROP COLUMN "geoCode",
DROP COLUMN "updatedAt",
ADD COLUMN     "bn_name" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "geo_code" TEXT,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "post_offices" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "union_parishads" DROP COLUMN "bnName",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "bn_name" TEXT,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
