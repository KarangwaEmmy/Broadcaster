import dbQuery from './config';

const sqlQueries = {};
// User queries

const insertUser = 'INSERT INTO users (email,firstname,lastname,phonenumber,password,username,isadmin) VALUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING * ';
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