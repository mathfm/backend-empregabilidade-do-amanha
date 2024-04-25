import { Router } from "express";
import { employerRouter } from "./employerRouter.js";
import { projectEmployerRouter } from "./projectEmployerRouter.js";

export const indexRouter = Router();

indexRouter.use("/api", employerRouter);
indexRouter.use("/api", projectEmployerRouter);