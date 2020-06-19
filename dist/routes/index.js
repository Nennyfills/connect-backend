"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("./auth"));

function cov_khnjl92ta() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\index.js";
  var hash = "79fa52fecb606eaa7d965319dd6a8f78e23fe575";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 5,
          column: 15
        },
        end: {
          line: 5,
          column: 23
        }
      },
      "1": {
        start: {
          line: 7,
          column: 0
        },
        end: {
          line: 7,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "79fa52fecb606eaa7d965319dd6a8f78e23fe575"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_khnjl92ta = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_khnjl92ta();
const router = (cov_khnjl92ta().s[0]++, (0, _express.Router)());
cov_khnjl92ta().s[1]++;
router.use('/auth', _auth.default);
var _default = router;
exports.default = _default;
module.exports = exports.default;