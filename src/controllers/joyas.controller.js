import {
  obtenerJoyas,
  filtrarJoyas,
  obtenerJoyaPorId,
} from "../models/joyas.model.js";


export const getJoyas = async (req, res) => {

  try {

    const joyas = await obtenerJoyas(req.query);

    const results = joyas.map((joya) => {

      return {
        name: joya.nombre,
        href: `http://localhost:3000/joyas/joya/${joya.id}`,
      };

    });

    res.json({
      totalJoyas: joyas.length,
      results,
    });

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};


export const getJoyasFiltros = async (req, res) => {

  try {

    const joyas = await filtrarJoyas(req.query);

    res.json(joyas);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};

// obtener joyas por ID

export const getJoyaById = async (req, res) => {

  try {

    const { id } = req.params;

    const joya = await obtenerJoyaPorId(id);

    res.json(joya);

  } catch (error) {

    res.status(500).json({
      error: error.message,
    });

  }

};