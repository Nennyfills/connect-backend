import database from '../models';
import { NotFoundError, ApplicationError } from '../helper/errors';
import {
  generateToken,
  compareHashPassword,
  hashPassword,
  getJWTpaylod
} from '../helper/auth';
import { createOrFindUser } from '../service/auth';
import sendGrid from '../service/email';


const { Users } = database;

const auth = {
  login: async (req, res) => {
    const { password } = req.body;
    const payload = req.body;
    const isEmailOrUserNameKey = Object.keys(req.body).filter(
      (data) => data === 'email' || data === 'userName'
    )[0];
    const isEmailOrUserNameValue = [payload].map((data) => data);
    const userDetail = isEmailOrUserNameValue[0][
      isEmailOrUserNameKey
    ].toLowerCase();
    const user = await Users.getExistingUser(userDetail, isEmailOrUserNameKey);

    if (!user) throw new NotFoundError('You are not yet registered');
    const isRealPassword = await compareHashPassword(password, user.password);
    if (!isRealPassword) throw new ApplicationError(400, 'Invalid user name or password');
    // if (!user.isVerified) {
    //   throw new ApplicationError(
    //     401,
    //     'Your account is not verify your account'
    //   );
    // }

    delete user?.dataValues?.password;
    delete user?.dataValues?.resetPasswordToken;
    delete user?.dataValues?.verificationToken;

    const token = await generateToken({ id: user.id }, '12h');

    return res.status(200).json({
      status: 'success',
      data: { user, token },
      message: 'User signed in successfully'
    });
  },

  signup: async (req, res) => {
    const { email, userName, password } = req.body;
    const existingEmail = await Users.findOne({ where: { email } });
    const existingUserName = await Users.findOne({ where: { userName } });

    if (existingEmail) throw new ApplicationError(409, 'You are already registered');
    if (existingUserName) throw new ApplicationError(409, 'UserName already taken');

    const hashedPassword = await hashPassword(password);

    const payload = req.body;
    payload.password = hashedPassword;
    payload.isVerified = false;
    const user = await Users.create(payload);
    // if (!user.isVerified) {
    //   throw new ApplicationError(
    //     401,
    //     'Your account is not verify your account'
    //   );
    // }

    const token = await generateToken({ id: user.id }, '12h');

    delete user?.dataValues?.password;
    delete user?.dataValues?.resetPasswordToken;
    delete user?.dataValues?.verificationToken;

    return res.status(200).json({
      status: 'success',
      data: { user, token },
      message: 'User signed in successfully'
    });
  },

  /**
   * Handles user sign in using their social credentials
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  socialLogin: async (request, response) => {
    const { status, data } = await createOrFindUser(request.user);

    return response.status(status).json({ status: 'success', data });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  sendPasswordResetLink: async (request, response) => {
    const { email } = request.body;
    const dataValues = await Users.getExistingUser(email);
    if (!dataValues) throw new ApplicationError(404, 'This email dose not exist');
    const token = await generateToken({ id: dataValues.id }, '1h');
    const [, rowsUpdate] = await Users.update(
      {
        resetPasswordToken: token,
      },
      { where: { email }, returning: true }
    );
    const url = `http://${request.headers.host}/api/v1/auth/reset/password/link/${rowsUpdate[0].resetPasswordToken}`;
    const { status, message } = await sendGrid(dataValues, 'resetPassword', url);
    return response.status(200).json({
      status,
      message
    });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  resetPasswordWithLink: async (request, response) => {
    const { password } = request.body;
    const { token } = request.params;
    const dataValues = await Users.getExistingUser(token, 'resetPasswordToken');
    if (!dataValues) throw new ApplicationError(400, 'Invalid password link');
    const { exp } = await getJWTpaylod(token);
    if (Date.now() >= exp * 1000) {
      throw new ApplicationError(498, 'Password Link Expired, please request for a new link');
    }
    const hashedPassword = await hashPassword(password);
    const [, rowsUpdate] = await Users.update(
      { password: hashedPassword },
      { where: { id: dataValues.id }, returning: true }
    );
    const user = rowsUpdate[0];

    delete user?.dataValues?.password;
    delete user?.dataValues?.resetPasswordToken;

    return response.status(200).json({
      status: 'success',
      data: user,
      message: 'Password changed successfully'
    });
  },

  /**
   * Handles reset password
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  resetPassword: async (request, response) => {
    const { userName, password, existingPassword } = request.body;
    const currentUser = request.user.dataValues;

    if (currentUser.userName !== userName) {
      throw new ApplicationError(
        401,
        'You are not authorized to make any changes'
      );
    }

    if (currentUser.googleId || currentUser.githubId) {
      throw new ApplicationError(
        400,
        'Please login with your google or github account'
      );
    }

    const isRealPassword = await compareHashPassword(
      existingPassword,
      currentUser.password
    );

    if (!isRealPassword) throw new ApplicationError(400, 'Password is incorrect');

    const hashedPassword = await hashPassword(password);

    const [, rowsUpdate] = await Users.update(
      { password: hashedPassword },
      { where: { id: currentUser.id }, returning: true }
    );
    const user = rowsUpdate[0];
    delete user?.dataValues?.password;
    delete user?.dataValues?.verificationToken;
    delete user?.dataValues?.verificationToken;
    return response.status(200).json({
      status: 'success',
      data: user,
      message: 'Password changed successfully'
    });
  },

  /**
   * Handles reset password using link
   *
   * @function
   *
   * @param {Object} request object
   * @param {Object} response - express response object
   *
   * @returns {Object} response object
   */
  verificationLink: async (request, response) => {
    const { token } = request.params;
    const dataValues = await Users.getExistingUser(token, 'verificationToken');
    if (!dataValues) throw new ApplicationError(400, 'Invalid verification link');
    const { exp, id } = await getJWTpaylod(token);
    if (Date.now() >= exp * 1000) {
      throw new ApplicationError(498, 'Verification Link Expired, please request for a new link');
    }
    await Users.update(
      { isVerified: true },
      { where: { id }, returning: true }
    );
    return response.status(200).json({
      status: 'success',
      message: 'Email verified successfully'
    });
  },
  sendVerificationLink: async (request, response) => {
    const { email } = request.body;
    const dataValues = await Users.getExistingUser(email);

    if (!dataValues) throw new ApplicationError(404, 'This email dose not exist');
    const token = await generateToken({ id: dataValues.id }, '1h');
    const [, rowsUpdate] = await Users.update(
      {
        verificationToken: token,
      },
      { where: { email }, returning: true }
    );
    const url = `http://${request.headers.host}/api/v1/auth/verify/email/${rowsUpdate[0].verificationToken}`;
    const { status, message } = await sendGrid(dataValues, 'verifyEmail', url);
    return response.status(200).json({
      status,
      message
    });
  }

};

export default auth;
