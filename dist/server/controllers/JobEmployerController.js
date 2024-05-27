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
const JobEmployerService_1 = require("../services/JobEmployerService");
class JobEmployerController {
    constructor() {
        this.jobEmployerService = new JobEmployerService_1.JobEmployerService();
    }
    createJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { link_job, description, title } = req.body;
                const { employer_id } = req.params;
                const newJobLink = yield this.jobEmployerService.createJobLink(title, link_job, description, employer_id);
                return res.status(201).json(newJobLink);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const jobLink = yield this.jobEmployerService.getJobLink(id);
                return res.status(200).json(jobLink);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getAllJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLinks = yield this.jobEmployerService.getAllJobLink();
                return res.status(200).json(jobLinks);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    getAllJobLinkEmployer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { employer_id } = req.params;
                const jobLinks = yield this.jobEmployerService.getAllJobLinkEmployer(employer_id);
                return res.status(200).json(jobLinks);
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    deleteJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("chegou no controller");
                const { id, employer_id } = req.params;
                yield this.jobEmployerService.deleteJobLink(id, employer_id);
                return res.status(200).send("Deletado com sucesso");
            }
            catch (error) {
                console.error("Erro no controller:", error);
                return res.status(500).json({ message: error.message });
            }
        });
    }
    testeJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).send();
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
    updateJobLink(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, employer_id } = req.params;
                const { title, link_job, description } = req.body;
                yield this.jobEmployerService.updateJobLink(id, title, employer_id, link_job, description);
                return res.status(200).send();
            }
            catch (error) {
                return res.status(500).json({ message: error.message });
            }
        });
    }
}
exports.default = new JobEmployerController();
