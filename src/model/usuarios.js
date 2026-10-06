import { DataTypes,} from 'sequelize';
import db_mysql from '../db/connMysql.js';

const Usuarios = db_mysql.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  chave_pix: {
    type: DataTypes.STRING,
    allowNull: true
  },
  foto: {
    type: DataTypes.STRING,
    allowNull: true
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  data_nasc: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
    freezeTableName: true,
});

export default Usuarios;