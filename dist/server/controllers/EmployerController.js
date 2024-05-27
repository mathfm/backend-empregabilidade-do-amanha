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
const EmployerService_1 = require("../services/EmployerService");
class EmployerController {
    constructor() {
        this.employerService = new EmployerService_1.EmployerService();
    }
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const newEmployer = yield this.employerService.createUser(name, email, password);
                return res.status(201).json(newEmployer);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    deleteEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield this.employerService.deleteEmployer(id);
                return res.status(200).json({ message: "Employer successfully deleted!" });
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    updateEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const { name, email, password } = req.body;
                const updatedEmployer = yield this.employerService.updateEmployer(id, name, email, password);
                return res.status(201).json(updatedEmployer);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const employer = yield this.employerService.getEmployer(id);
                return res.status(200).json(employer);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    loginEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield this.employerService.loginEmployer(email, password);
                return res.json(token);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getAllEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employers = yield this.employerService.getAllEmployer();
                return res.status(200).json(employers);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.default = new EmployerController();
