import express from "express";
import './src/config/env.js';
import routes from "./src/routes/index.js";


const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});