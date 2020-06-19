"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.passportGithubAuthenticateFailure = exports.passportGoogleAuthenticateFailure = exports.passportGithubAuthenticate = exports.passportGoogleAuthenticate = exports.performGithubCallback = exports.performGoogleCallback = exports.createOrFindUser = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _passportGoogleOauth = _interopRequireDefault(require("passport-google-oauth20"));

var _passportGithub = _interopRequireDefault(require("passport-github"));

var _dotenv = require("dotenv");

var _models = _interopRequireDefault(require("../models"));

var _errors = require("../helper/errors");

var _auth = require("../helper/auth");

function cov_20zvxz9gb7() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\service\\auth.js";
  var hash = "3e0f3977ae50c314d5be078e5800f49c74094a1c";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\service\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 11,
          column: 18
        },
        end: {
          line: 11,
          column: 26
        }
      },
      "1": {
        start: {
          line: 13,
          column: 0
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "2": {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 22,
          column: 15
        }
      },
      "3": {
        start: {
          line: 24,
          column: 21
        },
        end: {
          line: 28,
          column: 1
        }
      },
      "4": {
        start: {
          line: 30,
          column: 21
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "5": {
        start: {
          line: 96,
          column: 32
        },
        end: {
          line: 112,
          column: 1
        }
      },
      "6": {
        start: {
          line: 97,
          column: 2
        },
        end: {
          line: 97,
          column: 22
        }
      },
      "7": {
        start: {
          line: 98,
          column: 2
        },
        end: {
          line: 111,
          column: 3
        }
      },
      "8": {
        start: {
          line: 99,
          column: 28
        },
        end: {
          line: 102,
          column: 6
        }
      },
      "9": {
        start: {
          line: 104,
          column: 19
        },
        end: {
          line: 104,
          column: 23
        }
      },
      "10": {
        start: {
          line: 105,
          column: 18
        },
        end: {
          line: 105,
          column: 52
        }
      },
      "11": {
        start: {
          line: 106,
          column: 19
        },
        end: {
          line: 106,
          column: 38
        }
      },
      "12": {
        start: {
          line: 107,
          column: 4
        },
        end: {
          line: 107,
          column: 27
        }
      },
      "13": {
        start: {
          line: 108,
          column: 4
        },
        end: {
          line: 108,
          column: 46
        }
      },
      "14": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 43
        }
      },
      "15": {
        start: {
          line: 126,
          column: 37
        },
        end: {
          line: 140,
          column: 1
        }
      },
      "16": {
        start: {
          line: 129,
          column: 6
        },
        end: {
          line: 129,
          column: 13
        }
      },
      "17": {
        start: {
          line: 130,
          column: 15
        },
        end: {
          line: 137,
          column: 3
        }
      },
      "18": {
        start: {
          line: 139,
          column: 2
        },
        end: {
          line: 139,
          column: 26
        }
      },
      "19": {
        start: {
          line: 154,
          column: 37
        },
        end: {
          line: 170,
          column: 1
        }
      },
      "20": {
        start: {
          line: 158,
          column: 6
        },
        end: {
          line: 158,
          column: 13
        }
      },
      "21": {
        start: {
          line: 159,
          column: 20
        },
        end: {
          line: 159,
          column: 53
        }
      },
      "22": {
        start: {
          line: 160,
          column: 15
        },
        end: {
          line: 167,
          column: 3
        }
      },
      "23": {
        start: {
          line: 169,
          column: 2
        },
        end: {
          line: 169,
          column: 26
        }
      },
      "24": {
        start: {
          line: 172,
          column: 0
        },
        end: {
          line: 172,
          column: 70
        }
      },
      "25": {
        start: {
          line: 174,
          column: 0
        },
        end: {
          line: 174,
          column: 70
        }
      },
      "26": {
        start: {
          line: 177,
          column: 42
        },
        end: {
          line: 180,
          column: 2
        }
      },
      "27": {
        start: {
          line: 182,
          column: 42
        },
        end: {
          line: 185,
          column: 2
        }
      },
      "28": {
        start: {
          line: 187,
          column: 49
        },
        end: {
          line: 190,
          column: 1
        }
      },
      "29": {
        start: {
          line: 192,
          column: 49
        },
        end: {
          line: 195,
          column: 1
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 96,
            column: 32
          },
          end: {
            line: 96,
            column: 33
          }
        },
        loc: {
          start: {
            line: 96,
            column: 49
          },
          end: {
            line: 112,
            column: 1
          }
        },
        line: 96
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 126,
            column: 37
          },
          end: {
            line: 126,
            column: 38
          }
        },
        loc: {
          start: {
            line: 126,
            column: 83
          },
          end: {
            line: 140,
            column: 1
          }
        },
        line: 126
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 154,
            column: 37
          },
          end: {
            line: 154,
            column: 38
          }
        },
        loc: {
          start: {
            line: 154,
            column: 83
          },
          end: {
            line: 170,
            column: 1
          }
        },
        line: 154
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 106,
            column: 19
          },
          end: {
            line: 106,
            column: 38
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 106,
            column: 29
          },
          end: {
            line: 106,
            column: 32
          }
        }, {
          start: {
            line: 106,
            column: 35
          },
          end: {
            line: 106,
            column: 38
          }
        }],
        line: 106
      },
      "1": {
        loc: {
          start: {
            line: 159,
            column: 20
          },
          end: {
            line: 159,
            column: 53
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 159,
            column: 20
          },
          end: {
            line: 159,
            column: 25
          }
        }, {
          start: {
            line: 159,
            column: 29
          },
          end: {
            line: 159,
            column: 53
          }
        }],
        line: 159
      }
    },
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
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "3e0f3977ae50c314d5be078e5800f49c74094a1c"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_20zvxz9gb7 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_20zvxz9gb7();
const {
  Users
} = (cov_20zvxz9gb7().s[0]++, _models.default);
cov_20zvxz9gb7().s[1]++;
(0, _dotenv.config)();
const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_REDIRECT_URL,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  GITHUB_REDIRECT_URL
} = (cov_20zvxz9gb7().s[2]++, process.env);
const googleConfig = (cov_20zvxz9gb7().s[3]++, {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_REDIRECT_URL
});
const githubConfig = (cov_20zvxz9gb7().s[4]++, {
  clientID: GITHUB_CLIENT_ID,
  clientSecret: GITHUB_CLIENT_SECRET,
  callbackURL: GITHUB_REDIRECT_URL
}); // /**
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

