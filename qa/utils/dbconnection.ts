import mysql from 'mysql2/promise';

// Create a reusable connection pool
const pool = mysql.createPool({
  host: 'localhost',       // your DB host
  user: 'vikunja',   // your DB username
  password: 'vikunja_password', // your DB password
  database: 'vikunja', // database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function queryDb(query: string, params: any[] = []) {
  const connection = await pool.getConnection();
  try {
    const [rows] = await connection.execute(query, params);
    return rows;
  } finally {
    connection.release();
  }
}