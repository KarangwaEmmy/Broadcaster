import dbQuery from './config';

const sqlQueries = {};

// creating user table in user model 

const userTable = `
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

// run table

sqlQueries.userTable = userTable;
// User queries

const insertUser = 'INSERT INTO users (email,firstname,lastname,phonenumber,password,username,isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING * ';
const checkUser = 'SELECT * FROM users WHERE email =$1';
const allUsers = 'SELECT * FROM users ';
const findoneUser=  'SELECT * FROM users WHERE id =$1';

// Run the queries

sqlQueries.insertUser = insertUser;
sqlQueries.checkUser = checkUser;
sqlQueries.allUsers = allUsers;
sqlQueries.findoneUser = findoneUser;

// Intervention queries


export default sqlQueries;