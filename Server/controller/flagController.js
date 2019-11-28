import { serverError, serverResponse, authResponse } from '../Helper/Response'
import redFlag from '../model/redFlag';
import User from '../model/userModel';

const postFlag =  (req, res) => {
 
    const {title, type, location, status, images, videos, comment, createdBy,isAdmin } = req.body;

        const newFlag =  redFlag.postRedFlag({
        title, 
        type,
        location,
        status,
        images,
        videos,
        comment,
        isAdmin,
        createdBy
        });
        return serverResponse(res, 201, ...['status', '201', 'data', newFlag]);

}
    const fetchAllFlags = async(req, res) =>{
        try{
        const allFlags = await redFlag.allRedFlags();
        if(allFlags){
            return serverResponse(res, 200, ...['status', 'success', 'data', allFlags])
        }
        }catch(error){
            return serverError(res);
        }
    }
   
        
export {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment}