import UserModel from '../model/user.Model';
import bcrypt from 'bcryptjs';
import { generateToken } from '../Middleware/Auth';
import {serverResponse } from '../Helper/Response';
import { encryptPassword, decryptPassword } from '../Helper/encrypt';

const User = {
    async create(req, res) {
        try{
        const {body} = req;

        //   checking availability of username, email and phoneNumber
          const checkEmail = await UserModel.checkEmail(body.email);
          const checkPhone = await UserModel.checkUsername(body.phoneNumber);
          const checkUsername = await UserModel.checkPhoneNumber(body.username);

          if(checkEmail){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this email adderss already exists']);
          }else if(checkPhone){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this phone Number  already exists']);
          }else if(checkUsername){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this username already exists, try another username']);
          }
            const user = await UserModel.Signup(req.body);
            const {email, username, phoneNumber, isAdmin} = req.body;
            const token = generateToken( email, username, phoneNumber, isAdmin);
            return res.status(201).json({
                status: 201,
                message: ' User created successfully!',
                data: {
                  token,
                  user
                },
            }); 
          }
           catch (err) {
          return serverError(res);
        }
      },
   // Login data processing
    async Login(req, res) {
    const { email, password } = req.body;
    const specificUser = await UserModel.findOne(email);
      if (decryptPassword(password,specificUser.password)) {
        const {
          firstname, lastname,phonenumber, email, password, isadmin,
        } = specificUser[0];
        const user = {
          firstname,
          lastname,
          phoneNumber:specificUser[0].phoneNumber,
          email,
          password,
          isadmin: specificUser[0].isadmin,
          id: specificUser[0].id,
        };
        const token = generateToken(user);
        return res.status(200).json({
          Status:'200',
          message: 'User Logged in successfully ',
          data:{
            token,
            id: specificUser.id,
            firstname,
            lastname,
            phonenumber,
            email,
            isadmin,
          }
        });
      } else {
        return response.error(res,401,'Password does not match !');
      }
  }
    
}

export default User;