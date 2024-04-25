import { Router } from "express";
import { employerRouter } from "./employerRouter.js";
import { projectEmployerRouter } from "./projectEmployerRouter.js";
import { studentRouter } from "./studentRouter.js";

export const indexRouter = Router();

indexRouter.use("/api", employerRouter);
indexRouter.use("/api", projectEmployerRouter);
indexRouter.use("/api", studentRouter);