import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "lolo4582",
  database: "Prueba01",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
