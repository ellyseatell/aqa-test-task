import * as mysql from 'mysql2/promise';
import { config } from 'dotenv';

config(); // load .env

interface DbConfig {
  host: string;
  port?: number;
  user: string;
  password: string;
  database: string;
}

export async function truncateUsersAndTeams(dbConfig?: Partial<DbConfig>) {
  const config = {
    host: dbConfig?.host || process.env.DB_HOST,
    port: dbConfig?.port || Number(process.env.DB_PORT) || 3306,
    user: dbConfig?.user || process.env.DB_USER,
    password: dbConfig?.password || process.env.DB_PASSWORD,
    database: dbConfig?.database || process.env.DB_NAME,
  };

  const connection = await mysql.createConnection(config);

  try {
    console.log('🔹 Truncating users and teams tables...');

    // disable foreign keys temporarily
    await connection.execute('SET FOREIGN_KEY_CHECKS = 0');

    await connection.execute('TRUNCATE TABLE users');
    await connection.execute('TRUNCATE TABLE teams');

    await connection.execute('SET FOREIGN_KEY_CHECKS = 1');

    console.log('✅ Users and teams tables truncated successfully!');
  } catch (err) {
    console.error('❌ Error truncating tables:', err);
  } finally {
    await connection.end();
  }
}