-- CreateTable
CREATE TABLE "base_divisions" (
    "id" TEXT NOT NULL,
    "geo_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bn_name" TEXT NOT NULL,
    "url" TEXT,
    "status" BOOLEAN NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "base_divisions_pkey" PRIMARY KEY ("id")
);
