"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../controller/auth"));

var _controllerWrap = _interopRequireDefault(require("../middlewares/controllerWrap"));

var _validator = _interopRequireDefault(require("../middlewares/validator"));

var _authorization = _interopRequireDefault(require("../middlewares/authorization"));

var _auth2 = _interopRequireDefault(require("../validations/schema/auth"));

var _auth3 = require("../service/auth");

function cov_14k0bz447s() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\auth.js";
  var hash = "336c1cb30aebd6a1222a0fab961a065e42f8f3ec";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 18
        }
      },
      "1": {
        start: {
          line: 26,
          column: 32
        },
        end: {
          line: 26,
          column: 45
        }
      },
      "2": {
        start: {
          line: 28,
          column: 13
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "3": {
        start: {
          line: 53,
          column: 0
        },
        end: {
          line: 53,
          column: 72
        }
      },
      "4": {
        start: {
          line: 83,
          column: 0
        },
        end: {
          line: 83,
          column: 75
        }
      },
      "5": {
        start: {
          line: 97,
          column: 0
        },
        end: {
          line: 97,
          column: 64
        }
      },
      "6": {
        start: {
          line: 111,
          column: 0
        },
        end: {
          line: 111,
          column: 64
        }
      },
      "7": {
        start: {
          line: 125,
          column: 0
        },
        end: {
          line: 125,
          column: 102
        }
      },
      "8": {
        start: {
          line: 139,
          column: 0
        },
        end: {
          line: 139,
          column: 102
        }
      },
      "9": {
        start: {
          line: 168,
          column: 0
        },
        end: {
          line: 168,
          column: 103
        }
      },
      "10": {
        start: {
          line: 197,
          column: 0
        },
        end: {
          line: 197,
          column: 103
        }
      },
      "11": {
        start: {
          line: 218,
          column: 0
        },
        end: {
          line: 218,
          column: 133
        }
      },
      "12": {
        start: {
          line: 238,
          column: 0
        },
        end: {
          line: 238,
          column: 73
        }
      },
      "13": {
        start: {
          line: 263,
          column: 0
        },
        end: {
          line: 263,
          column: 79
        }
      },
      "14": {
        start: {
          line: 284,
          column: 0
        },
        end: {
          line: 284,
          column: 64
        }
      },
      "15": {
        start: {
          line: 309,
          column: 0
        },
        end: {
          line: 309,
          column: 67
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "336c1cb30aebd6a1222a0fab961a065e42f8f3ec"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_14k0bz447s = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_14k0bz447s();
const {
  login,
  signup,
  socialLogin,
  resetPassword,
  resetPasswordWithLink,
  sendPasswordResetLink,
  sendVerificationLink,
  verificationLink
} = (cov_14k0bz447s().s[0]++, _auth.default);
const {
  authorizationVerify
} = (cov_14k0bz447s().s[1]++, _authorization.default);
const auth = (cov_14k0bz447s().s[2]++, (0, _express.Router)());
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

cov_14k0bz447s().s[3]++;
auth.post('/login', (0, _validator.default)(_auth2.default.login), (0, _controllerWrap.default)(login));
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

cov_14k0bz447s().s[4]++;
auth.post('/signup', (0, _validator.default)(_auth2.default.signup), (0, _controllerWrap.default)(signup));
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

cov_14k0bz447s().s[5]++;
auth.get('/google', (0, _controllerWrap.default)(_auth3.passportGoogleAuthenticate));
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

cov_14k0bz447s().s[6]++;
auth.get('/github', (0, _controllerWrap.default)(_auth3.passportGithubAuthenticate));
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

cov_14k0bz447s().s[7]++;
auth.get('/google/redirect', (0, _controllerWrap.default)(_auth3.passportGoogleAuthenticate), (0, _controllerWrap.default)(socialLogin));
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

cov_14k0bz447s().s[8]++;
auth.get('/github/redirect', (0, _controllerWrap.default)(_auth3.passportGithubAuthenticate), (0, _controllerWrap.default)(socialLogin));
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

cov_14k0bz447s().s[9]++;
auth.get('/github/callback', (0, _controllerWrap.default)(_auth3.passportGithubAuthenticateFailure), (0, _controllerWrap.default)(login));
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

cov_14k0bz447s().s[10]++;
auth.get('/google/callback', (0, _controllerWrap.default)(_auth3.passportGoogleAuthenticateFailure), (0, _controllerWrap.default)(login));
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

cov_14k0bz447s().s[11]++;
auth.put('/reset/password', (0, _controllerWrap.default)(authorizationVerify), (0, _validator.default)(_auth2.default.resetPassword), (0, _controllerWrap.default)(resetPassword));
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

cov_14k0bz447s().s[12]++;
auth.post('/reset/password/link', (0, _controllerWrap.default)(sendPasswordResetLink));
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

cov_14k0bz447s().s[13]++;
auth.put('/reset/password/link/:token', (0, _controllerWrap.default)(resetPasswordWithLink));
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

cov_14k0bz447s().s[14]++;
auth.post('/verify/link', (0, _controllerWrap.default)(sendVerificationLink));
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

cov_14k0bz447s().s[15]++;
auth.put('/verify/email/:token', (0, _controllerWrap.default)(verificationLink));
var _default = auth;
exports.default = _default;
module.exports = exports.default;