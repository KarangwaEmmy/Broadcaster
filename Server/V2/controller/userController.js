import UserModel from '../model/user.Model';
import { generateToken } from '../Middleware/Auth';
import {serverResponse } from '../Helper/Response';

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
      }
}

export default User;