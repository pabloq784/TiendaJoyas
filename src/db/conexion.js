import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "tres1263",
  database: "joyas",
  allowExitOnIdle: true,
});