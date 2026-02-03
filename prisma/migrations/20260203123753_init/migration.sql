/*
  Warnings:

  - You are about to drop the `key` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `media` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `platform_fee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_offerings_master_list` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[slug]` on the table `specialists` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `base_price` to the `specialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `duration_days` to the `specialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `final_price` to the `specialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `platform_fee` to the `specialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `specialists` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `specialists` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_offerings" DROP CONSTRAINT "service_offerings_service_offerings_master_list_id_fkey";

-- AlterTable
ALTER TABLE "specialists" ADD COLUMN     "base_price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "deleted_at" TIMESTAMP(3),
ADD COLUMN     "description" TEXT,
ADD COLUMN     "duration_days" INTEGER NOT NULL,
ADD COLUMN     "final_price" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "is_draft" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "platform_fee" DECIMAL(10,2) NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "average_rating" DROP NOT NULL,
ALTER COLUMN "total_number_of_ratings" SET DEFAULT 0,
ALTER COLUMN "is_verified" SET DEFAULT false;

-- DropTable
DROP TABLE "key";

-- DropTable
DROP TABLE "media";

-- DropTable
DROP TABLE "platform_fee";

-- DropTable
DROP TABLE "service_offerings_master_list";

-- CreateTable
CREATE TABLE "service_offerings_master_lists" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,
    "is_draft" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_offerings_master_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medias" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "bucket_name" TEXT NOT NULL,
    "s3_key" TEXT,
    "mime_type" "MimeType" NOT NULL,
    "media_type" "MediaType" NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL,
    "specialists" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "medias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_fees" (
    "id" TEXT NOT NULL,
    "tier_name" "TierName" NOT NULL,
    "platform_fee_percentage" DECIMAL(65,30) NOT NULL,
    "min_value" INTEGER NOT NULL,
    "max_value" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_fees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keys" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specialists_slug_key" ON "specialists"("slug");

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_service_offerings_master_list_id_fkey" FOREIGN KEY ("service_offerings_master_list_id") REFERENCES "service_offerings_master_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
