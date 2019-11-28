import { Router } from 'express';
import { IncidentValidator,LocationValidation, CommentValidation} from '../middleware/Validation';
import {checkToken} from '../Middleware/Auth'
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment} from '../controller/flagController';

const router = Router();
router.post('/red-flags',
IncidentValidator,
checkToken,
postFlag);

router.get('/red-flags',
 checkToken,
fetchAllFlags);

router.get('/red-flags/:id',
checkToken,
getOneFlag);

router.patch('/red-flags/:id/location',
LocationValidation,
checkToken,
updateLocation);

router.patch('/red-flags/:id/comment',
CommentValidation,
checkToken,
UpdateComment);




export default router;