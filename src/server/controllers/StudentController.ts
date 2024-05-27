import { Request, Response } from "express";
import { StudentService } from "../services/StudentService";

class StudentController {
    private studentService: StudentService;

    constructor() {
        this.studentService = new StudentService();
    }

    public async createStudent(req: Request, res: Response): Promise<Response> {
        try {
            const {
                name,
                email,
                password,
                github_url,
                linkedin_url,
                description,
            } = req.body;
            const newStudent = await this.studentService.createStudent(
                name,
                email,
                password,
                github_url,
                linkedin_url,
                description
            );
            return res.status(201).json(newStudent);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getAllStudent(req: Request, res: Response): Promise<Response> {
        try {
            const students = await this.studentService.getAllStudent();
            return res.json(students);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async getStudentById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const student = await this.studentService.getStudentById(id);
            return res.json(student);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async loginStudent(req: Request, res: Response): Promise<Response> {
        try {
            const { email, password } = req.body;
            const token = await this.studentService.loginStudent(email, password);
            return res.json(token);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const { name, email, password, github_url, linkedin_url, description } = req.body;
            const userUpdate = await this.studentService.updateUser(id, name, email, password, github_url, linkedin_url, description);
            return res.json(userUpdate);
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }

    public async deleteStudent(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const delStudent = await this.studentService.deleteStudent(id);
            return res.json({ delStudent });
        } catch (error: any) {
            return res.status(500).json({ message: error.message });
        }
    }
}

export default new StudentController();
