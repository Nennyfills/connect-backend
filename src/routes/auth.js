import { Router } from 'express';

import authController from '../controller/auth';

const {
  login
} = authController;

const auth = Router();

/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: Signup to the application
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
 *         description: token is supplied
 */
auth.get('/login', login);

export default auth;
