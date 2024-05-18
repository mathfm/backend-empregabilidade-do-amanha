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
exports.schemaValidation = void 0;
const yup_1 = require("yup");
const schemaValidation = (schema, value) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield schema.validate(value, { abortEarly: false });
        return null;
    }
    catch (error) {
        const captureErrors = [];
        if (error instanceof yup_1.ValidationError) {
            error.inner.forEach((err) => {
                if (err.message && err.path) {
                    captureErrors.push({ error: err.message, path: err.path });
                }
            });
            return captureErrors;
        }
        return null;
    }
});
exports.schemaValidation = schemaValidation;
