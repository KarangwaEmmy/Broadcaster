import UserModel from '../model/userModel';
import { serverError, userResponse, serverResponse } from '../Helper/Response';

const User = {

  async create(req, res) {
    try{
      const allUsers = UserModel.findAllUsers();
      const userIndex = allUsers.find(user => user.email === req.params.email);
      if (userIndex > 1) {return serverResponse(res, 403, ...['status', 'error', 'error', 'Ooops. User already exist']);
    }else{
      const {firstname, lastname, email, phoneNumber, password, username} = req.body;
      const user = await UserModel.Signup(req.body);
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

  async Login(req, res) {
    const user = await UserModel.findOne(req.body);
    if (!user) {
      return res.status(400).json({
        status: 400,
        error: 'Wrong credentials',
      });
    }
    return res.status(200).json({
      status: 200,
      message: ' successfully, user signed in',
      data: user,
    });
  },

  async fetchAll(req,res){
    const allusers = await UserModel.findAllUsers();
    if(allusers){
      return serverResponse(res, 200, ...['status', 'error', 'data', allusers]);
    }
    return serverResponse(res, 404, ...['status', 'error', 'error', 'No result found in the array']);
  }
};

export default User;
