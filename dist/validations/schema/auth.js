"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("@hapi/joi"));

function cov_1495fyqgbs() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\auth.js";
  var hash = "8da1993f8a702f344323e50271ef9efb9bcd696f";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\validations\\schema\\auth.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 13
        },
        end: {
          line: 17,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      "0": 0
    },
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8da1993f8a702f344323e50271ef9efb9bcd696f"
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

const auth = (cov_1495fyqgbs().s[0]++, {
  login: _joi.default.object().keys({
    userName: _joi.default.string(),
    email: _joi.default.string().email(),
    password: _joi.default.string().required()
  }).xor('username', 'email'),
  signup: _joi.default.object().keys({
    fullName: _joi.default.string().required(),
    userName: _joi.default.string().required(),
    email: _joi.default.string().email().required(),
    password: _joi.default.string().required()
  })
});
var _default = auth;
exports.default = _default;
module.exports = exports.default;