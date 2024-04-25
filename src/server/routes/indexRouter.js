import { Router } from "express";
import { employerRouter } from "./employerRouter.js";
import { projectEmployerRouter } from "./projectEmployerRouter.js";
import { StudentRouter } from "./studentRouter.js";

export const indexRouter = Router();

indexRouter.use("/api", employerRouter);
indexRouter.use("/api", projectEmployerRouter);
indexRouter.use("/api", StudentRouter);