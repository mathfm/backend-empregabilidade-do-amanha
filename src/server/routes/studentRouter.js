import { Router } from "express";
import StudentController from "../controllers/StudentController.js";
import { checkToken } from "../middlewares/checkToken.js";

const studentRouter = Router();

studentRouter.post("/student/create", (req, res) => {
    return StudentController.createStudent(req, res);
});
studentRouter.post("/login/student", (req, res) => {
    return StudentController.loginStudent(req, res);})
studentRouter.get("/student", (req, res) => {
    return StudentController.getAllStudent(req, res);
});

studentRouter.get("/student/:id", checkToken, (req, res) => {
    return StudentController.getStudentById(req, res);
});
studentRouter.patch("student/update/:id", StudentController.updateEmail);
studentRouter.delete("/student/delete/:id", StudentController.deleteStudent);

export { studentRouter }