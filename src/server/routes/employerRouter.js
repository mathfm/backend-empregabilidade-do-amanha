import { Router } from "express";
import EmployerController from "../controllers/EmployerController.js";


export const employerRouter = Router();


employerRouter.post("/employer/create", (req, res) => {
  return EmployerController.createUser(req, res);
});

employerRouter.get("/employer", (req, res) => {
    return EmployerController.getAllEmployer(req, res);
})

employerRouter.get("/employer/:id", (req, res) => {
    return EmployerController.getAllEmployer(req, res);
})

employerRouter.put("/employer/update/:id", (req, res) => {
    return EmployerController.updateEmployer(req, res);
})

employerRouter.delete("/employer/delte/:id", (req, res) => {
    return EmployerController.deleteEmployer(req, res);
})