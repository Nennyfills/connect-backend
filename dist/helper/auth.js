"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getJWTpaylod = exports.compareHashPassword = exports.hashPassword = exports.verifyToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _jwtDecode = _interopRequireDefault(require("jwt-decode"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _dotenv = require("dotenv");

var _errors = require("./errors");

function cov_2oyre2l47a() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\helper\\auth.js";
  var hash = "42f4ea3b37804f959456ed1e24daa4d618820b6e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\helper\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 9
        }
      },
      "1": {
        start: {
          line: 8,
          column: 19
        },
        end: {
          line: 8,
          column: 21
        }
      },
      "2": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 43
        }
      },
      "3": {
        start: {
          line: 21,
          column: 30
        },
        end: {
          line: 22,
          column: 62
        }
      },
      "4": {
        start: {
          line: 21,
          column: 55
        },
        end: {
          line: 22,
          column: 62
        }
      },
      "5": {
        start: {
          line: 35,
          column: 28
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "6": {
        start: {
          line: 35,
          column: 51
        },
        end: {
          line: 39,
          column: 4
        }
      },
      "7": {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 37,
          column: 74
        }
      },
      "8": {
        start: {
          line: 37,
          column: 15
        },
        end: {
          line: 37,
          column: 74
        }
      },
      "9": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 24
        }
      },
      "10": {
        start: {
          line: 50,
          column: 29
        },
        end: {
          line: 50,
          column: 76
        }
      },
      "11": {
        start: {
          line: 50,
          column: 49
        },
        end: {
          line: 50,
          column: 76
        }
      },
      "12": {
        start: {
          line: 62,
          column: 36
        },
        end: {
          line: 63,
          column: 36
        }
      },
      "13": {
        start: {
          line: 62,
          column: 72
        },
        end: {
          line: 63,
          column: 36
        }
      },
      "14": {
        start: {
          line: 74,
          column: 28
        },
        end: {
          line: 77,
          column: 1
        }
      },
      "15": {
        start: {
          line: 75,
          column: 18
        },
        end: {
          line: 75,
          column: 34
        }
      },
      "16": {
        start: {
          line: 76,
          column: 2
        },
        end: {
          line: 76,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 21,
            column: 30
          },
          end: {
            line: 21,
            column: 31
          }
        },
        loc: {
          start: {
            line: 21,
            column: 55
          },
          end: {
            line: 22,
            column: 62
          }
        },
        line: 21
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 35,
            column: 28
          },
          end: {
            line: 35,
            column: 29
          }
        },
        loc: {
          start: {
            line: 35,
            column: 51
          },
          end: {
            line: 39,
            column: 4
          }
        },
        line: 35
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 42
          },
          end: {
            line: 36,
            column: 43
          }
        },
        loc: {
          start: {
            line: 36,
            column: 67
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 50,
            column: 29
          },
          end: {
            line: 50,
            column: 30
          }
        },
        loc: {
          start: {
            line: 50,
            column: 49
          },
          end: {
            line: 50,
            column: 76
          }
        },
        line: 50
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 62,
            column: 36
          },
          end: {
            line: 62,
            column: 37
          }
        },
        loc: {
          start: {
            line: 62,
            column: 72
          },
          end: {
            line: 63,
            column: 36
          }
        },
        line: 62
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 74,
            column: 28
          },
          end: {
            line: 74,
            column: 29
          }
        },
        loc: {
          start: {
            line: 74,
            column: 45
          },
          end: {
            line: 77,
            column: 1
          }
        },
        line: 74
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 74
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 74
          }
        }, {
          start: {
            line: 37,
            column: 4
          },
          end: {
            line: 37,
            column: 74
          }
        }],
        line: 37
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
      "16": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42f4ea3b37804f959456ed1e24daa4d618820b6e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_2oyre2l47a = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_2oyre2l47a();
cov_2oyre2l47a().s[0]++;
(0, _dotenv.config)();
const saltRounds = (cov_2oyre2l47a().s[1]++, 10);
const salt = (cov_2oyre2l47a().s[2]++, _bcrypt.default.genSaltSync(saltRounds));
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

cov_2oyre2l47a().s[3]++;

const generateToken = async (payload, time) => {
  cov_2oyre2l47a().f[0]++;
  cov_2oyre2l47a().s[4]++;
  return _jsonwebtoken.default.sign(payload, process.env.PRIVATE_KEY, {
    expiresIn: time
  });
};
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


exports.generateToken = generateToken;
cov_2oyre2l47a().s[5]++;

const verifyToken = async (token, next) => {
  cov_2oyre2l47a().f[1]++;
  cov_2oyre2l47a().s[6]++;
  return _jsonwebtoken.default.verify(token, process.env.PRIVATE_KEY, (error, decodedToken) => {
    cov_2oyre2l47a().f[2]++;
    cov_2oyre2l47a().s[7]++;

    if (error) {
      cov_2oyre2l47a().b[0][0]++;
      cov_2oyre2l47a().s[8]++;
      return next(new _errors.ApplicationError(401, `${error.message}`));
    } else {
      cov_2oyre2l47a().b[0][1]++;
    }

    cov_2oyre2l47a().s[9]++;
    return decodedToken;
  });
};
/**
 * Hash user password
 *
 * @function
 *
 * @param {Object} password - hash password
 *
 * @returns {string} - password
 */


exports.verifyToken = verifyToken;
cov_2oyre2l47a().s[10]++;

const hashPassword = async password => {
  cov_2oyre2l47a().f[3]++;
  cov_2oyre2l47a().s[11]++;
  return _bcrypt.default.hash(password, salt);
};
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


exports.hashPassword = hashPassword;
cov_2oyre2l47a().s[12]++;

const compareHashPassword = async (password, hashedPassword) => {
  cov_2oyre2l47a().f[4]++;
  cov_2oyre2l47a().s[13]++;
  return _bcrypt.default.compare(password, hashedPassword);
};
/**
 * Check If Token Has Expired
 *
 * @function
 *
 * @param {string} token - token
 *
 * @returns {object} - decoded
 */


exports.compareHashPassword = compareHashPassword;
cov_2oyre2l47a().s[14]++;

const getJWTpaylod = async token => {
  cov_2oyre2l47a().f[5]++;
  const decoded = (cov_2oyre2l47a().s[15]++, (0, _jwtDecode.default)(token));
  cov_2oyre2l47a().s[16]++;
  return decoded;
};

exports.getJWTpaylod = getJWTpaylod;