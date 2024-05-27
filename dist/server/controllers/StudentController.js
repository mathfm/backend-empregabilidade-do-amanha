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
Object.defineProperty(exports, "__esModule", { value: true });
const StudentService_1 = require("../services/StudentService");
class StudentController {
    constructor() {
        this.studentService = new StudentService_1.StudentService();
    }
    createStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, github_url, linkedin_url, description, } = req.body;
                const newStudent = yield this.studentService.createStudent(name, email, password, github_url, linkedin_url, description);
                return res.status(201).json(newStudent);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getAllStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield this.studentService.getAllStudent();
                return res.json(students);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getStudentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const student = yield this.studentService.getStudentById(id);
                return res.json(student);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    loginStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.studentService.loginStudent(email, password);
                return res.json(token);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, password, github_url, linkedin_url, description } = req.body;
                const userUpdate = yield this.studentService.updateUser(id, name, email, password, github_url, linkedin_url, description);
                return res.json(userUpdate);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    deleteStudent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const delStudent = yield this.studentService.deleteStudent(id);
                return res.json({ delStudent });
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.default = new StudentController();
