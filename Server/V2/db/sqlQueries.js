
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
const findoneUser = 'SELECT * FROM users WHERE id =$1';

// redflag queries
const insertRedflag = 'INSERT INTO redflag( created_on, createdby, title, type, location, status, image_url, video_url, comment) VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *';
const allRedFlag = 'SELECT * FROM redflag';
const getOneRedfalg = 'SELECT * FROM redflag WHERE id=$1';
const deleteFlag = 'DELETE FROM redflag WHERE id=$1';
const updateComment = 'UPDATE redflag SET comment = $1 WHERE id = $2 RETURNING *';
const updateLocation = 'UPDATE redflag SET location = $1 WHERE id = $2 RETURNING *';


export default {
  insertUser,
  checkUser,
  allUsers,
  findoneUser,
  insertRedflag,
  allRedFlag,
  getOneRedfalg,
  deleteFlag,
  updateComment,
  updateLocation,
};
