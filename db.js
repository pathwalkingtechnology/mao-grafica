const { Pool } = require('pg');

// Configuración de la base de datos PostgreSQL con las credenciales de Supabase o el proveedor que elijas
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 5432, // Puerto por defecto de PostgreSQL
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
