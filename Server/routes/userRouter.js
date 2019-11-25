import { Router } from 'express';
import { signupValidator, loginValidator } from '../middleware/Validation';
import  User from '../controller/userController';

const router = Router();
router.post('/signup',  User.create);
// router.get('/users', User.fetchAll);
// router.post('/login',loginValidator, User.Login);

export default router;