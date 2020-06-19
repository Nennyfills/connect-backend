"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundError = exports.ApplicationError = void 0;

function cov_4sdl0ozju() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\helper\\errors.js";
  var hash = "ae9b569bbc5af3669d0054e91d47f86bd63de2f2";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\helper\\errors.js",
    statementMap: {
      "0": {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 19
        }
      },
      "1": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 32
        }
      },
      "2": {
        start: {
          line: 19,
          column: 4
        },
        end: {
          line: 19,
          column: 27
        }
      },
      "3": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "4": {
        start: {
          line: 38,
          column: 4
        },
        end: {
          line: 38,
          column: 48
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 16,
            column: 3
          }
        },
        loc: {
          start: {
            line: 16,
            column: 61
          },
          end: {
            line: 21,
            column: 3
          }
        },
        line: 16
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 37,
            column: 2
          },
          end: {
            line: 37,
            column: 3
          }
        },
        loc: {
          start: {
            line: 37,
            column: 23
          },
          end: {
            line: 39,
            column: 3
          }
        },
        line: 37
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 16,
            column: 22
          },
          end: {
            line: 16,
            column: 51
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 16,
            column: 32
          },
          end: {
            line: 16,
            column: 51
          }
        }],
        line: 16
      },
      "1": {
        loc: {
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 31
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 18,
            column: 18
          },
          end: {
            line: 18,
            column: 24
          }
        }, {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 18,
            column: 31
          }
        }],
        line: 18
      },
      "2": {
        loc: {
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 38,
            column: 15
          },
          end: {
            line: 38,
            column: 22
          }
        }, {
          start: {
            line: 38,
            column: 26
          },
          end: {
            line: 38,
            column: 46
          }
        }],
        line: 38
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0],
      "1": [0, 0],
      "2": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "ae9b569bbc5af3669d0054e91d47f86bd63de2f2"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_4sdl0ozju = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_4sdl0ozju();

/**
 * Base error class for application
 *
 * @class
 *
 * @extends Error
 */
class ApplicationError extends Error {
  /**
   * @description initializes the error
   *
   * @param {number} status - status code;
   * @param {string} message - Error message
   * @param {Array} errors - an array of errors
   */
  constructor(status, message = (cov_4sdl0ozju().b[0][0]++, 'an error occurred'), errors) {
    cov_4sdl0ozju().f[0]++;
    cov_4sdl0ozju().s[0]++;
    super(message);
    cov_4sdl0ozju().s[1]++;
    this.status = (cov_4sdl0ozju().b[1][0]++, status) || (cov_4sdl0ozju().b[1][1]++, 500);
    cov_4sdl0ozju().s[2]++;
    this.message = message;
    cov_4sdl0ozju().s[3]++;
    this.errors = errors;
  }

}
/**
 * Class for notFoundError
 *
 * @class
 *
 * @extends ApplicationError
 */


exports.ApplicationError = ApplicationError;

class NotFoundError extends ApplicationError {
  /**
   * @description initializes the service
   *
   * @param {string} message - Error message
   */
  constructor(message) {
    cov_4sdl0ozju().f[1]++;
    cov_4sdl0ozju().s[4]++;
    super(404, (cov_4sdl0ozju().b[2][0]++, message) || (cov_4sdl0ozju().b[2][1]++, 'Resource not found'));
  }

}

exports.NotFoundError = NotFoundError;