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
        return serverResponse(res, 201, ...['status', 'success', 'data', newFlag]);

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
    const getOneFlag = (req, res) => {
        try {
          const id = Number(req.params.id);
          if (!id) throw new Error('Invalid red falg ID');
          const result = redFlag.findOne(id);
          if (!result) return serverResponse(res, 404, ...['status', 'error', 'error', 'No result found. Enter a valid value and try again.']);
          const flagOwnerID = result.createdBy;
          const userList = User.findAllUsers();
          const flagOwner = userList.find(user => user.username === flagOwnerID);
          result.createdBy = flagOwner.username;
          const { createdBy, ...finalResult } = result;
          return serverResponse(res, 200, ...['status', 'success', 'data', finalResult]);
        } catch (err) {
          return serverError(res);
        }
      };

    const deleteFlag = (req, res) => {
        const id = Number(req.params.id);
        const deletedFlag = redFlag.deleteredFlag(id);
        if(deletedFlag){
            return serverResponse(res, 200, ...['status', 'success', 'data', { message: 'red flag deleted Successfully' }]);
        }else{
            return serverResponse(res, 200, ...['status', 'success', 'data', 'ref flag not found, may be was deleted' ]);
        }
    }
    const updateAdvert = async (req, res) => {
        try {

          const flagId = Number(req.params.id);
          const flagArray = redFlag.allRedFlags();
          const flagData = flagArray.find(flag => flag.id === flagId);
          const flagIndex = flagArray.findIndex(flag => flag.id === flagId);
          const {title, type, location, status, comment } = req.body;

          flagData.title = (flagData.title === title) ? flagData.title : title;
          flagData.location = (flagData.location === location) ? flagData.location : location;
          flagData.city = (flagData.city === city) ? flagData.city : city;
          flagData.status = (flagData.status === status) ? flagData.status : status;
          flagData.images = (flagData.images === images) ? flagData.images : images;
          flagData.type = (flagData.type === type) ? flagData.type : type;
          flagData.comment = (flagData.comment === comment) ? flagData.comment : comment;
          redFlag.updateredFlag(flagData, flagIndex);
          return serverResponse(res, 200, ...['status', 'success', 'data', flagData]);
        } catch (err) {
          return serverError(res);
        }
    }
export {postFlag, fetchAllFlags, getOneFlag, deleteFlag, updateAdvert}