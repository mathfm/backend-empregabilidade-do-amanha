"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRouter = void 0;
const express_1 = require("express");
const StudentController_1 = __importDefault(require("../controllers/StudentController"));
const checkToken_1 = require("../shared/middlewares/checkToken");
const studentMiddleware_1 = require("../shared/middlewares/studentMiddleware");
const studentRouter = (0, express_1.Router)();
exports.studentRouter = studentRouter;
studentRouter.post("/student/create", studentMiddleware_1.studentMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return StudentController_1.default.createStudent(req, res);
}));
studentRouter.post("/login/student", (req, res) => {
    return StudentController_1.default.loginStudent(req, res);
});
studentRouter.get("/student", (req, res) => {
    return StudentController_1.default.getAllStudent(req, res);
});
studentRouter.get("/student/:id", checkToken_1.checkToken, (req, res) => {
    return StudentController_1.default.getStudentById(req, res);
});
studentRouter.put("/student/update/:id", (req, res) => {
    return StudentController_1.default.updateUser(req, res);
});
studentRouter.delete("/student/delete/:id", (req, res) => {
    return StudentController_1.default.deleteStudent(req, res);
});
