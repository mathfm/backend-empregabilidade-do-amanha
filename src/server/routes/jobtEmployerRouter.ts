import { Router, Request, Response } from "express";
import JobEmployerController from "../controllers/JobEmployerController";
import { jobEmployerMiddleware } from "../shared/middlewares/jobEmployerMiddleware";

const jobEmployerRouter = Router();

jobEmployerRouter.post("/job/create/:employer_id", jobEmployerMiddleware, (req: Request, res: Response) => {
    return JobEmployerController.createJobLink(req, res);
});

jobEmployerRouter.get("/job/:id", (req: Request, res: Response) => {
    return JobEmployerController.getJobLink(req, res);
});

jobEmployerRouter.get("/job", (req: Request, res: Response) => {
    return JobEmployerController.getAllJobLink(req, res);
});

jobEmployerRouter.get("/job/:employer_id/all", (req: Request, res: Response) => {
    return JobEmployerController.getAllJobLinkEmployer(req, res);
});

jobEmployerRouter.put("/job/update/:id/:employer_id", (req: Request, res: Response) => {
    return JobEmployerController.updateJobLink(req, res);
});

jobEmployerRouter.delete("/job/delete/:id/:employer_id", (req: Request, res: Response) => {
    return JobEmployerController.deleteJobLink(req, res);
});

export { jobEmployerRouter };
