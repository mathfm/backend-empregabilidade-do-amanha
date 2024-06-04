import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in the environment variables');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    },
  },
});


const testConnection = async (): Promise<void> => {
  try {
    await sequelize.sync();
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada!");
  } catch (error: any) {
    console.log("Conexão mal sucedida :(", error);
  }
};

export { sequelize as database, testConnection };
