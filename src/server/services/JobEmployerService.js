import { JobEmployerEntity } from "../entities/JobEmployerEntity.js";

export class JobEmployerService {
    async createJobLink(title, link_job, description, employer_id) {
        try {
            const jobLink = await JobEmployerEntity.create({
                title,
                link_job,
                description,
                employer_id,
            })
            return jobLink;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getJobLink(id) {
        try {
            const jobLink = await JobEmployerEntity.findByPk(id);
            return jobLink;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllJobLink() {
        try {
            const jobLink = await JobEmployerEntity.findAll();
            return jobLink;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllJobLinkEmployer(employer_id) {
        try {
            const jobLink = await JobEmployerEntity.findAll({
                where: {
                    employer_id
                }
            })
            return jobLink;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteJobLink(id, employer_id) {
        try {
            console.log("Chegou no service");
            await JobEmployerEntity.destroy({
                where: {
                    id,
                    employer_id
                }
            })
            return true;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateJobLink(id, title, employer_id, link_job, description) {
        try {
            const jobLink = await JobEmployerEntity.update({
                title,
                link_job,
                description,
            }, {
                where: {
                    id,
                    employer_id
                }
            })
            return jobLink;
        } catch (error) {
            throw new Error(error);
        }
    }
}