import express from 'express';

import { auth } from '../../middlewares/auth';
import { Roles } from '../../utils/constant/auth.Constant';
import { MasterServiceController } from './masterService.controller';

const router = express.Router()




router.post("/", auth(Roles.ADMIN), MasterServiceController.createMasterService)






export const MasterServiceRouter = router

