import { serverError, serverResponse } from '../Helper/Response'
import redFlag from '../model/redFlag';
import User from '../model/userModel';

const postFlag =  (req, res) => {
    const {images,videos} = req.file;
    const {title, type, location, status, comment, createdBy,isAdmin } = req.body;

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
            return serverResponse(res, 200, ...['status', '200', 'data', allFlags])
        }
        }catch(error){
            return serverError(res);
        }
    }
    const getOneFlag = (req, res) => {
        try {
          const id = Number(req.params.id);
          if (!id) throw new Error('Invalid red falg ID');
          const result = redFlag.findOne(id);
          if (!result) return serverResponse(res, 404, ...['status', '404', 'error', 'No result found. Enter a valid value and try again.']);
          const flagOwnerID = result.createdBy;
          const userList = User.findAllUsers();
          const flagOwner = userList.find(user => user.username === flagOwnerID);
          result.createdBy = flagOwner.username;
          const { createdBy, ...finalResult } = result;
          return serverResponse(res, 200, ...['status', '200', 'data', finalResult]);
        } catch (err) {
          return serverError(res);
        }
      };


      const UpdateComment = async (req, res) => {
          try {
           const id = Number(req.params.id);
           if (!id) throw new Error('Invalid red falg ID');
           const result = redFlag.findOne(id);
           if (!result) return serverResponse(res, 404, ...['status', '404', 'Message', 'No result found. Enter a valid value and try again.']);
           const flagArray = redFlag.allRedFlags();
           const flagData = flagArray.find(flag => flag.id === id);
           const flagIndex = flagArray.findIndex(flag => flag.id === id);
 
           const {comment} = req.body;
           flagData.comment = (flagData.comment === comment) ? flagData.comment : comment;
           redFlag.updateIncident(flagData, flagIndex);
           return serverResponse(res, 200, ...['status', '200', 'data', flagData]);
          }
          catch (err) {
           return serverError(res);
          }
        }
    const updateLocation = async (req, res) => {
         try {
          const id = Number(req.params.id);
          if (!id) throw new Error('Invalid red falg ID');
          const result = redFlag.findOne(id);
          if (!result) return serverResponse(res, 404, ...['status', 'error', 'error', 'No result found. Enter a valid value and try again.']);
          const flagArray = redFlag.allRedFlags();
          const flagData = flagArray.find(flag => flag.id === id);
          const flagIndex = flagArray.findIndex(flag => flag.id === id);

          const {location} = req.body;

          flagData.location = (flagData.location === location) ? flagData.location : location;
          redFlag.updateIncident(flagData, flagIndex);
          return serverResponse(res, 200, ...['status', '200', 'data', flagData]);
      }
      
         catch (err) {
          return serverError(res);
        }
      }
     
        const deleteFlag = async(req, res) => {
       try{
        const id = Number(req.params.id);
        const deletedFlag = await redFlag.deleteredFlag(id);
        if(deletedFlag){
            return serverResponse(res, 200, ...['status', '200', 'data', { message: 'red flag deleted Successfully' }]);
        }else{
            return serverResponse(res, 200, ...['status', '404', 'Message', 'Indicent not found, may be was deleted' ]);
        }
       }catch(err){
         return serverError(res);
       }
    }
        
export {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateLocation, UpdateComment}