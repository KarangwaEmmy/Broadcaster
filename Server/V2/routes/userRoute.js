import { Router } from 'express';
import  User from '../controller/userController';
import {SignupValidator, loginValidator} from '../Middleware/Validations';

const router = Router();
router.post('/signup', SignupValidator, User.create);

export default router;