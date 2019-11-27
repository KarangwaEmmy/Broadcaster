import Joi from 'joi';
import { serverError, serverResponse, authResponse } from '../Helper/Response'

class Validations{
    // Message 
     errorMessage(err, res){
        const errMessage = err.details[0].message;
        return serverResponse(res, 422, 'status', 'error', 'error', errMessage);
      };
    //validate user sign up credentials
    signupValidation(signupData){
        const schema = {
            firstname: Joi.string().required(),
            lastnname: Joi.string().alphanum().min(3).max(12).required(),
            email: Joi.string().alphanum().min(3).max(12).required(),
            phoneNumber: Joi.number().integer().required(),
            username: Joi.string().alphanum().min(3).max(12).required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().trim()

        };
        return Joi.validate(signupData,schema, (err, value) => {
            if (err) {
              return errorMessage(err, res);
            }
            return next();
          });
    }
    //logi login credentials
    signinValidation(signinData){
        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).max(15).required(),
        };
        return Joi.validate(signinData,schema)
    }
    //validate patch a user credentials
    editValidation(editData){
        const schema = {
            firstName: Joi.string().min(3).max(15).required(),
            lastName: Joi.string().min(3).max(25).required(),
            address: Joi.string().min(5).max(25).required(),
        };
        return Joi.validate(editData,schema)
    }
}

export default Validations;