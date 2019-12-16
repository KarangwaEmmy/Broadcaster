import jwt from 'jsonwebtoken';
import crypt from 'bcryptjs';
import UserModel from '../model/user.Model';
import Validator from '../Middleware/Auth.validate'
import { serverResponse } from '../Helper/Response';
import userModel from '../model/user.Model';


const User = {

  async create(req, res) {
    const { username, email, password } = req.body;
    const upValidate = Validator.schemaSignUp(req.body);
    if (upValidate.error) {
      const mess = upValidate.error.details[0].message;
      const messUser = mess.replace(/\"/g, '');
      res.status(400).send({ status: 400, message: messUser });
    }
    if (!upValidate.error) {
      const ckEmail2 = await UserModel.checkEmail(email);
      if (ckEmail2.length !== 0) return res.status(409).json({ status: 409, message: `${username} this email *${email}* already taken !!` });
        
        const userData = userModel.Signup(req.body);
        const vistByToken = jwt.sign(req.body, process.env.SECRET_KEY, { expiresIn: '24000h' });
        res.status(201).json({ status: 201, message: `${username} your account have created successfully `, token: vistByToken,
        userData
      });

    }
  },
  // Login data processing
  async Login(req, res) {
    const { email, password } = req.body;
    const inValidate = Validator.schemaSignIn(req.body);
    if (inValidate.error) {
      const mess = inValidate.error.details[0].message;
      const messUser = mess.replace(/\"/g, '');
      res.status(400).send({ status: 400, message: messUser });
    }
    if (!inValidate.error) {
      const findThisUser = await UserModel.findOneByEmail(email);
      if (findThisUser.length === 0) { res.status(401).json({ status: 401, message: 'wrong Credentials' }); } else {
        crypt.compare(password, findThisUser[0].password, (err, result) => {
          if (result) {
            const tokens = jwt.sign(findThisUser[0], process.env.SECRET_KEY, { expiresIn: '24000h' });
            res.status(200).json({ status: 200, message: `${findThisUser[0].username} your logged in successfully on ${Validator.created}`, token: tokens });
          } else {
            res.status(401).json({ status: 401, message: `${findThisUser[0].username} You are using wrong Credentials Password` });
          }
        });
      }
    }
  }

  // async Login(req, res) {
  //   const user = await UserModel.findOneByEmail(req.body.email);
  //   if (!user) {
  //     return res.status(422).send({ error: 'Email or Password are incorrect' });
  //   }
  //   const ispassword = await bcrypthash.comparepassword(req.body.password, user.password);
  //   if (!ispassword) {
  //     return res.status(422).send({ error: 'Email or Password are incorrect' });
  //   }
  //   const LoginUser = {
  //     id: user.id,
  //     email: user.email,
  //     username: user.username,
  //   };
  //   const genToken = (tokenObj) => jwt.sign(tokenObj, process.env.SECRET_KEY);
  //   const token = (genToken(LoginUser));

  //   return res.status(200).send({
  //     status: 200,
  //     message: 'User is successfully logged in',
  //     data: {
  //       token,
  //       user: {
  //         id: user.id,
  //         firstname: user.firstname,
  //         lastname: user.lastname,
  //         email: user.email,
  //         username: user.username,
  //         phoneNumber: user.phoneNumber,
  //         avatar: user.avatar,
  //         role: user.role,
  //       },
  //     },
  //   });
  // },
};

export default User;
