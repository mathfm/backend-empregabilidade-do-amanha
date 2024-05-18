"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobEmployerEntity = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = require("../database/connection");
const EmployerEntity_1 = require("./EmployerEntity");
class JobEmployer extends sequelize_1.Model {
}
exports.JobEmployerEntity = JobEmployer;
JobEmployer.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        defaultValue: sequelize_1.Sequelize.UUIDV4,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    link_job: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: connection_1.database,
    tableName: "tb_job_employer",
});
JobEmployer.belongsTo(EmployerEntity_1.EmployerEntity, {
    foreignKey: "employer_id",
    onDelete: "CASCADE",
    constraints: true,
});
