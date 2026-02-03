import { z } from "zod";

/**
 * Reuse decimal schema helper
 */
const decimalSchema = (fieldName: string) =>
  z
    .string()
    .refine((val) => !isNaN(Number(val)), {
      message: `${fieldName} must be a valid number`,
    });

export const createServiceOfferingZodSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().min(3, "Description must be at least 3 characters long"),

  basePrice: decimalSchema("Base price"),
  finalPrice: decimalSchema("Final price"),
  
  minValue: z
    .number()
    .int("Min value must be an integer")
    .nonnegative("Min value must be 0 or greater"),

  maxValue: z
    .number()
    .int("Max value must be an integer")
    .positive("Max value must be greater than 0"),

  durationDays: z
    .number()
    .int("Duration days must be an integer")
    .positive("Duration days must be greater than 0"),

  isDraft: z.boolean().default(true),

  specialistId: z.string().uuid("Specialist ID must be a valid UUID"),
  masterListId: z.string().uuid("Master list ID must be a valid UUID"),
});



export type TCreateServiceOfferingInput = z.infer<typeof createServiceOfferingZodSchema>;

// Partial schema for updates
export const updateServiceOfferingZodSchema = createServiceOfferingZodSchema.partial();
