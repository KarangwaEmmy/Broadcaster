import dbQuery from '../config';

const userTbale = `
               CREATE TABLE IF NOT EXISTS users(
                  id SERIAL PRIMARY KEY,
                  email VARCHAR(128) UNIQUE NOT NULL,
                  firstname VARCHAR(128) NOT NULL,
                  lastname VARCHAR(128) NOT NULL,
                  phonenumber VARCHAR(255) UNIQUE NOT NULL,
                  password VARCHAR(255) NOT NULL,
                  username VARCHAR(255) UNIQUE NOT NULL,
                  isadmin VARCHAR(255) NOT NULL
                  ); `;

const flagTable = `
                  CREATE TABLE IF NOT EXISTS redflag(
                    id SERIAL PRIMARY KEY,
                    createdby VARCHAR(128) REFERENCES users(email)  NOT NULL,
                    title VARCHAR(128) NOT NULL,
                    type VARCHAR(128) NOT NULL,
                    location VARCHAR(128) NOT NULL,
                    status VARCHAR(128) NOT NULL,
                    images VARCHAR(128) NOT NULL,
                    videos VARCHAR(128) NOT NULL,
                    comment VARCHAR(255) NOT NULL,
                    created_on TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP
                    );   `;


const createAllTables = async () => {
  try {
    await dbQuery.query(userTbale);
    await dbQuery.query(flagTable);
    console.log(' ======= All tables have been created =======');
  } catch (error) {
    console.log(error);
  }
};

export default createAllTables();
