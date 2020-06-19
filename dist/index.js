"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireWildcard(require("express"));

var _http = _interopRequireDefault(require("http"));

var _dotenv = require("dotenv");

var _cors = _interopRequireDefault(require("cors"));

var _debug = _interopRequireDefault(require("debug"));

var _passport = _interopRequireDefault(require("passport"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _swagger = _interopRequireDefault(require("../docs/swagger.json"));

var _errorHandler = _interopRequireDefault(require("./middlewares/errorHandler"));

function cov_226l1t3lox() {
  var path = "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\index.js";
  var hash = "327dbc7c592f5cd72a09c2ad342dcecca7fe319b";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\chinenye.dike\\Documents\\workspace\\connect-backend\\src\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 18,
          column: 0
        },
        end: {
          line: 18,
          column: 9
        }
      },
      "1": {
        start: {
          line: 20,
          column: 14
        },
        end: {
          line: 20,
          column: 26
        }
      },
      "2": {
        start: {
          line: 21,
          column: 17
        },
        end: {
          line: 21,
          column: 28
        }
      },
      "3": {
        start: {
          line: 22,
          column: 12
        },
        end: {
          line: 22,
          column: 21
        }
      },
      "4": {
        start: {
          line: 24,
          column: 0
        },
        end: {
          line: 24,
          column: 16
        }
      },
      "5": {
        start: {
          line: 25,
          column: 0
        },
        end: {
          line: 25,
          column: 41
        }
      },
      "6": {
        start: {
          line: 26,
          column: 0
        },
        end: {
          line: 26,
          column: 16
        }
      },
      "7": {
        start: {
          line: 27,
          column: 0
        },
        end: {
          line: 27,
          column: 23
        }
      },
      "8": {
        start: {
          line: 28,
          column: 0
        },
        end: {
          line: 28,
          column: 31
        }
      },
      "9": {
        start: {
          line: 29,
          column: 0
        },
        end: {
          line: 29,
          column: 27
        }
      },
      "10": {
        start: {
          line: 30,
          column: 0
        },
        end: {
          line: 30,
          column: 70
        }
      },
      "11": {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 37,
          column: 3
        }
      },
      "12": {
        start: {
          line: 33,
          column: 2
        },
        end: {
          line: 36,
          column: 5
        }
      },
      "13": {
        start: {
          line: 39,
          column: 0
        },
        end: {
          line: 44,
          column: 3
        }
      },
      "14": {
        start: {
          line: 40,
          column: 2
        },
        end: {
          line: 43,
          column: 5
        }
      },
      "15": {
        start: {
          line: 46,
          column: 0
        },
        end: {
          line: 46,
          column: 22
        }
      },
      "16": {
        start: {
          line: 48,
          column: 15
        },
        end: {
          line: 48,
          column: 37
        }
      },
      "17": {
        start: {
          line: 52,
          column: 0
        },
        end: {
          line: 52,
          column: 67
        }
      },
      "18": {
        start: {
          line: 52,
          column: 26
        },
        end: {
          line: 52,
          column: 65
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 32,
            column: 13
          },
          end: {
            line: 32,
            column: 14
          }
        },
        loc: {
          start: {
            line: 32,
            column: 36
          },
          end: {
            line: 37,
            column: 1
          }
        },
        line: 32
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 39,
            column: 13
          },
          end: {
            line: 39,
            column: 14
          }
        },
        loc: {
          start: {
            line: 39,
            column: 36
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 39
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 52,
            column: 20
          },
          end: {
            line: 52,
            column: 21
          }
        },
        loc: {
          start: {
            line: 52,
            column: 26
          },
          end: {
            line: 52,
            column: 65
          }
        },
        line: 52
      }
    },
    branchMap: {},
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
      "16": 0,
      "17": 0,
      "18": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "327dbc7c592f5cd72a09c2ad342dcecca7fe319b"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];

  cov_226l1t3lox = function () {
    return actualCoverage;
  };

  return actualCoverage;
}

cov_226l1t3lox();
cov_226l1t3lox().s[0]++;
// import socketIO from './socket';
// import './services/cron';
(0, _dotenv.config)();
const debug = (cov_226l1t3lox().s[1]++, (0, _debug.default)('dev'));
const {
  PORT
} = (cov_226l1t3lox().s[2]++, process.env);
const app = (cov_226l1t3lox().s[3]++, (0, _express.default)());
cov_226l1t3lox().s[4]++;
app.use((0, _express.json)());
cov_226l1t3lox().s[5]++;
app.use((0, _express.urlencoded)({
  extended: false
}));
cov_226l1t3lox().s[6]++;
app.use((0, _cors.default)());
cov_226l1t3lox().s[7]++;
app.use((0, _morgan.default)('dev'));
cov_226l1t3lox().s[8]++;
app.use(_passport.default.initialize());
cov_226l1t3lox().s[9]++;
app.use('/api/v1', _routes.default);
cov_226l1t3lox().s[10]++;
app.use('/api/v1/docs', _swaggerUiExpress.default.serve, _swaggerUiExpress.default.setup(_swagger.default));
cov_226l1t3lox().s[11]++;
app.get('/', (request, response) => {
  cov_226l1t3lox().f[0]++;
  cov_226l1t3lox().s[12]++;
  response.status(200).json({
    status: 'success',
    message: 'Welcome to connect'
  });
});
cov_226l1t3lox().s[13]++;
app.all('*', (request, response) => {
  cov_226l1t3lox().f[1]++;
  cov_226l1t3lox().s[14]++;
  response.status(404).json({
    status: 'error',
    error: 'Not Found'
  });
});
cov_226l1t3lox().s[15]++;
app.use(_errorHandler.default);
const server = (cov_226l1t3lox().s[16]++, _http.default.createServer(app)); // socketIO(server);

cov_226l1t3lox().s[17]++;
server.listen(PORT, () => {
  cov_226l1t3lox().f[2]++;
  cov_226l1t3lox().s[18]++;
  return debug(`Server started on port ${PORT}`);
});
var _default = server;
exports.default = _default;
module.exports = exports.default;