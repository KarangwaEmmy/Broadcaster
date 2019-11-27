import { Router } from 'express';
import  User from '../controller/userController';
import {SignupValidator} from '../Middleware/Validation'

const router = Router();
router.post('/signup', SignupValidator, User.create);
 router.get('/users', User.fetchAll);
 router.post('/login', User.Login);

export default router;