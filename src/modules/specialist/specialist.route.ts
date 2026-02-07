import express from 'express';
import { validationSchema } from '../../middlewares/validationSchema';
import { createSpecialistZodSchema } from './specialist.validation';
import { SpecialistController } from './specialist.controller';
import { auth } from '../../middlewares/auth';
import { Roles } from '../../utils/constant/auth.Constant';

const router = express.Router()




router.post("/", validationSchema(createSpecialistZodSchema), auth(Roles.USER, Roles.SPECIALIST), SpecialistController.createSpecialist)
router.get("/", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.getAllSpecialists)
router.patch("/:id", validationSchema(createSpecialistZodSchema), auth(Roles.USER, Roles.SPECIALIST), SpecialistController.editSpecialist)
router.delete("/:id", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.deleteSpecialist)
router.patch("/:id/status", auth(Roles.ADMIN,  Roles.USER, Roles.SPECIALIST), SpecialistController.verificationStatus)
router.patch("/:id/unpublish", auth(Roles.ADMIN, Roles.USER, Roles.SPECIALIST), SpecialistController.unpublishSpecialist)
router.get("/approved", SpecialistController.getAllApprovedSpecialists)
router.get("/:id/single", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.getSingleSpecialistById)




// router.post("/", validationSchema(createSpecialistZodSchema), auth(Roles.USER, Roles.SPECIALIST), SpecialistController.createSpecialist)
// router.get("/", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.getAllSpecialists)
// router.patch("/:id", validationSchema(createSpecialistZodSchema), auth(Roles.USER, Roles.SPECIALIST), SpecialistController.editSpecialist)
// router.delete("/:id", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.deleteSpecialist)
// router.patch("/:id/status", auth(Roles.ADMIN,  Roles.USER, Roles.SPECIALIST), SpecialistController.verificationStatus)
// router.patch("/:id/unpublish", auth(Roles.ADMIN, Roles.USER, Roles.SPECIALIST), SpecialistController.unpublishSpecialist)
// router.get("/approved", SpecialistController.getAllApprovedSpecialists)
// router.get("/:id/single", auth(Roles.USER, Roles.SPECIALIST), SpecialistController.getSingleSpecialistById)





export const SpecialistRouter = router

