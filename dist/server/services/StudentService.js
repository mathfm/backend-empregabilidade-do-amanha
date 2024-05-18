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
exports.StudentService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const StudentEntitiy_1 = require("../entities/StudentEntitiy");
const messages_1 = require("../shared/messages");
const bcrypt_1 = __importDefault(require("bcrypt"));
class StudentService {
    createStudent(name, email, password, github_url, linkedin_url, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordHash = yield bcrypt_1.default.hash(password, 10);
                yield StudentEntitiy_1.StudentEntity.sync();
                const newStudent = yield StudentEntitiy_1.StudentEntity.create({
                    name, email, password: passwordHash, github_url, linkedin_url, description
                });
                return newStudent;
            }
            catch (error) {
                console.error("Error creating student:", error);
                throw new Error("Failed to create student");
            }
        });
    }
    loginStudent(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield StudentEntitiy_1.StudentEntity.findOne({ where: { email: email } });
                if (!student) {
                    return "Student not found";
                }
                const passwordIsValid = yield bcrypt_1.default.compare(password, student.password);
                if (!passwordIsValid) {
                    return "Invalid password";
                }
                const secret = process.env.SECRET;
                if (!secret) {
                    throw new Error("JWT secret is not defined");
                }
                const token = jsonwebtoken_1.default.sign({ id: student.id, email: student.email, type: "student" }, secret);
                if (!token) {
                    throw new Error("Failed to generate JWT token");
                }
                return { msg: "authorization", token: token };
            }
            catch (error) {
                console.error("Error logging in student:", error);
                throw new Error("Failed to login student");
            }
        });
    }
    getAllStudent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const students = yield StudentEntitiy_1.StudentEntity.findAll({ attributes: { exclude: ["password"] } });
                return students;
            }
            catch (error) {
                console.error("Error getting all students:", error);
                throw new Error("Failed to get all students");
            }
        });
    }
    getStudentById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield StudentEntitiy_1.StudentEntity.findByPk(id, { attributes: { exclude: ["password"] } });
                return student;
            }
            catch (error) {
                console.error("Error getting student by ID:", error);
                throw new Error("Failed to get student by ID");
            }
        });
    }
    updateUser(id, name, email, password, github_url, linkedin_url, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordHash = yield bcrypt_1.default.hash(password, 10);
                const student = yield StudentEntitiy_1.StudentEntity.findByPk(id);
                if (!student) {
                    return `Student ${messages_1.ERRORS.ALREADY_EXISTS}`;
                }
                const userUpdate = yield StudentEntitiy_1.StudentEntity.update({ name, email, password: passwordHash, github_url, linkedin_url, description }, { where: { id } });
                return userUpdate;
            }
            catch (error) {
                console.error("Error updating student:", error);
                throw new Error("Failed to update student");
            }
        });
    }
    deleteStudent(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const student = yield StudentEntitiy_1.StudentEntity.findByPk(id);
                if (!student) {
                    return `Student ${messages_1.ERRORS.ALREADY_EXISTS}`;
                }
                yield StudentEntitiy_1.StudentEntity.destroy({ where: { id } });
                return `Student ${messages_1.SUCESS.DELETED}`;
            }
            catch (error) {
                console.error("Error deleting student:", error);
                throw new Error("Failed to delete student");
            }
        });
    }
}
exports.StudentService = StudentService;
