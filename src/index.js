import express from "express";

import joyasRoutes from "./routes/joyas.routes.js";

import { reportes } from "./middlewares/reportes.js";

const app = express();

app.use(express.json());

app.use(reportes);

app.use("/", joyasRoutes);

app.listen(3000, () => {
  console.log("Servidor ON");
});