"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function cov_1t0o04rxui() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\controller\\auth.js";
  var hash = "adbc99e0c43848e245751ef4bac667a2af287370";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\controller\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 1,
          column: 13
        },
        end: {
          line: 4,
          column: 1
        }
      },
      "1": {
        start: {
          line: 3,
          column: 29
        },
        end: {
          line: 3,
          column: 63
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 3,
            column: 9
          },
          end: {
            line: 3,
            column: 10
          }
        },
        loc: {
          start: {
            line: 3,
            column: 29
          },
          end: {
            line: 3,
            column: 63
          }
        },
        line: 3
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {
      "0": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "adbc99e0c43848e245751ef4bac667a2af287370"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1t0o04rxui = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

const auth = (cov_1t0o04rxui().s[0]++, {
  // eslint-disable-next-line no-unused-vars
  login: async (req, res) => {
    cov_1t0o04rxui().f[0]++;
    cov_1t0o04rxui().s[1]++;
    return res.status(200).json('Hello Auth');
  }
});
var _default = auth;
exports.default = _default;
module.exports = exports.default;