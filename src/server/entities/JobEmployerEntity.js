import { DataTypes, Sequelize } from "sequelize";
import { database } from "../database/connection.js";
import { EmployerEntity } from "./EmployerEntity.js";

export const JobEmployerEntity = database.define("tb_job_employer", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  link_job: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
});

JobEmployerEntity.belongsTo(EmployerEntity, {
  foreignKey: "employer_id",
  onDelete: "CASCADE",
  constraints: true
})
