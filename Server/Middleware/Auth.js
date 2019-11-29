import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { authenticationResponse } from '../Helper/Response';

const expireTime = '1d';
const generateToken = tokenObj => jwt.sign(tokenObj, process.env.SECRET_KEY, expireTime);
const checkToken = (req, res, next) => {
  try {
    const header = req.headers['x-auth-token'] || req.headers.authorization;
    if (!header) {
      return authenticationResponse(res, 403, ...['error', 'Token must be provided']);
    }
    const bearer = header.split(' ');
    const token = bearer[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return authenticationResponse(res, 403, ...['error', 'Unable to authenticate token']);
    }
    req.tokenData = decoded;
    return next();
  } catch (err) {
    return authenticationResponse(res, 403, ...['error', 'Authentication failed, Wrong token provided']);
  }
};


export { generateToken, checkToken };