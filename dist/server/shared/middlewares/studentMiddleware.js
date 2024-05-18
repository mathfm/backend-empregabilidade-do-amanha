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
exports.studentMiddleware = void 0;
const StudentEntitiy_1 = require("../../entities/StudentEntitiy");
const fieldsExist_1 = require("../validation/fieldsExist");
const schemaValidation_1 = require("../validation/schemaValidation");
const schemas_1 = require("../validation/schemas");
const studentMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const emailExist = yield (0, fieldsExist_1.fieldExistValidation)(StudentEntitiy_1.StudentEntity, "email", req.body.email);
        if (emailExist) {
            return res.status(400).json({ error: "Email já registrado" });
        }
        const errorsFields = yield (0, schemaValidation_1.schemaValidation)(schemas_1.studentSchema, req.body);
        if (errorsFields) {
            return res.status(400).json({ errors: errorsFields });
        }
        next();
    }
    catch (error) {
        return res.status(500).json({ error: "Internal server error" });
    }
});
exports.studentMiddleware = studentMiddleware;
