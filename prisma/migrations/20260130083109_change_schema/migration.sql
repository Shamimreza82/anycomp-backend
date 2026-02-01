/*
  Warnings:

  - A unique constraint covering the columns `[user_id,company_name,designation]` on the table `candidate_experiences` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "candidate_experiences_user_id_company_name_designation_key" ON "candidate_experiences"("user_id", "company_name", "designation");
