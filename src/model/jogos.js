import { DataTypes } from "sequelize";
import db_mysql from "../db/connMysql.js";

const Jogos = db_mysql.define('jogos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
imagem: {
    type: DataTypes.STRING,
    allowNull: true
},
status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
}}, {
    freezeTableName: true,
});

export default Jogos;