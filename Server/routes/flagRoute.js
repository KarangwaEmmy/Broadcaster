import { Router } from 'express';
//import { signupValidator, loginValidator } from '../middleware/validator';
import {checkToken} from '../Middleware/Auth'
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateAdvert} from '../controller/flagController';

const router = Router();
router.post('/red-flags', postFlag);
router.get('/red-flags', fetchAllFlags);
router.get('/red-flags/:id', getOneFlag);
router.patch('/red-flags/:id/location', updateAdvert)
router.delete('/red-flags/:id', deleteFlag)
export default router;