import Joi from '@hapi/joi';

// eslint-disable-next-line no-unused-vars
const lowerCase = (value, helpers) => value.trim().toLowerCase();
const authSchema = {
  login: Joi.object()
    .keys({
      userName: Joi.string()
        .custom((userName) => userName.trim().toLowerCase())
        .messages({
          'string.empty': 'UserName cannot be an empty',
          'string.min': 'UserName should have a minimum length of {#limit} characters',
          'any.required': 'UserName is required'
        }),
      email: Joi.string()
        .email()
        .custom((email) => email.trim().toLowerCase())
        .messages({
          'string.email': 'Email must be a valid email address',
          'string.empty': 'Email cannot be an empty',
          'string.min': 'Email should have a minimum length of {#limit} characters',
          'any.required': 'Email is required'
        }),
      password: Joi.string()
        .min(8)
        .required()
        // eslint-disable-next-line no-useless-escape
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/)
        .messages({
          'string.empty': 'Password cannot be empty',
          'string.min': 'Password length must be at least {#limit} characters characters long',
          'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number ',
          'any.required': 'Password field is required'
        })
    })
    .xor('userName', 'email'),
  signup: Joi.object().keys({
    fullName: Joi.string()
      .custom((fullName) => fullName.trim().toLowerCase())
      .min(6)
      .required()
      .messages({
        'string.empty': 'FullName cannot be an empty',
        'string.min': 'FullName should have a minimum length of {#limit} characters',
        'any.required': 'FullName field is required'
      }),
    userName: Joi.string()
      .label('userName')
      .min(5)
      .max(20)
      .required()
      .custom((userName) => userName.trim().toLowerCase())
      .messages({
        'string.empty': 'UserName cannot be an empty',
        'string.min': 'UserName should have a minimum length of {#limit} characters',
        'any.required': 'UserName field is required'
      }),
    email: Joi.string()
      .email()
      .required()
      .custom((email) => email.trim().toLowerCase())
      .messages({
        'string.email': 'Email must be a valid email',
        'string.empty': 'Email cannot be an empty',
        'string.min': 'Email should have a minimum length of {#limit} characters',
        'any.required': 'Email field is required'
      }),
    password: Joi.string()
      .min(8)
      .max(40)
      // eslint-disable-next-line no-useless-escape
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/)
      .required()
      .messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password should have a minimum length of {#limit} characters',
        'any.required': 'Password field is required',
        'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number',
      })
  }),
  resetPassword: Joi.object().keys({
    existingPassword: Joi.string()
      .min(8)
      .required()
    // eslint-disable-next-line no-useless-escape
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/)
      .messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password length must be at least {#limit} characters characters long',
        'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number ',
        'any.required': 'Password field is required'
      }),
    password: Joi.string()
      .min(8)
      .max(200)
      // eslint-disable-next-line no-useless-escape
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/)
      .required()
      .messages({
        'string.empty': 'Password cannot be empty',
        'string.min': 'Password should have a minimum length of {#limit} characters',
        'any.required': 'Password field is required',
        'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number ',
      }),
    userName: Joi.string()
      .label('userName')
      .min(5)
      .max(20)
      .required()
      .custom((userName) => userName.trim().toLowerCase())
      .messages({
        'string.empty': 'UserName cannot be an empty',
        'string.min': 'UserName should have a minimum length of {#limit} characters',
        'any.required': 'UserName field is required'
      }),
  })
};
export default authSchema;
