import dbQuery from './config';

const sqlQueries = {};
// User queries
const insertUser = 'INSERT INTO users (email, firstname, lastname, phonenumber, password, username, isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING * ';
const checkEmail = 'SELECT * FROM users WHERE email =$1';
const checkUsername = 'SELECT * FROM users WHERE username = $1';
const checkPhone = 'SELECT * FROM users WHERE phoneNumber = $1';
const allUsers = 'SELECT * FROM users ';
const findoneUser=  'SELECT * FROM users WHERE id =$1';

// Run the queries

sqlQueries.insertUser = insertUser;
sqlQueries.allUsers = allUsers;
sqlQueries.findoneUser = findoneUser;

// Checking Availability
sqlQueries.checkEmail = checkEmail;
sqlQueries.checkUsername = checkUsername;
sqlQueries.checkPhone = checkPhone;

// Intervention queries


export default sqlQueries;