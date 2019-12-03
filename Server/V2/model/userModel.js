
import dqQuery from '../db/config';
import sql from '../db/sqlQueries';


  class Users {

  async Signup(data) {

        const insertUser = {
          firstname: data.firstname,
          lastname: data.lastname,
          email: data.email,
          phoneNumber: data.phoneNumber,
          username: data.username,
          password: data.password,
          isAdmin: 'false',
        };

        const InsertedUser = await dqQuery(sql.insertUser, [
          insertUser
        ]);
        return InsertedUser;
      }
   
  }
  export default new Users();