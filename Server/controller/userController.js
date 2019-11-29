import UserModel from '../model/userModel';
import { serverError, serverResponse } from '../Helper/Response';
import { encryptPassword, decryptPassword } from '../Helper/encrypt';
import {SignupValidator, loginValidator} from '../Middleware/Validation'


const User = {
  async create(req, res) {
    try{
      const allUsers = UserModel.findAllUsers();
      let {email} = req.params;
      const userIndex = allUsers.find(user => user.email === email);
      if (userIndex > 0) {return serverResponse(res, 403, ...['status', 'error', 'Message', 'Ooops. User with this email adderss already exist']);
    }else{
      const {password} = req.body;
      const hashedPassword = await encryptPassword(password);
      const {firstname, lastname, email, phoneNumber, username} = req.body;
      const user = await UserModel.Signup({ firstname, lastname, email, hashedPassword, phoneNumber, username});
      return res.status(201).json({
        status: 201,
        message: ' User created successfully!',
        data: user,
      });
    }
      
    } catch (err) {
      return serverError(res);
    }
  },
// Logging the user
  async Login(req, res) {
    try{
      const {password} = req.body;
      const hashedPassword = await encryptPassword(password);
    const decryptedPassword =  decryptPassword(password, hashedPassword);
    const { email} = req.body;
    const user = await UserModel.findOne({
      email,
      decryptedPassword
    });
    if (!user) {
      return res.status(400).json({
        status: 400,
        error: 'Wrong credentials, email or password no not match',
      });
    }
    return res.status(200).json({
      status: 200,
      message: ' successfully, user signed in',
      data: user,
    });
    }catch(err){
      return serverError(res);
    }
    
  }
};

export default User;
