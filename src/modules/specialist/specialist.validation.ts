import { z } from "zod";

/**
 * Prisma Decimal fields should come as string or number
 * String is safer for precision
 */

export enum VerificationStatus {
  PENDING = "PENDING",
  APPROVED = "APPROVED",
  REJECTED = "REJECTED",
}
const decimalSchema = (fieldName: string) =>
    z
        .string()
        .refine((val) => !isNaN(Number(val)), {
            message: `${fieldName} must be a valid number`,
        });

export const createSpecialistZodSchema = z.object({
    title: z
        .string()
        .min(3, "Title must be at least 3 characters long"),

    slug: z
        .string()
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
            message: "Slug must be URL friendly (lowercase, hyphen separated)",
        }),

    description: z
        .string()
        .optional(),

    basePrice: decimalSchema("Base price"),

    platformFee: decimalSchema("Platform fee"),

    finalPrice: decimalSchema("Final price"),

    durationDays: z
        .number()
        .int("Duration days must be an integer")
        .positive("Duration days must be greater than 0"),

    isDraft: z.boolean().optional(),

verificationStatus: z
    .nativeEnum(VerificationStatus, {
        error: "Invalid verification status",
    })
    .optional(),

    isVerified: z.boolean().optional(),
});
export type TCreateSpecialistInput = z.infer<typeof createSpecialistZodSchema>;
/**
 * Update schema (partial)
 */
export const updateSpecialistZodSchema = createSpecialistZodSchema.partial();
export type TUpdateSpecialistInput = z.infer<typeof updateSpecialistZodSchema>;


