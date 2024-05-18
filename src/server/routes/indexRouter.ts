import { Router } from "express";
import { employerRouter } from "./employerRouter";
import { studentRouter } from "./studentRouter";
import { jobEmployerRouter } from "./jobtEmployerRouter"; 

export const indexRouter = Router();

indexRouter.use("/api", employerRouter);
indexRouter.use("/api", jobEmployerRouter);
indexRouter.use("/api", studentRouter);
