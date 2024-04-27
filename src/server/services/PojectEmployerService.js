import { ProjectEmployerEntity } from "../entities/ProjectEmployerEntity.js";

export class ProjectEmployerService {
    async createProject(link_project, description, languages_used, employer_id) {
        try {
            const project = await ProjectEmployerEntity.create({
                link_project,
                description,
                languages_used,
                employer_id,
            })
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getProject(id) {
        try {
            const project = await ProjectEmployerEntity.findByPk(id);
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllProject() {
        try {
            const project = await ProjectEmployerEntity.findAll();
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async getAllProjectEmployer(employer_id) {
        try {
            const project = await ProjectEmployerEntity.findAll({
                where: {
                    employer_id
                }
            })
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async deleteProject(id, employer_id) {
        try {
            const project = await ProjectEmployerEntity.destroy({
                where: {
                    id,
                    employer_id
                }
            })
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }

    async updateProject(id, employer_id, link_project, description, languages_used) {
        try {
            const project = await ProjectEmployerEntity.update({
                link_project,
                description,
                languages_used
            }, {
                where: {
                    id,
                    employer_id
                }
            })
            return project;
        } catch (error) {
            throw new Error(error);
        }
    }
}