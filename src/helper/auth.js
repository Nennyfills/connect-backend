import jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';
import bcrypt from 'bcrypt';
import { config as getEnv } from 'dotenv';
import { ApplicationError } from './errors';

getEnv();
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

/**
 * Generates user token
 *
 * @function
 *
 * @param {Object} payload - payload
 * @param {Object} time - time
 *
 * @returns {string} - token
 */
export const generateToken = (async (payload, time) => jwt
  .sign(payload, process.env.PRIVATE_KEY, { expiresIn: time })
);

/**
 * Verify user token
 *
 * @function
 *
 * @param {Object} token - token payload
 * @param {Object} next - token payload
 *
 * @returns {string} - token
 */
export const verifyToken = (async (token, next) => jwt
  .verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
    if (error) return next(new ApplicationError(401, `${error.message}`));
    return decodedToken;
  }));

/**
 * Hash user password
 *
 * @function
 *
 * @param {Object} password - hash password
 *
 * @returns {string} - password
 */
export const hashPassword = (async (password) => bcrypt.hash(password, salt));

/**
 * Compare Hash password
 *
 * @function
 *
 * @param {Object} password - plain password
 * @param {Object} hashedPassword - hashed password
 *
 * @returns {string} - password
 */
export const compareHashPassword = (async (password, hashedPassword) => bcrypt
  .compare(password, hashedPassword));

/**
 * Check If Token Has Expired
 *
 * @function
 *
 * @param {string} token - token
 *
 * @returns {object} - decoded
 */
export const getJWTpaylod = async (token) => {
  const decoded = jwtDecode(token);
  return decoded;
};
