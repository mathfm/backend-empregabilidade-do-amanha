"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEntity = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
exports.StudentEntity = connection_1.database.define("tb_student", {
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.Sequelize.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    github_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    linkedin_url: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
