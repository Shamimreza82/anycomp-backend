/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { AppError } from "../utils/AppError"


export interface AuthRequest extends Request {
  user?: any
}

export const meAuth = (req: AuthRequest,res: Response,
  next: NextFunction
) => {
  const token = req.cookies?.token

  console.log(token, "my token -----------------------------------------------------------------------")

  if (!token) {
    throw new AppError(401, "Not authenticated")
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    )

    req.user = decoded
    next()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error: any) {
    throw new AppError(401, "Invalid or expired token")
  }
}
