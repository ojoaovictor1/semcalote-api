import { Usuarios } from '../model/relacionamentos/index.js';

export const gravarUsuario = async (req, res) => {
  try {
    const { nome, email, password, foto, chave_pix, data_nasc } = req.body;

    if(!nome || nome.trim() === "") {
      return res.status(400).json({ msg: "O campo 'nome' é obrigatório." });
    }

    if(!email || email.trim() === "") {
      return res.status(400).json({ msg: "O campo 'email' é obrigatório." });
    }

    if(!password || password.trim() === "") {
      return res.status(400).json({ msg: "O campo 'password' é obrigatório." });
    }

    const usuario = await Usuarios.create({ nome, email, password, foto, chave_pix, data_nasc });
    res.status(201).json({ msg: "Usuário criado com sucesso!", usuario });
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    res.status(400).json({ msg: "Erro ao criar o usuário.", error: error.message });
  }
};

export const listarUsuarios = async (req, res) => {
  try {

    const usuarios = await Usuarios.findAll({ attributes: { exclude: ['senha'] } });
    res.status(200).json(usuarios);

  } catch (error) {

      if (error.name === "SequelizeUniqueConstraintError") {
        console.error("teste console de erro:", error);
        return res.status(409).json({ msg: "Já existe um usuário com esse e-mail." });
      }
      console.error("Erro ao listar usuários:", error);
      return res.status(500).json({ msg: "Erro ao listar os usuários." });

  }
}
