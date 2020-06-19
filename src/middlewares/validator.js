
import { ApplicationError } from '../helper/errors';

const validator = (schema) => (req, res, next) => {
  const validatorSchema = schema.validate(req.body);
  const { value, error } = validatorSchema;

  req.body = value;

  if (error) {
    throw new ApplicationError(400, error.message);
  }

  next();
};

export default validator;
