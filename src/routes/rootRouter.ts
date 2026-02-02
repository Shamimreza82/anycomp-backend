import express from "express";
import { Authrouter } from "../modules/auth/auth.router";
// import { Jobrouter } from "../modules/job/job.router";





const router = express.Router();


const appRoutes = [
    {
        path: "/auth",
        route: Authrouter,
    },
]

appRoutes.forEach((route) => {router.use(route.path, route.route)});




export const RootRouter = router;