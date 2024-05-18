import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database/connection";

export const StudentEntity = database.define("tb_student", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    github_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    linkedin_url: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});
