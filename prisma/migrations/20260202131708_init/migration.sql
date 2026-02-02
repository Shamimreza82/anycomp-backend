-- CreateEnum
CREATE TYPE "MediaType" AS ENUM ('IMAGE', 'VIDEO', 'DOCUMENT');

-- CreateEnum
CREATE TYPE "MimeType" AS ENUM ('JPG', 'PNG', 'PDF', 'MP4');

-- CreateEnum
CREATE TYPE "TierName" AS ENUM ('BASIC', 'STANDARD', 'PREMIUM');

-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateTable
CREATE TABLE "media" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "file_name" TEXT NOT NULL,
    "file_size" INTEGER NOT NULL,
    "bucket_name" TEXT NOT NULL,
    "s3_key" TEXT,
    "mime_type" "MimeType" NOT NULL,
    "media_type" "MediaType" NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "specialists" (
    "id" TEXT NOT NULL,
    "average_rating" DECIMAL(65,30) NOT NULL,
    "total_number_of_ratings" INTEGER NOT NULL,
    "verification_status" "VerificationStatus" NOT NULL,
    "is_verified" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "specialists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_offerings_master_list" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "display_order" INTEGER NOT NULL,
    "is_draft" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_offerings_master_list_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_offerings" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "base_price" DECIMAL(65,30) NOT NULL,
    "final_price" DECIMAL(65,30) NOT NULL,
    "min_value" INTEGER NOT NULL,
    "max_value" INTEGER NOT NULL,
    "duration_days" INTEGER NOT NULL,
    "isDraft" BOOLEAN NOT NULL,
    "specialists" TEXT NOT NULL,
    "service_offerings_master_list_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "service_offerings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "platform_fee" (
    "id" TEXT NOT NULL,
    "tier_name" "TierName" NOT NULL,
    "platform_fee_percentage" DECIMAL(65,30) NOT NULL,
    "min_value" INTEGER NOT NULL,
    "max_value" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "platform_fee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "key" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "key_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_specialists_fkey" FOREIGN KEY ("specialists") REFERENCES "specialists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_service_offerings_master_list_id_fkey" FOREIGN KEY ("service_offerings_master_list_id") REFERENCES "service_offerings_master_list"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
