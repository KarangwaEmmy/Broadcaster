import Joi from 'joi'
import { serverResponse } from '../Helper/Response'



class Validation{
  








 errorMessage = (err, res) => {
  const errMessage = err.details[0].message;
  return serverResponse(res, 422, ...['status', 'error', 'Message', errMessage]);
};
 loginValidator = (req, res, next) => {
  const loginSchema = Joi.object().keys({
    email: Joi.string().min(3).max(255).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});
    return Joi.validate(req.body, loginSchema, (err, value) => {
      if (err) {
        return errorMessage(err, res);
      }
      return next();
    });
  };

 SignupValidator = (req, res, next) => {
  const userSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastname: Joi.string().min(3).max(12).required(),
    email: Joi.string().min(3).max(255).required(),
    phoneNumber: Joi.number().integer().min(10).required(),
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(4).regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});
  return Joi.validate(req.body, userSchema, (err, value) => {
    if(err){
      return errorMessage(err, res)
    }
    return next();
  })
}

 IncidentValidator = (req, res, next) => {

  const incidentSchema = Joi.object().keys({
    title: Joi.string().min(3).max(255).trim(),
    type: Joi.string().min(3).max(255).label('red flag', 'intervention').trim(),
    location: Joi.string().min(3).max(255).required(),
    status: Joi.string().label('draft', 'under investigation', 'resolved', 'rejected').trim(),
    comment: Joi.string().min(3).max(255)
})

  let { title, type, comment} = req.body;
  return Joi.validate(req.body, incidentSchema, (error, value) =>{
    if(error){
      return errorMessage(error, res);
    }
    return next();
  })
}
 LocationValidation = (req, res, next) =>{

  const UpdateLocationSchema = Joi.object().keys({
    location: Joi.string().min(3).max(25).required()
  })

  return Joi.validate(req.body, UpdateLocationSchema, (err, value) => {
    if(err){
      return errorMessage(err, res);
    }
    return next();
  });
}

 CommentValidation = (req, res, next) => {

  const UpdateCommentSchema = Joi.object().keys({
    comment: Joi.string().min(10).max(255).required()
  })

  return Joi.validate(req.body, UpdateCommentSchema, (err, value) => {
    if(err){
      return errorMessage(err, res);
    }
    return next();
  })
}
}

export default  Validation();