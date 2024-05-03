import { ProjectEmployerService } from "../services/PojectEmployerService.js";

class ProjectEmployerController {
    constructor() {
        this.projectEmployerService = new ProjectEmployerService();
    }

    async createProject(req, res) {
        try {
            const { link_job, description, languages_used } = req.body;
            const { employer_id } = req.params;
            const newProject = await this.projectEmployerService.createProject(link_job, description, languages_used, employer_id);
            return res.status(201).json(newProject);
        } catch (error) {
            return error;
        }
    }

    async getProject(req, res) { 
        try {
            const { id } = req.params;
            const project = await this.projectEmployerService.getProject(id);
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllProject(req, res) {
        try {
            const project = await this.projectEmployerService.getAllProject();
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getAllProjectEmployer(req, res) {
        try {
            const { employer_id } = req.params;
            const project = await this.projectEmployerService.getAllProjectEmployer(employer_id);
            return res.status(200).json(project);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async deleteProject(req, res) { 
        try {
            const { id, employer_id } = req.params;
            await this.projectEmployerService.deleteProject(id, employer_id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateProject(req, res) { 
        try {
            const { id, employer_id } = req.params;
            const { link_job, description, languages_used } = req.body;
            await this.projectEmployerService.updateProject(id, link_job, description, languages_used, employer_id);
            return res.status(204).json();
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

}

export default new ProjectEmployerController;