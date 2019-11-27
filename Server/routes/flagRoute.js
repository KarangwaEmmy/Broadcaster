import { Router } from 'express';
//import { signupValidator, loginValidator } from '../middleware/validator';
import {checkToken} from '../Middleware/Auth'
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateByLocation, UpdateComment} from '../controller/flagController';

const router = Router();
router.post('/red-flags',checkToken, postFlag);
router.get('/red-flags', checkToken, fetchAllFlags);
router.get('/red-flags/:id',checkToken,  getOneFlag);
router.patch('/red-flags/:id/location',checkToken,  updateByLocation)
router.patch('/red-flags/:id/comment',checkToken,  UpdateComment)
router.delete('/red-flags/:id',checkToken, deleteFlag)
export default router;