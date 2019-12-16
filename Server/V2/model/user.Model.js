/* eslint-disable consistent-return */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */

import db from '../db/config';
import sql from '../db/sqlQueries';
import bcrypthash from '../Helper/hash';

class Users {
  async Signup(data) {
    const password = await bcrypthash.hashpassword(data.password);
    const text = 'INSERT INTO users (email, firstname, lastname, phonenumber, password, username, isadmin) VALUES($1,$2,$3,$4,$5,$6,$7) returning *';
    const values = [
      data.email,
      data.firstname,
      data.lastname,
      data.phoneNumber,
      password,
      data.username,
      'false',
    ];
    try {
      const { rows } = await db.query(text, values);
      const newUser = rows[0];
      console.log(newUser);
      return {
        id: newUser.id,
        email: newUser.email,
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        username: newUser.username,
        phoneNumber: newUser.phoneNumber,

      };
    } catch (error) {
      return error;
    }
  }

  // checking User mail exists
  async checkEmail(email) {
    const emailToCheck = email.toString().trim().toLowerCase();
    const text = 'SELECT * FROM users WHERE email = $1';
    const values = [emailToCheck];
    const { rows } = await db.query(text, values);
    return rows;
  }

  // checking username mail exists
  async checkUsername(username) {
    const text = 'SELECT * FROM users WHERE username =$1';
    try {
      const { row } = await db.query(text, [username]);
      return row;
    } catch (error) {
      return error;
    }
  }

  // checking phoneNumber mail exists
  async checkPhoneNumber(phone) {
    const text = 'SELECT * FROM users WHERE phoneNumber =$1';
    try {
      const { row } = await db.query(text, [phone]);
      return row;
    } catch (error) {
      return error;
    }
  }

  // Sign in

  async findOne(id) {
    const text = 'SELECT id, email, firstname, lastname, phonenumber, password, username, isadmin FROM users WHERE id = $1';
    try {
      const { rows } = await db.query(text, [id]);
      return rows[0];
    } catch (error) {
      return error;
    }
  }

  // For verifying user validity
  async findOneWithId(id) {
    const text1 = 'SELECT * FROM users WHERE email = $1';
    const values = [id];

    try {
      const { rows } = await db.query(text1, values);
      if (!rows[0]) {
        return false;
      }
      const foundUserWithId = rows[0];
      if (foundUserWithId) {
        return {
          id: foundUserWithId.id,
          email: foundUserWithId.email,
          username: foundUserWithId.username,
        };
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  }

  // Fetch all users
  async findAllUsers() {
    const allUsers = await db.query(sql.allUsers);
    return allUsers;
  }

  async findOneByEmail(email) {
    const text = 'SELECT * FROM users WHERE email = $1';
    try {
      const { rows } = await db.query(text, [email]);
      return rows[0];
    } catch (error) {
      return error;
    }
  }
}
export default new Users();
