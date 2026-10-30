import { Router } from "express";
import { Auth } from "../middleware/auth.js";
import * as Controllers from "../controller/index.js";

const routes = Router();

// HEALTH CHECK
routes.get("/health", (req, res) => {
  res.status(200).json({ msg: "Tudo ok!!!!!" });
});

// LOGIN
routes.post("/login", Controllers.LoginController.login);

// USUARIOS
routes.post("/usuarios", Controllers.UsuarioController.gravarUsuario);
routes.get("/usuarios", Auth.privado, Controllers.UsuarioController.listarUsuarios);

// JOGOS
routes.post("/jogos", Controllers.JogoController.gravarJogo);
routes.get("/jogos", Auth.privado, Controllers.JogoController.listarJogos);

export default routes;