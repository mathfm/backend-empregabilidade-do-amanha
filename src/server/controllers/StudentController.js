import { StudentService } from "../services/StudentService.js";

class StudentController {

    constructor() {
        this.studentService = new StudentService();
    }

    async createStudent(req, res) {
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
            res.status(201).json(newStudent)
        } catch (error) {
            return error;
        }
    }

    async getAllStudent(req, res) {
        try {
            const students = await this.studentService.getAllStudent();
            res.json(students);
        } catch (error) {
            return error;
        }
    }

    async getStudentById(req, res) {
        try {
            const { id } = req.params;
            const student = await this.studentService.getStudentById(id);
            res.json(student);
        } catch (error) {
            return error;
        }
    }

    async loginStudent(req, res) {
        try {
            const { email, password } = req.body;
            const token = await this.studentService.loginStudent(email, password);
            res.json(token);
        } catch (error) {
            return error;
        }
    }

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const {name, email, password, github_url, linkedin_url, description } = req.body;
            const userUpdate = await this.studentService.updateUser(id, name ,email, password, github_url, linkedin_url, description);
            res.json(userUpdate);
        } catch (error) {
            return error;
        }
    }

    async deleteStudent(req, res) {
        try {
            const { id } = req.params;
            const delStudent = await this.studentService.deleteStudent(id);
            res.json({ delStudent });
        } catch (error) {
            return error;
        }
    }
}



export default new StudentController;