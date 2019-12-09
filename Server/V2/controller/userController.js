import jwt from 'jsonwebtoken';
import bcrypthash from '../Helper/hash';
import UserModel from '../model/user.Model';
import { serverResponse } from '../Helper/Response';


const User = {
  async create(req, res) {
    try {
      const userDb = await UserModel.Signup(req.body);
      const addedUser = userDb;
      const genToken = (tokenObj) => jwt.sign(tokenObj, process.env.SECRET_KEY);
      const token = (genToken(addedUser));

      return res.status(201).json({
        status: 201,
        message: ' User created successfully!',
        data: {
          token,
          addedUser,
        },
      });
    } catch (err) {
      return serverResponse(res, 422, ...['status', '422', 'data', { message: 'Your Inputs are existing, change email, phone Number and Username' }]);
    }
  },
  // Login data processing


  async Login(req, res) {
    const user = await UserModel.findOneByEmail(req.body.email);
    if (!user) {
      return res.status(422).send({ error: 'Email or Password are incorrect' });
    }
    const ispassword = await bcrypthash.comparepassword(req.body.password, user.password);
    if (!ispassword) {
      return res.status(422).send({ error: 'Email or Password are incorrect' });
    }
    const LoginUser = {
      id: user.id,
      email: user.email,
      username: user.username,
    };
    const genToken = (tokenObj) => jwt.sign(tokenObj, process.env.SECRET_KEY);
    const token = (genToken(LoginUser));

    return res.status(200).send({
      status: 200,
      message: 'User is successfully logged in',
      data: {
        token,
        user: {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          username: user.username,
          phoneNumber: user.phoneNumber,
          avatar: user.avatar,
          role: user.role,
        },
      },
    });
  },
};

export default User;
