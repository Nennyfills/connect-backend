"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_g0qlspffg() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\controllerWrap.js";
  var hash = "87bfddb33d5fdf6be0337432dbc86a6f95f24b89";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\middlewares\\controllerWrap.js",
    statementMap: {
      "0": {
        start: {
          line: 12,
          column: 36
        },
        end: {
          line: 18,
          column: 1
        }
      },
      "1": {
        start: {
          line: 13,
          column: 2
        },
        end: {
          line: 17,
          column: 3
        }
      },
      "2": {
        start: {
          line: 14,
          column: 4
        },
        end: {
          line: 14,
          column: 51
        }
      },
      "3": {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 23
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 12,
            column: 15
          },
          end: {
            line: 12,
            column: 16
          }
        },
        loc: {
          start: {
            line: 12,
            column: 36
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 12
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 36
          },
          end: {
            line: 12,
            column: 37
          }
        },
        loc: {
          start: {
            line: 12,
            column: 71
          },
          end: {
            line: 18,
            column: 1
          }
        },
        line: 12
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "87bfddb33d5fdf6be0337432dbc86a6f95f24b89"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_g0qlspffg = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_g0qlspffg();

/**
  * A wrapper for express js controller for error handling
  *
  * @function
  *
  * @param {Function} wrappedFunction - the main controller
  * @param {Boolean} middleware - A flag to know if it is a middleware
  *
  * @returns {Function} - callback that execute the controller
  */
var _default = wrappedFunction => {
  cov_g0qlspffg().f[0]++;
  cov_g0qlspffg().s[0]++;
  return async (request, response, next) => {
    cov_g0qlspffg().f[1]++;
    cov_g0qlspffg().s[1]++;

    try {
      cov_g0qlspffg().s[2]++;
      await wrappedFunction(request, response, next);
    } catch (error) {
      cov_g0qlspffg().s[3]++;
      return next(error);
    }
  };
};

exports.default = _default;
module.exports = exports.default;