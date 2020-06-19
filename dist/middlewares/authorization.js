"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _errors = require("../helper/errors");

var _auth = require("../helper/auth");

var _models = _interopRequireDefault(require("../models"));

function cov_tiabfj7mg() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\authorization.js";
  var hash = "615fcc4cea0e085691616403b1e3440608d299c8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\authorization.js",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 4
        },
        end: {
          line: 8,
          column: 12
        }
      },
      "1": {
        start: {
          line: 21,
          column: 23
        },
        end: {
          line: 21,
          column: 52
        }
      },
      "2": {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 23,
          column: 104
        }
      },
      "3": {
        start: {
          line: 23,
          column: 27
        },
        end: {
          line: 23,
          column: 104
        }
      },
      "4": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 85
        }
      },
      "5": {
        start: {
          line: 24,
          column: 21
        },
        end: {
          line: 24,
          column: 85
        }
      },
      "6": {
        start: {
          line: 26,
          column: 18
        },
        end: {
          line: 26,
          column: 42
        }
      },
      "7": {
        start: {
          line: 27,
          column: 29
        },
        end: {
          line: 27,
          column: 59
        }
      },
      "8": {
        start: {
          line: 28,
          column: 19
        },
        end: {
          line: 28,
          column: 35
        }
      },
      "9": {
        start: {
          line: 29,
          column: 24
        },
        end: {
          line: 29,
          column: 48
        }
      },
      "10": {
        start: {
          line: 31,
          column: 4
        },
        end: {
          line: 31,
          column: 84
        }
      },
      "11": {
        start: {
          line: 31,
          column: 22
        },
        end: {
          line: 31,
          column: 84
        }
      },
      "12": {
        start: {
          line: 33,
          column: 4
        },
        end: {
          line: 33,
          column: 31
        }
      },
      "13": {
        start: {
          line: 35,
          column: 4
        },
        end: {
          line: 35,
          column: 18
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 20,
            column: 23
          },
          end: {
            line: 20,
            column: 24
          }
        },
        loc: {
          start: {
            line: 20,
            column: 58
          },
          end: {
            line: 36,
            column: 3
          }
        },
        line: 20
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 104
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 104
          }
        }, {
          start: {
            line: 23,
            column: 4
          },
          end: {
            line: 23,
            column: 104
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 85
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 85
          }
        }, {
          start: {
            line: 24,
            column: 4
          },
          end: {
            line: 24,
            column: 85
          }
        }],
        line: 24
      },
      "2": {
        loc: {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 84
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 84
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 31,
            column: 84
          }
        }],
        line: 31
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
      "13": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "615fcc4cea0e085691616403b1e3440608d299c8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_tiabfj7mg = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_tiabfj7mg();
const {
  Users
} = (cov_tiabfj7mg().s[0]++, _models.default);
var _default = {
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
    cov_tiabfj7mg().f[0]++;
    const authHeader = (cov_tiabfj7mg().s[1]++, request.headers.authorization);
    cov_tiabfj7mg().s[2]++;

    if (authHeader === '') {
      cov_tiabfj7mg().b[0][0]++;
      cov_tiabfj7mg().s[3]++;
      throw new _errors.ApplicationError(400, 'No token provided. Please signup or login');
    } else {
      cov_tiabfj7mg().b[0][1]++;
    }

    cov_tiabfj7mg().s[4]++;

    if (!authHeader) {
      cov_tiabfj7mg().b[1][0]++;
      cov_tiabfj7mg().s[5]++;
      throw new _errors.ApplicationError(412, 'Authorization header not set');
    } else {
      cov_tiabfj7mg().b[1][1]++;
    }

    const token = (cov_tiabfj7mg().s[6]++, authHeader.split(' ')[1]);
    const verifiedResponse = (cov_tiabfj7mg().s[7]++, await (0, _auth.verifyToken)(token, next));
    const {
      id
    } = (cov_tiabfj7mg().s[8]++, verifiedResponse);
    const currentUser = (cov_tiabfj7mg().s[9]++, await Users.findByPk(id));
    cov_tiabfj7mg().s[10]++;

    if (!currentUser) {
      cov_tiabfj7mg().b[2][0]++;
      cov_tiabfj7mg().s[11]++;
      return next(new _errors.ApplicationError(403, 'Invalid credentials'));
    } else {
      cov_tiabfj7mg().b[2][1]++;
    }

    cov_tiabfj7mg().s[12]++;
    request.user = currentUser;
    cov_tiabfj7mg().s[13]++;
    return next();
  }
};
exports.default = _default;
module.exports = exports.default;