cov_20zvxz9gb7().s[5]++;

const createOrFindUser = async users => {
  cov_20zvxz9gb7().f[0]++;
  cov_20zvxz9gb7().s[6]++;
  users.password = '';
  cov_20zvxz9gb7().s[7]++;

  try {
    const [user, created] = (cov_20zvxz9gb7().s[8]++, await Users.findOrCreate({
      where: {
        userName: users.userName
      },
      defaults: users
    }));
    const {
      id
    } = (cov_20zvxz9gb7().s[9]++, user);
    const token = (cov_20zvxz9gb7().s[10]++, await (0, _auth.generateToken)({
      id
    }, '12h'));
    const status = (cov_20zvxz9gb7().s[11]++, created ? (cov_20zvxz9gb7().b[0][0]++, 201) : (cov_20zvxz9gb7().b[0][1]++, 200));
    cov_20zvxz9gb7().s[12]++;
    users === null || users === void 0 ? true : delete users.password;
    cov_20zvxz9gb7().s[13]++;
    return {
      status,
      data: {
        users,
        token
      }
    };
  } catch (error) {
    cov_20zvxz9gb7().s[14]++;
    throw new _errors.ApplicationError(500, error);
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


exports.createOrFindUser = createOrFindUser;
cov_20zvxz9gb7().s[15]++;

const performGoogleCallback = (accessToken, refreshToken, profile, done) => {
  cov_20zvxz9gb7().f[1]++;
  const {
    displayName,
    emails,
    photos,
    name,
    id
  } = (cov_20zvxz9gb7().s[16]++, profile);
  const user = (cov_20zvxz9gb7().s[17]++, {
    googleId: id,
    userName: displayName,
    fullName: `${name.givenName} ${name.familyName}`,
    email: emails[0].value,
    avatarUrl: photos[0].value,
    isVerified: emails[0].verified
  });
  cov_20zvxz9gb7().s[18]++;
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


exports.performGoogleCallback = performGoogleCallback;
cov_20zvxz9gb7().s[19]++;

const performGithubCallback = (accessToken, refreshToken, profile, done) => {
  cov_20zvxz9gb7().f[2]++;
  const {
    // eslint-disable-next-line camelcase
    photos,
    email,
    username,
    displayName,
    id
  } = (cov_20zvxz9gb7().s[20]++, profile);
  const userEmail = (cov_20zvxz9gb7().s[21]++, (cov_20zvxz9gb7().b[1][0]++, email) || (cov_20zvxz9gb7().b[1][1]++, `${username}@connect.co`));
  const user = (cov_20zvxz9gb7().s[22]++, {
    githubId: id,
    userName: username,
    fullName: displayName,
    email: userEmail,
    avatarUrl: photos[0].value,
    isVerified: true
  });
  cov_20zvxz9gb7().s[23]++;
  return done(null, user);
};

exports.performGithubCallback = performGithubCallback;
cov_20zvxz9gb7().s[24]++;

_passport.default.use(new _passportGoogleOauth.default(googleConfig, performGoogleCallback));

cov_20zvxz9gb7().s[25]++;

_passport.default.use(new _passportGithub.default(githubConfig, performGithubCallback));

const passportGoogleAuthenticate = (cov_20zvxz9gb7().s[26]++, _passport.default.authenticate('google', {
  scope: ['https://www.googleapis.com/auth/plus.login', 'email'],
  session: false
}));
exports.passportGoogleAuthenticate = passportGoogleAuthenticate;
const passportGithubAuthenticate = (cov_20zvxz9gb7().s[27]++, _passport.default.authenticate('github', {
  scope: ['user:email'],
  session: false
}));
exports.passportGithubAuthenticate = passportGithubAuthenticate;
const passportGoogleAuthenticateFailure = (cov_20zvxz9gb7().s[28]++, _passport.default.authenticate('google', {
  failureRedirect: '/api/v1/auth/login'
}));
exports.passportGoogleAuthenticateFailure = passportGoogleAuthenticateFailure;
const passportGithubAuthenticateFailure = (cov_20zvxz9gb7().s[29]++, _passport.default.authenticate('github', {
  failureRedirect: '/api/v1/auth/login'
}));
exports.passportGithubAuthenticateFailure = passportGithubAuthenticateFailure;