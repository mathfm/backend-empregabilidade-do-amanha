"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.employerRouter = void 0;
const express_1 = require("express");
const EmployerController_1 = __importDefault(require("../controllers/EmployerController"));
const employerMiddleware_1 = require("../shared/middlewares/employerMiddleware");
exports.employerRouter = (0, express_1.Router)();
exports.employerRouter.post("/employer/create", employerMiddleware_1.employerMiddleware, (req, res) => {
    return EmployerController_1.default.createUser(req, res);
});
exports.employerRouter.post("/employer/login", (req, res) => {
    return EmployerController_1.default.loginEmployer(req, res);
});
exports.employerRouter.get("/employer", (req, res) => {
    return EmployerController_1.default.getAllEmployer(req, res);
});
exports.employerRouter.get("/employer/:id", (req, res) => {
    return EmployerController_1.default.getEmployer(req, res);
});
exports.employerRouter.put("/employer/update/:id", (req, res) => {
    return EmployerController_1.default.updateEmployer(req, res);
});
exports.employerRouter.delete("/employer/delete/:id", (req, res) => {
    return EmployerController_1.default.deleteEmployer(req, res);
});
