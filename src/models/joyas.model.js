import { pool } from "../db/conexion.js";

export const obtenerJoyas = async ({
  limits = 10,
  page = 1,
  order_by = "id_ASC",
}) => {

  const [campo, direccion] = order_by.split("_");

  // VALIDACIONES SEGURAS

  const camposPermitidos = ["id", "precio", "stock"];

  const direccionesPermitidas = ["ASC", "DESC"];

  if (!camposPermitidos.includes(campo)) {
    throw new Error("Campo inválido");
  }

  if (!direccionesPermitidas.includes(direccion)) {
    throw new Error("Dirección inválida");
  }

  const offset = (page - 1) * limits;

  const query = `
    SELECT *
    FROM inventario
    ORDER BY ${campo} ${direccion}
    LIMIT $1 OFFSET $2
  `;

  const values = [limits, offset];

  const { rows } = await pool.query(query, values);

  return rows;
};


export const filtrarJoyas = async ({
  precio_max,
  precio_min,
  categoria,
  metal,
}) => {

  let filtros = [];

  let values = [];

  if (precio_max) {
    values.push(precio_max);
    filtros.push(`precio <= $${values.length}`);
  }

  if (precio_min) {
    values.push(precio_min);
    filtros.push(`precio >= $${values.length}`);
  }

  if (categoria) {
    values.push(categoria);
    filtros.push(`categoria = $${values.length}`);
  }

  if (metal) {
    values.push(metal);
    filtros.push(`metal = $${values.length}`);
  }

  let consulta = "SELECT * FROM inventario";

  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  const { rows } = await pool.query(consulta, values);

  return rows;
};

// Obtener Joyas por ID

export const obtenerJoyaPorId = async (id) => {

  const query = `
    SELECT *
    FROM inventario
    WHERE id = $1
  `;

  const values = [id];

  const { rows } = await pool.query(query, values);

  return rows[0];

};