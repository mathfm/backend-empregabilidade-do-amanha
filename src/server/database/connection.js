import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

const testConnection = async () => {
  try {
    sequelize.sync();
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados realizada!");
  } catch (error) {
    console.log("Conexão mal sucedida :(", error);
  }
};

export { sequelize as database, testConnection };
