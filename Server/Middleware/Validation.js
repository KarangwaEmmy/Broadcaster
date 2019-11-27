import Joi from 'joi'
import { serverError, serverResponse, authResponse } from '../Helper/Response'

const userSchema = Joi.object().keys({
    firstname: Joi.string().required(),
    lastnname: Joi.string().alphanum().min(3).max(12).required(),
    email: Joi.string().alphanum().min(3).max(12).required(),
    phoneNumber: Joi.number().integer().required(),
    username: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});


const loginSchema = Joi.object().keys({
    email: Joi.string().alphanum().min(3).max(12).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});

const incidentSchema = Joi.object().keys({
    title: Joi.string().alphanum().min(3).max(12).trim(),
    type: Joi.string().min(3).max(12).label('red flad', 'intervation').trim(),
    status: Joi.string().alphanum().label('draft', 'under investigation', 'resolved', 'rejected').trim(),
    location: Joi.string().alphanum().min(3).max(12).required().trim(),
    comment: Joi.string().alphanum().min(3).max(12).required().trim()
})
const errorMessage = (err, res) => {
  const errMessage = err.details[0].message;
  return serverResponse(res, 422, 'status', 'error', 'Message', errMessage);
};
const loginValidator = (req, res, next) => {
    let { email, password } = req.body;
    req.body.email = email;
    req.body.password = password;
    return Joi.validate(req.body, loginSchema, (err, value) => {
      if (err) {
        return errorMessage(err, res);
      }
      return next();
    });
  };

const SignupValidator = (req, res, next) => {
  let { firstname, lasttnname, email, username, password, phoneNumber} = req.body;
  req.body.firstname = firstname;
  req.body.lasttnname = lasttnname;
  req.body.email = email;
  req.body.password = password;
  req.body.username = username;
  req.body.phoneNumber = phoneNumber;
  return Joi.validate(req.body, userSchema, (err, value) => {
    if(err){
      return errorMessage(err, res)
    }
    return next();
  })
}
  
export {loginValidator, SignupValidator}