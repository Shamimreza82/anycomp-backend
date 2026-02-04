import jwt from 'jsonwebtoken';

import { catchAsync } from '../utils/catchAsync';
import { TRole } from '../utils/constant/auth.Constant';


// Extend the Request interface to include the user property
declare module 'express-serve-static-core' {
    interface Request {
        user?: jwt.JwtPayload | string;
    }
}



export const auth = (...roles: TRole[]) => {
  return catchAsync(async (req, res, next) => {
    // const token = req.headers.authorization?.split(" ")[1];
    const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

    
    if (!token) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload;

    if (!decoded || !decoded.role) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    const userRole = decoded.role as TRole;

    

    // ✅ Check multiple roles
    if (!roles.includes(userRole)) {
      res.status(403).json({ message: "Forbidden" });
      return;
    }

    // attach user
    req.user = decoded;

    next();
  });
};