"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _auth = _interopRequireDefault(require("../controller/auth"));

function cov_14k0bz447s() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\auth.js";
  var hash = "75361b272d105301bd7d73c736508ae6aa32b5f1";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\routes\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 7,
          column: 4
        },
        end: {
          line: 7,
          column: 18
        }
      },
      "1": {
        start: {
          line: 9,
          column: 13
        },
        end: {
          line: 9,
          column: 21
        }
      },
      "2": {
        start: {
          line: 34,
          column: 0
        },
        end: {
          line: 34,
          column: 26
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "75361b272d105301bd7d73c736508ae6aa32b5f1"
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

const {
  login
} = (cov_14k0bz447s().s[0]++, _auth.default);
const auth = (cov_14k0bz447s().s[1]++, (0, _express.Router)());
/**
 * @swagger
 *
 * /auth/login:
 *   post:
 *     description: Signup to the application
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
 *         description: token is supplied
 */

cov_14k0bz447s().s[2]++;
auth.get('/login', login);
var _default = auth;
exports.default = _default;
module.exports = exports.default;