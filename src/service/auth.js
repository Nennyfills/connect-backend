
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import GitHubStrategy from 'passport-github';
import { config as getEnv } from 'dotenv';

import database from '../models';
import { ApplicationError } from '../helper/errors';
import { generateToken } from '../helper/auth';

const { Users } = database;

getEnv();

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URL
} = process.env;

const googleConfig = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_REDIRECT_URL,
};

const githubConfig = {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_REDIRECT_URL,
};

// /**
//  * Function to create or find a user in the database
//  *
//  * @function
//  *
//  * @param {Object} request request object containing user details
//  *
//  * @returns {Object} response object
//  */
// export const sscreateOrFindUser = async ({
//   googleId,
//   userName,
//   fullName,
//   email,
//   avatarUrl,
//   isVerified
// }) => {
//   try {
//     const [user, created] = await Users.findOrCreate({
//       where: { email },
//       defaults: {
//         googleId,
//         userName,
//         fullName,
//         email,
//         avatarUrl,
//         isVerified,
//         password: ''
//       }
//     });

//     const { id, createdAt } = user;
//     const token = await generateToken({ id });
//     const userDetails = {
//       id,
//       googleId,
//       userName,
//       fullName,
//       email,
//       avatarUrl,
//       isVerified,
//       createdAt
//     };

//     const status = created ? 201 : 200;
//     return { status, data: { user: userDetails, token } };
//   } catch (error) {
//     throw new ApplicationError(500, error);
//   }
// };

/**
 * Function to create or find a user in the database
 *
 * @function
 *
 * @param {Object} users request object containing user details
 *
 * @returns {Object} response object
 */
export const createOrFindUser = async (users) => {
  users.password = '';
  try {
    const [user, created] = await Users.findOrCreate({
      where: { userName: users.userName },
      defaults: users
    });

    const { id } = user;
    const token = await generateToken({ id }, '12h');
    const status = created ? 201 : 200;
    delete users?.password;
    return { status, data: { users, token } };
  } catch (error) {
    throw new ApplicationError(500, error);
  }
};

/**
 * Call Back that is called after redirect from google page where user gives consent
 *
 * @function
 *
 * @param {string} accessToken
 * @param {string} refreshToken
 * @param {Object} profile user profile returned from twitter
 * @param {Function} done
 *
 * @returns {Object} user details returned from twitter
 */
export const performGoogleCallback = (accessToken, refreshToken, profile, done) => {
  const {
    displayName, emails, photos, name, id
  } = profile;
  const user = {
    googleId: id,
    userName: displayName,
    fullName: `${name.givenName} ${name.familyName}`,
    email: emails[0].value,
    avatarUrl: photos[0].value,
    isVerified: emails[0].verified,
  };

  return done(null, user);
};

/**
 * Call Back that is called after redirect from github page where user gives consent
 *
 * @function
 *
 * @param {string} accessToken
 * @param {string} refreshToken
 * @param {Object} profile user profile returned from twitter
 * @param {Function} done
 *
 * @returns {Object} user details returned from twitter
 */
export const performGithubCallback = (accessToken, refreshToken, profile, done) => {
  const {
    // eslint-disable-next-line camelcase
    photos, email, username, displayName, id,
  } = profile;
  const userEmail = email || `${username}@connect.co`;
  const user = {
    githubId: id,
    userName: username,
    fullName: displayName,
    email: userEmail,
    avatarUrl: photos[0].value,
    isVerified: true
  };

  return done(null, user);
};

passport.use(new GoogleStrategy(googleConfig, performGoogleCallback));

passport.use(new GitHubStrategy(githubConfig, performGithubCallback));


export const passportGoogleAuthenticate = passport.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login', 'email'],
  session: false
});

export const passportGithubAuthenticate = passport.authenticate('github', {
  scope: ['user:email'],
  session: false
});

export const passportGoogleAuthenticateFailure = passport.authenticate(
  'google',
  { failureRedirect: '/api/v1/auth/login' }
);

export const passportGithubAuthenticateFailure = passport.authenticate(
  'github',
  { failureRedirect: '/api/v1/auth/login' }
);
