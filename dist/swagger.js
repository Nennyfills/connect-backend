"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _path = _interopRequireDefault(require("path"));

function cov_1oortdxgqv() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\swagger.js";
  var hash = "43d8c049481597dabedc9978f8a216b67a765c51";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\swagger.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 19
        },
        end: {
          line: 3,
          column: 72
        }
      },
      "1": {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 22,
          column: 1
        }
      },
      "2": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 24
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
    hash: "43d8c049481597dabedc9978f8a216b67a765c51"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_1oortdxgqv = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_1oortdxgqv();
const routesPath = (cov_1oortdxgqv().s[0]++, _path.default.resolve(process.cwd(), __dirname, 'routes/*.js'));
const config = (cov_1oortdxgqv().s[1]++, {
  info: {
    title: 'connect',
    version: '1.0.0',
    // Version (required)
    description: 'Connect is an application that aids two or more individual share information among themselves.',
    termsOfService: '',
    contact: {
      email: ''
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
    }
  },
  basePath: '/api/v1',
  apis: [routesPath]
});
cov_1oortdxgqv().s[2]++;
module.exports = config;