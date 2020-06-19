import { Router } from 'express';

import authController from '../controller/auth';
import controllerWrap from '../middlewares/controllerWrap';
import validator from '../middlewares/validator';
import authorization from '../middlewares/authorization';
import authSchema from '../validations/schema/auth';
import {
  passportGoogleAuthenticate,
  passportGoogleAuthenticateFailure,
  passportGithubAuthenticate,
  passportGithubAuthenticateFailure,
} from '../service/auth';

const {
  login,
  signup,
  socialLogin,
  resetPassword,
  resetPasswordWithLink,
  sendPasswordResetLink,
  sendVerificationLink,
  verificationLink,
} = authController;

const { authorizationVerify } = authorization;

const auth = Router();

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: login to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: userName or email
 *         description: Username or email to use for login.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: token is supplied and user is logged in.
 */
auth.post('/login', validator(authSchema.login), controllerWrap(login));

/**
 * @swagger
 *
 * /auth/signup:
 *   post:
 *     description: Signup to the application
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: user's email.
 *         in: body
 *         required: true
 *         type: string
 *       - name: userName
 *         description: user's userName.
 *         in: body
 *         required: true
 *         type: string
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       201:
 *         description: token is supplied and user is created.
 */
auth.post('/signup', validator(authSchema.signup), controllerWrap(signup));

/**
 * @swagger
 *
 * /auth/google:
 *   get:
 *     description: Authenticate user using google
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/google', controllerWrap(passportGoogleAuthenticate));

/**
 * @swagger
 *
 * /auth/github:
 *   get:
 *     description: Authenticate user using github
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/github', controllerWrap(passportGithubAuthenticate));

/**
 * @swagger
 *
 * /auth/google:
 *   get:
 *     description: Authenticate user using google
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/google/redirect', controllerWrap(passportGoogleAuthenticate), controllerWrap(socialLogin));

/**
 * @swagger
 *
 * /auth/github:
 *   get:
 *     description: Authenticate user using google
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/github/redirect', controllerWrap(passportGithubAuthenticate), controllerWrap(socialLogin));

/**
 * @swagger
 *
 *  /auth/google:
 *   post:
 *     description: Authenticate user using third party google account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Content-Type
 *         in: header
 *         required: true
 *         type: string
 *         default: application/json
 *       - name: provider
 *         in: path
 *         required: true
 *         type: string
 *       - name: accessToken
 *         description: User access token gotten from either google.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/github/callback', controllerWrap(passportGithubAuthenticateFailure), controllerWrap(login));

/**
 * @swagger
 *
 *  /auth/google:
 *   post:
 *     description: Authenticate user using third party google account
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: Content-Type
 *         in: header
 *         required: true
 *         type: string
 *         default: application/json
 *       - name: provider
 *         in: path
 *         required: true
 *         type: string
 *       - name: accessToken
 *         description: User access token gotten from either google.
 *         in: formData
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: success
 */
auth.get('/google/callback', controllerWrap(passportGoogleAuthenticateFailure), controllerWrap(login));

/**
 * @swagger
 *
 *  /auth/reset/password:
 *   post:
 *     description: reset password
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *         default: application/json
 *     responses:
 *       200:
 *         description: password is changed.
 */
auth.put('/reset/password', controllerWrap(authorizationVerify), validator(authSchema.resetPassword), controllerWrap(resetPassword));

/**
 * @swagger
 *
 *  /auth/reset/password/link:
 *   post:
 *     description: send reset password link
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User reset password token.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An email has been sent to the owners email with further information.
 */
auth.post('/reset/password/link', controllerWrap(sendPasswordResetLink));

/**
 * @swagger
 *
 *  /auth/reset/password/:token:
 *   post:
 *     description: reset password using link
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: password
 *         description: User's password.
 *         in: body
 *         required: true
 *         type: string
 *       - name: token
 *         description: User's reset password link.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: password is changed.
 */
auth.put('/reset/password/link/:token', controllerWrap(resetPasswordWithLink));


/**
 * @swagger
 *
 *  /auth/verify/link:
 *   post:
 *     description: send verify link
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: email
 *         description: User verify token.
 *         in: body
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: An email has been sent to the owners email with further information.
 */
auth.post('/verify/link', controllerWrap(sendVerificationLink));

/**
 * @swagger
 *
 *  /auth/reset/password/:token:
 *   post:
 *     description: reset password using link
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: isVerified
 *         description: verify user.
 *         in: body
 *         required: true
 *         type: string
 *       - name: token
 *         description: User's verification token.
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: password is changed.
 */
auth.put('/verify/email/:token', controllerWrap(verificationLink));

export default auth;
