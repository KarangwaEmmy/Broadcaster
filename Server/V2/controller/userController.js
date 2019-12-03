import UserModel from '../model/userModel';
import sql from '../db/sqlQueries';
import dbQuery from '../db/config';
import { generateToken } from '../Middleware/Auth';
import {serverResponse } from '../Helper/Response';
import { encryptPassword, decryptPassword } from '../Helper/encrypt';

const User = {
    async create(req, res) {
        try{
        const {firstname, lastname, email, phoneNumber, username, password, isAdmin} = req.body;
        const allusers = await dbQuery(sql.allUsers);
        const id = parseInt(allusers.forEach) + 1;
          const hashedPassword = await encryptPassword(password);

        //   checking availability of username, email and phoneNumber
          const checkEmail = await dbQuery(sql.checkEmail, [email]);
          const checkPhone = await dbQuery(sql.checkPhone, [phoneNumber]);
          const checkUsername = await dbQuery(sql.checkUsername, [username]);

          if(checkEmail.length !=0 ){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this email adderss already exists']);
          }else if(checkPhone.length != 0){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this phone Number  already exists']);
          }else if(checkUsername != 0){
            return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this username already exists, try another username']);
          }else{
            const user = await dbQuery( sql.insertUser, [email,firstname, lastname, phoneNumber, hashedPassword, username, 'false']);
            const token = generateToken({id, email, phoneNumber, username});
            return res.status(201).json({
                status: 201,
                message: ' User created successfully!',
                data: {
                    token 
                },
            }); 
          }}
           catch (err) {
          return serverError(res);
        }
      },
}

export default User;
