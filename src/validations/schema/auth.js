import Joi from '@hapi/joi';

const auth = {
  login:
        Joi.object().keys({
          userName: Joi.string(),
          email: Joi.string().email(),
          password: Joi.string().required()
        }).xor('username', 'email'),
  signup:
        Joi.object().keys({
          fullName: Joi.string().required(),
          userName: Joi.string().required(),
          email: Joi.string().email().required(),
          password: Joi.string().required()
        })
};

export default auth;
