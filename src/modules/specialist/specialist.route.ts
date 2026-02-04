import express from 'express';
import { validationSchema } from '../../middlewares/validationSchema';
import { createSpecialistZodSchema } from './specialist.validation';
import { SpecialistController } from './specialist.controller';
import { auth } from '../../middlewares/auth';
import { Roles } from '../../utils/constant/auth.Constant';

const router = express.Router()




router.post("/", validationSchema(createSpecialistZodSchema), auth(Roles.USER, Roles.SPECIALIST), SpecialistController.createSpecialist)






export const SpecialistRouter = router

