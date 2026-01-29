-- CreateEnum
CREATE TYPE "Role" AS ENUM ('HR', 'USER', 'ADMIN', 'MODERATOR');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "full_name" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "is_email_verified" BOOLEAN NOT NULL DEFAULT false,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_personals" (
    "id" TEXT NOT NULL,
    "career_title" TEXT,
    "career_objective" TEXT,
    "dob" TIMESTAMP(3),
    "full_name" TEXT NOT NULL,
    "father_name" TEXT,
    "mother_name" TEXT,
    "spouse_name" TEXT,
    "mobile_no" TEXT,
    "alternate_phone" TEXT,
    "nationality" TEXT,
    "national_id" TEXT,
    "portfolio_link" TEXT,
    "photo" TEXT,
    "signature" TEXT,
    "resume" TEXT,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "religionId" TEXT,

    CONSTRAINT "candidate_personals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "religions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "religions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE INDEX "users_id_email_idx" ON "users"("id", "email");

-- CreateIndex
CREATE UNIQUE INDEX "candidate_personals_user_id_key" ON "candidate_personals"("user_id");

-- AddForeignKey
ALTER TABLE "candidate_personals" ADD CONSTRAINT "candidate_personals_religionId_fkey" FOREIGN KEY ("religionId") REFERENCES "religions"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "candidate_personals" ADD CONSTRAINT "candidate_personals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
