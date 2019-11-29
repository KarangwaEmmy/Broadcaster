import { Router } from 'express';
import '@babel/polyfill';
import { IncidentValidator,LocationValidation, CommentValidation} from '../middleware/Validation';
import {checkToken} from '../Middleware/Auth'
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment} from '../controller/flagController';

const router = Router();
router.post('/red-flags',IncidentValidator,  postFlag);

router.get('/red-flags', fetchAllFlags);

router.get('/red-flags/:id',  getOneFlag);

router.patch('/red-flags/:id/location', LocationValidation,  updateLocation);

router.patch('/red-flags/:id/comment', CommentValidation,  UpdateComment);

router.delete('/red-flags/:id',  deleteFlag);



export default router;