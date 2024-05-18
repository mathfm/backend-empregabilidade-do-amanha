"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobEmployerSchema = exports.employerSchema = exports.studentSchema = void 0;
const yup_1 = require("yup");
exports.studentSchema = (0, yup_1.object)({
    name: (0, yup_1.string)().required().min(3),
    email: (0, yup_1.string)().email().required().min(6),
    password: (0, yup_1.string)().required().min(8),
    github_url: (0, yup_1.string)().required().min(3),
    linkedin_url: (0, yup_1.string)().required().min(3),
    description: (0, yup_1.string)().required().min(10).max(300),
});
exports.employerSchema = (0, yup_1.object)({
    name: (0, yup_1.string)().required().min(3),
    email: (0, yup_1.string)().email().required().min(6),
    password: (0, yup_1.string)().required().min(8),
});
exports.jobEmployerSchema = (0, yup_1.object)({
    title: (0, yup_1.string)().required().min(3),
    description: (0, yup_1.string)().required().min(10).max(300),
    link_job: (0, yup_1.string)().required().min(3),
});
