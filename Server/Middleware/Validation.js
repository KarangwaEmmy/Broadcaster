import joi from 'joi'
import { serverError, serverResponse, authResponse } from '../Helper/Response'

const userSchema = joi.object().keys({
    firstname: joi.string().alphanum().min(3).max(12).required().trim(),
    lasttnname: joi.string().alphanum().min(3).max(12).required(),
    email: joi.string().alphanum().min(3).max(12).required(),
    phoneNumber: joi.number().integer().required(),
    username: joi.string().alphanum().min(3).max(12).required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});


const loginSchema = joi.object().keys({
    email: joi.string().alphanum().min(3).max(12).required(),
    password: joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()
});

const incidentSchema = joi.object().keys({
    title: joi.string().alphanum().min(3).max(12).trim(),
    type: joi.string().min(3).max(12).label('red flad', 'intervation').trim(),
    status: joi.string().alphanum().label('draft', 'under investigation', 'resolved', 'rejected').trim(),
    location: joi.string().alphanum().min(3).max(12).required().trim(),
    comment: joi.string().alphanum().min(3).max(12).required().trim()
})
const errorMessage = (err, res) => {
  const errMessage = err.details[0].message;
  return serverResponse(res, 422, 'status', 'error', 'error', errMessage);
};
const loginValidator = (req, res, next) => {
    let { email, password } = req.body;
    req.body.email = email;
    req.body.password = password;
    return joi.validate(req.body, loginSchema, (err, value) => {
      if (err) {
        return errorMessage(err, res);
      }
      return next();
    });
  };
  
export {loginValidator}