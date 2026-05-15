import express from "express";
import cors from "cors";

import joyasRoutes from "./src/routes/joyas.routes.js";

import { reportes } from "./src/middlewares/reportes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use(reportes);

app.use("/", joyasRoutes);

app.listen(3000, () => {
  console.log("Servidor ON en puerto 3000");
});