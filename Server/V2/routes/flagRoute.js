
import { Router } from 'express';
import { IncidentValidator, LocationValidation, CommentValidation } from '../Middleware/Validations';
import { checkToken } from '../Middleware/Auth';
import { uploadFiles } from '../Helper/uploads';
import Flag from '../controller/flag.Controller';


const router = Router();
router.post('/red-flags', checkToken, IncidentValidator, uploadFiles, Flag.postFlag);
router.get('/red-flags/:id', checkToken, Flag.getOneFlag);
router.get('/red-flags', checkToken, Flag.fetchAllFlags);
router.delete('/red-flags/:id', checkToken, Flag.deleteFlag);
router.patch('/red-flags/:id/location', checkToken, LocationValidation, Flag.editLocation);
router.patch('/red-flags/:id/comment', checkToken, CommentValidation, Flag.editComment);
export default router;
