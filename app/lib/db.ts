// db.ts
import { createPool, Pool, PoolConfig } from 'mysql2/promise';

const dbConfig: PoolConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'xxxx',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

const pool: Pool = createPool(dbConfig);

export default pool;
