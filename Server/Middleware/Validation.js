import Joi from 'joi'
import { serverResponse } from '../Helper/Response'

const userSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().min(3).max(12).required(),
    email: Joi.string().min(3).max(255).required(),
    phoneNumber: Joi.number().integer().min(10).required(),
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(4).regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});


const loginSchema = Joi.object().keys({
    email: Joi.string().min(3).max(255).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});

const UpdateLocationSchema = Joi.object().keys({
  location: Joi.string().min(3).max(25).required()
})

const UpdateCommentSchema = Joi.object().keys({
  comment: Joi.string().min(10).max(255).required()
})
const incidentSchema = Joi.object().keys({
    title: Joi.string().min(3).max(255).trim(),
    type: Joi.string().min(3).max(255).label('red flag', 'intervention').trim(),
    location: Joi.string().min(3).max(255).required(),
    status: Joi.string().label('draft', 'under investigation', 'resolved', 'rejected').trim(),
    comment: Joi.string().min(3).max(255)
})
const errorMessage = (err, res) => {
  const errMessage = err.details[0].message;
  return serverResponse(res, 422, ...['status', 'error', 'Message', errMessage]);
};
const loginValidator = (req, res, next) => {
    return Joi.validate(req.body, loginSchema, (err, value) => {
      if (err) {
        return errorMessage(err, res);
      }
      return next();
    });
  };

const SignupValidator = (req, res, next) => {
  return Joi.validate(req.body, userSchema, (err, value) => {
    if(err){
      return errorMessage(err, res)
    }
    return next();
  })
}

const IncidentValidator = (req, res, next) => {
  let { title, type, comment} = req.body;
  return Joi.validate(req.body, incidentSchema, (error, value) =>{
    if(error){
      return errorMessage(error, res);
    }
    return next();
  })
}
const LocationValidation = (req, res, next) =>{
  return Joi.validate(req.body, UpdateLocationSchema, (err, value) => {
    if(err){
      return errorMessage(err, res);
    }
    return next();
  });
}

const CommentValidation = (req, res, next) => {
  return Joi.validate(req.body, UpdateCommentSchema, (err, value) => {
    if(err){
      return errorMessage(err, res);
    }
    return next();
  })
}
export {loginValidator, SignupValidator, IncidentValidator,LocationValidation, CommentValidation}