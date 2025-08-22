import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "gameuser",
  password: process.env.DB_PASSWORD || "gamepass123",
  database: process.env.DB_NAME || "educational_game",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  charset: "utf8mb4" 
});

export default pool;
