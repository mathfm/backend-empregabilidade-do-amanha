import { Request, Response } from "express";
import { EmployerService } from "../services/EmployerService";

class EmployerController {
    private employerService: EmployerService;

    constructor() {
        this.employerService = new EmployerService();
    }

    public async createUser(req: Request, res: Response): Promise<Response> {
        try {
            const { name, email, password } = req.body;
            const newEmployer = await this.employerService.createUser(name, email, password);
            return res.status(201).json(newEmployer);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async deleteEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await this.employerService.deleteEmployer(id);
            return res.status(200).json({ message: "Employer successfully deleted!" });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async updateEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedEmployer = await this.employerService.updateEmployer(id, name, email, password);
            return res.status(201).json(updatedEmployer);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const employer = await this.employerService.getEmployer(id);
            return res.status(200).json(employer);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async loginEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const token = await this.employerService.loginEmployer(email, password);
            return res.json(token);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getAllEmployer(req: Request, res: Response): Promise<Response> {
        try {
            const employers = await this.employerService.getAllEmployer();
            return res.status(200).json(employers);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new EmployerController();
