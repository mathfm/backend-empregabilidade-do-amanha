"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployerEntity = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
class Employer extends sequelize_1.Model {
}
exports.EmployerEntity = Employer;
Employer.init({
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
}, {
    sequelize: connection_1.database,
    tableName: "tb_employer",
});
