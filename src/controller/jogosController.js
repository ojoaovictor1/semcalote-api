import {Jogos} from '../model/relacionamentos/index.js';

export const gravarJogo = async (req, res) => {
  try {
    const { nome, descricao, imagem } = req.body;

    if(!nome || nome .trim() === "") {
        return res.status(400).json({ msg: "O campo 'nome' é obrigatório." });
    }

    const jogo = await Jogos.create({ nome, descricao, imagem });
    res.status(201).json({ msg: "Jogo criado com sucesso!", jogo });

  } catch (error) {
    res.status(400).json({ msg: "Erro ao criar o jogo.", error: error.message });
  }
};

export const listarJogos = async (req, res) => {
  try {
    const jogos = await Jogos.findAll();
    res.status(200).json(jogos);
  } catch (error) {
    res.status(400).json({ msg: "Erro ao listar os jogos.", error: error.message });
  }
};