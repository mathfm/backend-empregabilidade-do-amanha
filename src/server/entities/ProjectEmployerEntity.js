import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database/connection.js";
import { EmployerEntity } from "./EmployerEntity.js";

export const ProjectEmployerEntity = database.define("tb_project_employer", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  link_job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  languages_used: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

ProjectEmployerEntity.belongsTo(EmployerEntity, {
  foreignKey: "employer_id",
  onDelete: "CASCADE",
  constraints: true
})
