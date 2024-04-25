import { Router } from "express";
import 
    ProjectEmployerController
from "../controllers/ProjectEmployerController.js";

const projectEmployerRouter = Router();

projectEmployerRouter.post("/project/create", ProjectEmployerController.createProject);
projectEmployerRouter.get("/project/:id", ProjectEmployerController.getProject);
projectEmployerRouter.get("/project", ProjectEmployerController.getAllProject);
projectEmployerRouter.get("/project/:employer_id/:id", ProjectEmployerController.getAllProjectEmployer);
projectEmployerRouter.patch("/project/update/:id/:employer_id", ProjectEmployerController.updateProject);
projectEmployerRouter.delete("project/delete/:id/:employer_id", ProjectEmployerController.deleteProject);

export { projectEmployerRouter }