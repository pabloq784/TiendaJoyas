import { Router } from "express";

import {
  getJoyas,
  getJoyasFiltros,
  getJoyaById,  
} from "../controllers/joyas.controller.js";

const router = Router();

router.get("/joyas", getJoyas);

router.get("/joyas/filtros", getJoyasFiltros);

router.get("/joyas/joya/:id", getJoyaById);

// Obtener joyas por ID

export default router;