import { Pool } from 'pg';
import dotenv from 'dotenv';
import '@babel/polyfill';

dotenv.config();

let url;
if(process.env.NODE_ENV === 'test'){
  url =process.env.DATABASE_URL_TEST;
}else{
  url =process.env.DATABASE_URL;
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default {

  query(text, params) {
    return new Promise((resolve, reject) => {
      pool.query(text, params)
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
