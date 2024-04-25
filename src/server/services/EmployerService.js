import { EmployerEntity } from "../entities/EmployerEntity.js";

export class EmployerService {
  async createUser(name, email, password) {
    try {
      await EmployerEntity.sync();
      const newEmployer = await EmployerEntity.create({
        name,
        email,
        password,
      });
        return newEmployer;
    } catch (error) {
      throw new Error(error);
    }
    }
    
    async getEmployer(id) {
        try {
            const employer = await EmployerEntity.findByPk(id);
            return employer;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllEmployer() {
        try {
            const employers = await EmployerEntity.findAll();
            return employers;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteEmployer(id) {
        try {
            const employer = await EmployerEntity.findByPk(id);
            await employer.destroy();
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateEmployee(id, name, email, password) { 
        try {
            const employee = await EmployerEntity.update({
                email: email,
                name: name,
                password: password
            }, {
                where: {
                    id: id
                }
            })
            return employee;
        } catch (error) {
            throw new Error(error);
        }
    }
}

