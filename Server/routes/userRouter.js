import { Router } from 'express';
import  User from '../controller/userController';
import {SignupValidator, loginValidator} from '../Middleware/Validation';

const router = Router();
router.post('/signup', SignupValidator, User.create);
 router.post('/login',loginValidator, User.Login);

export default router;