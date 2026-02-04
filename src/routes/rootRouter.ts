import express from "express";
import { Authrouter } from "../modules/auth/auth.router";
import { SpecialistRouter } from "../modules/specialist/specialist.route";
import { ServiceOfferingRouter } from "../modules/serviceOffering/serviceOffering.route";
import { MasterServiceRouter } from "../modules/masterService/masterService.route";
// import { Jobrouter } from "../modules/job/job.router";





const router = express.Router();


const appRoutes = [
    {
        path: "/auth",
        route: Authrouter,
    },
    {
        path: "/specialist",
        route: SpecialistRouter,
    }, 
    {
         path: "/service-offering",
        route: ServiceOfferingRouter,
    }, 
     {
         path: "/master-service",
        route: MasterServiceRouter,
    }, 
]

appRoutes.forEach((route) => {router.use(route.path, route.route)});




export const RootRouter = router;