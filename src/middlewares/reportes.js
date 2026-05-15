export const reportes = (req, res, next) => {
  const fecha = new Date();

  console.log(`
  ===== REPORTE =====
  Fecha: ${fecha}
  Ruta consultada: ${req.url}
  Método: ${req.method}
  `);

  next();
  };