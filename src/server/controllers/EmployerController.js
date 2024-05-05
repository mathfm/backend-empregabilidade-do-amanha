import { EmployerService } from "../services/EmployerService.js";


class EmployerController {
    
    constructor() {
        this.employerService = new EmployerService();
    }

    async createUser(req, res) {
        try {
            const { name, email, password } = req.body;
            const newEmployer = await this.employerService.createUser(name, email, password);
            return res.status(201).json(newEmployer);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async deleteEmployer(req, res) {
        try {
            const { id } = req.params;
            await this.employerService.deleteEmployer(id);
            return res.status(200).json({ message: "Employer successfully deleted!" });
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async updateEmployer(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password } = req.body;
            const updatedEmployer = await this.employerService.updateEmployer(id, name, email, password);
            return res.status(201).json(updatedEmployer);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async getEmployer(req, res) {
        try {
            const { id } = req.params;
            const employer = await this.employerService.getEmployer(id);
            return res.status(200).json(employer);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }

    async loginEmployer(req, res) {
        try {
            const { email, password } = req.body;
            const token = await this.employerService.loginEmployer(email, password);
            res.json(token);
        } catch (error) {
            return error;
        }
    }

    async getAllEmployer(req, res) {
        try {
            const employers = await this.employerService.getAllEmployer();
            return res.status(200).json(employers);
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    
}

export default new EmployerController;
