"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function cov_1495fyqgbs() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\auth.js";
  var hash = "aaae1abf5e08a0af12bf5fee7157fd3ef91a8d4e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 18
        },
        end: {
          line: 4,
          column: 64
        }
      },
      "1": {
        start: {
          line: 4,
          column: 38
        },
        end: {
          line: 4,
          column: 64
        }
      },
      "2": {
        start: {
          line: 5,
          column: 19
        },
        end: {
          line: 117,
          column: 1
        }
      },
      "3": {
        start: {
          line: 9,
          column: 30
        },
        end: {
          line: 9,
          column: 59
        }
      },
      "4": {
        start: {
          line: 17,
          column: 27
        },
        end: {
          line: 17,
          column: 53
        }
      },
      "5": {
        start: {
          line: 39,
          column: 28
        },
        end: {
          line: 39,
          column: 57
        }
      },
      "6": {
        start: {
          line: 52,
          column: 28
        },
        end: {
          line: 52,
          column: 57
        }
      },
      "7": {
        start: {
          line: 61,
          column: 25
        },
        end: {
          line: 61,
          column: 51
        }
      },
      "8": {
        start: {
          line: 110,
          column: 28
        },
        end: {
          line: 110,
          column: 57
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 4,
            column: 18
          },
          end: {
            line: 4,
            column: 19
          }
        },
        loc: {
          start: {
            line: 4,
            column: 38
          },
          end: {
            line: 4,
            column: 64
          }
        },
        line: 4
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 9,
            column: 16
          },
          end: {
            line: 9,
            column: 17
          }
        },
        loc: {
          start: {
            line: 9,
            column: 30
          },
          end: {
            line: 9,
            column: 59
          }
        },
        line: 9
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 17,
            column: 16
          },
          end: {
            line: 17,
            column: 17
          }
        },
        loc: {
          start: {
            line: 17,
            column: 27
          },
          end: {
            line: 17,
            column: 53
          }
        },
        line: 17
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 39,
            column: 14
          },
          end: {
            line: 39,
            column: 15
          }
        },
        loc: {
          start: {
            line: 39,
            column: 28
          },
          end: {
            line: 39,
            column: 57
          }
        },
        line: 39
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 52,
            column: 14
          },
          end: {
            line: 52,
            column: 15
          }
        },
        loc: {
          start: {
            line: 52,
            column: 28
          },
          end: {
            line: 52,
            column: 57
          }
        },
        line: 52
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 61,
            column: 14
          },
          end: {
            line: 61,
            column: 15
          }
        },
        loc: {
          start: {
            line: 61,
            column: 25
          },
          end: {
            line: 61,
            column: 51
          }
        },
        line: 61
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 110,
            column: 14
          },
          end: {
            line: 110,
            column: 15
          }
        },
        loc: {
          start: {
            line: 110,
            column: 28
          },
          end: {
            line: 110,
            column: 57
          }
        },
        line: 110
      }
    },
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
      "8": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "aaae1abf5e08a0af12bf5fee7157fd3ef91a8d4e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1495fyqgbs = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1495fyqgbs();
cov_1495fyqgbs().s[0]++;

// eslint-disable-next-line no-unused-vars
const lowerCase = (value, helpers) => {
  cov_1495fyqgbs().f[0]++;
  cov_1495fyqgbs().s[1]++;
  return value.trim().toLowerCase();
};

const authSchema = (cov_1495fyqgbs().s[2]++, {
  login: _joi.default.object().keys({
    userName: _joi.default.string().custom(userName => {
      cov_1495fyqgbs().f[1]++;
      cov_1495fyqgbs().s[3]++;
      return userName.trim().toLowerCase();
    }).messages({
      'string.empty': 'UserName cannot be an empty',
      'string.min': 'UserName should have a minimum length of {#limit} characters',
      'any.required': 'UserName is required'
    }),
    email: _joi.default.string().email().custom(email => {
      cov_1495fyqgbs().f[2]++;
      cov_1495fyqgbs().s[4]++;
      return email.trim().toLowerCase();
    }).messages({
      'string.email': 'Email must be a valid email address',
      'string.empty': 'Email cannot be an empty',
      'string.min': 'Email should have a minimum length of {#limit} characters',
      'any.required': 'Email is required'
    }),
    password: _joi.default.string().min(8).required() // eslint-disable-next-line no-useless-escape
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/).messages({
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password length must be at least {#limit} characters characters long',
      'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number ',
      'any.required': 'Password field is required'
    })
  }).xor('userName', 'email'),
  signup: _joi.default.object().keys({
    fullName: _joi.default.string().custom(fullName => {
      cov_1495fyqgbs().f[3]++;
      cov_1495fyqgbs().s[5]++;
      return fullName.trim().toLowerCase();
    }).min(6).required().messages({
      'string.empty': 'FullName cannot be an empty',
      'string.min': 'FullName should have a minimum length of {#limit} characters',
      'any.required': 'FullName field is required'
    }),
    userName: _joi.default.string().label('userName').min(5).max(20).required().custom(userName => {
      cov_1495fyqgbs().f[4]++;
      cov_1495fyqgbs().s[6]++;
      return userName.trim().toLowerCase();
    }).messages({
      'string.empty': 'UserName cannot be an empty',
      'string.min': 'UserName should have a minimum length of {#limit} characters',
      'any.required': 'UserName field is required'
    }),
    email: _joi.default.string().email().required().custom(email => {
      cov_1495fyqgbs().f[5]++;
      cov_1495fyqgbs().s[7]++;
      return email.trim().toLowerCase();
    }).messages({
      'string.email': 'Email must be a valid email',
      'string.empty': 'Email cannot be an empty',
      'string.min': 'Email should have a minimum length of {#limit} characters',
      'any.required': 'Email field is required'
    }),
    password: _joi.default.string().min(8).max(40) // eslint-disable-next-line no-useless-escape
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/).required().messages({
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have a minimum length of {#limit} characters',
      'any.required': 'Password field is required',
      'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number'
    })
  }),
  resetPassword: _joi.default.object().keys({
    existingPassword: _joi.default.string().min(8).required() // eslint-disable-next-line no-useless-escape
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/).messages({
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password length must be at least {#limit} characters characters long',
      'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number ',
      'any.required': 'Password field is required'
    }),
    password: _joi.default.string().min(8).max(200) // eslint-disable-next-line no-useless-escape
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&])/).required().messages({
      'string.empty': 'Password cannot be empty',
      'string.min': 'Password should have a minimum length of {#limit} characters',
      'any.required': 'Password field is required',
      'string.pattern.base': 'Password must have at least 1 uppercase character, 1 special character, 1 lowercase character and 1 number '
    }),
    userName: _joi.default.string().label('userName').min(5).max(20).required().custom(userName => {
      cov_1495fyqgbs().f[6]++;
      cov_1495fyqgbs().s[8]++;
      return userName.trim().toLowerCase();
    }).messages({
      'string.empty': 'UserName cannot be an empty',
      'string.min': 'UserName should have a minimum length of {#limit} characters',
      'any.required': 'UserName field is required'
    })
  })
});
var _default = authSchema;
exports.default = _default;
module.exports = exports.default;