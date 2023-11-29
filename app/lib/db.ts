// db.ts
import { createPool, Pool, PoolConfig } from 'mysql2/promise';

const host = process.env.MYSQL_HOST;
const port = process.env.MYSQL_PORT;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const dbConfig: PoolConfig = {
  host: host,
  port: port,
  user: user,
  password: password,
  database: database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool: Pool = createPool(dbConfig);

export default pool;
