-- DropForeignKey
ALTER TABLE "medias" DROP CONSTRAINT "medias_serviceOfferingId_fkey";

-- DropForeignKey
ALTER TABLE "medias" DROP CONSTRAINT "medias_specialistId_fkey";

-- DropForeignKey
ALTER TABLE "platform_fees" DROP CONSTRAINT "platform_fees_specialistId_fkey";

-- DropForeignKey
ALTER TABLE "service_offerings" DROP CONSTRAINT "service_offerings_masterListId_fkey";

-- DropForeignKey
ALTER TABLE "service_offerings" DROP CONSTRAINT "service_offerings_specialistId_fkey";

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_offerings" ADD CONSTRAINT "service_offerings_masterListId_fkey" FOREIGN KEY ("masterListId") REFERENCES "service_offerings_master_lists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "medias" ADD CONSTRAINT "medias_serviceOfferingId_fkey" FOREIGN KEY ("serviceOfferingId") REFERENCES "service_offerings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "platform_fees" ADD CONSTRAINT "platform_fees_specialistId_fkey" FOREIGN KEY ("specialistId") REFERENCES "specialists"("id") ON DELETE CASCADE ON UPDATE CASCADE;
