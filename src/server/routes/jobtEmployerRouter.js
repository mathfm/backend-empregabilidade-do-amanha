import { Router } from "express";
import JobEmployerController from "../controllers/JobEmployerController.js";
import { jobEmployerMiddleware } from "../shared/middlewares/jobEmployerMiddleware.js";

const jobEmployerRouter = Router();

jobEmployerRouter.post("/job/create/:employer_id", jobEmployerMiddleware, (req, res) => {
    return JobEmployerController.createJobLink(req, res);
});
jobEmployerRouter.get("/job/:id", (req, res) => {
    return JobEmployerController.getJobLink(req, res);
});
jobEmployerRouter.get("/job", (req, res) => {
    return JobEmployerController.getAllJobLink(req, res);
});
jobEmployerRouter.get("/job/:employer_id/all", (req, res) => {
    return JobEmployerController.getAllJobLinkEmployer(req, res);
});
jobEmployerRouter.put("/job/update/:id/:employer_id", (req, res) => {
    return JobEmployerController.updateJobLink(req, res);
});

jobEmployerRouter.delete("/job/delete/:id/:employer_id", (req, res) => {
  return JobEmployerController.deleteJobLink(req, res);
});

export { jobEmployerRouter }