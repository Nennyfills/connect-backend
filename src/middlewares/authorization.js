/* eslint-disable max-len */
import { ApplicationError } from '../helper/errors';
import { verifyToken } from '../helper/auth';
import database from '../models';

const {
  Users
} = database;

export default {
  /**
   * Verify Token
   *
   * @param {Object} request - the request object
   * @param {Object} response - express response object
   * @param {Function} next
   *
   * @returns {void} - undefined
   */
  authorizationVerify: async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (authHeader === '') throw new ApplicationError(400, 'No token provided. Please signup or login');
    if (!authHeader) throw new ApplicationError(412, 'Authorization header not set');

    const token = authHeader.split(' ')[1];
    const verifiedResponse = await verifyToken(token, next);
    const { id } = verifiedResponse;
    const currentUser = await Users.findByPk(id);

    if (!currentUser) return next(new ApplicationError(403, 'Invalid credentials'));

    request.user = currentUser;

    return next();
  },
};
