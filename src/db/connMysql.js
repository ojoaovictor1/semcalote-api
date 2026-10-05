import './config/env.js';
import { Sequelize } from "sequelize";

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

const db_mysql = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  timezone: "-03:00",
  port: DB_PORT,
  dialect: "mysql"
});

db_mysql.authenticate()
  .then(() => {
    console.log("Conexão com o mysql feita com sucesso.");
  })
  .catch((error) => {
    console.error("Erro ao conectar com banco mysql:", error);
  });

  export default db_mysql;