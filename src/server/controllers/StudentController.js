import { StudentService } from "../services/StudentService.js";

class StudentController {

    constructor() {
        this.studentService = new StudentService();
    }

    async createStudent(req, res) {
        try {
            const { full_name, email, password, github_url, linkedin_url } = req.body;
            const newStudent = await instanceStudentService.createStudent(full_name, email, password, github_url, linkedin_url);
            res
                .status(201)
                .json({ newStudent })
        } catch (error) {
            return error;
        }
    }

    async getAllStudents(req, res) {
        try {
            const students = await this.studentService.getAllStudent();
            res.json({ students });
        } catch (error) {
            return error;
        }
    }

    async updateEmail(req, res) {
        try {
            const { id } = req.params;
            const { newEmail } = req.body;
            const emailUpdate = await instanceStudentService.updateEmail(id, newEmail);
            res.json({ emailUpdate });
        } catch (error) {
            return error;
        }
    }

    async deleteStudent(req, res) {
        try {
            const { id } = req.params;
            const delStudent = await instanceStudentService.deleteStudent(id);
            res.json({ delStudent });
        } catch (error) {
            return error;
        }
    }
}



export default new StudentController;