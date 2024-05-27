"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobEmployerRouter = void 0;
const express_1 = require("express");
const JobEmployerController_1 = __importDefault(require("../controllers/JobEmployerController"));
const jobEmployerMiddleware_1 = require("../shared/middlewares/jobEmployerMiddleware");
const jobEmployerRouter = (0, express_1.Router)();
exports.jobEmployerRouter = jobEmployerRouter;
jobEmployerRouter.post("/job/create/:employer_id", jobEmployerMiddleware_1.jobEmployerMiddleware, (req, res) => {
    return JobEmployerController_1.default.createJobLink(req, res);
});
jobEmployerRouter.get("/job/:id", (req, res) => {
    return JobEmployerController_1.default.getJobLink(req, res);
});
jobEmployerRouter.get("/job", (req, res) => {
    return JobEmployerController_1.default.getAllJobLink(req, res);
});
jobEmployerRouter.get("/job/:employer_id/all", (req, res) => {
    return JobEmployerController_1.default.getAllJobLinkEmployer(req, res);
});
jobEmployerRouter.put("/job/update/:id/:employer_id", (req, res) => {
    return JobEmployerController_1.default.updateJobLink(req, res);
});
jobEmployerRouter.delete("/job/delete/:id/:employer_id", (req, res) => {
    return JobEmployerController_1.default.deleteJobLink(req, res);
});
