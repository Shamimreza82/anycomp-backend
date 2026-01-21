
// import { auth } from '../../middlewares/auth';

import express from "express";
import { JobController } from "./job.controller";


const router = express.Router();

router.post("/",  JobController.createJob);



////Category///
router.post("/category",  JobController.createCategory);
router.get("/category",  JobController.getAllCategory);







export const Jobrouter = router;

