import { JobEmployerEntity } from "../entities/JobEmployerEntity";

export class JobEmployerService {
    async createJobLink(title: string, link_job: string, description: string, employer_id: string): Promise<any> {
        try {
            const jobLink = await JobEmployerEntity.create({
                title,
                link_job,
                description,
                employer_id,
            });
            return jobLink;
        } catch (error) {
            console.error("Error creating job link:", error);
            throw new Error("Failed to create job link");
        }
    }

    async getJobLink(id: string): Promise<any> {
        try {
            const jobLink = await JobEmployerEntity.findByPk(id);
            return jobLink;
        } catch (error) {
            console.error("Error getting job link:", error);
            throw new Error("Failed to get job link");
        }
    }

    async getAllJobLink(): Promise<any> {
        try {
            const jobLinks = await JobEmployerEntity.findAll();
            return jobLinks;
        } catch (error) {
            console.error("Error getting all job links:", error);
            throw new Error("Failed to get all job links");
        }
    }

    async getAllJobLinkEmployer(employer_id: string): Promise<any> {
        try {
            const jobLinks = await JobEmployerEntity.findAll({
                where: { employer_id }
            });
            return jobLinks;
        } catch (error) {
            console.error("Error getting all job links for employer:", error);
            throw new Error("Failed to get all job links for employer");
        }
    }

    async deleteJobLink(id: string, employer_id: string): Promise<boolean> {
        try {
            console.log("Chegou no service");
            await JobEmployerEntity.destroy({
                where: { id, employer_id }
            });
            return true;
        } catch (error) {
            console.error("Error deleting job link:", error);
            throw new Error("Failed to delete job link");
        }
    }

    async updateJobLink(id: string, title: string, employer_id: string, link_job: string, description: string): Promise<any> {
        try {
            const job = await JobEmployerEntity.findByPk(id);
            const dateJob = {
                title: (title === "" || title === null) ? job?.title : title,
                link_job: (link_job === "" || link_job === null) ? job?.link_job : link_job,
                description: (description === "" || description === null) ? job?.description : description
            };
            const jobLink = await JobEmployerEntity.update(dateJob, {
                where: { id, employer_id }
            });
            return jobLink;
        } catch (error) {
            throw new Error("Failed to update job link");
        }
    }
}
