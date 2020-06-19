"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _debug = _interopRequireDefault(require("debug"));

var _dotenv = require("dotenv");

function cov_lnk0wcl72() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\errorHandler.js";
  var hash = "75b67765f2e0ab01f704edbcf2deec1b4c397a82";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\errorHandler.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 0
        },
        end: {
          line: 4,
          column: 9
        }
      },
      "1": {
        start: {
          line: 5,
          column: 14
        },
        end: {
          line: 5,
          column: 26
        }
      },
      "2": {
        start: {
          line: 20,
          column: 23
        },
        end: {
          line: 20,
          column: 60
        }
      },
      "3": {
        start: {
          line: 21,
          column: 21
        },
        end: {
          line: 21,
          column: 23
        }
      },
      "4": {
        start: {
          line: 23,
          column: 2
        },
        end: {
          line: 25,
          column: 3
        }
      },
      "5": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 21
        }
      },
      "6": {
        start: {
          line: 27,
          column: 2
        },
        end: {
          line: 30,
          column: 3
        }
      },
      "7": {
        start: {
          line: 28,
          column: 4
        },
        end: {
          line: 28,
          column: 21
        }
      },
      "8": {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 29,
          column: 23
        }
      },
      "9": {
        start: {
          line: 32,
          column: 2
        },
        end: {
          line: 39,
          column: 5
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 19,
            column: 15
          },
          end: {
            line: 19,
            column: 16
          }
        },
        loc: {
          start: {
            line: 19,
            column: 49
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 19
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }, {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        }],
        line: 23
      },
      "1": {
        loc: {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }, {
          start: {
            line: 27,
            column: 2
          },
          end: {
            line: 30,
            column: 3
          }
        }],
        line: 27
      },
      "2": {
        loc: {
          start: {
            line: 32,
            column: 25
          },
          end: {
            line: 32,
            column: 42
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 32,
            column: 25
          },
          end: {
            line: 32,
            column: 35
          }
        }, {
          start: {
            line: 32,
            column: 39
          },
          end: {
            line: 32,
            column: 42
          }
        }],
        line: 32
      },
      "3": {
        loc: {
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 35,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 35,
            column: 10
          },
          end: {
            line: 35,
            column: 20
          }
        }, {
          start: {
            line: 35,
            column: 24
          },
          end: {
            line: 35,
            column: 46
          }
        }],
        line: 35
      },
      "4": {
        loc: {
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 37,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 37,
            column: 10
          },
          end: {
            line: 37,
            column: 23
          }
        }, {
          start: {
            line: 37,
            column: 27
          },
          end: {
            line: 37,
            column: 50
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
      "9": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "75b67765f2e0ab01f704edbcf2deec1b4c397a82"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_lnk0wcl72 = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_lnk0wcl72();
cov_lnk0wcl72().s[0]++;
(0, _dotenv.config)();
const debug = (cov_lnk0wcl72().s[1]++, (0, _debug.default)('dev'));
/**
  * A wrapper for express js controller for error handling
  *
  * @function
  *
  * @param {Object} err - error object
  * @param {Object} request - express request object
  * @param {Object} response - express response object
  * @param {Function} next - callback function to call next middleware
  *
  * @returns {object} - the response from the server
  */

var _default = (err, request, response, next) => {
  cov_lnk0wcl72().f[0]++;
  const isProduction = (cov_lnk0wcl72().s[2]++, process.env.NODE_ENV === 'production');
  let errorMessage = (cov_lnk0wcl72().s[3]++, {});
  cov_lnk0wcl72().s[4]++;

  if (response.headersSent) {
    cov_lnk0wcl72().b[0][0]++;
    cov_lnk0wcl72().s[5]++;
    return next(err);
  } else {
    cov_lnk0wcl72().b[0][1]++;
  }

  cov_lnk0wcl72().s[6]++;

  if (!isProduction) {
    cov_lnk0wcl72().b[1][0]++;
    cov_lnk0wcl72().s[7]++;
    debug(err.stack);
    cov_lnk0wcl72().s[8]++;
    errorMessage = err;
  } else {
    cov_lnk0wcl72().b[1][1]++;
  }

  cov_lnk0wcl72().s[9]++;
  return response.status((cov_lnk0wcl72().b[2][0]++, err.status) || (cov_lnk0wcl72().b[2][1]++, 500)).json({
    status: 'error',
    error: { ...((cov_lnk0wcl72().b[3][0]++, err.errors) && (cov_lnk0wcl72().b[3][1]++, {
        errors: err.errors
      })),
      message: err.message,
      ...((cov_lnk0wcl72().b[4][0]++, !isProduction) && (cov_lnk0wcl72().b[4][1]++, {
        trace: errorMessage
      }))
    }
  });
};

exports.default = _default;
module.exports = exports.default;