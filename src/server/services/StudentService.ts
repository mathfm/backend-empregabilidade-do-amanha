import jwt from "jsonwebtoken";
import { StudentEntity } from "../entities/StudentEntitiy";
import { ERRORS, SUCESS } from "../shared/messages";
import bcrypt from "bcrypt";

class StudentService {
    async createStudent(name: string, email: string, password: string, github_url: string, linkedin_url: string, description: string) {
        try {
            const passwordHash = await bcrypt.hash(password, 10);
            await StudentEntity.sync();
            const newStudent = await StudentEntity.create({
                name, email, password: passwordHash, github_url, linkedin_url, description
            });
            return newStudent;
        } catch (error) {
            console.error("Error creating student:", error);
            throw new Error("Failed to create student");
        }
    }

   async loginStudent(email: string, password: string) {
    try {
        const student = await StudentEntity.findOne({ where: { email: email } });
        if (!student) {
            return "Student not found";
        }

        const passwordIsValid = await bcrypt.compare(password, student.password);
        if (!passwordIsValid) {
            return "Invalid password";
        }

        const secret = process.env.SECRET as string;
        if (!secret) {
            throw new Error("JWT secret is not defined");
        }

        const token = jwt.sign({ id: student.id, email: student.email, type: "student" }, secret);
        if (!token) {
            throw new Error("Failed to generate JWT token");
        }

        return { msg: "authorization", token: token };
    } catch (error) {
        console.error("Error logging in student:", error);
        throw new Error("Failed to login student");
    }
}

    async getAllStudent() {
        try {
            const students = await StudentEntity.findAll({ attributes: { exclude: ["password"] } });
            return students;
        } catch (error) {
            console.error("Error getting all students:", error);
            throw new Error("Failed to get all students");
        }
    }

    async getStudentById(id: string) {
        try {
            const student = await StudentEntity.findByPk(id, { attributes: { exclude: ["password"] } });
            return student;
        } catch (error) {
            console.error("Error getting student by ID:", error);
            throw new Error("Failed to get student by ID");
        }
    }

    async updateUser(id: string, name: string, email: string, password: string, github_url: string, linkedin_url: string, description: string) {
        try {
            const passwordHash = await bcrypt.hash(password, 10);
            const student = await StudentEntity.findByPk(id);
            const dataStudent = {
            name: (name === "" || name === null) ? student?.name : name,
            email: (email === "" || email === null) ? student?.email : email,
            password: passwordHash,
            github_url: (github_url === "" || github_url === null) ? student?.github_url : github_url,
            linkedin_url: (linkedin_url === "" || linkedin_url === null) ? student?.linkedin_url : linkedin_url,
            description: (description === "" || description === null) ? student?.description : description
        };
            if (!student) {
                return `Student ${ERRORS.ALREADY_EXISTS}`;
            }
            const userUpdate = await StudentEntity.update(dataStudent, { where: { id } });
            return userUpdate;
        } catch (error) {
            console.error("Error updating student:", error);
            throw new Error("Failed to update student");
        }
    }

    async deleteStudent(id: string) {
        try {
            const student = await StudentEntity.findByPk(id);
            if (!student) {
                return `Student ${ERRORS.ALREADY_EXISTS}`;
            }
            await StudentEntity.destroy({ where: { id } });
            return `Student ${SUCESS.DELETED}`;
        } catch (error) {
            console.error("Error deleting student:", error);
            throw new Error("Failed to delete student");
        }
    }
}

export { StudentService };
