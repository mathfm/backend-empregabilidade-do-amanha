import { DataTypes, Sequelize, Model, Optional } from "sequelize";
import { database } from "../database/connection";

interface EmployerAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

interface EmployerCreationAttributes extends Optional<EmployerAttributes, "id"> {}

class Employer extends Model<EmployerAttributes, EmployerCreationAttributes> implements EmployerAttributes {
  public id!: string;
  public name!: string;
  public email!: string;
  public password!: string;
}

Employer.init(
  {
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
  },
  {
    sequelize: database,
    tableName: "tb_employer",
  }
);

export { Employer as EmployerEntity };
