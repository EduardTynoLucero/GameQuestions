import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "tynolucero",
  database: process.env.DB_NAME || "videogame",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
