import Joi from 'joi';
import ImageExtension from 'joi-image-extension';
import { serverResponse } from '../Helper/Response';
import User from '../model/user.Model';


const loginSchema = Joi.object().keys({
  email: Joi.string().min(3).max(255).required(),
  password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim(),
});

const UpdateLocationSchema = Joi.object().keys({
  location: Joi.string().min(3).max(25).required(),
});

const UpdateCommentSchema = Joi.object().keys({
  comment: Joi.string().min(10).max(255).required(),
});

const errorMessage = (err, res) => {
  const errMessage = err.details[0].message;
  return serverResponse(res, 422, ...['status', 'error', 'Message', errMessage]);
};
// eslint-disable-next-line arrow-body-style
const loginValidator = (req, res, next) => {
  return Joi.validate(req.body, loginSchema, (err) => {
    if (err) {
      return errorMessage(err, res);
    }
    return next();
  });
};

const SignupValidator = async (req, res, next) => {
  const schema = Joi.object({
    firstname: Joi.string().min(4).required(),
    lastname: Joi.string().min(4).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim(),
    phoneNumber: Joi.number().min(9).required(),
    username: Joi.string().min(3).required(),
  });
  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json(result.error.details[0].message);
  }
  const existPhone = await User.checkPhoneNumber(req.body.phoneNumber);
  const ExistingUser = await User.checkEmail(req.body.email);
  const ExistingUsername = await User.checkUsername(req.body.username);
  if (ExistingUser) {
    return res.status(409).json({
      status: 409,
      message: 'Email already exists',
    });
  }
  if (ExistingUsername) {
    return res.status(409).json({
      status: 409,
      message: ' Username already exists',
    });
  }
  if (existPhone) {
    return res.status(409).json({
      status: 409,
      message: ' Phone Number  already exists',
    });
  }

  return next();
};

const IncidentValidator = (req, res, next) => {


  const JOiImage = Joi.extend(ImageExtension);

  const incidentSchema = Joi.object().keys({
    createdBy: Joi.string().min(3).max(255).trim(),
    title: Joi.string().min(3).max(255).trim(),
    type: Joi.string().min(3).max(255).label('red flag', 'intervention'),
    location: Joi.string().min(3).max(255),
    images: JOiImage.image().minDimensions(100, 50),
    videos: JOiImage.image(),
    status: Joi.string().label('draft', 'under investigation', 'resolved', 'rejected').trim(),
    comment: Joi.string().min(3).max(255),
  });
  return Joi.validate(req.body, incidentSchema, (error) => {
    if (error) {
      return errorMessage(error, res);
    }
    return next();
  });
};
// eslint-disable-next-line max-len
const LocationValidation = (req, res, next) => Joi.validate(req.body, UpdateLocationSchema, (err) => {
  if (err) {
    return errorMessage(err, res);
  }
  return next();
});

const CommentValidation = (req, res, next) => Joi.validate(req.body, UpdateCommentSchema, (err) => {
  if (err) {
    return errorMessage(err, res);
  }
  return next();
});


export {
  loginValidator, SignupValidator, IncidentValidator, LocationValidation, CommentValidation,
};
