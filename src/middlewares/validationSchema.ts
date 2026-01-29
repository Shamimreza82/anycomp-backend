/* eslint-disable @typescript-eslint/no-explicit-any */
import z from "zod";
import { catchAsync } from "../utils/catchAsync";

export const validationSchema = (schema: z.ZodSchema) => catchAsync(async (req, res, next) => {
    req.body = schema.parse(req.body);
    next();
})
