/* eslint-disable indent */
/* eslint-disable camelcase */
import { serverError, serverResponse } from '../Helper/Response';
import flagModel from '../model/frag.Model';
import UserModel from '../model/user.Model';

const Flag = {

  async postFlag(req, res) {
    if (req.fileValidationError) {
      return res.send({ error: req.fileValidationError });
    }
    const images = [];
    const videos = [];
    const { files } = req;
    const newFlag = req.body;
    if (files !== undefined) {
      if (files.length <= 0) {
        newFlag.images = [];
        newFlag.videos = [];
      } else {
        files.forEach((file) => {
          if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/pjpeg') {
            images.push(`/public/uploads/${file.filename}`);
          } else {
            videos.push(`/public/uploads/${file.filename}`);
          }
        });
      }
    }
    // checking created User

    const userExists = await UserModel.findOneWithId(req.tokenData.email);
    if (!userExists) {
      return res.status(401).json({
        status: 401,
        error: 'Request contains invalid credentials',
      });
    }

    const createdBy = userExists.email;

    newFlag.images = images;
    newFlag.videos = videos;
    newFlag.createdBy = createdBy;

    const {
 title, type, location, status, comment,
} = req.body;

    await flagModel.postRedFlag({
          createdBy,
          title,
          type,
          location,
          status,
          images,
          videos,
          comment,
          });
          return serverResponse(res, 201, ...['status', '201', 'data', newFlag]);
  },
  // Fetch one red glag

  async getOneFlag(req, res) {
    try {
      const id = Number(req.params.id);
      if (!id) throw new Error('Invalid red falg ID');
      const result = await flagModel.findOne(id);
      if (!result) return serverResponse(res, 404, ...['status', '404', 'error', 'No result found. Enter a valid value and try again.']);
      return serverResponse(res, 200, ...['status', '200', 'data', result]);
    } catch (err) {
      return serverError(res);
    }
  },
// Fetching all red flags

  // eslint-disable-next-line consistent-return
  async fetchAllFlags(req, res) {
  try {
  const allFlags = await flagModel.allRedFlags();
  if (allFlags) {
      return serverResponse(res, 200, ...['status', '200', 'data', allFlags]);
  }
  } catch (error) {
      return serverError(res);
  }
},
// Delete a specific red flag

  async deleteFlag(req, res) {
    try {
   const id = Number(req.params.id);
   const deletedFlag = await flagModel.deleteredFlag(id);
   if (deletedFlag) {
    return serverResponse(res, 200, ...['status', '200', 'data', { message: 'red flag deleted Successfully' }]);
   }
    return serverResponse(res, 200, ...['status', '404', 'Message', 'Indicent not found, may be was deleted']);
} catch (err) {
    return serverError(res);
  }
},
// Update incident
async editLocation(req, res) {
  const id = Number(req.params.id);
  const redflagloc = await flagModel.updateLocation(req.body.location, id);
  console.log(redflagloc);
  const edittedRedflag = redflagloc[0];
  console.log(edittedRedflag);
  return res.status(200).json({
    status: 200,
    data: {
      message: 'Updated red-flag record’s location',
    },
  });
},

async editComment(req, res) {
  const id = Number(req.params.id);
  const redflagCom = await flagModel.updateComment(req.body.comment, id);
  if (!redflagCom) {
    return serverResponse(res, 404, ...['status', '404', 'data', { message: 'red flag NOT FOUND' }]);
  }
  return res.status(200).json({
    status: 200,
    data: {
      message: 'Updated red-flag record’s comment',
    },
  });
},

};

export default Flag;
