"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const indexRouter_1 = require("./routes/indexRouter");
dotenv_1.default.config();
exports.server = (0, express_1.default)();
exports.server.use((0, cors_1.default)());
exports.server.use(express_1.default.json());
exports.server.use(indexRouter_1.indexRouter);
