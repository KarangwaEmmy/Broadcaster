import { Router } from 'express';
import { IncidentValidator,LocationValidation, CommentValidation} from '../middleware/Validation';
import {checkToken} from '../Middleware/Auth'
import  {postFlag} from '../controller/flagController';

const router = Router();
router.post('/red-flags',
IncidentValidator,
checkToken,
postFlag);

export default router;