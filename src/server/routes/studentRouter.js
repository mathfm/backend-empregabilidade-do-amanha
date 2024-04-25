import { Router } from "express";
import StudentController from "../controllers/StudentController.js";

const studentRouter = Router();

studentRouter.post("/student/create", StudentController.createStudent);
studentRouter.get("/student", (req, res) => {
    return StudentController.getAllStudent(req, res);
});
studentRouter.patch("student/update/:id", StudentController.updateEmail);
studentRouter.delete("/student/delete/:id", StudentController.deleteStudent);

export { studentRouter }