import { Router } from "express";
import * as Controllers from "../controller/index.js";

const routes = Router();

// USUARIOS
routes.post("/usuarios", Controllers.UsuarioController.gravarUsuario);
routes.get("/usuarios", Controllers.UsuarioController.listarUsuarios);

// JOGOS
routes.post("/jogos", Controllers.JogoController.gravarJogo);
routes.get("/jogos", Controllers.JogoController.listarJogos);

export default routes;