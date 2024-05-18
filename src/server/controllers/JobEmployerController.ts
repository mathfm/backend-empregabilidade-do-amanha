import { Request, Response } from "express";
import { JobEmployerService } from "../services/JobEmployerService";

class JobEmployerController {
    private jobEmployerService: JobEmployerService;

    constructor() {
        this.jobEmployerService = new JobEmployerService();
    }

    public async createJobLink(req: Request, res: Response): Promise<Response> {
        try {
            const { link_job, description, title } = req.body;
            const { employer_id } = req.params;
            const newJobLink = await this.jobEmployerService.createJobLink(title, link_job, description, employer_id);
            return res.status(201).json(newJobLink);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getJobLink(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const jobLink = await this.jobEmployerService.getJobLink(id);
            return res.status(200).json(jobLink);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getAllJobLink(req: Request, res: Response): Promise<Response> {
        try {
            const jobLinks = await this.jobEmployerService.getAllJobLink();
            return res.status(200).json(jobLinks);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getAllJobLinkEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const { employer_id } = req.params;
            const jobLinks = await this.jobEmployerService.getAllJobLinkEmployer(employer_id);
            return res.status(200).json(jobLinks);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async deleteJobLink(req: Request, res: Response): Promise<Response> {
        try {
            console.log("chegou no controller");
            const { id, employer_id } = req.params;
            await this.jobEmployerService.deleteJobLink(id, employer_id);
            return res.status(200).send("Deletado com sucesso");
        } catch (error: any) {
            console.error("Erro no controller:", error);
            return res.status(500).json({ message: error.message });
        }
    }

    public async testeJobLink(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).send();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async updateJobLink(req: Request, res: Response): Promise<Response> {
        try {
            const { id, employer_id } = req.params;
            const { title, link_job, description } = req.body;
            await this.jobEmployerService.updateJobLink(id, title, employer_id, link_job, description);
            return res.status(200).send();
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new JobEmployerController();
