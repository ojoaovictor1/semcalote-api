import express from "express";
import './src/config/env.js';
import routes from "./src/routes/index.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({
  origin: [
    'https://semcalote.me',
    'https://www.semcalote.me',
    'http://localhost:8080',
  ],
}));

app.use(routes);
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});