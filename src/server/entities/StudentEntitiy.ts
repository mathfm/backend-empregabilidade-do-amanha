// import { StudentEntity } from './StudentEntitiy';
import { DataTypes, Model, Optional } from 'sequelize';
import { database } from "../database/connection";
import { randomUUID } from 'node:crypto';


export interface IStudent {
    id: string;
    name: string;
    email: string;
    password: string;
    github_url: string;
    linkedin_url: string;
    description: string;
}

interface StudentCreateAtributes extends Optional<IStudent, 'id'> {};
export class StudentEntity extends Model<IStudent, StudentCreateAtributes> implements IStudent{
    public id!: string;
    public name!: string;
    public email!: string;
    public password!: string;
    public github_url!: string;
    public linkedin_url!: string;
    public description!: string;
}


StudentEntity.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: randomUUID,
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
    },
    {
        sequelize: database,
        tableName: 'tb_student', 
        timestamps: true, 
    }
);

