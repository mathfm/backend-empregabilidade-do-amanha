import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { database } from "../database/connection";
import { EmployerEntity } from "./EmployerEntity";

interface JobEmployerAttributes {
  id: string;
  title: string;
  link_job: string;
  description: string;
  employer_id?: string; 
}

interface JobEmployerCreationAttributes extends Optional<JobEmployerAttributes, "id"> {}

class JobEmployer extends Model<JobEmployerAttributes, JobEmployerCreationAttributes> implements JobEmployerAttributes {
  public id!: string;
  public title!: string;
  public link_job!: string;
  public description!: string;
  public employer_id?: string; 
}

JobEmployer.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize: database,
    tableName: "tb_job_employer",
  }
);

JobEmployer.belongsTo(EmployerEntity, {
  foreignKey: "employer_id",
  onDelete: "CASCADE",
  constraints: true,
});

export { JobEmployer as JobEmployerEntity };
