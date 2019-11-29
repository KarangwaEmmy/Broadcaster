import { Router } from 'express';
import { Validation} from '../middleware/Validation';
import {checkToken} from '../Middleware/Auth'
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment} from '../controller/flagController';

const { IncidentValidator,LocationValidation, CommentValidation} = Validation;
const router = Router();
router.post('/red-flags',checkToken,IncidentValidator,  postFlag);

router.get('/red-flags',checkToken, fetchAllFlags);

router.get('/red-flags/:id', checkToken, getOneFlag);

router.patch('/red-flags/:id/location',checkToken, LocationValidation,  updateLocation);

router.patch('/red-flags/:id/comment',checkToken, CommentValidation,  UpdateComment);

router.delete('/red-flags/:id',checkToken, deleteFlag);



export default router;