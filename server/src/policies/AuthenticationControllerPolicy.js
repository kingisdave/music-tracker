const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    // creating the schema objects
    const schema = Joi.object({
      firstName: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{2,12}$')
      ),
      lastName: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{2,12}$')
      ),
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      ),
    })

    // schema options 
    const options = {
      abortEarly: false,   //include all the errors
      allowUnknown: true,  //ignore unknown props
      stripUnknown: true,   // remove unknown props
    };

    const { error, value } = schema.validate(req.body, options);
    if(error){
      // on fail return comma seperated errors
      switch (error.details[0].context.key) {
        case 'firstName':
          res.status(400).send({
            error: 'Must be more than 2 characters in length and less than 12'
          })
          break;
        case 'lastName':
          res.status(400).send({
            error: 'Must be more than 2 characters in length and less than 12'
          })
          break;
        case 'email':
          res.status(400).send({
            error: 'You must provide a valid email address'
          })
          break;
        case 'password':
          res.status(400).send({
            error: `The password provided fail to match the following rules
              <br>
              1. Must contain ONLY the following characters: lower case, upper case, numerics
              <br>
              2. Must be at least 8 characters in length and not greater than 32 characters in length.  
            `
          })
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration information'
          })
          break;
      }
    } else {
      req.body = value;
      next();
    }
   
  }
}