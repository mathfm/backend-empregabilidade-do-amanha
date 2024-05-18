import { Router, Request, Response } from "express";
import EmployerController from "../controllers/EmployerController";
import { employerMiddleware } from "../shared/middlewares/employerMiddleware";

export const employerRouter = Router();

employerRouter.post("/employer/create", employerMiddleware, (req: Request, res: Response) => {
  return EmployerController.createUser(req, res);
});

employerRouter.post("/employer/login", (req: Request, res: Response) => {
    return EmployerController.loginEmployer(req, res);
});

employerRouter.get("/employer", (req: Request, res: Response) => {
    return EmployerController.getAllEmployer(req, res);
});

employerRouter.get("/employer/:id", (req: Request, res: Response) => {
    return EmployerController.getEmployer(req, res);
});

employerRouter.put("/employer/update/:id", (req: Request, res: Response) => {
    return EmployerController.updateEmployer(req, res);
});

employerRouter.delete("/employer/delete/:id", (req: Request, res: Response) => {
    return EmployerController.deleteEmployer(req, res);
});
