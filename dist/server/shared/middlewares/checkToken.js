"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const checkToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).send({ msg: "Not authorized" });
    }
    try {
        jsonwebtoken_1.default.verify(token, process.env.SECRET);
        next();
    }
    catch (error) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};
exports.checkToken = checkToken;
