import { Router } from "express";
import { employerRouter } from "./employerRouter.js";

import { studentRouter } from "./studentRouter.js";
import { jobEmployerRouter } from "./jobtEmployerRouter.js";

export const indexRouter = Router();

indexRouter.use("/api", employerRouter);
indexRouter.use("/api", jobEmployerRouter);
indexRouter.use("/api", studentRouter);