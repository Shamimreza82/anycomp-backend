
import { z } from "zod";

// Zod validation schema
export const userProfileSPersonalchema = z.object({
  careerTitle: z.string(),
  careerObjective: z.string(),
  dob: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Invalid date format" }
  ),
  fullName: z.string(),
  fatherName: z.string(),
  motherName: z.string(),
  spouseName: z.string().nullable(),
  mobileNo: z.string(),
  alternatePhone: z.string().nullable(),
  nationality: z.string(),
  nationalId: z.string(),
  portfolioLink: z.string().url(),
  createdAt: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Invalid date format" }
  ),
  updatedAt: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    { message: "Invalid date format" }
  ),
  religionId: z.string().uuid(),
});


















export const UserProfileValidation = {
    userProfileSPersonalchema
}









// TypeScript type inferred from Zod
export type TCanditateProfile = z.infer<typeof userProfileSPersonalchema>;
