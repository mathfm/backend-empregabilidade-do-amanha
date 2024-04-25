import { StudentEntity } from "../entities/StudentEntitiy.js";
import { ERRORS, SUCESS } from "../shared/messages.js";

class StudentService {
    async createStudent(full_name, email, password, github_url, linkedin_url) {
        try {
            await StudentEntity.sync();
            const newStudent = await StudentEntity.create({
                full_name, email, password, github_url, linkedin_url
            });
            return newStudent;
        } catch (error) {
            return error;
        }
    }

    async getAllStudent(){
        try {
            const students = await StudentEntity.findAll();
            return students;
        } catch (error) {
            return error;
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