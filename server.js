import express from "express";
import './src/config/env.js';
import routes from "./src/routes/index.js";
import * as Controllers from "./src/controllers/index.js";

const api = express();

api.use(express.json());
api.use(routes);

api.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});