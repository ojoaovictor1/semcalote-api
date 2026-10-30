import {Usuarios} from '../model/relacionamentos/index.js';
import JWT from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const usuario = await Usuarios.findOne({ email });
    
    if (!usuario) {
      return res.status(404).json({ msg: "Usuário ou senha incorretos" });
    }

    if (senha !== usuario.senha) {
      return res.status(400).json({ msg: "Usuário ou senha incorretos" });
    }

    if(usuario){
      const token = JWT.sign({
        id: usuario.id,
        nome: usuario.nome,
        email: usuario.email
      }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.status(200).json({ msg: "Login realizado com sucesso", token });
    }

  } catch (error) {
    res.status(500).json({ msg: "Erro maior", error });
  }
};