import { EmployerEntity } from "../entities/EmployerEntity.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export class EmployerService {
    async createUser(name, email, password) {
        try {
            await EmployerEntity.sync();
            const passwordHash = await bcrypt.hash(password, 10);
            const newEmployer = await EmployerEntity.create({
                name,
                email,
                password: passwordHash,
            });
            return newEmployer;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getEmployer(id) {
        try {
            const employer = await EmployerEntity.findByPk(id, {
                attributes: {exclude: ["password"]}
            });
            return employer;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllEmployer() {
        try {
            const employers = await EmployerEntity.findAll({
              attributes: { exclude: ["password"] },
            });
            return employers;
        } catch (error) {
            throw new Error(error);
        }
    }

    async loginEmployer(email, password) {
        try {
            const employer = await EmployerEntity.findOne(
                {
                    where: {
                        email: email
                    }
                }
            );
            const passwordIsValid = await bcrypt.compare(password, employer.password);
            if (!passwordIsValid) {
                return "Invalid password"
            }

            const secret = process.env.SECRET;
            const token = jwt.sign(
              {
                id: employer.id,
                email: employer.email,
                type: "collaborator"
              },
              secret
            );

            return {msg: "authorization", token: token};

        } catch (error) {
            return error;
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

    async updateEmployer(id, name, email, password) {
        try {
            const passwordHash = await bcrypt.hash(password, 10);
            const employee = await EmployerEntity.update(
                {
                    email: email,
                    name: name,
                    password: passwordHash,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );
            return employee;
        } catch (error) {
            throw new Error(error);
        }
    }
}
