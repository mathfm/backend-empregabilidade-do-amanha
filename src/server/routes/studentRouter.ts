import { Router, Request, Response } from "express";
import StudentController from "../controllers/StudentController";
import { checkToken } from "../shared/middlewares/checkToken";
import { studentMiddleware } from "../shared/middlewares/studentMiddleware";

const studentRouter = Router();

studentRouter.post("/student/create", studentMiddleware, async (req: Request, res: Response) => {
  return StudentController.createStudent(req, res);
});

studentRouter.post("/student/login", (req: Request, res: Response) => {
    return StudentController.loginStudent(req, res);
});

studentRouter.get("/student", (req: Request, res: Response) => {
    return StudentController.getAllStudent(req, res);
});

studentRouter.get("/student/:id", checkToken, (req: Request, res: Response) => {
    return StudentController.getStudentById(req, res);
});

studentRouter.put("/student/update/:id", (req: Request, res: Response) => {
    return StudentController.updateUser(req, res);
});

studentRouter.delete("/student/delete/:id", (req: Request, res: Response) => {
    return StudentController.deleteStudent(req, res);
});

export { studentRouter };
