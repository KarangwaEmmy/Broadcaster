
import { Router } from 'express';
import { checkToken } from '../Middleware/Auth';
import { uploadFiles } from '../Helper/uploads';
import Flag from '../controller/flag.Controller';


const router = Router();
router.post('/red-flags', checkToken, uploadFiles, Flag.postFlag);
router.get('/red-flags/:id', checkToken, Flag.getOneFlag);
router.get('/red-flags', checkToken, Flag.fetchAllFlags);
router.delete('/red-flags/:id', checkToken, Flag.deleteFlag);
router.patch('/red-flags/:id/location', checkToken, Flag.editLocation);
router.patch('/red-flags/:id/comment', checkToken, Flag.editComment);
export default router;
