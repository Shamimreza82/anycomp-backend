import { Prisma } from "@prisma/client";
import { extractFKField } from "./extractFKField";

export interface AppErrorShape {
  statusCode: number;
  message: string;
}

export const handlePrismaError = (error: unknown): AppErrorShape => {

  // Known Prisma Errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {

    // ---------- UNIQUE ----------
    if (error.code === "P2002") {
      const fields = (error.meta?.target as string[])?.join(", ");
      return {
        statusCode: 409,
        message: `${fields || "Field"} already exists`,
      };
    }

    // ---------- FOREIGN KEY ----------
    if (error.code === "P2003") {
      const field = extractFKField(error.meta?.field_name as string);

      return {
        statusCode: 400,
        message: `Invalid ${field}. Referenced record does not exist.`,
      };
    }

    // ---------- NOT FOUND ----------
    if (error.code === "P2025") {
      return {
        statusCode: 404,
        message: "Requested record not found",
      };
    }

    // ---------- VALUE TOO LONG ----------
    if (error.code === "P2000") {
      return {
        statusCode: 400,
        message: "One of the fields exceeds allowed length",
      };
    }

    // ---------- NULL CONSTRAINT ----------
    if (error.code === "P2011") {
      return {
        statusCode: 400,
        message: "Required field is missing",
      };
    }

    return {
      statusCode: 400,
      message: "Database operation failed",
    };
  }

  // Unknown / Non-Prisma errors
  return {
    statusCode: 500,
    message: "Internal server error",
  };
};
