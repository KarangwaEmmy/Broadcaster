/* eslint-disable linebreak-style */
import { Router } from 'express';
import User from '../controller/userController';

const router = Router();
router.post('/signup', User.create);
router.post('/login', User.Login);
export default router;
