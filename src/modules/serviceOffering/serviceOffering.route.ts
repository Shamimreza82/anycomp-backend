import express from 'express';



import { auth } from '../../middlewares/auth';
import { Roles } from '../../utils/constant/auth.Constant';
import { ServiceOfferingController } from './serviceOffering.controller';

const router = express.Router()




router.post("/", auth(Roles.SPECIALIST), ServiceOfferingController.createServiceOffering)

router.get("/", auth(Roles.SPECIALIST), ServiceOfferingController.getMyServiceOffering)




export const ServiceOfferingRouter = router

