import db from "./connMysql.js";
import * as Models from '../model/relacionamentos/index.js';

try {
  await db.authenticate();
  await db.sync();
  console.log("Tabelas criadas com sucesso.");
} catch (error) {
  console.error("Erro ao criar as tabelas:", error);
  process.exitCode = 1;
} finally {
  await db.close();
}