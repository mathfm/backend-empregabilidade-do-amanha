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
exports.JobEmployerService = void 0;
const JobEmployerEntity_1 = require("../entities/JobEmployerEntity");
class JobEmployerService {
    createJobLink(title, link_job, description, employer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLink = yield JobEmployerEntity_1.JobEmployerEntity.create({
                    title,
                    link_job,
                    description,
                    employer_id,
                });
                return jobLink;
            }
            catch (error) {
                console.error("Error creating job link:", error);
                throw new Error("Failed to create job link");
            }
        });
    }
    getJobLink(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLink = yield JobEmployerEntity_1.JobEmployerEntity.findByPk(id);
                return jobLink;
            }
            catch (error) {
                console.error("Error getting job link:", error);
                throw new Error("Failed to get job link");
            }
        });
    }
    getAllJobLink() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLinks = yield JobEmployerEntity_1.JobEmployerEntity.findAll();
                return jobLinks;
            }
            catch (error) {
                console.error("Error getting all job links:", error);
                throw new Error("Failed to get all job links");
            }
        });
    }
    getAllJobLinkEmployer(employer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLinks = yield JobEmployerEntity_1.JobEmployerEntity.findAll({
                    where: { employer_id }
                });
                return jobLinks;
            }
            catch (error) {
                console.error("Error getting all job links for employer:", error);
                throw new Error("Failed to get all job links for employer");
            }
        });
    }
    deleteJobLink(id, employer_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("Chegou no service");
                yield JobEmployerEntity_1.JobEmployerEntity.destroy({
                    where: { id, employer_id }
                });
                return true;
            }
            catch (error) {
                console.error("Error deleting job link:", error);
                throw new Error("Failed to delete job link");
            }
        });
    }
    updateJobLink(id, title, employer_id, link_job, description) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const jobLink = yield JobEmployerEntity_1.JobEmployerEntity.update({
                    title,
                    link_job,
                    description,
                }, {
                    where: { id, employer_id }
                });
                return jobLink;
            }
            catch (error) {
                console.error("Error updating job link:", error);
                throw new Error("Failed to update job link");
            }
        });
    }
}
exports.JobEmployerService = JobEmployerService;
