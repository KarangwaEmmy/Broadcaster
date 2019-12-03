import dotenv from 'dotenv';
import { Pool } from 'pg';
import '@babel/polyfill';

dotenv.config();

 let pool=new Pool({connectionString: process.env.DATABASE_URL});

const connectDb = async () => pool.connect();
// use async for a function that will have to wait for another one to complete the task.

const dbQuery = async (sql, data = []) => {
  const connection = await connectDb();
  try {
    const result = await connection.query(sql, data);
    return result.rows;
  } catch (error) {
    // Error handling
    console.log(error.message);
  } finally {
    // close the pool or the databasee
    connection.release();
  }
};
export default dbQuery;