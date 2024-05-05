import { JobEmployerService } from "../services/JobEmployerService.js";

class JobEmployerController {
    constructor() {
        this.JobEmployerService = new JobEmployerService();
    }

    async createJobLink(req, res) {
        try {
            const { link_job, description, title } = req.body;
            const { employer_id } = req.params;
            const newJobLink = await this.JobEmployerService.createJobLink(title, link_job, description, employer_id);
            return res.status(201).json(newJobLink);
        } catch (error) {
            return error;
        }
    }

    async getJobLink(req, res) { 
        try {
            const { id } = req.params;
            const jobLink = await this.JobEmployerService.getJobLink(id);
            return res.status(200).json(jobLink);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllJobLink(req, res) {
        try {
            const JobLink = await this.JobEmployerService.getAllJobLink();
            return res.status(200).json(JobLink);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllJobLinkEmployer(req, res) {
        try {
            const { employer_id } = req.params;
            const JobLink = await this.JobEmployerService.getAllJobLinkEmployer(employer_id);
            return res.status(200).json(JobLink);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async deleteJobLink(req, res) {
        try {
            console.log("chegou no controller");
            const { id, employer_id } = req.params;
            await this.JobEmployerService.deleteJobLink(id, employer_id);
            return res.status(200).send("Deletado com sucesso");
        } catch (error) {
            console.error("Erro no controller:", error);
            return res.status(500).json({ message: error.message });
        }
    }

    async testeJobLink(req, res) {
        try {
            
            return res.status(200);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateJobLink(req, res) { 
        try {
            const { id, employer_id } = req.params;
            const { title, link_job, description } = req.body;
            await this.JobEmployerService.updateJobLink(
              id,
              title,
              employer_id,
              link_job,
              description
            );
            return res.status(200);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}

export default new JobEmployerController();