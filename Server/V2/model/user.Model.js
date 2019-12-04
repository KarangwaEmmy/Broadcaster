
import db from '../db/config';
import sql from '../db/sqlQueries';
import { encryptPassword, decryptPassword } from '../Helper/encrypt';

  class Users  {

    constructor(){

    }
   
  async Signup(data) {
    const password =  await encryptPassword(data.password);
    const text = 'INSERT INTO users (email, firstname, lastname, phonenumber, password, username, isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) returning *';
        const values = [
           data.email,
           data.firstname,
           data.lastname,
           data.phoneNumber,
           password,
           data.username,
           'false'
        ];
        try {
          const { rows } = await db.query(text, values);
          const newUser = rows[0];

          return {
            id: newUser.id,
            email: newUser.email,
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            username: newUser.username,
            phoneNumber: newUser.phoneNumber
           
          };
        } catch (error) {
          return error;
        }}
      // checking User mail exists
        async checkEmail(email) {
          const text = 'SELECT * FROM users WHERE email =$1';
        try{
          const {row} = await db.query(text, [email])
          return row ;
        }catch(error){
          return error;
        }
        }
        // checking username mail exists
        async checkUsername(username) {
          const text = 'SELECT * FROM users WHERE username =$1';
        try{
          const {row} = await db.query(text, [username])
          return row;
        }catch(error){
          return error;
        }
        }
        // checking phoneNumber mail exists
        async checkPhoneNumber(phone) {
          const text = 'SELECT * FROM users WHERE phoneNumber =$1';
        try{
          const {row} = await db.query(text, [phone])
          return row;
        }catch(error){
          return error;
        }
        }
  }
  export default new Users();