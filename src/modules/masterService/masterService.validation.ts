import { z } from "zod";

/**
 * Schema for creating a Service Offerings Master List
 */
export const createMasterServiceZodSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be URL friendly"),
  description: z.string().min(3, "Slug must be at least 3 characters long"),
  displayOrder: z
    .number()
    .int("Display order must be an integer")
    .nonnegative("Display order must be 0 or greater"),
  isDraft: z.boolean().optional(),
});

// Infer TypeScript type
export type TCreateMasterServiceInput = z.infer<typeof createMasterServiceZodSchema>;

// Partial schema for updates
export const updateMasterServiceZodSchema = createMasterServiceZodSchema.partial();