/*
  Warnings:

  - You are about to drop the `Address` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_addressTypeId_fkey";

-- DropForeignKey
ALTER TABLE "Address" DROP CONSTRAINT "Address_userId_fkey";

-- DropTable
DROP TABLE "Address";

-- CreateTable
CREATE TABLE "address" (
    "id" TEXT NOT NULL,
    "addressLine" TEXT NOT NULL,
    "divisionId" TEXT NOT NULL,
    "districtId" TEXT NOT NULL,
    "upazilaId" TEXT,
    "municipalityId" TEXT,
    "unionParishadId" TEXT,
    "policeStationId" TEXT,
    "postOfficeId" TEXT,
    "wardNo" TEXT,
    "zipCode" TEXT,
    "isCityCorporation" BOOLEAN NOT NULL DEFAULT false,
    "isSameAsPresent" BOOLEAN NOT NULL DEFAULT false,
    "userId" TEXT NOT NULL,
    "addressTypeId" TEXT NOT NULL,

    CONSTRAINT "address_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "address_userId_addressTypeId_key" ON "address"("userId", "addressTypeId");

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "address" ADD CONSTRAINT "address_addressTypeId_fkey" FOREIGN KEY ("addressTypeId") REFERENCES "address_types"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
