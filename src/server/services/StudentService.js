import jwt from "jsonwebtoken";
import { StudentEntity } from "../entities/StudentEntitiy.js";
import { ERRORS, SUCESS } from "../shared/messages.js";
import bcrypt from "bcrypt";
class StudentService {
    async createStudent(name, email, password, github_url, linkedin_url, description) {
        try {
            const passwordHash = await bcrypt.hash(password, 10);
            await StudentEntity.sync();
            const newStudent = await StudentEntity.create({
                name, email, password: passwordHash, github_url, linkedin_url, description
            });
            return newStudent;
        } catch (error) {
            return error;
        }
    }

    async loginStudent(email, password) {
        try {
            const student = await StudentEntity.findOne(
                {
                    where: {
                        email: email
                    }
                }
            );
            const passwordIsValid = await bcrypt.compare(password, student.password);
            if (!passwordIsValid) {
                return "Invalid password"
            }

            const secret = process.env.SECRET;
            const token = jwt.sign({
                id: student.id,
                email: student.email
            }, secret);

            return {msg: "authorization", token: token};

        } catch (error) {
            return error;
        }
    }

    async getAllStudent(){
        try {
            const students = await StudentEntity.findAll({
                attributes: {exclude: ["password"]}
            });
            return students;
        } catch (error) {
            return error;
        }
    }

    async getStudentById(id) {
        try {
            const student = await StudentEntity.findByPk(id, {
                attributes: {exclude: ["password"]}
            });
            return student;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateEmail(id, newEmail){
        try {
            const studentId = await StudentEntity.findByPk(id);
            if(!studentId){
                return `Estudante ${ERRORS.ALREADY_EXISTS}`
            }
            const emailUpdate = await StudentEntity.update({email: newEmail}, {
                where: {
                    id
                }
            });
            return emailUpdate;
        } catch (error) {
            return error;
        }
    }

    async deleteStudent(id) {
        try {
            const studentId = await StudentEntity.findByPk(id);
            if(!studentId){
                return `Estudante ${ERRORS.ALREADY_EXISTS}`
            }
            const delUpdate = await StudentEntity.destroy({
                where: {
                    id
                }
            });
            return `Estudante ${SUCESS.DELETED}`
        } catch (error) {
            return error;
        }
    }
}

export { StudentService }