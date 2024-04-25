import { Router } from "express";
import StudentController from "../controllers/StudentController.js";

const StudentRouter = Router();

StudentRouter.post("/student/create", StudentController.createStudent);
StudentRouter.get("/student", StudentController.getAllStudents);
StudentRouter.patch("student/update/:id", StudentController.updateEmail);
StudentRouter.delete("/student/delete/:id", StudentController.deleteStudent);

export { StudentRouter }