import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
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
