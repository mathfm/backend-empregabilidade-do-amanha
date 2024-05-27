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
exports.EmployerService = void 0;
const EmployerEntity_1 = require("../entities/EmployerEntity");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class EmployerService {
    createUser(name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield EmployerEntity_1.EmployerEntity.sync();
                const passwordHash = yield bcrypt_1.default.hash(password, 10);
                const newEmployer = yield EmployerEntity_1.EmployerEntity.create({
                    name,
                    email,
                    password: passwordHash,
                });
                return newEmployer;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getEmployer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employer = yield EmployerEntity_1.EmployerEntity.findByPk(id, {
                    attributes: { exclude: ["password"] }
                });
                return employer;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    getAllEmployer() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employers = yield EmployerEntity_1.EmployerEntity.findAll({
                    attributes: { exclude: ["password"] },
                });
                return employers;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    loginEmployer(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employer = yield EmployerEntity_1.EmployerEntity.findOne({
                    where: {
                        email: email
                    }
                });
                const passwordIsValid = yield bcrypt_1.default.compare(password, employer.password);
                if (!passwordIsValid) {
                    return "Invalid password";
                }
                const secret = process.env.SECRET;
                const token = jsonwebtoken_1.default.sign({
                    id: employer.id,
                    email: employer.email,
                    type: "collaborator"
                }, secret);
                return { msg: "authorization", token: token };
            }
            catch (error) {
                return error;
            }
        });
    }
    deleteEmployer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const employer = yield EmployerEntity_1.EmployerEntity.findByPk(id);
                yield employer.destroy();
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    updateEmployer(id, name, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const passwordHash = yield bcrypt_1.default.hash(password, 10);
                const employee = yield EmployerEntity_1.EmployerEntity.update({
                    email: email,
                    name: name,
                    password: passwordHash,
                }, {
                    where: {
                        id: id,
                    },
                });
                return employee;
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
}
exports.EmployerService = EmployerService;
