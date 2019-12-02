import { Router } from 'express';
import multer from 'multer'
import { IncidentValidator,LocationValidation, CommentValidation} from '../Middleware/Validations';
import {checkToken} from '../Middleware/Auth'
// import {uploadImage, uploadVideo} from '../Helper/uploads';
import  {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment} from '../controller/flagController';

const  upload = multer({ dest: '../uploads/' });
const uploadPath = upload.array('files', 12);

const router = Router();
router.post('/red-flags',checkToken,IncidentValidator, uploadPath, postFlag);

router.get('/red-flags',checkToken, fetchAllFlags);

router.get('/red-flags/:id', checkToken, getOneFlag);

router.patch('/red-flags/:id/location',checkToken, LocationValidation,  updateLocation);

router.patch('/red-flags/:id/comment',checkToken, CommentValidation,  UpdateComment);

router.delete('/red-flags/:id',checkToken, deleteFlag);



export default router;