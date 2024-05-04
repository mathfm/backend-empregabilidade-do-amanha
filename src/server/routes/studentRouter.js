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
studentRouter.put("/student/update/:id", (req, res) => {
    return StudentController.updateUser(req, res);
});
studentRouter.delete("/student/delete/:id", (req, res) => {
    return StudentController.deleteStudent(req, res);
});

export { studentRouter }