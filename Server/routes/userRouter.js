import { Router } from 'express';
import  User from '../controller/userController';

const router = Router();
router.post('/signup',  User.create);
 router.get('/users', User.fetchAll);
 router.post('/login', User.Login);

export default router;