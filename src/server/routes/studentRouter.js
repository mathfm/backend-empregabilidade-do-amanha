import { Router } from "express";
import StudentController from "../controllers/StudentController.js";
import { checkToken } from "../shared/middlewares/checkToken.js";
import { studentMiddleware } from "../shared/middlewares/studentMiddleware.js";

const studentRouter = Router();

studentRouter.post("/student/create", studentMiddleware, async (req, res) => {
  return StudentController.createStudent(req, res);
});
studentRouter.post("/student/login", (req, res) => {
    return StudentController.loginStudent(req, res);})
studentRouter.get("/student", (req, res) => {
    return StudentController.getAllStudent(req, res);
});

studentRouter.get("/student/:id", checkToken, (req, res) => {
    return StudentController.getStudentById(req, res);
});
studentRouter.put("/student/update/:id", (req, res) => {
    return StudentController.updateUser(req, res);
});
studentRouter.delete("/student/delete/:id", (req, res) => {
    return StudentController.deleteStudent(req, res);
});

export { studentRouter }