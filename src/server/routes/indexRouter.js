import { Router } from "express";
import { employerRouter } from "./employerRouter.js";


export const indexRouter = Router();

indexRouter.use("/api", employerRouter);