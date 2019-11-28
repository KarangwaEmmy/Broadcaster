import allData from '../config/allData';
import { generateToken } from '../Middleware/Auth';

const today = new Date().toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  class Users {

      constructor(){
          this.userList = allData.userData;
      }
      
      Signup(data) {
        const {id, firstname, lastname, email, phoneNumber, username, password} = data;
          const userLength = this.userList.length;
          const lastUserID = this.userList[userLength - 1].id;
          data.id = lastUserID + 1;

          const token = generateToken({id, email, username});

          const newUser = {
            id: data.id,
            token,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            phoneNumber: data.phoneNumber,
            username: data.username,
            password: data.password,
            created_on: today
          };

          this.userList.push(newUser);
          return {
              token
          }
        }
      findAllUsers(){
          return this.userList;
      }
      //For logging in the user
      // findOne(data) {
      // const foundUser = this.userList.find(user => user.email === data.email && user.password === data.password);
      // if(foundUser){
      //   return {
      //     token: foundUser.token,
      //   };
      // }
      // return false;
      // }
      // For verifying user validity
      // findOneWithId(id) {
      //   const foundUserWithId = this.userList.find(user => user.token === token);
      //   if (foundUserWithId) {
      //     return {
      //       id: foundUserWithId.id,
      //       token: foundUserWithId.token,
      //       email: foundUserWithId.email,
      //       firstname: foundUserWithId.firstname,
      //     };
      //   }
      //   return false;
      // }
  }
  export default new Users();